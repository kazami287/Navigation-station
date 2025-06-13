/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'Studying',
    name: '个人其他站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'ipleak',
    name: '网络安全', icon: '/icons/category/ipleak.svg',
  },
  {
    id: 'speedtest',
    name: '测速工具', icon: '/icons/category/speedtest.svg',
  },
  {
    id: 'webmaster',
    name: '站长工具', icon: '/icons/category/webmaster.svg',
  },
  {
    id: 'ai-chat',
    name: 'AI聊天', icon: '/icons/category/ai-chat.svg',
  },
  {
    id: 'ai-coding',
    name: 'AI 编程', icon: '/icons/category/ai-coding.svg',
  },
  {
    id: 'foreign-media',
    name: '国外媒体', icon: '/icons/category/foreign-media.svg',
  },
  {
    id: 'domain-service',
    name: '域名服务', icon: '/icons/category/domain-service.svg',
  },
  {
    id: 'vps-provider',
    name: 'VPS厂商', icon: '/icons/category/vps-provider.svg',
  },
  {
    id: 'gaming',
    name: '游戏相关', icon: '/icons/category/gaming.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //游戏相关      
      {
      id: 'steam',
      title: 'Steam',
      description: 'Valve开发的全球最大PC游戏数字发行平台，拥有海量游戏库、社区功能、云存档、成就系统等，是PC游戏玩家的必备平台，提供游戏购买、下载、管理一站式服务。',
      shortDesc: '全球最大PC游戏平台。',
      url: 'https://store.steampowered.com/',
      category: 'gaming',
      icon: '/icons/steam.webp',
      },
      
      {
      id: 'epic-games-store',
      title: 'Epic Games Store',
      description: 'Epic Games推出的数字游戏商店，以定期免费游戏赠送和独占大作著称，采用更优惠的开发者分成政策，为玩家提供高质量游戏和优惠价格。',
      shortDesc: 'Epic Games数字游戏商店。',
      url: 'https://store.epicgames.com/',
      category: 'gaming',
      icon: '/icons/epic-games-store.webp',
      },
      
      {
      id: 'oray-gaming',
      title: '蒲公英联机组网',
      description: '花生壳旗下的游戏联机组网服务，专为游戏玩家提供虚拟局域网解决方案，支持各类局域网游戏的远程联机，让异地好友能够轻松组队游戏。',
      shortDesc: '游戏联机组网服务。',
      url: 'https://pgy.oray.com/download/?icn=pgy_download&ici=p_login#game',
      category: 'gaming',
      icon: '/icons/oray-gaming.webp',
      },
      
      {
      id: 'steamzg',
      title: '小叽资源 – Free Share',
      description: '游戏资源分享网站，提供各类游戏的免费下载资源，包含单机游戏、补丁、修改器等内容，为游戏爱好者提供丰富的游戏资源获取渠道。',
      shortDesc: '游戏资源分享网站。',
      url: 'https://steamzg.com/',
      category: 'gaming',
      icon: '/icons/steamzg.webp',
      },
      
      {
      id: 'byrutgame',
      title: 'ByRutgame',
      description: '国外游戏资源网站，提供各类PC游戏的下载资源，涵盖最新发布的游戏作品和经典游戏，为玩家提供便捷的游戏获取途径。',
      shortDesc: '国外游戏资源网站。',
      url: 'https://byrutgame.org/',
      category: 'gaming',
      icon: '/icons/byrutgame.webp',
      },
      
      {
      id: 'freegamesdl',
      title: 'FreeGamesDL',
      description: '免费游戏下载网站，专注于提供各类免费游戏资源，包括完整版游戏、试玩版、独立游戏等，让玩家能够免费体验各种游戏内容。',
      shortDesc: '免费游戏下载网站。',
      url: 'https://www.freegamesdl.net/',
      category: 'gaming',
      icon: '/icons/freegamesdl.webp',
      },
      
      {
      id: 'switch520',
      title: 'Switch520 永久防迷路',
      description: 'Nintendo Switch游戏资源网站，专门为Switch玩家提供游戏下载、攻略、新闻等服务，是Switch游戏爱好者获取游戏资源和信息的重要平台。',
      shortDesc: 'Nintendo Switch游戏资源网站。',
      url: 'https://www.laoquzhang.com/',
      category: 'gaming',
      icon: '/icons/category/gaming.svg',
      },

  //VPS厂商      
      {
      id: 'racknerd',
      title: 'RackNerd (RN)',
      description: '知名的美国VPS服务商，以超高性价比著称，提供多种配置的VPS产品，经常推出优惠活动，在全球多个数据中心部署，是预算有限用户的热门选择。',
      shortDesc: '高性价比美国VPS服务商。',
      url: 'https://racknerd.com/',
      category: 'vps-provider',
      icon: '/icons/racknerd.webp',
      },
      
      {
      id: 'spartanhost',
      title: 'SpartanHost (斯巴达)',
      description: '专业的VPS托管服务商，提供高性能的VPS产品，以稳定性和技术支持见长，在美国多个数据中心提供服务，适合对性能有较高要求的用户。',
      shortDesc: '专业高性能VPS服务商。',
      url: 'https://spartanhost.org/',
      category: 'vps-provider',
      icon: '/icons/spartanhost.webp',
      },
      
      {
      id: 'hosthatch',
      title: 'HostHatch',
      description: '国际化的VPS服务提供商，在全球多个地区设有数据中心，提供多样化的VPS配置选择，以良好的网络连接和灵活的计费方式受到用户青睐。',
      shortDesc: '国际化VPS服务提供商。',
      url: 'https://hosthatch.com/',
      category: 'vps-provider',
      icon: '/icons/hosthatch.webp',
      },
      
      {
      id: 'alphavps',
      title: 'AlphaVPS',
      description: '保加利亚的VPS服务商，在欧洲地区享有良好声誉，提供稳定可靠的VPS服务，价格合理，特别适合需要欧洲节点的用户使用。',
      shortDesc: '欧洲优质VPS服务商。',
      url: 'https://alphavps.com/',
      category: 'vps-provider',
      icon: '/icons/alphavps.webp',
      },
      
      {
      id: 'cloudcone',
      title: 'CloudCone （CC）',
      description: '美国洛杉矶的VPS服务商，以极具竞争力的价格和不错的性能表现著称，经常推出限时优惠，在亚洲用户中有较高的知名度。',
      shortDesc: '洛杉矶高性价比VPS。',
      url: 'https://cloudcone.com/',
      category: 'vps-provider',
      icon: '/icons/cloudcone.webp',
      },
      
      {
      id: 'yunyoo',
      title: '云悠 YUNYOO',
      description: '国内VPS服务商，专注于为中文用户提供优质的云服务器产品，提供多个国内外数据中心选择，客服支持中文，适合国内用户使用。',
      shortDesc: '国内专业VPS服务商。',
      url: 'https://yunyoo.cc/',
      category: 'vps-provider',
      icon: '/images/default.svg',
      },
      
      {
      id: 'wawo-host',
      title: '哇沃主機',
      description: '台湾地区的主机服务商，提供VPS、虚拟主机等产品，以中文服务和本地化支持为特色，在华语地区用户中有一定的用户基础。',
      shortDesc: '台湾本地化主机服务。',
      url: 'https://wawo.wiki/index.php',
      category: 'vps-provider',
      icon: '/icons/wawo-host.webp',
      },
      
      {
      id: 'wap-ac',
      title: 'wap.ac',
      description: 'VPS服务提供商，提供多种配置的虚拟专用服务器产品，致力于为用户提供稳定可靠的云计算服务，满足不同规模的业务需求。',
      shortDesc: 'VPS云计算服务商。',
      url: 'https://wap.ac/index.php',
      category: 'vps-provider',
      icon: '/images/default.svg',
      },
      
      {
      id: 'bytevirt',
      title: 'ByteVirt LLC',
      description: '专业的VPS托管服务公司，提供高质量的虚拟专用服务器解决方案，注重服务器性能和网络稳定性，为企业和个人用户提供可靠的云服务。',
      shortDesc: '专业VPS托管服务。',
      url: 'https://bytevirt.com/index.php',
      category: 'vps-provider',
      icon: '/icons/bytevirt.webp',
      },
      
      {
      id: 'kuxueyun',
      title: '酷雪云',
      description: '国内云服务提供商，专注于为用户提供高性能的云服务器产品，拥有多个数据中心，提供7x24小时技术支持，适合各类网站和应用部署。',
      shortDesc: '国内高性能云服务商。',
      url: 'https://kuxueyun.com/index.php',
      category: 'vps-provider',
      icon: '/images/default.svg',
      },
      
      {
      id: 'alice-networks',
      title: 'Alice Networks LTD',
      description: '国际网络服务公司，提供VPS、专用服务器等多种云计算产品，以技术创新和服务质量为核心竞争力，为全球用户提供专业的网络解决方案。',
      shortDesc: '国际网络服务公司。',
      url: 'https://app.alice.ws',
      category: 'vps-provider',
      icon: '/images/default.svg',
      },

  //域名服务      
      {
      id: 'cloudflare',
      title: 'Cloudflare',
      description: '全球领先的网络基础设施和安全服务提供商，提供DNS服务、CDN加速、DDoS防护、域名注册等服务，以其高性能和安全性著称，是网站优化的首选平台。',
      shortDesc: '全球领先的网络基础设施服务。',
      url: 'https://www.cloudflare.com/',
      category: 'domain-service',
      icon: '/icons/cloudflare.webp',
      },
      
      {
      id: 'dynadot-bulk-search',
      title: 'Dynadot - 域名批量搜索',
      description: 'Dynadot提供的域名批量搜索工具，支持同时查询多个域名的注册状态，帮助用户快速找到可注册的域名，是域名投资者和企业批量域名查询的理想工具。',
      shortDesc: '域名批量搜索工具。',
      url: 'https://www.dynadot.com/zh/domain/bulk-search',
      category: 'domain-service',
      icon: '/icons/dynadot-bulk-search.webp',
      },
      
      {
      id: 'name-com',
      title: 'Name.com',
      description: '知名域名注册商，提供域名注册、转移、管理等服务，界面简洁易用，价格透明，支持多种顶级域名，是个人和企业域名注册的可靠选择。',
      shortDesc: '知名域名注册服务商。',
      url: 'https://www.name.com/',
      category: 'domain-service',
      icon: '/icons/name-com.webp',
      },
      
      {
      id: 'whois-domaintools',
      title: 'Whois查询 (DomainTools)',
      description: 'DomainTools提供的专业Whois查询服务，能够查询域名的注册信息、历史记录、DNS记录等详细数据，是网络安全研究和域名调查的专业工具。',
      shortDesc: '专业Whois查询工具。',
      url: 'https://whois.domaintools.com/',
      category: 'domain-service',
      icon: '/icons/whois-domaintools.webp',
      },
      
      {
      id: 'whois-who-cx',
      title: 'Whois查询 (who.cx)',
      description: '简洁快速的Whois查询工具，提供域名注册信息查询服务，界面简单直观，查询速度快，适合快速获取域名基本信息。',
      shortDesc: '简洁快速的Whois查询。',
      url: 'https://who.cx/',
      category: 'domain-service',
      icon: '/images/default.svg',
      },
      
      {
      id: 'wayback-machine',
      title: 'Wayback Machine',
      description: '互联网档案馆的网页时光机，保存了数十亿网页的历史版本，用户可以查看网站在不同时间点的样貌，是研究网站发展历史和恢复丢失内容的重要工具。',
      shortDesc: '网页历史版本查询工具。',
      url: 'https://web.archive.org/',
      category: 'domain-service',
      icon: '/icons/wayback-machine.webp',
      },
      
      {
      id: 'nslookup-io',
      title: 'nslookup.io',
      description: '在线DNS查询工具，提供域名解析、DNS记录查询、网络诊断等功能，支持多种DNS记录类型，是网络管理员和开发者进行DNS调试的便捷工具。',
      shortDesc: '在线DNS查询工具。',
      url: 'https://www.nslookup.io/',
      category: 'domain-service',
      icon: '/icons/nslookup-io.webp',
      },
      
      {
      id: 'luadns',
      title: 'LuaDNS',
      description: '灵活的DNS托管服务，支持通过Lua脚本自定义DNS解析逻辑，提供高级DNS功能和API接口，适合需要复杂DNS配置的技术用户和企业。',
      shortDesc: '灵活的DNS托管服务。',
      url: 'https://www.luadns.com/',
      category: 'domain-service',
      icon: '/icons/luadns.webp',
      },
      
      {
      id: 'desec-io',
      title: 'desec.io',
      description: '免费的DNS托管服务，专注于安全性和隐私保护，支持DNSSEC、API管理等功能，为用户提供可靠的DNS解析服务，适合个人和小型项目使用。',
      shortDesc: '免费的安全DNS托管服务。',
      url: 'https://desec.io/',
      category: 'domain-service',
      icon: '/icons/desec-io.webp',
      },
      
      {
      id: 'cloudns',
      title: 'ClouDNS',
      description: '专业的DNS托管服务提供商，提供免费和付费的DNS服务，支持多种DNS记录类型、地理DNS、负载均衡等高级功能，服务稳定可靠。',
      shortDesc: '专业的DNS托管服务。',
      url: 'https://www.cloudns.net/',
      category: 'domain-service',
      icon: '/icons/cloudns.webp',
      },
      
      {
      id: 'netcup',
      title: 'netcup',
      description: '德国知名的网络服务提供商，提供域名注册、虚拟主机、服务器租用等服务，以高性价比和可靠性著称，在欧洲市场享有良好声誉。',
      shortDesc: '德国知名网络服务商。',
      url: 'https://www.netcup.com/de',
      category: 'domain-service',
      icon: '/icons/netcup.webp',
      },
      
      {
      id: 'spaceship',
      title: 'Spaceship',
      description: '现代化的域名注册服务商，提供简洁的域名管理界面和竞争力的价格，支持多种顶级域名，致力于为用户提供便捷的域名注册和管理体验。',
      shortDesc: '现代化域名注册服务。',
      url: 'https://www.spaceship.com/',
      category: 'domain-service',
      icon: '/icons/spaceship.webp',
      },
      
      {
      id: 'west-cn-mipu',
      title: '西部数码 - 米铺',
      description: '西部数码旗下的域名交易平台，提供域名买卖、域名拍卖、域名估价等服务，是国内知名的域名交易市场，为域名投资者提供专业的交易环境。',
      shortDesc: '国内知名域名交易平台。',
      url: 'https://www.west.cn/web/mi/',
      category: 'domain-service',
      icon: '/icons/west-cn-mipu.webp',
      },
      
      {
      id: 'tld-list',
      title: 'TLD List',
      description: '全面的顶级域名列表网站，提供所有可用TLD的详细信息、价格对比、注册商推荐等，帮助用户了解和选择合适的顶级域名。',
      shortDesc: '全面的顶级域名信息。',
      url: 'https://zh-hans.tld-list.com/',
      category: 'domain-service',
      icon: '/icons/tld-list.webp',
      },
      
      {
      id: 'nazhumi',
      title: '哪煮米 (Nazhumi)',
      description: '专业的域名信息查询和分析平台，提供域名注册商对比、价格监控、域名工具等服务，帮助用户做出最优的域名选择决策。',
      shortDesc: '域名信息查询分析平台。',
      url: 'https://www.nazhumi.com/',
      category: 'domain-service',
      icon: '/icons/nazhumi.webp',
      },
      
      {
      id: 'namesilo',
      title: 'NameSilo',
      description: '价格透明的域名注册商，以低价格和免费隐私保护著称，提供简洁的管理界面和可靠的服务，是注重性价比用户的热门选择。',
      shortDesc: '价格透明的域名注册商。',
      url: 'https://www.namesilo.com/',
      category: 'domain-service',
      icon: '/icons/namesilo.webp',
      },

  //国外媒体      
      {
      id: 'google',
      title: 'Google',
      description: '全球最大的搜索引擎，提供网页搜索、图片搜索、地图服务、邮箱等多种互联网服务，是互联网用户获取信息的主要入口之一。',
      shortDesc: '全球最大的搜索引擎。',
      url: 'https://www.google.com/',
      category: 'foreign-media',
      icon: '/icons/google.webp',
      },
      
      {
      id: 'youtube',
      title: 'YouTube',
      description: '全球最大的视频分享平台，用户可以上传、观看、分享视频内容，涵盖教育、娱乐、音乐等各个领域，是创作者和观众交流的重要平台。',
      shortDesc: '全球最大的视频分享平台。',
      url: 'https://www.youtube.com/',
      category: 'foreign-media',
      icon: '/icons/youtube.webp',
      },
      
      {
      id: 'instagram',
      title: 'Instagram',
      description: 'Meta旗下的图片和视频分享社交平台，以视觉内容为主，用户可以分享照片、短视频、故事等，深受年轻用户喜爱的社交媒体平台。',
      shortDesc: '图片和视频分享社交平台。',
      url: 'https://www.instagram.com/',
      category: 'foreign-media',
      icon: '/icons/instagram.webp',
      },
      
      {
      id: 'x-twitter',
      title: 'X',
      description: '前身为Twitter的微博客社交平台，用户可以发布短消息（推文）、分享链接、图片和视频，是全球实时信息交流和新闻传播的重要平台。',
      shortDesc: '微博客社交平台（原Twitter）。',
      url: 'https://x.com/',
      category: 'foreign-media',
      icon: '/icons/x-twitter.webp',
      },
      
      {
      id: 'telegram',
      title: 'Telegram',
      description: '注重隐私和安全的即时通讯应用，提供端到端加密、大型群组、频道、机器人等功能，支持跨平台使用，深受隐私意识用户青睐。',
      shortDesc: '注重隐私的即时通讯应用。',
      url: 'https://telegram.org/',
      category: 'foreign-media',
      icon: '/icons/telegram.webp',
      },
      
      {
      id: 'netflix',
      title: 'Netflix',
      description: '全球领先的流媒体视频服务平台，提供丰富的电影、电视剧、纪录片、动漫等原创和授权内容，支持多设备观看和离线下载。',
      shortDesc: '全球领先的流媒体视频平台。',
      url: 'https://www.netflix.com/',
      category: 'foreign-media',
      icon: '/icons/netflix.webp',
      },
      
      {
      id: 'disney-plus',
      title: 'Disney+',
      description: '迪士尼官方流媒体服务平台，汇集迪士尼、皮克斯、漫威、星球大战、国家地理等品牌的经典和原创内容，提供家庭友好的娱乐体验。',
      shortDesc: '迪士尼官方流媒体平台。',
      url: 'https://www.disney.com/',
      category: 'foreign-media',
      icon: '/icons/disney-plus.webp',
      },
      
      {
      id: 'pixiv',
      title: 'Pixiv',
      description: '日本知名的插画艺术社区平台，聚集了全球众多插画师、漫画家和艺术创作者，用户可以分享、发现和收藏各种风格的艺术作品。',
      shortDesc: '知名的插画艺术社区平台。',
      url: 'https://www.pixiv.net/',
      category: 'foreign-media',
      icon: '/icons/pixiv.webp',
      },

  //AI 编程      
      {
      id: 'cursor',
      title: 'Cursor',
      description: 'AI驱动的代码编辑器，集成了先进的人工智能技术，能够智能补全代码、生成函数、修复错误，大幅提升开发效率，为程序员提供无缝的AI编程体验。',
      shortDesc: 'AI驱动的智能代码编辑器。',
      url: 'https://www.cursor.com/cn',
      category: 'ai-coding',
      icon: '/icons/cursor.webp',
      },
      
      {
      id: 'trae',
      title: 'Trae',
      description: 'AI编程助手平台，专注于帮助开发者提高代码质量和开发效率，提供智能代码生成、重构建议、错误检测等功能，支持多种编程语言。',
      shortDesc: 'AI编程助手平台。',
      url: 'https://www.trae.ai/',
      category: 'ai-coding',
      icon: '/icons/trae.webp',
      },
      
      {
      id: 'windsurf-ai-editor',
      title: 'Windsurf AI Editor',
      description: '新一代AI代码编辑器，结合了人工智能和传统编程工具的优势，提供智能代码补全、自动重构、实时错误检测等功能，让编程变得更加高效。',
      shortDesc: '新一代AI代码编辑器。',
      url: 'https://windsurf.com/editor',
      category: 'ai-coding',
      icon: '/icons/windsurf-ai-editor.webp',
      },
      
      {
      id: 'augmentcode',
      title: 'AugmentCode',
      description: 'AI增强的代码开发平台，通过人工智能技术帮助开发者自动生成代码、优化算法、检测漏洞，提升软件开发的质量和速度。',
      shortDesc: 'AI增强的代码开发平台。',
      url: 'https://www.augmentcode.com/',
      category: 'ai-coding',
      icon: '/icons/augmentcode.webp',
      },
      
      {
      id: 'v0-dev',
      title: 'V0.dev',
      description: 'Vercel推出的AI界面生成工具，能够根据自然语言描述快速生成React组件和界面代码，支持现代前端框架，大幅提升UI开发效率。',
      shortDesc: 'AI界面生成工具。',
      url: 'https://v0.dev/',
      category: 'ai-coding',
      icon: '/icons/v0-dev.webp',
      },
      
      {
      id: 'jules',
      title: 'Jules',
      description: 'Google推出的AI编程助手，集成到开发环境中，能够理解代码上下文，提供智能建议、自动补全、代码解释等功能，助力开发者提升编程效率。',
      shortDesc: 'Google推出的AI编程助手。',
      url: 'https://jules.google.com/',
      category: 'ai-coding',
      icon: '/icons/jules.webp',
      },
      
      {
      id: 'manus',
      title: 'Manus',
      description: 'AI驱动的开发工具，专注于简化复杂的编程任务，提供智能代码生成、项目管理、协作开发等功能，为开发团队提供高效的工作流程。',
      shortDesc: 'AI驱动的开发工具。',
      url: 'https://manus.im/app',
      category: 'ai-coding',
      icon: '/icons/manus.webp',
      },
      
      {
      id: 'roocode',
      title: 'RooCode',
      description: '在线AI编程平台，提供智能代码编写、调试、测试等功能，支持多种编程语言，让开发者能够在浏览器中享受AI辅助的编程体验。',
      shortDesc: '在线AI编程平台。',
      url: 'https://roocode.com/',
      category: 'ai-coding',
      icon: '/icons/roocode.webp',
      },
      
      {
      id: 'warp-dev',
      title: 'Warp.dev',
      description: '现代化的AI终端工具，重新定义了命令行体验，集成AI助手帮助生成命令、解释错误，提供智能补全和协作功能，让终端使用更加高效。',
      shortDesc: '现代化的AI终端工具。',
      url: 'https://www.warp.dev/',
      category: 'ai-coding',
      icon: '/icons/warp-dev.webp',
      },
      
      {
      id: 'codepen',
      title: 'CodePen',
      description: '在线代码编辑器和前端开发平台，支持HTML、CSS、JavaScript的实时预览，拥有丰富的代码示例和社区资源，是前端开发者学习和分享的理想平台。',
      shortDesc: '在线前端代码编辑平台。',
      url: 'https://codepen.io/',
      category: 'ai-coding',
      icon: '/icons/codepen.webp',
      },
      
      {
      id: 'jsfiddle',
      title: 'JSFiddle',
      description: '轻量级的在线代码编辑器，专注于JavaScript、HTML、CSS的快速测试和分享，提供简洁的界面和实时预览功能，适合代码片段的快速验证。',
      shortDesc: '轻量级在线代码编辑器。',
      url: 'https://jsfiddle.net/',
      category: 'ai-coding',
      icon: '/icons/jsfiddle.webp',
      },
      
      {
      id: 'codesandbox',
      title: 'CodeSandbox',
      description: '强大的在线代码编辑器，支持现代前端框架如React、Vue、Angular等，提供完整的开发环境、包管理、版本控制等功能，让Web开发更加便捷。',
      shortDesc: '强大的在线代码编辑器。',
      url: 'https://codesandbox.io/',
      category: 'ai-coding',
      icon: '/icons/codesandbox.webp',
      },

  //AI聊天      
      {
      id: 'chatgpt',
      title: 'ChatGPT',
      description: 'OpenAI 开发的先进AI聊天助手，基于GPT大语言模型，能够进行自然对话、回答问题、协助写作、代码编程等多种任务，是目前最受欢迎的AI助手之一。',
      shortDesc: 'OpenAI 开发的先进AI聊天助手。',
      url: 'https://chatgpt.com/',
      category: 'ai-chat',
      icon: '/icons/chatgpt.webp',
      },
      
      {
      id: 'gemini',
      title: 'Gemini',
      description: 'Google 推出的多模态AI助手，能够处理文本、图像、代码等多种类型的输入，提供智能对话、内容创作、分析推理等功能，集成了Google的先进AI技术。',
      shortDesc: 'Google 推出的多模态AI助手。',
      url: 'https://gemini.google.com/',
      category: 'ai-chat',
      icon: '/icons/gemini.webp',
      },
      
      {
      id: 'claude',
      title: 'Claude',
      description: 'Anthropic 开发的AI助手，以安全性和有用性著称，擅长复杂推理、长文本处理、创意写作等任务，注重AI安全和对齐性，提供高质量的对话体验。',
      shortDesc: 'Anthropic 开发的安全AI助手。',
      url: 'https://www.anthropic.com/app-unavailable-in-region',
      category: 'ai-chat',
      icon: '/icons/claude.webp',
      },
      
      {
      id: 'grok',
      title: 'Grok',
      description: 'xAI 开发的AI聊天机器人，具有幽默风格和实时信息获取能力，能够回答各种问题并提供有趣的对话体验，集成了最新的网络信息。',
      shortDesc: 'xAI 开发的幽默AI聊天机器人。',
      url: 'https://grok.com/',
      category: 'ai-chat',
      icon: '/icons/grok.webp',
      },
      
      {
      id: 'microsoft-copilot',
      title: 'Microsoft Copilot',
      description: 'Microsoft 推出的AI助手，集成了GPT技术，能够协助办公、编程、创作等多种任务，与Microsoft 365生态系统深度集成，提升工作效率。',
      shortDesc: 'Microsoft 推出的AI办公助手。',
      url: 'https://copilot.microsoft.com/',
      category: 'ai-chat',
      icon: '/icons/microsoft-copilot.webp',
      },
      
      {
      id: 'ai-studio',
      title: 'AI Studio',
      description: 'Google 提供的AI开发和实验平台，让用户能够体验和使用各种Google AI模型，包括Gemini系列，支持多种AI应用的开发和测试。',
      shortDesc: 'Google AI开发和实验平台。',
      url: 'https://aistudio.google.com/',
      category: 'ai-chat',
      icon: '/icons/ai-studio.webp',
      },
      
      {
      id: 'deepseek-chat',
      title: 'DeepSeek Chat',
      description: 'DeepSeek 开发的AI对话助手，基于自主研发的大语言模型，在数学、编程、推理等领域表现优秀，提供免费的智能对话服务。',
      shortDesc: 'DeepSeek 开发的AI对话助手。',
      url: 'https://chat.deepseek.com/',
      category: 'ai-chat',
      icon: '/icons/deepseek-chat.webp',
      },
      
      {
      id: 'doubao-ai',
      title: '豆包AI',
      description: '字节跳动推出的AI助手，集成了先进的自然语言处理技术，能够进行智能对话、内容创作、知识问答等，为用户提供便捷的AI服务体验。',
      shortDesc: '字节跳动推出的AI助手。',
      url: 'https://www.doubao.com/',
      category: 'ai-chat',
      icon: '/icons/doubao-ai.webp',
      },
      
      {
      id: 'duck-ai',
      title: 'Duck.ai',
      description: 'DuckDuckGo 推出的注重隐私的AI聊天服务，在保护用户隐私的前提下提供AI对话功能，不会追踪或存储用户的聊天记录，为注重隐私的用户提供安全的AI体验。',
      shortDesc: 'DuckDuckGo 推出的隐私AI聊天。',
      url: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat',
      category: 'ai-chat',
      icon: '/icons/duck-ai.webp',
      },

  //站长工具      
      {
      id: 'itdog',
      title: 'ITDOG',
      description: 'ITDOG 是一个专业的网站运维监测平台，提供网站监控、服务器监控、域名监控等多种服务，帮助站长实时了解网站运行状态，快速发现并解决问题，确保网站稳定运行。',
      shortDesc: '专业的网站运维监测平台。',
      url: 'https://www.itdog.cn/',
      category: 'webmaster',
      icon: '/icons/itdog.webp',
      },
      
      {
      id: 'viewdns',
      title: 'ViewDNS',
      description: 'ViewDNS 是一个功能全面的DNS查询和网络诊断工具集合，提供DNS记录查询、反向DNS查找、域名解析检测、网站可用性测试等多种实用功能，是网站管理员和网络技术人员的必备工具。',
      shortDesc: '全面的DNS查询和网络诊断工具。',
      url: 'https://viewdns.info/',
      category: 'webmaster',
      icon: '/icons/viewdns.webp',
      },
      
      {
      id: 'chinaz-tool',
      title: '站长工具（站长之家）',
      description: '站长之家旗下的综合性站长工具平台，提供SEO分析、网站测速、域名查询、ICP备案查询、网站收录查询等丰富的网站优化和管理工具，是国内最受欢迎的站长服务平台之一。',
      shortDesc: '国内知名的综合性站长工具平台。',
      url: 'https://tool.chinaz.com/',
      category: 'webmaster',
      icon: '/icons/chinaz-tool.webp',
      },

  //测速工具
      {
      id: 'speedtest-ookla',
      title: 'Speedtest by Ookla',
      description: 'Ookla 提供的全球知名网速测试工具，可准确测量您的互联网连接速度，包括下载速度、上传速度和网络延迟，支持多服务器选择，是检测网络性能的行业标准工具。',
      shortDesc: '全球领先的网速测试平台。',
      url: 'https://www.speedtest.net/',
      category: 'speedtest',
      icon: '/icons/speedtest-ookla.webp',
      },      
      {
      id: 'fast-com',
      title: 'Fast.com',
      description: 'Netflix 开发的简洁网速测试工具，专注于测量实际下载速度，界面直观易用，能快速反映您的网络连接质量，特别适合检测流媒体服务的观看体验。',
      shortDesc: 'Netflix 出品的简洁网速测试。',
      url: 'https://fast.com/',
      category: 'speedtest',
      icon: '/icons/fast-com.webp',
      },


  //开源
  {
    id: 'github',
    title: 'GitHub',
    description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
    shortDesc: '全球最大代码托管平台。',
    url: 'https://github.com/',
    icon: '/icons/github.webp',
    category: 'opensource'
  },
  {
    id: 'docker-hub',
    title: 'Docker Hub',
    description: '官方容器镜像仓库，提供镜像上传、分发与管理，支持快速部署各类 Docker 应用，是容器生态的基础服务平台。',
    shortDesc: 'Docker容器镜像仓库。',
    url: 'https://hub.docker.com/',
    icon: '/icons/docker-hub.webp',
    category: 'opensource'
  },      
      {
      id: 'gitee',
      title: 'Gitee',
      description: '国内领先的代码托管平台，提供Git版本控制、协作开发、持续集成等服务，支持私有仓库和企业级功能，是中国开发者的首选代码管理平台。',
      shortDesc: '国内领先的代码托管平台。',
      url: 'https://gitee.com/',
      category: 'opensource',
      icon: '/icons/gitee.webp',
      },
      
      {
      id: 'csdn',
      title: 'CSDN',
      description: '中国专业IT社区，为IT专业技术人员提供最全面的信息传播和服务平台，包含技术博客、问答、学习、招聘等功能，是国内最大的开发者社区之一。',
      shortDesc: '中国专业IT技术社区。',
      url: 'https://www.csdn.net/',
      category: 'opensource',
      icon: '/icons/csdn.webp',
      },

  //个人其他站点      
      {
      id: '古明地こいし',
      title: 'lucky',
      description: '个人主页与知识集散地。作为技术爱好者，展示自己的全部项目、实践与分享的中心',
      shortDesc: '古明地こいし个人官网',
      url: 'https://lucky.nlvps.eu.org/',
      category: 'Studying',
      icon: '/images/logo.png',
      },
      // IP, DNS Leak, WebRTC Leak Check      
      {
      id: 'browserleaks',
      title: 'Browserleaks',
      description: 'Browserleaks是一个全面的浏览器安全和隐私检测网站，能够详细检测用户的IP地址、DNS服务器、WebRTC信息以及多种浏览器指纹，帮助用户了解哪些个人或设备信息可能在网上泄露，以便采取保护措施。',
      shortDesc: '全面浏览器和网络隐私检测。',
      url: 'https://browserleaks.com/',
      category: 'ipleak',
      icon: '/icons/browserleaks.webp',
      },      
      {
      id: 'ipcheck',
      title: 'IPCheck',
      description: 'IPCheck是一个简单易用的工具，用于快速检查用户的IP地址、正在使用的DNS服务器以及是否存在WebRTC泄露，提供直观的测试结果，方便用户验证其网络连接的匿名性和安全性。',
      shortDesc: '检查IP、DNS、WebRTC泄露。',
      url: 'https://ipcheck.ing/',
      category: 'ipleak',
      icon: '/icons/ipcheck.webp',
      },      
      {
      id: 'ipleak.net',
      title: 'Ipleak',
      description: 'Ipleak是一个专注于提供全面的网络连接和隐私信息检测服务的网站，能够详细显示您的IP地址、DNS泄露、WebRTC泄露、浏览器指纹等多种网络隐私相关数据，帮助用户了解自己的网络暴露风险。',
      shortDesc: '检测网络隐私信息。',
      url: 'https://ipleak.net/',
      category: 'ipleak',
      icon: '/icons/ipleak.net.webp',
      },

];
/**
 * @param {string} query
 * @returns {Array}
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.description.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * @param {Array} sitesList
 * @returns {string}
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
