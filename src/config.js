
const config={
    blog:{
        avatar:require("./assets/img/avatar/mini_avatar.jpg"),
        title:"The While Parties",
        background:require("./assets/img/bg/bg.jpg"),
        header:{
            nav:[
                {value:'Blog',href: '#'},
                {value:'CDN',href: '#'},
                {value:'ToolBox',href: '#'},
                {value:'About',href: '#'}
            ],
        },
        contact:{
            type:"img",//icon or img, default is icon
            data:[
            {value:"tg",icon:"tg",src:require("./assets/img/icon/tg.png"),href:"/"},
            {value:"email",icon:"mail",src:require("./assets/img/icon/email.png"),href:"/"},
            {value:"github",icon:"github",src:require("./assets/img/icon/github.png"),href:"/"},
            {value:"twitter",icon:"twitter",src:require("./assets/img/icon/twitter.png"),href:"/"},
            {value:"wechat",icon:"wechat",src:require("./assets/img/icon/wechat.png"),href:"/"},
        ]},
        coverTitle:{
            carousel:[
                {value:"tg",src:require("./assets/img/post/a1.jpg"),href:"/"},
                {value:"tg",src:require("./assets/img/post/a2.jpg"),href:"/"},
                {value:"tg",src:require("./assets/img/post/a3.jpg"),href:"/"},
            ],
            tag:"#Pin to Top",
            title:"About me",
            date:"June 13, 2019",
            secondText:"“am Online, Hello World”"
        },
        menu:[
            {value:"Home",icon:"home",href:"/",count:"0"},
            {value:"Archive",icon:"inbox",href:"/",count:"12"},
            {value:"Tags",icon:"tags",href:"/",count:"3"},
            {value:"categories",icon:"appstore",href:"/",count:"4"},
            {value:"About",icon:"user",href:"/",count:""},
        ]
    },
    color:{
        primaryColor: "#1890ff",
        secondColor: "#52c41a",
        white:"#d9d9d9"
    }
}

export default config;