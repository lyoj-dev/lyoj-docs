# 获取一道题目的基本信息

```bash
GET /api/problem/info.php
```

**参数**

| 变量名 | 类型 | 必要性 |  含义  | 备注 |
| :----: | :--: | :----: | :----: | :--: |
| `pid`  | num  |  必需  | 题目id |  -   |

**返回值**

|    字段     |  类型  |       内容        |        备注        |
| :---------: | :----: | :---------------: | :----------------: |
|    `id`     |  num   |      题目id       |         -          |
|   `name`    | string |     题目标题      |         -          |
|    `bg`     | string | 题目背景 markdown |         -          |
|   `input`   | string | 输入格式 markdown |         -          |
|  `output`   | string | 输出格式 markdown |         -          |
|   `cases`   | string |   样例文件 JSON   |         -          |
|   `hint`    | string | 题目提示 markdown |         -          |
|  `hidden`   |  bool  |   题目是否隐藏    |         -          |
|  `banned`   |  bool  |         0         |         -          |
| `difficult` |  num   |     题目难度      |         -          |
|  `contest`  |  num   |    所属比赛 id    |         -          |
| `accepted`  |  bool  |     通过状态      | 未登录时始终为 `0` |