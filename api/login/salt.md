# 获取盐值

```bash
GET /api/user/salt.php
```

**参数**

| 变量名  |  类型  | 必要性 |   含义   | 备注 |
| :-----: | :----: | :----: | :------: | :--: |
| `email` | string |  必要  | 用户邮箱 |  -   |


**返回值**

|  字段  |  类型  |   内容   | 备注 |
| :----: | :----: | :------: | :--: |
| `uid`  |  num   | 用户 id  |  -   |
| `salt` | string | 用户盐值 |  -   |