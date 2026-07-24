/* ================================================================
   ManosTech Platform – app.js
   Main application logic for dashboard.html
================================================================ */

/* ── Demo Users ─────────────────────────────────────────────── */
const DEMO_USERS = {
  'admin@demo.com':    { password:'admin123',   role:'admin',       name:'Admin Sistema' },
  'gerente@demo.com':  { password:'gerente123', role:'gerente',     name:'Gerente Silva' },
  'operador@demo.com': { password:'op123',      role:'operador',    name:'Operador João' },
  'viewer@demo.com':   { password:'view123',    role:'visualizador',name:'Viewer Maria'  }
};

const ROLE_PERMISSIONS = {
  admin:        ['dashboard','eventos','empresas','visitantes','campanhas','relatorios','financeiro','usuarios','unidades','funcionarios','configuracoes','perfil'],
  gerente:      ['dashboard','eventos','empresas','visitantes','campanhas','relatorios','unidades','funcionarios','configuracoes','perfil'],
  operador:     ['dashboard','eventos','visitantes','campanhas','perfil'],
  visualizador: ['dashboard','relatorios','perfil']
};

const MODULES = {
  dashboard:    { title:'Dashboard',      subtitle:'Visão geral do sistema',     icon:'📊' },
  eventos:      { title:'Eventos',        subtitle:'Gestão de eventos',          icon:'🎉' },
  empresas:     { title:'Empresas',       subtitle:'Gestão de empresas',         icon:'🏢' },
  visitantes:   { title:'Visitantes',     subtitle:'Visitantes conectados',      icon:'👥' },
  campanhas:    { title:'Campanhas',      subtitle:'Campanhas de marketing',     icon:'📢' },
  relatorios:   { title:'Relatórios',     subtitle:'Analytics e relatórios',    icon:'📈' },
  financeiro:   { title:'Financeiro',     subtitle:'Gestão financeira',         icon:'💰' },
  usuarios:     { title:'Usuários',       subtitle:'Gerenciar usuários',        icon:'👤' },
  unidades:     { title:'Unidades',       subtitle:'Estrutura de unidades',     icon:'🏬' },
  funcionarios: { title:'Funcionários',   subtitle:'Gestão de funcionários',    icon:'👷' },
  configuracoes:{ title:'Configurações',  subtitle:'Configurações do sistema',  icon:'⚙️' },
  perfil:       { title:'Perfil',         subtitle:'Suas informações pessoais', icon:'🙋'  }
};

let currentUser = null;
let currentModule = 'dashboard';

/* ── State check ─────────────────────────────────────────────── */
(function boot() {
  const saved = localStorage.getItem('mt_user');
  if (!saved) {
    window.location.href = '../layouts/login.html';
    return;
  }
  try {
    currentUser = JSON.parse(saved);
    initDashboard();
  } catch (e) {
    window.location.href = '../layouts/login.html';
  }
})();

/* ── Init Dashboard ──────────────────────────────────────────── */
function initDashboard() {
  const initials = currentUser.name.split(' ').map(w => w[0]).slice(0,2).join('');
  document.getElementById('userAvatar').textContent   = initials;
  document.getElementById('sidebarUserName').textContent = currentUser.name;
  document.getElementById('sidebarUserRole').textContent = currentUser.role;

  // Filter nav by permissions
  const allowed = ROLE_PERMISSIONS[currentUser.role] || [];
  document.querySelectorAll('.nav-link[data-module]').forEach(link => {
    const mod = link.dataset.module;
    link.closest('.nav-item').style.display = allowed.includes(mod) ? '' : 'none';
  });

  // Nav click handlers
  document.querySelectorAll('.nav-link[data-module]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      loadModule(link.dataset.module);
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('active');
    });
  });

  // Mobile toggle
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
  });
  document.getElementById('sidebarOverlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
  });

  // Modal close
  document.getElementById('globalModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  loadModule('dashboard');
}

/* ── Module Loader ───────────────────────────────────────────── */
function loadModule(module) {
  const allowed = ROLE_PERMISSIONS[currentUser?.role] || [];
  if (!allowed.includes(module)) {
    toast('Sem permissão para acessar este módulo.', 'warning');
    return;
  }
  currentModule = module;
  const meta = MODULES[module];
  document.getElementById('topbarTitle').textContent    = `${meta.icon} ${meta.title}`;
  document.getElementById('topbarSubtitle').textContent = meta.subtitle;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const al = document.querySelector(`.nav-link[data-module="${module}"]`);
  if (al) al.classList.add('active');
  document.getElementById('mainContent').innerHTML = renderModule(module);
}

