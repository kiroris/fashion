let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
    temperature: {
    location: 'Belarus, Gomel',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  keybindings: {
    "s": "search-bar",
    //"q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://search.nixos.org/packages",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "chi ll",
      //background_url: "src/img/banners/cbg-2.gif",
      background_url: "src/img/banners/girlfriend/lizabg-1.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "autistici",
            url: "https://vc.autistici.org/",
            icon: "users",
            icon_color: "#7daea3",
          },
          {
            name: "discord",
            url: "https://discord.com/channels/@me",
            icon: "brand-discord",
            icon_color: "#7F8FE9",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#E16537",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org",
            icon: "brand-telegram",
            icon_color: "#73AAE9",
          },
        ],
      }, 
      {
        name: "Games",
        links: [
          {
            name: "steam",
            url: "https://store.steampowered.com",
            icon: "brand-steam",
            icon_color: "#D1D7E0", 
          },
          {
            name: "epic",
            url: "https://store.epicgames.com",
            icon: "brand-fortnite",
            icon_color: "#e0af68",
          },
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },

          {
            name: "GG",
            url: "https://ggapp.io/kiroris",
            icon: "device-gamepad",
            icon_color: "#d3869b",
          },
          {
            name: "faceit",
            url: "https://www.faceit.com/",
            icon: "checks",
            icon_color: "#e78a4e",
          },
        ],
      }, 
      {
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "netflix",
            url: "https://www.netflix.com/",
            icon: "brand-netflix",
            icon_color: "#ea6962",
          },
          {
            name: "prime video",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
          {
            name: "inoriginal",
            url: "https://inoriginal.net/",
            icon: "language",
            icon_color: "#7aa2f7",
          },
        ],
      }],
    },
    {
      name: "work",
      //background_url: "src/img/banners/cbg-6.gif",
      background_url: "src/img/banners/girlfriend/lizabg-2.gif",
      categories: [
        {
          name: "crypto",
          links: [
            {
              name: "binance",
              url: "https://www.binance.com",
              icon: "brand-binance",
              icon_color: "#DDBB3F",
            },
            {
              name: "bynex",
              url: "https://bynex.io/",
              icon: "brand-graphql",
              icon_color: "#7DB6E1",
            },
            {
              name: "bybit",
              url: "http://www.bybit.com",
              icon: "currency-bitcoin",
              icon_color: "#e78a4e",
            },
            {
              name: "okx",
              url: "http://www.okx.com",
              icon: "components",
              icon_color: "#E6E6E6",
            },
            {
              name: "Trading View",
              url: "http://tradingview.com",
              icon: "trending-up",
              icon_color: "#a9b665",
            },
          ],
        },
        {
          name: "design",
          links: [
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#a9b665",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e0af68",
            },
          ],
        },
        {
          name: "ai tools",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "hierarchy-3",
              icon_color: "#89b482",
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "circle-letter-g",
              icon_color: "#ea6962",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/",
              icon: "git-merge",
              icon_color: "#7DB6E1",
            },
            {
              name: "codeium",
              url: "https://codeium.com/live",
              icon: "code-dots",
              icon_color: "#5FC2B5",
            },
            {
              name: "leonardo",
              url: "https://app.leonardo.ai/",
              icon: "brush",
              icon_color: "#d3869b",
            },
            {
              name: "copilot",
              url: "https://copilot.microsoft.com/",
              icon: "brand-github-copilot",
              icon_color: "#7daea3",
            },
            {
              name: "yandex translate",
              url: "https://translate.yandex.com/",
              icon: "brand-yandex",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      /*background_url: "src/img/banners/cbg-8.gif",*/
      background_url: "src/img/banners/girlfriend/lizabg-3.gif",
      categories: [
        {
          name: "repositories/images",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#D1D7E0",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
            {
              name: "docker hub",
              url: "https://hub.docker.com/",
              icon: "brand-docker",
              icon_color: "#7DB6E1",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "nixos wiki",
              url: "https://nixos.wiki/",
              icon: "square-rounded-letter-n",
              icon_color: "#7DB6E1",
            },
            {
              name: "arch wiki",
              url: "https://wiki.archlinux.org",
              icon: "navigation-minus",
              icon_color: "#73daca",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#e0af68",
            },
            {
              name: "go",
              url: "https://go.dev/doc/",
              icon: "brand-golang",
              icon_color: "#5FC2B5",
            },
            {
              name: "rust",
              url: "https://doc.rust-lang.org/book/",
              icon: "brand-rust",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "brand-leetcode",
              icon_color: "#e78a4e",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#DDBB3F",
            },
            {
              name: "codewars",
              url: "https://www.codewars.com/",
              icon: "swords",
              icon_color: "#ea6962",
            },
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e0af68",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      /*background_url: "src/img/banners/cbg-9.gif",*/
      background_url: "src/img/banners/girlfriend/lizabg-4.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "protonmail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "mail",
              icon_color: "#d3869b",
            },
            {
              name: "tempmail",
              url: "https://temp-mail.org/",
              icon: "clock",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "photo",
              url: "https://photos.google.com/u/0",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7DB6E1",
            },
            {
              name: "hh",
              url: "https://hh.ru/",
              icon: "zoom-code",
              icon_color: "#ea6962",
            },
            {
              name: "rabota",
              url: "rabota.by",
              icon: "square-letter-r",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
  ],
};


const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
    
(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
    
//CONFIG.setBackground(CONFIG.config.tabsBackground);
    
    
    // // Merge saved config with default config, preferring saved values
    // const CONFIG = new Config(Object.assign({}, default_config, saved_config));
    
    // // Load Tabler icons CSS
    // (function() {
    //   if (!CONFIG.config.localIcons) {
    //     const css = document.createElement('link');
    //     css.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css';
    //     css.rel = 'stylesheet';
    //     css.type = 'text/css';
    //     document.head.appendChild(css);
    //   }
    // })();
    
    // // Save config to localStorage whenever it changes
    // CONFIG.onChange = function(newConfig) {
    //   localStorage.setItem("CONFIG", JSON.stringify(newConfig));
    // };