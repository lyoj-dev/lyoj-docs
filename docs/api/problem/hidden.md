# 隐藏/显示一道题目

```bash
POST /api/problem/hidden.php
```

**参数**

| 变量名 | 类型 | 必要性 |  含义   | 备注 |
| :----: | :--: | :----: | :-----: | :--: |
| `pid`  | num  |  必要  | 题目 id |  -   |

**返回值**

|   字段   | 类型 |     内容     |          备注          |
| :------: | :--: | :----------: | :--------------------: |
|   `id`   | num  |   题目 id    |           -            |
| `hidden` | bool | 当前题目状态 | `0` 为显示，`1` 为隐藏 |