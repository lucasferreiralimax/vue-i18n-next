# Ferramentas de terceiros

### BabelEdit

[BabelEdit](https://www.codeandweb.com/babeledit) é um editor de tradução para aplicativos da web.

O BabelEdit pode traduzir arquivos `json` e também pode trabalhar com blocos personalizados `i18n` de componentes de arquivo único.

Mais informações sobre o BabelEdit podem ser encontradas na página de [introdução](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-vue-app-with-vue-i18n).

### i18n Ally

[i18n Ally] (https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally) é uma extensão i18n para VSCode.

i18n Ally oferece um DX(Experiência do desenvolvedor) incrível para o desenvolvimento de i18n.

Você pode aprender mais sobre a extensão i18n Ally em [README](https://github.com/antfu/i18n-ally/blob/master/README.md).

### i18nPlugin (plataforma intellij)

[i18nPlugin](https://github.com/nyavro/i18nPlugin) Plugin de suporte para idea Intellij i18next ([Página do plugin Jetbrains](https://plugins.jetbrains.com/plugin/12981-i18n-support)).

Plugin para i18n typescript/javascript/PHP. Suporta vue-i18n. Para habilitar o suporte a vue-i18n vá em `Configurações` > `Ferramentas` > `Configuração do plugin i18n` e selecione `Vue-i18n`. É necessário instalar os diretórios com os arquivos de tradução (tradução por padrão).

### vue-i18n-extract

[vue-i18n-extract](https://github.com/pixari/vue-i18n-extract) faz uma análise estática de um projeto Vue.js com base no vue-i18n e relata as seguintes informações:

- Lista de todas as **chaves vue-i18n não utilizadas** (entradas encontradas nos arquivos de idioma, mas não utilizadas no projeto)
- Lista de todas as **chaves ausentes** (entradas encontradas no projeto, mas não nos arquivos de idioma)

É possível mostrar a saída no console ou gravar em um arquivo json.

As chaves ausentes também podem ser adicionadas automaticamente aos arquivos de tradução fornecidos.
