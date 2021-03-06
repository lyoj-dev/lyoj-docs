# 获取题目配置内容

```bash
GET /api/problem/config.php
```

**参数**

| 变量名 | 类型 | 必要性 |  含义  | 备注 |
| :----: | :--: | :----: | :----: | :--: |
| `pid`  | num  |  必需  | 题目id |  -   |

**返回值**

|       字段       |  类型  |        内容        |         备注         |
| :--------------: | :----: | :----------------: | :------------------: |
|     `input`      | string |     输入文件名     | `stdin`表示标准输入  |
|     `output`     | string |     输出文件名     | `stdout`表示标准输出 |
|      `spj`       |  obj   | Special Judge 信息 |          -           |
|      `data`      | array  |     数据点信息     |          -           |
| `subtask_depend` | array  |   子任务依赖信息   |          -           |

`spj` 字段: 

|     字段      |  类型  |        内容        |                        备注                        |
| :-----------: | :----: | :----------------: | :------------------------------------------------: |
|    `type`     |  num   | Special Judge 类型 |                 `0` 表示自定义 SPJ                 |
|   `source`    | string |    SPJ 源文件名    |             当 `type` 为 `0` 时才有效              |
| `compile_cmd` | string |    SPJ 编译指令    |             当 `type` 为 `0` 时才有效              |
|  `exec_path`  | string |  SPJ 可执行文件名  |             当 `type` 为 `0` 时才有效              |
|  `exec_name`  | string |  SPJ 可执行文件名  | 与 `exec_path` 的值相等，当 `type` 为 `0` 时才有效 |
| `exec_param`  | string |  SPJ 额外运行参数  |              无论 `type` 为多少都有效              |

`data` 数组:

|  项  | 类型 |     内容      | 备注 |
| :--: | :--: | :-----------: | :--: |
| `0`  | obj  |  数据点 `#1`  |  -   |
| `n`  | obj  | 数据点 `#n+1` |  -   |
| ...  | obj  |      ...      | ...  |

`data` 数组中的对象: 

|   字段    |  类型  |      内容      | 备注 |
| :-------: | :----: | :------------: | :--: |
|  `input`  | string |    输入文件    |  -   |
| `output`  | string |    输出文件    |  -   |
|  `score`  |  num   |   测试点分数   |  -   |
|  `time`   |  num   | 测试点时间限制 |  -   |
| `memory`  |  num   | 测试点空间限制 |  -   |
| `subtask` |  num   |   子任务编号   |  -   |

`subtask_depend` 数组: 

|  项  | 类型  |        内容        | 备注 |
| :--: | :---: | :----------------: | :--: |
| `0`  | array |  子任务 `#1` 依赖  |  -   |
| `n`  | array | 子任务 `#n+1` 依赖 |  -   |
| ...  | array |        ...         | ...  |

`subtask_depend` 中的数组:

|  项  | 类型 |          内容           | 备注 |
| :--: | :--: | :---------------------: | :--: |
| `0`  | num  |  子任务 `#i` 依赖 `#1`  |  -   |
| `n`  | num  | 子任务 `#i` 依赖 `#n+1` |  -   |
| ...  | num  |           ...           | ...  |