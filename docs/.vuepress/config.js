module.exports = {
    title: 'LYOJ Document Center',
    description : 'Document Website for LittleYang OnlineJudge',
    markdown: {
        lineNumbers: true
    },head: [
        ['link',{ rel:'icon',href:'/logo.png'}]
    ],
    themeConfig: {
        nav: [{
            text: '使用指南',
            link: '/guide/'
        },{
            text: '接口文档',
            link: '/api/'
        }],
        repo: 'lyoj-dev/lyoj-docs',
        docsBranch: 'main/docs',
        sidebar: {
            '/api/': [
                {
                    title: "其他",
                    children: [
                        ['/api/others/error','公共错误码'],
                        ['/api/others/lang','语言代码'],
                        ['/api/others/difficulty','题目难度']
                    ]
                },{
                    title: "题目相关 API",
                    children: [
                        ['/api/problem/info.md','获取一道题目的基本信息'],
                        ['/api/problem/config.md','获取题目配置内容'],
                        ['/api/problem/addition.md','下载附加文件'],
                        ['/api/problem/create.md','新建一道题目'],
                        ['/api/problem/delete.md','删除题目'],
                        ['/api/problem/hidden.md','隐藏/显示一道题目'],
                        ['/api/problem/rejudge.md','重测整题'],
                        ['/api/problem/update.md','修改一道题目'],
                        ['/api/problem/upload.md','重传题目数据'],
                        ['/api/problem/download.md','下载题目数据'],
                        ['/api/problem/upload2.md','上传题目附加文件'],
                        ['/api/problem/delete2.md','删除题目附加文件']
                    ]
                },{
                    title: "提交记录相关 API",
                    children: [
                        ['/api/status/info.md','获取提交记录信息'],
                        ['/api/status/status.md','获取评测状态 (不含各测试点状态)'],
                        ['/api/status/result.md','获取评测状态 (含各评测点状态)'],
                        ['/api/status/rejudge.md','重测一次提交']
                    ]
                },{
                    title: "比赛相关 API",
                    children: [
                        ['/api/contest/info.md','获取一场比赛信息'],
                        ['/api/contest/signup.md','注册一场比赛'],
                        ['/api/contest/rank.md','获取比赛排名']
                    ]
                },{
                    title: "用户相关 API",
                    children: [
                        ['/api/user/intro.md','更新用户个人介绍'],
                        ['/api/user/header.md','更新用户头像'],
                        ['/api/user/background.md','更新用户空间头图'],
                    ]
                },{
                    title: "登录相关 API",
                    children: [
                        ['/api/login/public.md','获取公钥'],
                        ['/api/login/salt.md','获取盐值'],
                        ['/api/login/password.md','密码登录'],
                        ['/api/login/register.md','注册账号']
                    ]
                },{
                    title: "后台管理 API",
                    children: [

                    ]
                },{
                    title: "工具类 API",
                    children: [
                        ['/api/tool/checklogin.md','核验登录态'],
                        ['/api/tool/crypt.md','SHA256 加密'],
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated(UTC)',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}