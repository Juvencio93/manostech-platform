# Instruções para Deploy no GitHub Pages

## ✅ Já Está Configurado!

O repositório já está pronto para GitHub Pages. Apenas siga os passos abaixo.

---

## 🚀 Passo 1: Habilitar GitHub Pages

1. Vá para o repositório: https://github.com/Juvencio93/manostech-platform
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Build and deployment", escolha:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
5. Clique em **Save**

---

## ⏳ Passo 2: Aguarde a Build

1. Você verá uma mensagem "GitHub Pages building..."
2. Aguarde 2-5 minutos
3. Quando ficar verde (✅), está pronto!

---

## 🌐 Passo 3: Acesse a Aplicação

Abra no navegador:
```
https://juvencio93.github.io/manostech-platform/
```

---

## ✨ Pronto!

Sua plataforma está online! 🎉

Agora pode:
- Compartilhar o link com amigos
- Usar em produção
- Integrar com Supabase (leia docs/supabase-setup.md)

---

## 🔄 Atualizar o Site

Toda vez que você fizer push para `main`, o GitHub Pages atualiza automaticamente:

```bash
git add .
git commit -m "feat: Update platform"
git push origin main
```

Espere 1-2 minutos e o site atualiza! ✅

---

## 🆘 Se Não Funcionar

### Erro: "GitHub Pages Not Found"

**Solução:**
1. Vá em **Settings** > **Pages** novamente
2. Verifique se:
   - ✅ Source está em "Deploy from a branch"
   - ✅ Branch é "main"
   - ✅ Folder é "/" (root)
3. Salve novamente
4. Aguarde 5 minutos

### Erro: "Page shows README"

**Solução:**
1. O arquivo `404.html` redireciona automaticamente
2. Se não funcionar, limpe cache:
   - Pressione `Ctrl + Shift + Delete` (Windows)
   - Ou `Cmd + Shift + Delete` (Mac)
3. Selecione "Apagar tudo"
4. Recarregue a página

### Erro: "Arquivo não encontrado"

**Solução:**
1. Verifique se todos os arquivos estão em `/` (raiz)
2. Rode `git status` para confirmar
3. Se faltar arquivo, faça:
   ```bash
   git add .
   git commit -m "fix: Add missing files"
   git push origin main
   ```

---

## 📊 Verificar Status

Acesse:
```
https://github.com/Juvencio93/manostech-platform/deployments
```

Você verá:
- ✅ Deployments bem-sucedidos
- 🔄 Deployments em andamento
- ❌ Erros de deployment

---

## 💡 Dicas

1. **URL Customizada:**
   - Vá em **Settings** > **Pages**
   - "Custom domain"
   - Digite seu domínio (ex: manostech.com.br)
   - Siga instruções para DNS

2. **HTTPS Automático:**
   - GitHub Pages fornece HTTPS grátis
   - Sempre use `https://`

3. **Análise de Tráfego:**
   - Vá em **Insights** > **Traffic**
   - Veja quantas pessoas acessaram

---

## ✅ Checklist Final

- [ ] Fiz push de todos os arquivos
- [ ] Habilitei GitHub Pages
- [ ] Escolhi branch "main" e folder "/"
- [ ] Aguardei 5 minutos
- [ ] Acessei https://juvencio93.github.io/manostech-platform/
- [ ] Vi a tela de login
- [ ] Consegui fazer login
- [ ] Estou no dashboard

---

**Tudo configurado! 🚀 Seu site está online!**
