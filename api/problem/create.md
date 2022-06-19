# 新建一道题目

```bash
POST /api/problem/create.php
```

**参数**

|    变量名     |  类型  | 必要性 |     含义      |               备注               |
| :-----------: | :----: | :----: | :-----------: | :------------------------------: |
|    `file`     | string |  必要  | 数据包 base64 |                -                 |
|    `title`    | string | 非必要 |   题目名称    |                -                 |
| `background`  | string | 非必要 |   题目背景    |                -                 |
| `description` | string | 非必要 |   题目描述    |                -                 |
|    `input`    | string | 非必要 |   输入描述    |                -                 |
|   `output`    | string | 非必要 |   输出描述    |                -                 |
| `input-file`  | string | 非必要 | 指定输入文件  |       `stdin` 表示标准输入       |
| `output-file` | string | 非必要 | 指定输出文件  |      `stdout` 表示标准输出       |
|    `cases`    | string | 非必要 |   样例 JSON   |                -                 |
|    `hint`     | string | 非必要 |   题目提示    |                -                 |
|    `tags`     | string | 非必要 |   题目标签    |         以 `,` 为分隔符          |
|   `contest`   |  num   | 非必要 | 题目所属比赛  |       `0` 为不属于任何比赛       |
| `difficulty`  |  num   | 非必要 |   题目难度    | 具体见 [题目难度选项](#题目难度) |

**返回值**

|     字段      |  类型  |     内容      |               备注               |
| :-----------: | :----: | :-----------: | :------------------------------: |
|     `id`      |  num   |    题目 id    |                -                 |
|    `title`    | string |   题目名称    |                -                 |
| `background`  | string |   题目背景    |                -                 |
| `description` | string |   题目描述    |                -                 |
| `input-file`  | string |   输入文件    |       `stdin` 表示标准输入       |
| `output-file` | string |   输出文件    |      `stdout` 表示标准输出       |
|    `input`    | string |   输入描述    |                -                 |
|   `output`    | string |   输出描述    |                -                 |
|    `cases`    | string | 题目样例 JSON |                -                 |
|    `tags`     | string |   题目标签    |         以 `,` 为分隔符          |
|   `contest`   |  num   | 题目所属比赛  |      `0` 表示不属于任何比赛      |
| `difficulty`  |  num   |   题目难度    | 具体见 [题目难度选项](#题目难度) |