<!-- 专业活动 -->
<template>
    <div v-if="data !== ''">
        <div class="container">
            <div class="row" style="padding:5px;display: inline-flex;width:100%">
                <div class="m-nav">
                    <ul class="m-nav-ul">
                        <li class="title">规章制度</li>
                        <ul class="m-nav ac-ul" v-if="data !== ''" v-for="(item,index) in data.nav">
                            <li
                                :class="{'ac-active' : isSelect === index}"
                                @click="clickItem(index,item.flag)"
                            >{{item.title}}</li>
                        </ul>
                    </ul>
                </div>
                <div class="ac-content">
                    <div class="ac-title">
                        <span class="flag"></span>
                        {{data.nav[isSelect].title}}
                        <span class="address">
                            当前位置:
                            <span class="title-address" @click="goto('/home')">首页</span>
                            <span class="title-address" @click="goto(firstPath)">{{first}}</span>
                            <span class="title-address" @click="goto(secondPath)">{{second}}</span>
                        </span>
                    </div>
                    <span class="line"></span>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title_text: "",
            first: "",
            second: "",
            firstPath: "",
            secondPath: "",
            data: "",
            isSelect: 0
        };
    },
    components: {},
    computed: {},
    watch: {
        $route(to, from) {
            this.initRouter();
        }
    },
    mounted() {
        this.initRouter();
        this.isSelect = parseInt(this.$route.query.code);
        this.data = this.readFile(
            "../../../static/file/workRules/workRule.json"
        );
    },
    methods: {
        //面包屑导航
        initRouter() {
            var routers = this.$router.options.routes;
            console.log(routers);
            var path = this.$route.path;
            var item = this.$route.path.split("/")[1];
            var rLen = routers.length;
            for (let j = 0; j < rLen; j++) {
                if (routers[j].path === "/" + item) {
                    for (let i = 0; i < 2; i++) {
                        if (routers[j].children[1].path === path) {
                            this.first =
                                ">" + " " + routers[j].children[1].name;
                            this.firstPath = routers[j].children[1].path;
                            this.second = " ";
                        } else {
                            this.first =
                                ">" + " " + routers[j].children[1].name;
                            this.second =
                                ">" + " " + routers[j].children[2].name;
                            this.firstPath = routers[j].children[1].path;
                            this.secondPath = routers[j].children[2].path;
                        }
                    }
                }
            }
        },
        clickItem(num, flag) {
            //关于我们点击事件
            this.isSelect = num;
            this.$router.push({
                path: "/workRules/wrDetail",
                query: { code: num, listNum: flag }
            });
        },
        goto(path, num) {
            this.$router.push({
                path: path,
                query: {
                    code: this.$route.query.code,
                    listNum: this.$route.query.listNum
                }
            });
        }
    }
};
</script>
<style scoped>
li {
    list-style: none;
}
.m-nav {
    display: inline-block;
    width: 120px;
}
.m-nav-ul {
    display: inline-block;
    padding: 10px 20px 0 0;
}
.m-nav .m-nav-ul .title {
    background: #006a48;
}
.m-nav-ul li {
    border-bottom: 1px #ddd solid;
    border-left: 1px #ddd solid;
    border-right: 1px #ddd solid;
    padding: 5px 20px 5px 20px;
    text-align: center;
}
.m-nav-ul .ac-ul li {
    cursor: pointer;
}
.ac-active {
    color: #11659a;
}
.ac-content {
    display: inline-block;
    padding: 10px;
    width: 100%;
}
.flag {
    display: inline-block;
    height: 14px;
    width: 5px;
    background: #006a48;
}
.line {
    border: 1px #006a48 solid;
    display: inline-block;
    width: 100%;
    height: 0;
    margin: 0 0 10px;
}
.address {
    display: inline-block;
    float: right;
}
.title-address {
    cursor: pointer;
    color: #0f59a4;
}
.ac-item {
    width: 100%;
    display: inline-flex;
    border-bottom: 1px #ddd solid;
    padding: 0 0 10px 0;
}
.ac-item-img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px #ddd solid;
}
.ac-item-right {
    display: inline-block;
    width: 100%;
    padding: 10px 10px 0 10px;
}
.ac-item-right-title {
    font-size: 16px;
    color: #000;
    font-weight: 700;
}
.ac-item-right-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-indent: 24px;
    line-height: 24px;
    color: #888;
    padding: 10px 0 5px 0;
}
.ac-item-right-foot {
    padding: 5px 0 10px 5px;
}
.icons {
    height: 20px;
    width: 20px;
    vertical-align: -5px;
}
.foot-text {
    color: #888;
}
.foot-date {
    margin-left: 20px;
}
</style>

                        