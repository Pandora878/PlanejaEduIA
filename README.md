# PlanejaEdu — correção funcional

## O que foi corrigido
- Erro fatal de JavaScript que impedia todo o aplicativo de iniciar.
- Referência a `drawEvents()` que não existia.
- Ícones agora são SVG locais, sem depender do Lucide/CDN.
- O ZIP já vem com `index.html` na raiz, pronto para Netlify.
- Recuperação segura caso o localStorage esteja corrompido.
- Login/cadastro local e modo demonstração continuam funcionando.
- Calendário, turmas, alunos, chamada, cabeçalhos, configurações e gerador estruturado continuam disponíveis.
- IA local continua opcional e só é carregada quando a professora pedir.

## IA gratuita
A IA local usa Transformers.js + Qwen2.5-0.5B-Instruct. Ela precisa baixar o modelo na primeira utilização. Se o modelo não puder ser carregado, o site usa o gerador pedagógico local estruturado para que o botão não fique travado.

## Netlify
Publique o conteúdo deste ZIP diretamente como site estático. Não é necessário OPENAI_API_KEY para o modo local.