/* ── Module Renderers ────────────────────────────────────────── */
function renderModule(mod) {
  const r = {
    dashboard:    renderDashboard,
    eventos:      renderEventos,
    empresas:     renderEmpresas,
    visitantes:   renderVisitantes,
    campanhas:    renderCampanhas,
    relatorios:   renderRelatorios,
    financeiro:   renderFinanceiro,
    usuarios:     renderUsuarios,
    unidades:     renderUnidades,
    funcionarios: renderFuncionarios,
    configuracoes:renderConfiguracoes,
    perfil:       renderPerfil,
  };
  return (r[mod] || renderDashboard)();
}

function badge(status) {
  const m = { ativo:'badge-green',active:'badge-green',planejado:'badge-blue',rascunho:'badge-gray',
              inativo:'badge-red',inactive:'badge-red',cancelado:'badge-red',ferias:'badge-yellow',
              admin:'badge-purple',gerente:'badge-blue',operador:'badge-green',visualizador:'badge-gray'};
  return `<span class="badge ${m[status]||'badge-gray'}">${status}</span>`;
}

/* ── Renderers (same logic as index.html) ────────────────────── */
function renderDashboard() {
  return `
  <div class="page-header">
    <div class="page-title">📊 Dashboard</div>
    <div class="page-subtitle">Visão geral – ${new Date().toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'})}</div>
  </div>
  <div class="stats-grid">
    <div class="stat-card blue"><div class="stat-icon">👥</div><div class="stat-info"><div class="stat-label">Visitantes</div><div class="stat-value">1.847</div><div class="stat-change up">↑ 32%</div></div></div>
    <div class="stat-card green"><div class="stat-icon">🎉</div><div class="stat-info"><div class="stat-label">Eventos</div><div class="stat-value">8</div><div class="stat-change up">↑ 2 novos</div></div></div>
    <div class="stat-card yellow"><div class="stat-icon">📢</div><div class="stat-info"><div class="stat-label">Campanhas</div><div class="stat-value">5</div><div class="stat-change up">↑ 3 ativas</div></div></div>
    <div class="stat-card purple"><div class="stat-icon">🏢</div><div class="stat-info"><div class="stat-label">Empresas</div><div class="stat-value">12</div><div class="stat-change up">↑ 1 nova</div></div></div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">📈 Performance</div><span class="badge badge-green">Ao vivo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--glass-border)"><span style="color:var(--text-secondary);font-size:13px">Conversão Portal</span><span class="badge badge-green">12.5%</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--glass-border)"><span style="color:var(--text-secondary);font-size:13px">Tempo Médio Sessão</span><span class="badge badge-blue">4m 32s</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--glass-border)"><span style="color:var(--text-secondary);font-size:13px">Satisfação NPS</span><span class="badge badge-green">87/100</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0"><span style="color:var(--text-secondary);font-size:13px">Receita Mensal</span><span class="badge badge-yellow">R$ 45.230</span></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">🕒 Atividade Recente</div></div>
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--glass-border)"><span style="font-size:20px">👥</span><div><div style="font-size:13px">Novo visitante conectado</div><div style="font-size:11px;color:var(--text-muted)">2 min atrás</div></div></div>
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--glass-border)"><span style="font-size:20px">🎉</span><div><div style="font-size:13px">Evento "Tech Summit" criado</div><div style="font-size:11px;color:var(--text-muted)">18 min atrás</div></div></div>
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0"><span style="font-size:20px">📢</span><div><div style="font-size:13px">Campanha Black Friday ativada</div><div style="font-size:11px;color:var(--text-muted)">1h atrás</div></div></div>
    </div>
  </div>`;
}

