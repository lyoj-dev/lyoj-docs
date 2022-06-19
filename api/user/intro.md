# 更新用户个人介绍

```bash
POST /api/user/intro.php
```

**参数**

| 变量名  |  类型  | 必要性 |    含义    | 备注 |
| :-----: | :----: | :----: | :--------: | :--: |
| `intro` | string |  必要  | intro 内容 |  -   |

**返回值** 

|  字段   |  类型  |     内容     | 备注 |
| :-----: | :----: | :----------: | :--: |
|  `uid`  |  num   |   用户 id    |  -   |
| `intro` | string | 用户个人介绍 |  -   |