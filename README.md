# PlanejaEdu — Cloudflare Pages

Projeto estático preparado para publicação no **Cloudflare Pages**.

## Publicação sem GitHub
1. Entre no Cloudflare Dashboard.
2. Vá em **Workers & Pages**.
3. Crie uma aplicação do tipo **Pages** com upload direto de assets.
4. Descompacte este ZIP e envie **o conteúdo desta pasta**, onde `index.html` fica na raiz.
5. Não configure build command.
6. Diretório de saída: a própria pasta enviada (raiz).

## Importante
- Não precisa de `OPENAI_API_KEY` nesta versão.
- O gerador local de IA é executado no navegador e depende do download do modelo na primeira utilização.
- O projeto usa `localStorage` para os dados do protótipo.
- O botão Google desta versão é visual/demonstrativo; para login Google real, conecte Firebase Authentication.
- Pix é voluntário: 49 99967-4823.
- Não há planos pagos.

## Arquivos Cloudflare
- `_headers`: cabeçalhos básicos de segurança/cache.
- `_redirects`: fallback para `index.html` em rotas de SPA.
