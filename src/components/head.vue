<template>
    <div class="head">
        <div class="head-pic">
            <img src="../../static/img/school1.png" alt class="head-pic-top" />
            <svg class="icons" aria-hidden="true">
                <use xlink:href="#iconjisuanjikexue--copy" />
            </svg>
            <span class="head-pic-text">计科教研室</span>
        </div>
        <img src="../../static/img/xiaoxun.png" alt class="head-center" />
        <div class="head-navbar">
            <nav class="navbar navbar-default m-navbar">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav m-ul">
                            <li class="m-li" @click="goto(0)">
                                <a class="nav-item">首页</a>
                            </li>
                            <li class="m-li" @click="goto(1)">
                                <a>专业活动</a>
                            </li>
                            <li class="m-li" @click="goto(2)">
                                <a class="nav-item">思维之声</a>
                            </li>
                            <li class="m-li" @click="goto(3)">
                                <a>教学项目</a>
                            </li>
                            <li class="m-li" @click="goto(4)">
                                <a class="nav-item">工作计划</a>
                            </li>
                            <li class="m-li" @click="goto(5)">
                                <a>规章制度</a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
            </nav>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "allScroller",
    data() {
        return {};
    },
    components: {},
    watch: {
        $route(to, from) {
            this.changeRouterStyle();
        }
    },
    methods: {
        changeRouterStyle() {//路由发生变化或页面刷新，导航样式控制
            var doms = document.getElementsByClassName("m-ul")[0].children,
                name = "/" + this.$route.path.split("/")[1],
                len = doms.length;
            for (let i = 0; i < len; i++) {
                doms[i].setAttribute("class", "m-li");
            }
            switch (name) {
                case "/home":
                    doms[0].setAttribute("class", "m-active");
                    break;
                    case "/personPage":
                    doms[0].setAttribute("class", "m-active");
                    break;
                case "/majorActive":
                    doms[1].setAttribute("class", "m-active");
                    break;
                case "/sVoice":
                    doms[2].setAttribute("class", "m-active");
                    break;
                case "/teacherProject":
                    doms[3].setAttribute("class", "m-active");
                    break;
                case "/workPlan":
                    doms[4].setAttribute("class", "m-active");
                    break;
                case "/workRules":
                    doms[5].setAttribute("class", "m-active");
                    break;

                default:
                    break;
            }
        },
        goto(num) {//点击导航栏页面跳转
            var doms = document.getElementsByClassName("m-ul")[0].children,
                name = this.$route.path,
                len = doms.length;
            localStorage.setItem("name", name);
            for (let i = 0; i < len; i++) {
                doms[i].setAttribute("class", "m-li");
            }
            doms[num].setAttribute("class", "m-active");
            switch (num) {
                case 0:
                    this.$router.push("/home");
                    break;
                case 1:
                    this.$router.push({ path: "/majorActive",query:{code:0, listNum:"list1"} });
                    break;
                case 2:
                    this.$router.push({ path: "/sVoice",query:{code:0} });
                    break;
                case 3:
                    this.$router.push({ path: "/teacherProject",query:{code:0, listNum:"list1"} });
                    break;
                case 4:
                    this.$router.push({ path: "/workPlan",query:{code:0, listNum:"list1"} });
                    break;
                case 5:
                    this.$router.push({ path: "/workRules",query:{code:0,listNum:"list1"} });
                    break;

                default:
                    break;
            }
        },
       
    },
    mounted() {
        this.changeRouterStyle();
    }
};
</script>

<style scoped>
.head {
    background: #00714d;
    width: 100%;
    height: 100px;
    position: relative;
}
.head .head-center {
    height: 100px;
    width: 800px;
    vertical-align: -20px;
    margin-left: 100px;
}
.head .head-pic {
    height: 100px;
    width: 200px;
    background: #679f48;
    margin-left: 10px;
    border-radius: 10px;
    text-align: center;
    display: inline-block;
}
.head .head-pic .icons {
    display: none;
}
.head .head-pic .head-pic-top {
    height: 50px;
    width: 180px;
}
.head .title {
    color: #000;
    font-family: STXingkai;
    display: inline-block;
    position: absolute;
    left: 500px;
    font-size: 20px;
    top: 20px;
}
.head .head-pic .head-pic-text {
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
}
.head .head-navbar {
    position: absolute;
    right: 50px;
    top: 50px;
}
.head .head-navbar .m-navbar {
    margin: 0;
    background: transparent;
    border: 0;
}
.head-navbar .navbar-default .navbar-nav > li > a {
    color: #fff;
    cursor: pointer;
}

.head-navbar .navbar-default .navbar-nav > li:hover {
    background: #679f48;
}
.head-navbar .navbar-default .navbar-nav > .m-active {
    background: #679f48;
}
.m-ul {
    position: absolute;
    right: 20px;
    z-index: 9999;
    width: 500px;
    /* text-align: right */
}

@media screen and (max-width: 768px) {
    .m-ul {
        position: absolute;
        right: 0;
        z-index: 9999;
        width: 90px;
        background: #fff;
        color: #000;
        /* text-align: right */
    }
    .head-navbar .navbar-default .navbar-nav > li > a {
        color: #000;
    }
}

@media screen and (max-width: 900px) {
    .head {
        background: #00714d;
        width: 100%;
        height: 50px;
        position: relative;
    }
    .head .head-pic {
        height: 50px;
        width: 150px;
        background: #679f48;
        margin-left: 10px;
        border-radius: 10px;
        text-align: center;
        position: absolute;
    }
    .head .head-pic .icons {
        display: inline-block;
        height: 30px;
        width: 30px;
        margin-left: 10px;
        vertical-align: -9px;
        margin: 0;
    }
    .head .head-pic .head-pic-top {
        display: none;
    }
    .head .head-pic .head-pic-text {
        display: inline-block;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 18px;
    }
    .head .head-navbar {
        position: absolute;
        right: 10px;
        top: 5px;
    }
}

@media screen and (max-width: 1440px) {
    .head-center {
        display: none;
    }
    /* .head .head-pic {

    background: #679f48;
    margin-left: 100px;
    border-radius: 10px;
    text-align: center;
    display: inline-block;
    position: absolute
} */
}
@media screen and (max-width: 248px) {
    .head-center {
        display: none;
    }
    .head .head-pic {
        display: none;
    }
}
</style>