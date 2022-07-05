ci4-init.md

## 安装
```
composer create-project codeigniter4/appstarter project-root
```
`project-root` 项目所在文件夹 不填就是创建appstarter
`--no-dev` 这个参数将让项目不安装phpunit

### .env
修改了 env 文件的值，要记得修改为 .env 文件这样才能识别出里面的值


### 本地开发主机
`php spark serve`
 --host=example.dev
 --port=8081
 --php=/usr/bin/php7.6.5.4