function renderEventos() {
  const dados = [
    {id:1,nome:'Tech Summit 2025',data:'2025-08-15',status:'ativo',visitantes:234},
    {id:2,nome:'Black Friday Experience',data:'2025-11-28',status:'planejado',visitantes:0},
    {id:3,nome:'Workshop React 19',data:'2025-07-30',status:'ativo',visitantes:89},
  ];
  const rows = dados.map(ev=>`
    <tr><td><strong>${ev.nome}</strong></td><td>${ev.data}</td><td>${badge(ev.status)}</td><td>${ev.visitantes}</td>
    <td><div class="flex gap-8">
      <button class="btn btn-ghost btn-sm" onclick="toast('Editando: ${ev.nome}','info')">✏️</button>
      <button class="btn btn-danger btn-sm" onclick="confirmDelete('evento','${ev.nome}')">🗑️</button>
    </div></td></tr>`).join('');
  return `
  <div class="page-header"><div class="page-title">🎉 Eventos</div><div class="page-subtitle">Gerencie seus eventos</div>
    <div class="page-actions"><button class="btn btn-primary" onclick="openNewEventoModal()">+ Novo Evento</button></div>
  </div>
  <div class="card"><div class="table-wrapper"><table class="data-table">
    <thead><tr><th>Nome</th><th>Data</th><th>Status</th><th>Visitantes</th><th>Ações</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div></div>`;
}

