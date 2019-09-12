
const config={
    blog:{
        path:"",
        avatar:require("./assets/img/avatar/mini_avatar.jpg"),
        title:"The While Parties",
        background:require("./assets/img/bg/bg.jpg"),
        header:{
            nav:[
                {value:'Blog',href: '/'},
                {value:'CDN',href: '/CDN'},
                {value:'ToolBox',href: '/ToolBox'},
                {value:'About',href: '/posts/about'}
            ],
        },
        contact:{
            type:"img",//icon or img, default is icon
            data:[
            {value:"tg",icon:"tg",src:require("./assets/img/icon/tg.png"),href:"https://t.me/visnZ"},
            {value:"email",icon:"mail",src:require("./assets/img/icon/email.png"),href:"mailto:visn0518@gmail.com"},
            {value:"github",icon:"github",src:require("./assets/img/icon/github.png"),href:"https://github.com/visnz"},
            {value:"twitter",icon:"twitter",src:require("./assets/img/icon/twitter.png"),href:"https://twitter.com/ZeoVisn"},
            {value:"wechat",icon:"wechat",src:require("./assets/img/icon/wechat.png"),href:"https://visnonline.oss-cn-shenzhen.aliyuncs.com/pics/wechat.me.jpg"},
        ]},
    },
    color:{
        primaryColor: "#1890ff",
        secondColor: "#52c41a",
        white:"#d9d9d9"
    }
}

export default config;