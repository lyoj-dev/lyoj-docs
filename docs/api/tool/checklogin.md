# 核验登录态

```bash
GET /api/tool/checklogin.php
```

**参数**

本 API 请求参数为空

**返回值**

|        字段         |  类型  |                   内容                   |                  备注                  |
| :-----------------: | :----: | :--------------------------------------: | :------------------------------------: |
|    `DedeUserID`     | string |        从 COOKIE 获取到的用户 id         |                   -                    |
| `DedeUserID__ckMd5` | string |     从 COOKIE 获取到的用户 id 的 md5     |                   -                    |
|    `CSRF_TOKEN`     | string |   从 COOKIE 获取到的 CSRF 身份验证代码   |                   -                    |
|     `SESSDATA`      | string | 从 COOKIE 获取到的 SESSDATA 身份验证代码 |                   -                    |
|       `login`       |  bool  |                 核验结果                 | `0` 为无效的登录态，`1` 为有效的登录态 |
|       `user`        |  obj   |                 用户信息                 |      当 `login` 为 `0` 时无此字段      |

`user` 对象: 

|     字段     |  类型  |        内容        | 备注 |
| :----------: | :----: | :----------------: | :--: |
|     `id`     |  num   |      用户 id       |  -   |
|    `name`    | string |       用户名       |  -   |
|   `title`    | string |                    |  -   |
| `permission` | string |        权限        |  -   |
|   `email`    | string |      用户邮箱      |  -   |
|   `verify`   |  bool  |  是否通过邮箱验证  |  -   |
|     `rp`     |  num   |        rp值        |  -   |
|   `rptime`   |  num   | 上次更新 rp 时间戳 |  -   |