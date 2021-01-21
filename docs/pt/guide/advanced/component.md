# Interpolação de componentes

## Exemplo básico

Às vezes, precisamos localizar uma mensagem de um localidade incluída em uma tag ou um componente HTML.

```html
<p>I accept xxx <a href="/term">Terms of Service Agreement</a></p>
```

Na mensagem acima, se quisermos usar `$t`, tentaremos obtê-lo vinculando com as seguintes mensagens de localização:

```js
const messages = {
  en: {
    term1: 'I Accept xxx\'s',
    term2: 'Terms of Service Agreement'
  }
}
```

Como resultado o template terá a seguinte aparência:

```html
<p>{{ $t('term1') }}<a href="/term">{{ $t('term2') }}</a></p>
```

O resultado será o seguinte:

```html
<p>I accept xxx <a href="/term">Terms of Service Agreement</a></p>
```

Isso é muito complicado, e se você mover a tag `<a>` para a mensagem de localização, você adicionará a possibilidade de uma vulnerabilidade XSS devido ao uso de `v-html="$t('term')"`.

Isso pode ser evitado usando o componente funcional `i18n`. Veja este exemplo a seguir.

Template:

```html
<div id="app">
  <!-- ... -->
  <i18n-t keypath="term" tag="label" for="tos">
    <a :href="url" target="_blank">{{ $t('tos') }}</a>
  </i18n-t>
  <!-- ... -->
</div>
```

JavaScript:

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'pt',
  messages: {
    en: {
      tos: 'Term of Service',
      term: 'I accept xxx {0}.'
    },
    pt: {
      tos: 'Termos de serviço',
      term: 'Eu concordo xxx {0}.'
    }
  }
})

const app = createApp({
  data: () => ({ url: '/term' })
})

app.use(i18n)
app.mount('#app')
```

O resultado será o seguinte:

```html
<div id="app">
  <!-- ... -->
  <label for="tos">
    Eu concordo xxx <a href="/term" target="_blank">Termos de serviço</a>.
  </label>
  <!-- ... -->
</div>
```

Mais detalhes sobre o exemplo acima, veja o [exemplo](https://github.com/intlify/vue-i18n-next/blob/master/examples/legacy/components/translation.html)

Descendentes do componente de tradução são interpolados com a mensagem de localidade da propriedade `keypath`.

No exemplo acima:
:::v-pre
`<a :href="url" target="_blank">{{ $t('tos') }}</a>`
:::
interpolado com o `term` da mensagem de localização.

No exemplo acima, a interpolação de componentes usa **interpolação da lista**. Os descendentes do componente de tradução são interpolados na ordem em que aparecem.

<!-- textlint-disable -->
Você pode escolher o tipo do elemento especificando uma `tag`. Se omitido, o padrão é [Fragments](https://v3.vuejs.org/guide/migration/fragments.html#overview).
<!-- textlint-enable -->

## Usando a sintaxe de slots

É mais conveniente usar a sintaxe de slots nomeados. Veja este exemplo a seguir.

Template:

```html
<div id="app">
  <!-- ... -->
  <i18n-t keypath="info" tag="p">
    <template v-slot:limit>
      <span>{{ changeLimit }}</span>
    </template>
    <template v-slot:action>
      <a :href="changeUrl">{{ $t('change') }}</a>
    </template>
  </i18n-t>
  <!-- ... -->
</div>
```

JavaScript:

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      info: 'You can {action} until {limit} minutes from departure.',
      change: 'change your flight',
      refund: 'refund the ticket'
    }
  }
})

const app = createApp({
  data: () => ({
    changeUrl: '/change',
    refundUrl: '/refund',
    changeLimit: 15,
    refundLimit: 30
  })
})

app.use(i18)
app.mount('#app')
```

O resultado será o seguinte:

```html
<div id="app">
  <!-- ... -->
  <p>
    You can <a href="/change">change your flight</a> until <span>15</span> minutes from departure.
  </p>
  <!-- ... -->
</div>
```

Você também pode usar as seguintes abreviações de slots no template:

```html
<div id="app">
  <!-- ... -->
  <i18n-t keypath="info" tag="p">
    <template #limit>
      <span>{{ changeLimit }}</span>
    </template>
    <template #action>
      <a :href="changeUrl">{{ $t('change') }}</a>
    </template>
  </i18n-t>
  <!-- ... -->
</div>
```

:::warning LIMITAÇÃO
:warning: No componente de tradução, props de slots não são suportados.
:::
