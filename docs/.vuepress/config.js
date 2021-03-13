module.exports = {
  host: "127.0.0.1", // 生成网页地址（本地调试使用）
  port: "8080", // 生成网页端口（本地调试使用）
  title: "renjiangong Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "个人博客", // meta 中的描述文字，用于SEO
  /* 
   部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，
   如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，
   它的值应当总是以斜杠开始，并以斜杠结束。
  */
  base: '/my-blog/',
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],
  theme: "reco", //选择主题‘reco’
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    type: "blog", //选择类型博客
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
      socialLinks: [
        { icon: "reco-github", link: "https://github.com/ma-x-x" },
        { icon: "reco-qq", link: "tencent://message/?uin=897114723" },
        { icon: "reco-mail", link: "mailto:maxingxiang1@gmail.com" },
      ],
    },
    nav: [
      //导航栏设置
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '侧边栏', link: '/views/sidebar/' },
      { text: 'sidebar', link: '/views/sidebargroup/' },
      {
        text: "联系",
        icon: "reco-message",
        items: [{
          text: "GitHub",
          link: "https://github.com/renjiangong",
          icon: "reco-github",
        },
        {
          text: "QQ",
          link: "tencent://message/?uin=897114723",
          icon: "reco-qq",
        },
        {
          text: "Gmail",
          link: "mailto:maxingxiang1@gmail.com",
          icon: "reco-mail",
        },
        ],
      },
    ],
    // sidebar: [
    //   ['/views/FrontEnd/vuepress_theme_reco-Github_Actions.md','"reco'],
    //   ['/views/FrontEndVuePress_GithubPages_TravisCI.md', 'TravisCI'],
    //   ['/views/FrontEndSphinx_GitHub_ReadtheDocs.md', 'ReadtheDocs'],
    // ],
    sidebar: {
      '/views/sidebar/': [
        '',
        'bar1',
        'bar2'
      ],
      '/views/sidebargroup/': [{
        title: '基础',
        collapsable: true,
        children: [
          '',
          'bar1'
        ]
      },
      {
        title: '进阶',
        collapsable: true,
        children: [
          'bar2'
        ]
      },
      ]
    },
    // displayAllHeaders: true, // 默认值：false
    subSidebar: "auto",
    // 备案号
    record: 'xxxx',
    recordLink: 'http://www.baidu.com',
    cyberSecurityRecord: '2222',
    cyberSecurityLink: 'http://www.baidu.com',
    startYear: "2021", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "renjiangong",
    logo: '/avatar.png',
    authorAvatar: "/avatar.png", //作者头像
    mode: "light", //默认显示白天模式
    codeTheme: "okaidia", // default 'tomorrow'
    smooth: "true", //平滑滚动
  },
  markdown: {
    lineNumbers: true, //代码显示行号
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it'))
    }
  }, // 搜索设置
  search: true,
  searchMaxSuggestions: 10, // 插件
  plugins: [
    [
      "meting",
      {
        // metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "4902520778",
        },
        aplayer: {
          lrcType: 3,
          theme: "#3489fd",
        },
      },
    ],
    // ],
    [
      "social-share", //分享插件
      {
        networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
        email: "maxingxiang1@gmail.com", //email地址
        twitterUser: "maxingxiang1@gmail.com", //Twitter账号
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "https://ma-x-x.github.io/my-blog", //网站地址
        copyright: "renjiangong", //版权署名
      },
    ],
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: process.env.LEANCLOUD_APP_ID || 'lBYOgsJxPofdqwYw8JbOkCbY-9Nh9j0Va',
        appKey: process.env.LEANCLOUD_APP_KEY || '7c3JNMlYplb0jnUBOW0Eh5p2',
      }
    }],
    ["flowchart"], // 支持流程图
    // ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
    ["'@vuepress-reco/extract-code'"], // 展示代码
  ],
};
