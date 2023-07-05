const CONFIG = {
  // profile setting (required)
  profile: {
    name: "오정이",
    image: "![06223543118ff4d8249eb11f9a641024-sticker](https://github.com/Ojung-ii/Sales-Analysis/assets/112710022/6a0f50d3-dd2e-44bd-888d-37d06bbd849b)",
                //"/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Data scientist & Analyst",
    bio: "🦆",
    email: "ojh7839@gmail.com",
    linkedin: "none",
    github: "Ojung-ii",
    instagram: "",
  },
  projects: [
    {
      name: `Ojungii_log`,
      href: "https://github.com/Ojung-ii/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Ojungii-log",
    description: "Welcome to Ojungii_blog😁",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://ojungii-blog.vercel.app", //"https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Ojung-ii/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
