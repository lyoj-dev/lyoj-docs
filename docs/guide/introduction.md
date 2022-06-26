# 项目介绍

LYOJ 是一个信息学在线测评系统，全名为 LittleYang OnlineJudge。

受现在市面上大多数的 OnlineJudge 评测系统的启发，并针对他们无法在 arm64 系统上部署的问题，诞生出了这一款支持运行在 arm64 系统上运行的 OnlineJudge 系统。

::: warning 
目前本项目仅由 [@LittleYang0531](https://github.com/LittleYang0531) 一人进行维护，且由于高中文化课学业繁重，信息竞赛 (OI) 方面也要花时间去钻研，所以每次更新的时间并不会太频繁 (可能1-2个月一次)，还望各位用户见谅
:::

::: danger
本项目并未完工，请谨慎选择部署，预计将在今年年底才会发布第一个发行版
:::

## 功能对比

此处对比了 LYOJ 与其他主流 OJ 系统的功能。（只进行在不修改源代码情况下的对比）

```
+：支持
=：部分支持
?: 未知
-：不支持
(): 在开发进程中
```

|功能|LYOJ|Hydro|HustOJ|SYZOJ|QDUOJ|Vijos|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|安装|手动搭建(一键脚本)|一键脚本|一键脚本|手动搭建|docker|docker|
|arm64支持|+|-|+|-|-|-|
|数据库|MySQL/MariaDB|MongoDB|MySQL|MariaDB|Postgres|MongoDB|
|测试数据存储|本地|本地/S3|本地|本地|本地|数据库|
|多评测机|=(+)|+|=|+|+|+|
|测试数据同步|全量同步|按需抓取|全量同步|全量同步|全量同步|按需抓取|
|比赛|ACM/OI/IOI|ACM/OI/IOI|ACM/OI|ACM/OI/IOI|ACM/OI/IOI|ACM/OI|
|修改编译命令/添加语言|+|+|-|-|-|+|
|权限系统|-(+)|+|+|-|-|+|
|Hack|-|-|-|-|-|-|
|SpecialJudge|+|+|+|+|-|-|
|Subtask|+|+|+|+|-|-|
|交互题|-(+)|+|-|+|-|-|
|题目导入|-|fps/syzoj/qduoj/hydro|fps|syzoj|fps|-|
|后端语言|PHP/C++|NodeJS|PHP|NodeJS|Python|Python|
|前端框架|-|React|BootStrap|Semantic UI|Vue|React|

## 项目截图

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/1.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/2.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/3.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/4.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/5.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/6.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/7.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/8.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/9.jpg)

![](https://fastly.jsdelivr.net/gh/LittleYang0531/image/lyoj/10.jpg)

## 现在开始

点击 [快速部署](./quick) ，开始部署您的 OJ 吧！