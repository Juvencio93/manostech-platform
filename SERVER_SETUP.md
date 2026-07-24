# 🚀 **Servidor Local Configurado!**

## Como Usar

### **Opção 1: Script Automático (Recomendado)**

#### Windows
```bash
double-click start.bat
```

#### Mac/Linux
```bash
chmod +x start.sh
./start.sh
```

### **Opção 2: Python (Simples)

```bash
python server.py
# ou
python3 server.py
```

### **Opção 3: Node.js**

```bash
node server.js
```

### **Opção 4: Python HTTP Server (Padrão)

```bash
python -m http.server 8000
# ou
python3 -m http.server 8000
```

---

## ✅ Então Abra no Navegador

```
http://localhost:8000
```

---

## 🎯 O que Fazer se Ainda Não Funcionar

### **Erro: "Tela Branca"**

1. **Abra Console do Navegador** (F12)
2. **Procure por erros** (aba "Console")
3. **Limpe cache:**
   - Pressione `Ctrl + Shift + Delete` (Windows)
   - Ou `Cmd + Shift + Delete` (Mac)
   - Selecione "Apagar tudo"
4. **Recarregue** (F5 ou Ctrl+R)

### **Erro: "Não consegue conectar"**

1. **Verifique se servidor está rodando:**
   - Deve ver mensagem `🚀 ManosTech Platform rodando!`
   - Deve mostrar `📍 http://localhost:8000`

2. **Tente outra porta:**
   ```bash
   python server.py  # Muda para 8000
   # ou
   python -m http.server 8001  # Usa porta 8001
   ```

3. **Verifique firewall:**
   - Alguns antivírus bloqueiam portas
   - Tente desabilitar temporariamente

### **Erro: CORS**

- Use um dos servidores acima (já têm CORS configurado)
- NÃO use `file://` no navegador

---

## 📋 Checklist

- [ ] Servidor rodando
- [ ] Abri http://localhost:8000 no navegador
- [ ] Vejo a página de login
- [ ] Consigo fazer login
- [ ] Estou no dashboard

---

## 🆘 Ainda Não Funciona?

1. **Feche tudo:**
   - Ctrl+C no terminal
   - Feche o navegador

2. **Comece do zero:**
   ```bash
   # Windows
   start.bat
   
   # Mac/Linux
   ./start.sh
   ```

3. **Tente outra porta:**
   ```bash
   python -m http.server 8001
   # Abra: http://localhost:8001
   ```

---

## 💡 Dica

Se estiver usando **Visual Studio Code**, pode usar a extensão **Live Server:**

1. Instale: "Live Server" (by Ritwick Dey)
2. Clique direito em `index.html`
3. Selecione "Open with Live Server"

Abre automático em `http://127.0.0.1:5500`

---

**Tudo ok? Abra o navegador e aproveite! 🎉**
