# 更新用户空间头图

```bash
POST /api/user/background.php
```

**参数**

| 变量名 |  类型  | 必要性 |    含义     | 备注 |
| :----: | :----: | :----: | :---------: | :--: |
| `data` | string |  必要  | 文件 base64 |  -   |

**返回值**

| 字段  |  类型  |   内容   | 备注 |
| :---: | :----: | :------: | :--: |
| `uid` |  num   | 用户 id  |  -   |
| `url` | string | 文件路径 |  -   |