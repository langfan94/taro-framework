项目结构
```
├── dist                   编译结果目录
    ├── swan               百度小程序打包文件
    ├── h5                 h5打包文件
    ├── weapp              微信小程序打包文件
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   ├── config.js          环境变量配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index 页面目录
|   |   |   ├── index.js   index 页面逻辑
|   |   |   └── index.css  index 页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```

项目启动
    yarn install 安装项目依赖

    dev
        微信小程序
        yarn run dev:weapp

        百度小程序
        yarn run dev:swan

        h5
        yarn run dev:h5
    
    build
        微信小程序
        yarn run build:weapp
        打开微信小程序开发者工具根目录进行调试

        百度小程序
        yarn run build:swan
        打开百度小程序开发者工具 /dist/swan 进行调试

        h5
        yarn run build:h5

gitlab项目地址
> http://git.bnq.com.cn:9999/bnq-react-component/taro-framework

