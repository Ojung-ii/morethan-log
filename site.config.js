const CONFIG = {
  // profile setting (required)
  profile: {
    name: "오정이",
    image: "https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo4LCJub3NlIjoxMywibW91dGgiOjEwLCJleWVzIjoxLCJleWVicm93cyI6NCwiZ2xhc3NlcyI6MSwiaGFpciI6MzQsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MSwiY29sb3IiOiIjYmZiZmJmIiwic2hhcGUiOiJub25lIn0=",
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
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "morethan-log",
    description: "welcome to morethan-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
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
      repo: "morethanmin/morethan-log",
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
