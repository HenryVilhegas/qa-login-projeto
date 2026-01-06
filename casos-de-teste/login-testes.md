# Casos de Teste – Sistema de Login

## CT-01 – Login sem senha
**O que testar:** Usuário tenta entrar sem informar a senha  

**Passos:**
1. Abrir o site  
2. Informar CPF válido  
3. Deixar o campo senha vazio  
4. Clicar em Entrar  

**Resultado esperado:**  
Sistema deve exibir mensagem de erro e não permitir login

---

## CT-02 – CPF inválido
**O que testar:** CPF com letras  

**Passos:**
1. Digitar CPF com letras  
2. Digitar senha qualquer  
3. Clicar em Entrar  

**Resultado esperado:**  
Sistema deve exibir mensagem de erro
