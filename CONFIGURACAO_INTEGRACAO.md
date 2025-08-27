# Configuração de Integrações - O Código Secreto do Inglês

## 🔧 Configurações Necessárias

### 1. Google Analytics 4 (GA4)

#### Passo 1: Criar Propriedade GA4
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade para seu site
3. Copie o **Measurement ID** (formato: G-XXXXXXXXXX)

#### Passo 2: Configurar no Site
No arquivo `index.html`, substitua:
```html
<!-- Linha 15 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Linha 19 -->
gtag('config', 'GA_MEASUREMENT_ID');
```

**Por:**
```html
<!-- Substitua GA_MEASUREMENT_ID pelo seu ID real -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SUA_ID_AQUI"></script>

gtag('config', 'G-SUA_ID_AQUI');
```

#### Passo 3: Eventos Configurados
O site já está configurado para rastrear:
- ✅ Cliques nos botões de checkout
- ✅ Scroll até 90% da página
- ✅ Tempo gasto na página
- ✅ Exit intent (tentativa de sair)
- ✅ Cliques em depoimentos e bônus

### 2. Hotmart Integration

#### Passo 1: Obter Dados do Produto
1. Acesse sua conta [Hotmart](https://hotmart.com/)
2. Vá para o produto criado
3. Copie as seguintes informações:
   - **Product ID**
   - **Checkout URL**
   - **Hotmart ID** (se aplicável)

#### Passo 2: Configurar no JavaScript
No arquivo `assets/js/main.js`, substitua as configurações na linha 4:

```javascript
// ANTES (linha 4-8)
const HOTMART_CONFIG = {
    productId: 'YOUR_PRODUCT_ID',
    checkoutUrl: 'https://pay.hotmart.com/YOUR_CHECKOUT_URL',
    affiliateId: 'YOUR_AFFILIATE_ID'
};

// DEPOIS (com seus dados reais)
const HOTMART_CONFIG = {
    productId: 'SEU_PRODUCT_ID_REAL',
    checkoutUrl: 'https://pay.hotmart.com/SUA_URL_REAL',
    affiliateId: 'SEU_AFFILIATE_ID' // opcional
};
```

#### Passo 3: Script de Tracking Hotmart
No arquivo `index.html`, linha 29, substitua:
```html
<!-- ANTES -->
hotmart('init', 'YOUR_HOTMART_ID');

<!-- DEPOIS -->
hotmart('init', 'SEU_HOTMART_ID_REAL');
```

---

## 🚀 Deploy e Teste

### 1. Hospedagem Recomendada
- **Netlify** (gratuito, fácil)
- **Vercel** (gratuito, rápido)
- **GitHub Pages** (gratuito)
- **Hostgator** (pago, suporte brasileiro)

### 2. Checklist Pré-Deploy
- [ ] Substitua GA_MEASUREMENT_ID pelo ID real do Google Analytics
- [ ] Configure HOTMART_CONFIG com dados reais
- [ ] Adicione imagens personalizadas ou use os placeholders
- [ ] Teste todos os botões de checkout
- [ ] Verifique responsividade mobile
- [ ] Teste velocidade de carregamento

### 3. Pós-Deploy
- [ ] Verifique se o Google Analytics está captando dados
- [ ] Teste o fluxo completo de checkout
- [ ] Configure Google Search Console
- [ ] Adicione domínio personalizado (opcional)

---

## 📊 Monitoramento e Otimização

### Google Analytics - Métricas Importantes
1. **Taxa de Conversão**: Cliques em checkout / Visitantes
2. **Scroll Depth**: Quantos chegam a 90% da página
3. **Tempo na Página**: Engajamento médio
4. **Exit Intent**: Potencial de abandono

### Hotmart - Métricas Importantes
1. **Taxa de Conversão**: Compras / Cliques no checkout
2. **Valor por Visitante**: Revenue / Visitantes únicos
3. **Abandono de Carrinho**: Cliques vs Compras finalizadas

---

## 🔍 Teste de Funcionamento

### Comando para Testar Localmente
```bash
# Se você tem Python instalado
python -m http.server 8000

# Ou Node.js
npx serve .

# Depois acesse: http://localhost:8000
```

### Teste de Checkout
1. Clique em qualquer botão "Quero meu acesso agora"
2. Verifique se abre uma nova aba
3. Confirme se a URL contém o parâmetro ?src= correto

### Teste do Analytics
1. Abra as Developer Tools (F12)
2. Vá na aba Console
3. Interaja com a página
4. Verifique se aparecem logs dos eventos

---

## 🆘 Troubleshooting

### Problema: GA4 não está rastreando
**Solução**: 
1. Verifique se o Measurement ID está correto
2. Use a extensão Google Analytics Debugger
3. Aguarde até 24h para dados aparecerem

### Problema: Botões de checkout não funcionam
**Solução**:
1. Verifique se o JavaScript não tem erros
2. Confirme se a URL do Hotmart está correta
3. Teste em modo incógnito

### Problema: Site lento
**Solução**:
1. Otimize imagens para formato WebP
2. Use CDN para TailwindCSS
3. Comprima arquivos CSS/JS

---

## 📞 Suporte

Se precisar de ajuda com qualquer configuração:

1. **Google Analytics**: [Suporte oficial](https://support.google.com/analytics/)
2. **Hotmart**: [Central de ajuda](https://help.hotmart.com/)
3. **Hospedagem**: Verifique documentação do provedor escolhido

---

**✨ Dica Pro**: Configure testes A/B alterando headlines e botões para otimizar conversões!


