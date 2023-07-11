import{R as e,D as l,a as t,r as n}from"./vendor.1312d991.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&l(e)})).observe(document,{childList:!0,subtree:!0})}function l(e){if(e.ep)return;e.ep=!0;const l=function(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?l.credentials="include":"anonymous"===e.crossorigin?l.credentials="omit":l.credentials="same-origin",l}(e);fetch(e.href,l)}}();const a=()=>e.createElement("div",null,e.createElement("h2",null,"个人信息"),e.createElement("div",{className:"flex"},e.createElement("p",{className:"w-250px"},e.createElement("span",null,"性别:"),"男"),e.createElement("p",null,e.createElement("span",null,"出生日期:"),"1993年01月")),e.createElement("div",{className:"flex"},e.createElement("p",{className:"w-250px"},e.createElement("span",null,"手机:"),"13601716401"),e.createElement("p",null,e.createElement("span",null,"邮箱:"),"wang0122xl@163.com"))),r=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"工作经历"),e.createElement("h3",null,"2020.04 - 至今"),e.createElement("div",{className:"flex mb-5px"},e.createElement("p",{className:"mr-100px"},e.createElement("span",null,"公司："),"新瑞鹏宠物医疗集团"),e.createElement("p",null,e.createElement("span",null,"职位："),"前端高级工程师")),e.createElement("h4",null,"工作职责"),e.createElement("section",null,e.createElement("p",null,"负责前端项目的需求分析，技术选型，代码实现及部署调优任务"),e.createElement("p",null,"负责引导集团内部开源组件库及工具库的研发、维护工作"),e.createElement("p",null,"基于阿里云函数计算提供 osssts  授权、短信验证码、邮件发送等基础服务支持"),e.createElement("p",null,"负责部分服务端开发工作(nodejs)")),e.createElement("h3",null,"2017.10 - 2020.04"),e.createElement("div",{className:"flex mb-5px"},e.createElement("p",{className:"mr-100px"},e.createElement("span",null,"公司："),"上海全程网络科技(上海)有限公司"),e.createElement("p",null,e.createElement("span",null,"职位："),"移动端工程师")),e.createElement("h4",null,"工作职责"),e.createElement("section",null,e.createElement("p",null,"独立负责全程费控PRO从 0 到 1 的开发迭代和维护工作"),e.createElement("p",null,"负责商宴通APP的迭代及维护"),e.createElement("p",null,"负责公司小程序/公众号/APP 内H5页面开发部署")),e.createElement("h3",null,"2015.07 - 2017.09"),e.createElement("div",{className:"flex mb-5px"},e.createElement("p",{className:"mr-100px"},e.createElement("span",null,"公司："),"上海比孚信息科技有限公司"),e.createElement("p",null,e.createElement("span",null,"职位："),"iOS工程师")),e.createElement("h4",null,"工作职责"),e.createElement("section",null,e.createElement("p",null,"独立完成产品 iOS 端从架构设计、框架搭建到提审上架整个流程"),e.createElement("p",null,"负责产品版本迭代维护，代码优化， 改善软件性能，提高用户体验"))),c=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"项目经验"),e.createElement("h3",null,"宠医PACS系统(React)"),e.createElement("p",{className:"mb-10px"},e.createElement("span",null,"项目描述"),"PACS系统是实验室影像系统解决方案，旨在提高院内影像流程的信息化和自动化。简化、标准化医生的影像设备操作流程，提高相关工作效率"),e.createElement("p",null,e.createElement("span",null,"项目成绩：")),e.createElement("section",null,e.createElement("p",null,"作为主程独立负责项目从0-1的技术选型调研，框架搭建，最佳实践示例及核心阅片模块的开发"),e.createElement("p",null,"基于cornerstone实现的dicom文件在线阅片、标注、保存功能"),e.createElement("p",null,"基于p5js、seadragon、p5tools实现的超大图片在线阅片、标注、裁剪截图功能"),e.createElement("p",null,"基于webworker，结合proxy特性实现的高性能多文件上传管理，支持文件/任务的暂停、失败重试、最大并发任务数、大文件分片上传等功能")),e.createElement("h3",null,"宠物LIS/LIMS系统(React)"),e.createElement("p",{className:"mb-10px"},e.createElement("span",null,"项目描述"),"宠物LIS/LIMS系统是长为数据为 新瑞鹏集团/兽丘宠物第三方检测 定制研发的宠物医院 实验室检查/外送检查 现代化、自动化和信息化解决方案。系统秉持为新瑞鹏旗下1000余家宠物医院提供便利的目标，大大提高了宠物医院实验室的工作效率。"),e.createElement("p",null,e.createElement("span",null,"项目成绩：")),e.createElement("section",null,e.createElement("p",null,"采用yarn workspance + lerna方案管理组织代码，既保证了基础组件，底层工具及发布流程的高复用性，又确保了两个项目业务逻辑互相分离"),e.createElement("p",null,"独立负责LIMS核心模块-数据录入公式自动计算结果(mathjs)，及LIS所有模块开发"),e.createElement("p",null,"为满足LIS / LIMS的个性化报告打印和下载需求，独立开发了基于 dom-to-image 和 jsPdf 的 html 打印方案（element-to-pdf），其余项目的pdf打印功能也都使用此库实现，大大加快项目开发进度")),e.createElement("h3",null,"实验室图像采集H5(React + Koa)"),e.createElement("p",{className:"mb-10px"},e.createElement("span",null,"项目描述"),"实验室图像采集H5是为公司数据部门研发的一款收集实验室显微镜结果图片的H5小工具。"),e.createElement("p",null,e.createElement("span",null,"项目成绩：")),e.createElement("section",null,e.createElement("p",null,"深度参与需求分析，为客户(数据部门)提供产品方案"),e.createElement("p",null,"独立负责项目的设计、交互、前端、后端及部署工作"),e.createElement("p",null,"项目较低复杂度下，独立开发大大降低了沟通成本，使项目得以快速落地投产")),e.createElement("h3",null,"LIMS送检小程序(Taro + React h5)"),e.createElement("p",{className:"mb-10px"},e.createElement("span",null,"项目描述"),"LIMS送检小程序是针对有送检需求的医院开发的一款送检流程线上化的小程序。包含线上下单，物流提醒，线上支付、企业月付，数据实时推送等实用功能。"),e.createElement("p",null,e.createElement("span",null,"项目成绩：")),e.createElement("section",null,e.createElement("p",null,"项目整体使用 Taro 原生小程序内嵌React h5 方案。其中支付、在线查看报告使用原生页面，其余业务均采用h5页面加快研发速度")),e.createElement("h3",null,"商宴通(iOS + react-native)"),e.createElement("p",{className:"mb-10px"},e.createElement("span",null,"项目描述"),"商宴通致力于为企业商务宴请及合规管控提供一站式解决方案。已有强生、罗氏、辉瑞等数十家知名企业选择商宴通管理企业员工的宴请会餐流程。"),e.createElement("p",null,e.createElement("span",null,"项目成绩：")),e.createElement("section",null,e.createElement("p",null,"整理代码并抽取通用组件制作pod仓库，为全程费控PRO的开发提供了便捷"),e.createElement("p",null,"独立完成项目 weex 代码的版本控制方案，并实现对应的可视化发布工具，并负责方案中 iOS和Web 端的代码编写"),e.createElement("p",null,"主导完成 APP 跨平台方案从 weex 迁移至 react-native，统一公司内混合 APP 项目技术栈"),e.createElement("p",null,"独立实现 react-native 的拆包、预加载及增量热更能力，其中预加载和增量热更功能已经过线上环境检验可大大降低白屏时间和更新流量。并配合 gitlab-ci 实现代码的半自动发布和版本控制"),e.createElement("p",null,"基于puppeteer能力，向后台补充近千万家餐厅，商宴通 APP 基于这些数据成功开通当面付功能"))),m=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"专业技能"),e.createElement("section",null,e.createElement("p",null,"熟练掌握 html、javascript/typescript、css。可独立负责前端项目开发(WEB, H5, 小程序)"),e.createElement("p",null,"熟练掌握 React、Vue 等常用前端框架, 与其相应的配套开发库"),e.createElement("p",null,"熟练使用前端开发构建工具 Webpack/Vite, 并了解其常用优化方案 "),e.createElement("p",null,"熟练掌握 Objective-C, 擅长 H5, react-native 等混合App方案，可独立开发上线功能完善的混合App。"),e.createElement("p",null,"熟练使用Nodejs"),e.createElement("p",null,"熟练使用Linux系统，熟悉Nginx常用配置"),e.createElement("p",null,"熟练掌握CI/CD相关技能"),e.createElement("p",null,"熟练使用Git管理代码"))),s=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"教育背景"),e.createElement("div",{className:"flex"},e.createElement("p",{className:"mr-100px"},e.createElement("span",{className:"mr-20px"},"2011.9 – 2015.6"),"山东工商学院"),e.createElement("p",null,"电子信息工程")),e.createElement("p",null,"CET-6")),E=()=>e.createElement(e.Fragment,null,e.createElement("h2",null,"自我评价"),e.createElement("section",null,e.createElement("p",null,"native, web, hybrid 均可独立完成项目开发"),e.createElement("p",null,"学习、抗压能力极强"),e.createElement("p",null,"轻度代码洁癖，对代码质量有严格的要求"))),u=l=>e.createElement("div",{className:(l.solid?"seperator solid":"seperator")+` ${l.className}`});function p(){const t=async()=>{const e=new l;return await e.transformToPdf({element:document.getElementById("resume"),padding:[0,10,5,10],lastElementAsFooter:!1,lastElementOnBottom:!1,renderPageFooter:(e,l)=>{e.setTextColor("#111").setFontSize(8).text(`第${l}页`,e.internal.pageSize.getWidth()-17,e.internal.pageSize.getHeight()-1)}})};return e.createElement("div",{id:"print-container"},e.createElement("div",{id:"resume",className:"print-layer a4"},e.createElement("div",{className:"mt-10px mb-10px"},e.createElement("h1",{className:"text-center"},"王晓龙",e.createElement("span",{className:"text-[0.75em]"}," -- 前端高级工程师")),e.createElement(u,{solid:!0,className:"!mt-[-10px]"})),e.createElement(a,null),e.createElement(u,null),e.createElement(r,null),e.createElement(u,null),e.createElement(c,null),e.createElement(u,null),e.createElement(m,null),e.createElement(u,null),e.createElement(s,null),e.createElement(u,null),e.createElement(E,null)),e.createElement("div",{className:"mt-40px flex space-x-50px justify-center mb-10vh"},e.createElement("button",{onClick:async()=>{(await t()).pdf.save("王晓龙-13601716401.pdf")}},"下载"),e.createElement("button",{onClick:async()=>{(await t()).doPrint()}},"打印")))}t.render(e.createElement(n.exports.StrictMode,null,e.createElement(p,null)),document.getElementById("root"));
