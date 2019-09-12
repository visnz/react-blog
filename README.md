# react-blog

[![wercker status](https://app.wercker.com/status/b6a0cd5ac8c225f9e0a3126777285bd4/m/master "wercker status")](https://app.wercker.com/project/byKey/b6a0cd5ac8c225f9e0a3126777285bd4)

基于[Create React App](https://github.com/facebook/create-react-app)新博客repo，旧repo于[这里](https://github.com/visnz/blog)。

目前从域名[blog.guediao.top](https://blog.guediao.top)访问。另外可访问[团队站点](https://guediao.top)，服务器套了一层阿里云CDN。

## TODO

- [ ] 从react工程转化为静态页面还未完成，GithubPage还未能使用
- [ ] 图片使用了oss，oss部分的功能还未同步过来

## 本地化工程

```sh
npm install
# 安装依赖
node src/posts/MDDataGenerator.js src/posts/
# 构建博客文件的元数据（md文章的头部元数据）
# 元数据初次创建时，本地化测试需要生成
npm start
# 启动本地服务器
```

## 部署

docker镜像: ``registry.cn-hangzhou.aliyuncs.com/visnz-self/react-blog``

```sh
sudo docker run -dit -p 80:80 registry.cn-hangzhou.aliyuncs.com/visnz-self/react-blog:latest
```

访问[http://localhost](http://localhost)

## release notes

- 2019-09-12:
  - [Dockerfile](./Dockerfile)封装完成，交由阿里云镜像构建+托管
  - [wercker](./wercker.yml)封装完成，包含Dockerfilie同内容的构建，以及gh-page的push
  