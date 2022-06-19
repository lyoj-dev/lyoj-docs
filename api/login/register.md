# 注册账号

```bash
POST /api/user/register.php
```

**参数**

|  变量名  |  类型  | 必要性 |       含义       | 备注 |
| :------: | :----: | :----: | :--------------: | :--: |
|  `name`  | string |  必要  |      用户名      |  -   |
| `email`  | string |  必要  |     用户邮箱     |  -   |
| `passwd` | string |  必要  | 加密后的用户密码 |  -   |

**返回值**

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