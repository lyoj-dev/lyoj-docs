# 获取评测状态 (含各评测点状态)

```bash
GET /api/status/result.php
```

**参数**

| 变量名 | 类型 | 必要性 |  含义   | 备注 |
| :----: | :--: | :----: | :-----: | :--: |
|  `id`  | num  |  必要  | 评测 id |  -   |

**返回值**

|      字段      |  类型  |     内容     | 备注 |
| :------------: | :----: | :----------: | :--: |
|      `id`      |  num   |   评测 id    |  -   |
| `compile_info` | string |   编译信息   |  -   |
|     `info`     | array  | 各评测点信息 |  -   |
|    `memory`    |  num   |  总内存信息  |  -   |
|     `time`     |  num   |  总时间信息  |  -   |
|    `result`    | string | 最终评测状态 |  -   |

`info` 数组:

|  项  | 类型 |     内容      | 备注 |
| :--: | :--: | :-----------: | :--: |
| `0`  | obj  |  数据点 `#1`  |  -   |
| `n`  | obj  | 数据点 `#n+1` |  -   |
| ...  | obj  |      ...      | ...  |

`info` 数组中的对象: 

|   字段   |  类型  |      内容      | 备注 |
| :------: | :----: | :------------: | :--: |
| `state`  | string |   评测点状态   |  -   |
|  `info`  | string | 评测点测试信息 |  -   |
| `memory` |  num   | 评测点内存使用 |  -   |
|  `time`  |  num   | 评测点时间使用 |  -   |
| `score`  |  num   |   评测点得分   |  -   |