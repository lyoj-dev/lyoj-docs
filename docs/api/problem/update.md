# 修改一道题目

```bash
POST /api/problem/update.php
```

**参数**

|        变量名         |  类型  | 必要性 |        含义         |                             备注                             |
| :-------------------: | :----: | :----: | :-----------------: | :----------------------------------------------------------: |
|         `pid`         |  num   |  必要  |       题目 id       |                              -                               |
|        `title`        | string | 非必要 |      题目名称       |                        为空表示不修改                        |
|     `background`      | string | 非必要 |      题目背景       |                        为空表示不修改                        |
|     `description`     | string | 非必要 |      题目描述       |                        为空表示不修改                        |
|        `input`        | string | 非必要 |      输入描述       |                        为空表示不修改                        |
|       `output`        | string | 非必要 |      输出描述       |                        为空表示不修改                        |
|     `input-file`      | string | 非必要 |    指定输入文件     |             为空表示不修改，`stdin` 表示标准输入             |
|     `output_file`     | string | 非必要 |    指定输出文件     |            为空表示不修改，`stdout` 表示标准输出             |
|        `cases`        | string | 非必要 |    题目样例 JSON    |                        为空表示不修改                        |
|        `hint`         | string | 非必要 |      题目提示       |                        为空表示不修改                        |
|        `data`         | string | 非必要 | 题目测试点配置 JSON | 该 JSON 包含四个数组，分别为 `time`,`memory`,`score`,`subtask`，要求每个数组的大小必须与数组组数相同，否则会报错 |
| `subtask_depenedence` | string | 非必要 |   题目子任务依赖    |                              -                               |
|     `difficulty`      |  num   | 非必要 |      题目难度       |               具体见 [题目难度选项](#题目难度)               |
|       `contest`       |  num   | 非必要 |    题目所属比赛     |                    `0` 表示不属于任何比赛                    |
|        `tags`         | string | 非必要 |      题目标签       |                       以 `,` 为分隔符                        |
|      `spj_type`       |  num   | 非必要 |      SPJ 类型       |                       `0` 为自定义 SPJ                       |
|     `spj_source`      | string | 非必要 |    SPJ 源文件名     |                 当 `spj_type` 为 `0` 才有效                  |
|     `spj_compile`     | string | 非必要 |    SPJ 编译参数     |                 当 `spj_type` 为 `0` 才有效                  |
|      `spj_name`       | string | 非必要 |  SPJ 可执行文件名   |                 当 `spj_type` 为 `0` 才有效                  |
|      `spj_param`      | string | 非必要 |    SPJ 执行参数     |                              -                               |

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
|    `hint`     | string |   题目提示    |                -                 |
|    `tags`     | string |   题目标签    |         以 `,` 为分隔符          |
|   `contest`   |  num   | 题目所属比赛  |      `0` 表示不属于任何比赛      |
| `difficulty`  |  num   |   题目难度    | 具体见 [题目难度选项](#题目难度) |