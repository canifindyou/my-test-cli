<template>
    <div class="box">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- 指示器 -->
            <!-- <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            </ol>-->
            <!-- 轮播图片及说明文字 -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <a href="#" class="pc_imgBox hidden-xs">
                        <img src="../../static/img/1.jpg" alt />
                    </a>
                    <a href="#" class="m_imgBox hidden-lg hidden-md hidden-sm">
                        <img src="../../static/img/1.jpg" alt />
                    </a>
                </div>
                <div class="item">
                    <a href="#" class="pc_imgBox hidden-xs">
                        <img src="../../static/img/2.jpg" alt />
                    </a>
                    <a href="#" class="m_imgBox hidden-lg hidden-md hidden-sm">
                        <img src="../../static/img/2.jpg" alt />
                    </a>
                </div>
            </div>
            <!-- 控制按钮：左右切换 -->
            <a
                class="left carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
            >
                <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
                class="right carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
            >
                <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
        <div class="container">
            <div class="row" style="padding:5px">
                <p class="title">教研室简介</p>
                <span class="line"></span>
            </div>
            <div class="row" v-for="item in data.jianjie">
                <!-- 教研室简介 -->
                <p class="text-cv">{{item}}</p>
            </div>
            <div class="row" style="padding:5px">
                <p class="title">师资力量</p>
                <span class="line"></span>
            </div>
            <div class="row">
                <!--师资力量 -->
                <span v-for="item in data.teacherInfo">
                    <Card
                        :count="item.subCount"
                        :year="item.teachYear"
                        :name="item.name"
                        :status="item.directGame"
                        @checkInfo="clickCard()"
                    ></Card>
                </span>
                <ul class="m-list" v-for="item in data.teacherInfo">
                    <li class="m-item">教研室教师：{{item.name}}</li>
                </ul>
            </div>
            <div class="row" style="padding:5px">
                <p class="title">关于我们</p>
                <span class="line"></span>
            </div>
            <div class="row" style="padding:5px 5px 50px 5px ">
                <!-- 关于我们 -->
                <div class="about-us" v-if="data !== ''">
                    <div class="about-us-nav">
                        <ul class="au-ul">
                            <li class="au-active" @click="clickItem(0,'m_provide')">我们的提供</li>
                            <li @click="clickItem(1,'m_help')">我们的帮助</li>
                            <li @click="clickItem(2,'m_get')">你可以获得</li>
                            <li @click="clickItem(3,'m_worth')">我们的价值</li>
                        </ul>
                    </div>
                    <div class="about-us-content">
                        <p class="au-text">{{data.aboutUs.m_provide}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import Card from "../components/card/card";
export default {
    name: "allScroller",
    data() {
        return {
            data:"",
        };
    },
    components: {
        Card
    },
    methods: {
        clickCard(teacherName){
         this.$router.push({
             path:"/personPage",
             query:{
                 
             }
         })
        },
        clickItem(num, flag) {
            //关于我们点击事件
            var doms = document.getElementsByClassName("au-ul")[0].children,
                textDom = document.getElementsByClassName("au-text")[0],
                len = doms.length;
            for (let i = 0; i < len; i++) {
                doms[i].setAttribute("class", "");
            }
            doms[num].setAttribute("class", "au-active");
            textDom.innerHTML = this.data.aboutUs[flag];
        },
    },
    mounted() {
        this.data =this.readFile("../../static/file/home.json")
    }
};
</script>

<style scoped>
.box {
    background: #b9dec9;
    width: 100%;
}

.pc_imgBox {
    display: block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.m_imgBox {
    display: block;
    width: 100%;
}
.carousel-indicators {
    background: transparent;
    opacity: 0.6;
}

.box .row .title {
    margin: 0 0 -10px;
    margin-top: 50px;
    color: #006a48;
    font-size: 14px;
}
.box .row .line {
    border: 1px #006a48 solid;
    display: inline-block;
    width: 100%;
    height: 0;
}
.box .row .text-cv {
    text-indent: 25px;
    padding:5px 10px 0 10px;
    margin: 0;
    line-height: 25px;
    word-wrap: break-word;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
}
.box .about-us {
    display: inline-flex;
    width: 100%;
    position: relative;
}
.box .row .about-us .about-us-nav {
    width: 100px;
    display: inline-block;
}
.box .row .about-us .about-us-nav .au-active {
    color: #11659a;
}
.box .row .about-us .about-us-nav ul {
    width: 100px;
    display: inline-block;
}
.box .row .about-us .about-us-nav ul li {
    list-style: none;
    padding: 5px;
    border-bottom: 1px solid #645822;
    width: 100px;
    text-align: center;
    cursor: pointer;
}
.box .row .about-us .about-us-nav ul li:hover {
    color: #11659a;
}
.box .row .about-us .about-us-content {
    display: inline-block;
    height: 134px;
    position: absolute;
    left: 100px;
    right: 0;
}
.box .row .about-us .about-us-content p {
    width: 100%;
    height: 130px;
    overflow-y: auto;
    text-indent: 25px;
    padding: 10px;
    border: 1px #ddd solid;
}

/* 响应式样式 */
.m-list {
    display: none;
}
@media screen and (max-width: 687px) {
    .m-list {
        display: inline-block;
        padding: 10px;
        width: 100%;
    }
    .m-item {
        border-bottom: 1px solid #b7d07a;
        border-radius: 5px;
        background-color: #b7d07a;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 0 0 20px;
        /* box-shadow: 0px 0px 15px 7px gainsboro; */
    }
}
</style>