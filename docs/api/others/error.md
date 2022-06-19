# 公共错误码

| 错误代码 |              `message` 消息               |             含义              |
| :------: | :---------------------------------------: | :---------------------------: |
|  `-101`  |               `Not Login!`                |    请求中缺少正确的登录态     |
|  `-113`  |         `Email 'xxx' not verify!`         |     邮箱 `xxx` 未经过验证     |
|  `-400`  |           `Invalid ZIP Package`           |        无效的 ZIP 文件        |
|  `-400`  |          `Failed to send email!`          |         邮件发送失败          |
|  `-400`  |      `Failed to query database: xxx`      | 数据库查询失败，错误信息: xxx |
|  `-400`  |     `Failed to execute database: xxx`     | 数据库执行失败，错误信息: xxx |
|  `-403`  |            `Permission denied`            |           没有权限            |
|  `-404`  |        `Contest id xxx not found!`        |  无法找到 id 为 `xxx` 的比赛  |
|  `-404`  |        `Cannot found param "xxx"!`        |     请求中缺少参数 `xxx`      |
|  `-500`  |              `System Error!`              |           系统错误            |
|  `-500`  |       `Failed to connect database`        |        无法连接数据库         |
|  `-626`  |         `Connot found user "xxx"`         |  无法找到邮箱为 `xxx` 的用户  |
|  `-629`  |   `Username or password is incorrect!`    |       用户名或密码错误        |
|  `-652`  |       `Email 'xxx' have been used!`       |      邮箱 `xxx` 已被使用      |
|  `-652`  |     `Username 'xxx' have been used!`      |     用户名 `xxx` 已被使用     |
|  `-658`  | `Salt value timed out! Please try again!` |    盐值已过期，请重新获取     |