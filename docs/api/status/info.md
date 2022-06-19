# 获取提交记录信息

```bash
GET /api/status/info.php
```

**参数**

| 变量名 | 类型 | 必要性 |  含义   | 备注 |
| :----: | :--: | :----: | :-----: | :--: |
|  `id`  | num  |  必要  | 评测 id |  -   |

**返回值**

|   字段    |  类型  |     内容      |              备注              |
| :-------: | :----: | :-----------: | :----------------------------: |
|   `id`    |  num   |    评测 id    |               -                |
|   `uid`   |  num   |  提交用户 id  |               -                |
|   `pid`   |  num   |   提交题目    |               -                |
|  `lang`   |  num   |   提交语言    |               -                |
|  `code`   | string |   提交代码    |               -                |
| `result`  | string | 评测结果 JSON |               -                |
|  `time`   |  num   |   提交时间    |               -                |
| `status`  | string |   评测状态    | 若评测完成直接返回评测最终状态 |
| `ideinfo` | string |     NULL      |               -                |
| `judged`  |  bool  | 是否评测完成  |               -                |
| `contest` |  num   | 提交所属比赛  |               -                |