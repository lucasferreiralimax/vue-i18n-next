export { parse as parsePath, resolveValue } from './path'
export * from './message/tokenizer'
export * from './message/parser'
export * from './message/compiler'
export * from './i18n'

// NOTE: disable (occured build error when use rollup build ...)
// export const VERSION = __VERSION__ // eslint-disable-line