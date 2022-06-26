(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(t,e,a){"use strict";a.r(e);var v=a(65),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lyoj-api-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lyoj-api-文档"}},[t._v("#")]),t._v(" LYOJ API 文档")]),t._v(" "),a("p",[t._v("本站所有 API 请求结果均被包裹在 "),a("code",[t._v("<pre style='word-wrap: break-word;white-space: pre-wrap;'></pre>")]),t._v(" 标签里面，使用脚本处理时请使用正则表达式将正文两边的 tag 去掉。")]),t._v(" "),a("p",[t._v("本站所有 API 请求网址前均省略了 "),a("code",[t._v("http://172.25.50.253")]),t._v("，使用脚本请求时要记得在网址前加上刚刚那一串地址。")]),t._v(" "),a("p",[t._v("例如: 请求 pid=22 的题目信息，使用指令 "),a("code",[t._v("curl http://172.25.50.253/api/problem/info.php?pid=22")]),t._v(" 即可获取到 pid=22 的题目信息的 JSON 数据格式，用正则表达式提取一下正文内容就可以使用 JSON 解析了。")]),t._v(" "),a("p",[t._v("所有 API 通用返回格式:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("code")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("num")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("0")]),t._v(" 表示成功")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("message")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("错误信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求成功时该项为空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("data")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("obj")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求数据主体")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求失败时无此字段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ttl")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("num")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),a("p",[t._v("下面所有 API 均只介绍 "),a("code",[t._v("data")]),t._v(" 主体内的内容。")])])}),[],!1,null,null,null);e.default=_.exports}}]);