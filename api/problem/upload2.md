# 上传题目附加文件

```bash
POST /api/problem/upload2.php
```

**参数**

| 变量名 |  类型  | 必要性 |    含义     | 备注 |
| :----: | :----: | :----: | :---------: | :--: |
| `file` | string |  必要  | 文件 base64 |  -   |
| `pid`  |  num   |  必要  |   题目 id   |  -   |
| `name` | string |  必要  |   文件名    |  -   |

**返回值**

|      字段       |  类型  |     内容     | 备注 |
| :-------------: | :----: | :----------: | :--: |
|      `id`       |  num   |   题目 id    |  -   |
| `absolute_path` | string | 文件绝对路径 |  -   |
| `download_path` | string | 文件下载路径 |  -   |