# Diretiva Personalizada

Você pode traduzir não apenas com `$t`, mas também com a diretiva personalizada `v-t`.

## Sintaxe de string

Você pode passar o keypath das mensagens de localidade com sintaxe de string.

Javascript:

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'pt',
  messages: {
    pt: { hello: 'Olá!' },
    en: { hello: 'hi there!' }
  }
})

const app = createApp({
  data: () => ({ path: 'hello' })
})
app.use(i18n)
app.mount('#app')
```

Templates:

```html
<div id="string-syntax">
  <!-- string literal -->
  <p v-t="'hello'"></p>
  <!-- vinculação de dados via data -->
  <p v-t="path"></p>
</div>
```

O resultado será o seguinte:

```html
<div id="string-syntax">
  <p>Olá!</p>
  <p>Olá!</p>
</div>
```

## Sintaxe de objeto

Você pode usar a sintaxe de objeto.

Javascript:

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'pt',
  messages: {
    pt: {
      message: {
        hi: 'Olá, {name}！',
        bye: 'Adeus!'
      }
    },
    en: {
      message: {
        hi: 'Hi, {name}!',
        bye: 'good bye!'
      }
    }
  }
})

const app = createApp({
  data() {
    return { byePath: 'message.bye' }
  }
})
app.use(i18n)
app.mount('#object-syntax')
```

Templates:

```html
<div id="app">
  <!-- string literal -->
  <p v-t="{ path: 'message.hi', args: { name: 'lucas' } }"></p>
  <!-- vinculação de dados via data -->
  <p v-t="{ path: byePath, locale: 'en' }"></p>
</div>
```

Outputs:

```html
<div id="object-syntax">
  <p>Olá, lucas！</p>
  <p>good bye!</p>
</div>
```

## `$t` vs `v-t`

### `$t`

`$t` é função da instância Vue18n. Tem os seguintes prós e contras:

#### Prós

Você pode **flexivelmente** usar a sintaxe mustache `{}` em modelos e também props e métodos computados na instância do componente Vue.

#### Contras

`$t` é executado **toda vez** quando ocorre uma nova renderização, portanto, tem custos de tradução.

### `v-t`

`v-t` é uma diretiva personalizada. Tem os seguintes prós e contras:

#### Prós

`vt` tem **melhor desempenho** do que a função `$t` devido à sua pré-tradução é possível com o módulo do compilador Vue que foi fornecido em [vue-i18n-extensions](https://github.com/intlify/vue-i18n-extensions).

No entanto, é possível fazer **mais otimizações de desempenho**.

#### Contras

`v-t` não pode ser usado de forma flexível como `$t`, e é bastante **complexo**. O conteúdo traduzido com `v-t` é inserido no `textContent` do elemento. Além disso, ao usar a renderização do lado do servidor, você precisa definir a [transformação personalizada](https://github.com/intlify/vue-i18n-extensions#server-side-rendering-for-vt-custom-directive) para a opção `directiveTransforms` da função `compile` do `@vue/compiler-ssr`.
