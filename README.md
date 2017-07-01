# plover-react-boilerplate


Plover结合React应用示例


## 功能特性

- 集成plover最新版本，基于koa2。
- react & redux
- webpack
- 基于[nodemon](https://nodemon.io/)的node应用开发支持。
- 提供react服务端渲染的前后端同构方案。
- 规划了合理的应用目录结构。
- 使用[pm2](http://pm2.keymetrics.io/)用于生产环境运行。


## 开发和使用


```sh
git clone https://github.com/ploverjs/plover-react-boilerplate.git
cd plover-react-boilerplate
npm install

npm run webpack:server  # 运行webpack开发环境
npm run dev  # 运行node环境
```

之后就可以进行开发了。

开发完成后，需要进行前端资源编译。

```sh
npm run build
```

编译完成会在`public`下生成前端资源文件。

【可选】将前端资源文件发布到CDN，如果做了这一步，还需要在`config/app.js`中配置一下资源的cdn访问地址，这样应用才能正确渲染前端资源地址。

```sh
npm run start
```

应用部署到服务器后，使用以上命令启动应用。

