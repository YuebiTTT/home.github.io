# Yuebi 个人主页

[![Version](https://img.shields.io/github/package-json/v/yuebittt/home.github.io)](https://www.npmjs.com/package/yuebi-home-page)
[![Website](https://img.shields.io/website-up-down-green-red/http/yuebittt.github.io.svg)](http://yuebittt.github.io/)
[![License](https://img.shields.io/github/license/yuebittt/home.github.io.svg)](/LICENSE)

### 关于

这是 Yuebi 的个人主页，一个展示自我、分享技术与生活的平台。

主页采用现代化设计，融合了多种优秀开源主题的特点，打造出独特的视觉体验。

### 技术特点

- 衍生自 [Vno](https://github.com/onevcat/vno-jekyll) Jekyll 主题
- 页面部分加载效果借鉴于 [Mno](https://github.com/mcc108/mno) Ghost 主题
- 借鉴了[北岛向南的小屋](https://javef.github.io/)的头像样式
- 使用原生 JavaScript 实现交互功能，无 jQuery 依赖
- 采用 GitHub Actions 自动化获取 Bing 壁纸
- 通过 JSONP 方式获取 Bing 壁纸 URL

### 页面预览

>静态效果

![主页JPG](https://unpkg.com/yuebi-home-page@latest/assets/img/home.jpg)

>动态效果

![主页GIF](https://unpkg.com/yuebi-home-page@latest/assets/img/home.gif)

### 主要功能

- 访问地址：[Yuebi 个人主页](http://yuebittt.github.io/)
- 集成 [一言](http://hitokoto.cn/) API 服务，随机显示优美语句
- 每日自动更新 Bing 壁纸作为背景
- 响应式设计，适配各种设备屏幕
- 简洁优雅的导航菜单
- 社交媒体链接集成

### 快速开始

如需部署自己的个人主页，请按照以下步骤操作：

1. Fork 本仓库
2. 修改 CNAME 文件为您的域名（如不需要自定义域名可删除）
3. 更新 package.json 中的相关信息
4. 配置 GitHub Actions（参考 [GitHub Action 配置详细步骤](./ActionNotes.md)）
5. 开启 GitHub Pages 功能

### GitHub Actions 配置

项目使用 GitHub Actions 自动获取 Bing 壁纸，配置步骤：

1. 生成 GitHub API 令牌（详细步骤请参考 [ActionNotes.md](./ActionNotes.md)）
2. 在仓库 Secrets 中添加 `GH_TOKEN`
3. 确保 workflow 文件正确配置

### 项目更新记录

- 2022-06-10
  - 发布 NPM 包，使用 UNPKG 作为资源文件的 CDN
- 2023-02-27
  - 添加《GitHub Action 配置详细步骤》文档
- 2023-04-12
  - 移除 Jquery 依赖，使用原生 JS
- 2023-08-28
  - 将壁纸地址换成 cn.bing.com
- 2025-09-03
  - 迁移项目至 Yuebi 账号下，更新所有相关配置和链接

### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yuebittt/home.github.io&type=Date)](https://star-history.com/#yuebittt/home.github.io&Date)

### 许可证

本项目采用 [MIT License](LICENSE) 开源许可。

