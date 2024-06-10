import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-simple-robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["seoExperiments"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-simple-robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["/Users/hexis/Work/Digitalna Hrvatska/Hyperlink Presentation Taxi Hrvatska/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,
   },
  }
  interface PublicRuntimeConfig {
   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }