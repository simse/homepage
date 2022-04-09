interface GeneralConfig {
  locale: string
  title: string
}

interface SearchConfig {
  enabled: boolean
  provider: string
}

interface Link {
  name: string
  url: string
  image?: string
}

interface Config {
  search: SearchConfig
  general: GeneralConfig
  links: Link[]
}

export type {
  Config,
  Link,
  SearchConfig,
  GeneralConfig
}