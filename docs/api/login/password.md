# 密码登录

```bash
POST /api/login/password.php
```

**参数**

|   变量名   |  类型  | 必要性 |       含义       | 备注 |
| :--------: | :----: | :----: | :--------------: | :--: |
|  `email`   | string |  必要  |     用户邮箱     |  -   |
| `password` | string |  必要  | 加密后的用户密码 |  -   |

**返回值**

|        字段         |  类型  |       内容        | 备注 |
| :-----------------: | :----: | :---------------: | :--: |
|       `user`        |  obj   |     用户信息      |  -   |
|    `DedeUserID`     | string |      用户 id      |  -   |
| `DedeUserID__ckMd5` | string | 用户 id 的 md5 值 |  -   |
|    `CSRF_TOKEN`     | string |   身份验证代码    |  -   |
|     `SESSDATA`      | string |   身份验证代码    |  -   |

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