function renderEmpresas() {
  const dados=[{nome:'Tech Corp',cnpj:'12.345.678/0001-90',email:'contato@techcorp.com',status:'ativo'},{nome:'Acme Brasil',cnpj:'98.765.432/0001-10',email:'rh@acme.com.br',status:'ativo'},{nome:'Startup XYZ',cnpj:'11.222.333/0001-55',email:'oi@xyz.io',status:'inativo'}];
  const rows=dados.map(e=>`<tr><td><strong>${e.nome}</strong></td><td><code style="font-size:12px;color:var(--text-secondary)">${e.cnpj}</code></td><td>${e.email}</td><td>${badge(e.status)}</td><td><button class="btn btn-ghost btn-sm" onclick="toast('${e.nome}','info')">Ver</button></td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">🏢 Empresas</div><div class="page-subtitle">Gestão de empresas</div><div class="page-actions"><button class="btn btn-primary" onclick="toast('Nova empresa...','info')">+ Nova</button></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>CNPJ</th><th>Email</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderVisitantes() {
  const dados=[{nome:'João Silva',email:'joao@gmail.com',pais:'🇧🇷 Brasil',data:'24/07/2025 09:15',lgpd:true},{nome:'Maria Souza',email:'maria@gmail.com',pais:'🇧🇷 Brasil',data:'24/07/2025 08:40',lgpd:true},{nome:'Carlos Ruiz',email:'carlos@gmail.com',pais:'🇦🇷 Argentina',data:'23/07/2025 17:22',lgpd:true}];
  const rows=dados.map(v=>`<tr><td><strong>${v.nome}</strong></td><td>${v.email}</td><td>${v.pais}</td><td style="font-size:12px;color:var(--text-muted)">${v.data}</td><td>${v.lgpd?'<span class="badge badge-green">✓ LGPD</span>':'<span class="badge badge-red">✗</span>'}</td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">👥 Visitantes</div><div class="page-subtitle">Histórico de visitantes</div></div><div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px"><div class="stat-card blue"><div class="stat-icon">👥</div><div class="stat-info"><div class="stat-label">Total</div><div class="stat-value">1.847</div></div></div><div class="stat-card green"><div class="stat-icon">📅</div><div class="stat-info"><div class="stat-label">Hoje</div><div class="stat-value">42</div></div></div><div class="stat-card yellow"><div class="stat-icon">✅</div><div class="stat-info"><div class="stat-label">LGPD</div><div class="stat-value">97%</div></div></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>Email</th><th>País</th><th>Data</th><th>LGPD</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderCampanhas() {
  const dados=[{nome:'Black Friday 2025',tipo:'Desconto',inicio:'01/11/2025',fim:'30/11/2025',status:'planejado'},{nome:'Verão Tech',tipo:'Fidelização',inicio:'01/12/2024',fim:'28/02/2025',status:'ativo'}];
  const rows=dados.map(c=>`<tr><td><strong>${c.nome}</strong></td><td>${c.tipo}</td><td>${c.inicio}</td><td>${c.fim}</td><td>${badge(c.status)}</td><td><button class="btn btn-ghost btn-sm" onclick="toast('${c.nome}','info')">Editar</button></td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">📢 Campanhas</div><div class="page-subtitle">Gerencie suas campanhas</div><div class="page-actions"><button class="btn btn-primary" onclick="toast('Nova campanha...','info')">+ Nova</button></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Início</th><th>Fim</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderRelatorios() {
  const tipos=[{icon:'👥',titulo:'Visitantes',desc:'Por período',color:'blue'},{icon:'💰',titulo:'Financeiro',desc:'Receita e despesas',color:'green'},{icon:'📢',titulo:'Campanhas',desc:'ROI e engajamento',color:'yellow'},{icon:'🎉',titulo:'Eventos',desc:'Métricas de eventos',color:'purple'}];
  const cards=tipos.map(t=>`<div class="stat-card ${t.color}" style="flex-direction:column;align-items:flex-start;gap:12px;cursor:pointer" onclick="toast('Gerando: ${t.titulo}...','info')"><div style="font-size:28px">${t.icon}</div><div><div style="font-weight:700;margin-bottom:4px">${t.titulo}</div><div style="font-size:12px;color:var(--text-muted)">${t.desc}</div></div><button class="btn btn-ghost btn-sm">📥 Exportar</button></div>`).join('');
  return `<div class="page-header"><div class="page-title">📈 Relatórios</div><div class="page-subtitle">Analytics exportáveis</div></div><div class="stats-grid">${cards}</div>`;
}

function renderFinanceiro() {
  return `<div class="page-header"><div class="page-title">💰 Financeiro</div><div class="page-subtitle">Gestão financeira – Admin</div></div><div class="stats-grid"><div class="stat-card green"><div class="stat-icon">💰</div><div class="stat-info"><div class="stat-label">Receita</div><div class="stat-value">R$ 45.2k</div><div class="stat-change up">↑ 18%</div></div></div><div class="stat-card red"><div class="stat-icon">📉</div><div class="stat-info"><div class="stat-label">Despesas</div><div class="stat-value">R$ 12.8k</div></div></div><div class="stat-card blue"><div class="stat-icon">📊</div><div class="stat-info"><div class="stat-label">Lucro</div><div class="stat-value">R$ 32.4k</div><div class="stat-change up">↑ 25%</div></div></div></div>`;
}

function renderUsuarios() {
  const dados=[{nome:'Admin Sistema',email:'admin@demo.com',role:'admin',status:'ativo'},{nome:'Gerente Silva',email:'gerente@demo.com',role:'gerente',status:'ativo'}];
  const rows=dados.map(u=>`<tr><td><strong>${u.nome}</strong></td><td>${u.email}</td><td>${badge(u.role)}</td><td>${badge(u.status)}</td><td><button class="btn btn-ghost btn-sm" onclick="toast('${u.nome}','info')">✏️</button></td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">👤 Usuários</div><div class="page-subtitle">Gerenciar usuários</div><div class="page-actions"><button class="btn btn-primary" onclick="toast('Novo usuário...','info')">+ Novo</button></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>Email</th><th>Role</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderUnidades() {
  const dados=[{nome:'Centro',tipo:'Loja',cidade:'São Paulo',status:'ativo'},{nome:'Sul',tipo:'Restaurante',cidade:'Curitiba',status:'ativo'}];
  const rows=dados.map(u=>`<tr><td><strong>${u.nome}</strong></td><td>${u.tipo}</td><td>${u.cidade}</td><td>${badge(u.status)}</td><td><button class="btn btn-ghost btn-sm">Ver</button></td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">🏬 Unidades</div><div class="page-subtitle">Estrutura de unidades</div><div class="page-actions"><button class="btn btn-primary" onclick="toast('Nova unidade...','info')">+ Nova</button></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Cidade</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderFuncionarios() {
  const dados=[{nome:'Pedro Almeida',cargo:'Gerente TI',depto:'Tecnologia',status:'ativo'},{nome:'Lucia Ferreira',cargo:'Analista Mkt',depto:'Marketing',status:'ativo'}];
  const rows=dados.map(f=>`<tr><td><strong>${f.nome}</strong></td><td>${f.cargo}</td><td>${f.depto}</td><td>${badge(f.status)}</td><td><button class="btn btn-ghost btn-sm">Ver</button></td></tr>`).join('');
  return `<div class="page-header"><div class="page-title">👷 Funcionários</div><div class="page-subtitle">Gestão de funcionários</div><div class="page-actions"><button class="btn btn-primary" onclick="toast('Novo funcionário...','info')">+ Novo</button></div></div><div class="card"><div class="table-wrapper"><table class="data-table"><thead><tr><th>Nome</th><th>Cargo</th><th>Depto</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function renderConfiguracoes() {
  return `<div class="page-header"><div class="page-title">⚙️ Configurações</div><div class="page-subtitle">Configurações do sistema</div></div><div class="grid-2"><div class="card"><div class="card-header"><div class="card-title">🏢 Dados da Empresa</div></div><div class="form-group"><label class="form-label">Nome</label><input class="form-control" type="text" value="ManosTech Platform"></div><div class="form-group"><label class="form-label">Email</label><input class="form-control" type="email" value="contato@manostech.com.br"></div><button class="btn btn-primary" onclick="toast('Salvo!','success')">💾 Salvar</button></div><div class="card"><div class="card-header"><div class="card-title">🌐 Supabase</div></div><div class="form-group"><label class="form-label">URL</label><input class="form-control" placeholder="https://xxx.supabase.co"></div><div class="form-group"><label class="form-label">Chave Anon</label><input class="form-control" type="password" placeholder="chave-anon"></div><button class="btn btn-success" onclick="toast('Conexão OK!','success')">🔗 Testar</button></div></div>`;
}

function renderPerfil() {
  const u=currentUser||{};
  const i=(u.name||'?').split(' ').map(w=>w[0]).slice(0,2).join('');
  return `<div class="page-header"><div class="page-title">🙋 Perfil</div><div class="page-subtitle">Suas informações</div></div><div class="grid-2"><div class="card" style="text-align:center"><div class="user-avatar" style="width:80px;height:80px;font-size:30px;margin:0 auto 16px">${i}</div><div style="font-size:20px;font-weight:700">${u.name||'-'}</div><div style="font-size:14px;color:var(--text-muted);margin:4px 0 12px">${u.email||'-'}</div><span class="badge badge-blue">${u.role||'-'}</span></div><div class="card"><div class="card-header"><div class="card-title">✏️ Editar</div></div><div class="form-group"><label class="form-label">Nome</label><input class="form-control" value="${u.name||''}"></div><div class="form-group"><label class="form-label">Email</label><input class="form-control" value="${u.email||''}" readonly style="opacity:.6"></div><div class="form-group"><label class="form-label">Nova Senha</label><input class="form-control" type="password" placeholder="••••••••"></div><button class="btn btn-primary" onclick="toast('Perfil atualizado!','success')">💾 Salvar</button></div></div>`;
}

/* ── Helpers ─────────────────────────────────────────────────── */
function toast(message, type='info', title='') {
  const c=document.getElementById('toastContainer');
  const icons={success:'✅',error:'❌',warning:'⚠️',info:'ℹ️'};
  const titles={success:'Sucesso',error:'Erro',warning:'Atenção',info:'Info'};
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span class="toast-icon">${icons[type]}</span><div class="toast-content"><div class="toast-title">${title||titles[type]}</div><div class="toast-message">${message}</div></div><button class="toast-dismiss" onclick="this.parentElement.remove()">×</button>`;
  c.appendChild(el);
  setTimeout(()=>{el.classList.add('removing');setTimeout(()=>el.remove(),350);},4000);
}

function openModal(title,body,label='Confirmar',onConfirm=null) {
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalBody').innerHTML=body;
  document.getElementById('modalConfirmBtn').textContent=label;
  document.getElementById('modalConfirmBtn').className='btn btn-primary';
  document.getElementById('modalConfirmBtn').onclick=onConfirm||closeModal;
  document.getElementById('globalModal').classList.add('active');
}
function closeModal(){document.getElementById('globalModal').classList.remove('active');}

function confirmDelete(tipo,nome) {
  openModal(`Excluir ${tipo}`,`<p style="color:var(--text-secondary)">Excluir <strong>${nome}</strong>? Irreversível.</p>`,'🗑️ Excluir',()=>{closeModal();toast(`${nome} excluído.`,'success');});
  document.getElementById('modalConfirmBtn').className='btn btn-danger';
}

function openNewEventoModal() {
  openModal('Novo Evento',`<div class="form-group"><label class="form-label">Nome</label><input class="form-control" placeholder="Nome do evento"></div><div class="form-row"><div class="form-group"><label class="form-label">Início</label><input class="form-control" type="date"></div><div class="form-group"><label class="form-label">Fim</label><input class="form-control" type="date"></div></div>`,
    '+ Criar',()=>{closeModal();toast('Evento criado!','success');loadModule('eventos');});
}

function handleLogout() {
  openModal('Sair','<p style="color:var(--text-secondary)">Tem certeza que deseja sair?</p>','Sair',()=>{
    currentUser=null;localStorage.removeItem('mt_user');closeModal();
    window.location.href='../layouts/login.html';
  });
}
