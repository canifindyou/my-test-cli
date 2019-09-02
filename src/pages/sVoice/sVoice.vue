<!-- 学长之声 -->
<template>
    <div>
        <div class="container">
            <div class="row" style="padding:5px;display: inline-flex;width:100%">
                <div class="ac-content">
                    <div class="ac-title">
                        <span class="flag"></span>
                        思维之声
                        <span class="address">
                            当前位置:
                            <span class="title-address" @click="goto('/home')">首页 ></span>
                            <span class="title-address" @click="goto('/home')">{{this.$route.name}}</span>
                        </span>
                    </div>
                    <span class="line"></span>
                </div>
            </div>
            <div class="row" style="padding:0 0 0 20px;width:100%">
                <!-- controls="controls" -->
                <div class="v-item">
                    <div class="img-box">
                        <div class="v-img">头像</div>
                    </div>

                    <div class="v-center">
                        <!-- <h4>关于。。。</h4> -->
                        <div class="v-music">
                            <music
                                musicSrc="../../static/music/DJ瀚泽 - 其实,我就在你的方圆几里（Cover DJ瀚泽）.mp3"
                            ></music>
                        </div>
                        <p class="badge-box">
                            <span class="badge">#C语言</span>
                            <span class="badge">#论文</span>
                        </p>

                        <p class="v-text">虽然div中内容上下居中的问题已经是一个比较古老的话题，但是最近发现还是有很多前端开发者在询问如何实现</p>
                        <p class="v-foot">
                            <span>上传者:朱洪军</span>
                            <span>作者:张三</span>
                            <span>时间：2018.6.18</span>
                            <span>点赞次数:100</span>
                            <span>访问次数:100</span>
                            <span>点赞</span>
                        </p>
                    </div>
                </div>

                <div class="v-item">
                    <div class="img-box">
                        <div class="v-img">头像</div>
                    </div>

                    <div class="v-center">
                        <!-- <h4>关于。。。</h4> -->
                        <div class="v-music">
                            <music
                                musicSrc="../../static/music/DJ瀚泽 - 其实,我就在你的方圆几里（Cover DJ瀚泽）.mp3"
                            ></music>
                        </div>
                        <p class="badge-box">
                            <span class="badge">#C语言</span>
                            <span class="badge">#论文</span>
                        </p>

                        <p class="v-text">虽然div中内容上下居中的问题已经是一个比较古老的话题，但是最近发现还是有很多前端开发者在询问如何实现</p>
                        <p class="v-foot">
                            <span>上传者:朱洪军</span>
                            <span>作者:张三</span>
                            <span>时间：2018.6.18</span>
                            <span>点赞次数:100</span>
                            <span>访问次数:100</span>
                            <span>点赞</span>
                        </p>
                    </div>
                </div>

                <div class="v-item">
                    <div class="img-box">
                        <div class="v-img">头像</div>
                    </div>

                    <div class="v-center">
                        <!-- <h4>关于。。。</h4> -->
                        <div class="v-music">
                            <music
                                musicSrc="../../static/music/DJ瀚泽 - 其实,我就在你的方圆几里（Cover DJ瀚泽）.mp3"
                            ></music>
                        </div>
                        <p class="badge-box">
                            <span class="badge">#C语言</span>
                            <span class="badge">#论文</span>
                        </p>

                        <p class="v-text">虽然div中内容上下居中的问题已经是一个比较古老的话题，但是最近发现还是有很多前端开发者在询问如何实现</p>
                        <p class="v-foot">
                            <span>上传者:朱洪军</span>
                            <span>作者:张三</span>
                            <span>时间：2018.6.18</span>
                            <span>点赞次数:100</span>
                            <span>访问次数:100</span>
                            <span>点赞</span>
                        </p>
                    </div>
                </div>


                <div class="v-item">
                    <div class="img-box">
                        <div class="v-img">头像</div>
                    </div>

                    <div class="v-center">
                        <!-- <h4>关于。。。</h4> -->
                        <div class="v-music">
                            <music
                                musicSrc="../../static/music/DJ瀚泽 - 其实,我就在你的方圆几里（Cover DJ瀚泽）.mp3"
                            ></music>
                        </div>
                        <p class="badge-box">
                            <span class="badge">#C语言</span>
                            <span class="badge">#论文</span>
                        </p>

                        <p class="v-text">虽然div中内容上下居中的问题已经是一个比较古老的话题，但是最近发现还是有很多前端开发者在询问如何实现</p>
                        <p class="v-foot">
                            <span>上传者:朱洪军</span>
                            <span>作者:张三</span>
                            <span>时间：2018.6.18</span>
                            <span>点赞次数:100</span>
                            <span>访问次数:100</span>
                            <span>点赞</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import music from "../../components/music";
export default {
    data() {
        return {};
    },

    components: {
        music
    },

    computed: {},

    mounted() {},

    methods: {
        test() {
            var dom = document.getElementById("au");
            dom.play();
        }
    }
};
</script>
<style  scoped>
h4 {
    margin: 5px 0 5px 0;
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
.v-item {
    border-bottom: 1px #ddd solid;
    width: 100%;
    padding: 10px 0 0 10px;
    display: inline-flex;
    position: relative; 
}
.img-box {
    width: 80px;
    display: inline-block;
}
.v-img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: #006a48;
    text-align: center;
    line-height: 80px;
    /* position: absolute;
    left: 5px;
    top: 0;
    bottom: 0;
    margin: auto; */
}
.v-center {
    display: inline-block;
    padding: 5px 10px 5px 10px;
    width: 100%;
    /* margin-left: 80px */
}
.v-music {
    display: inline-block;
}
.v-text {
    padding: 0 5px 0 5px;
    text-indent: 25px;
}
.badge {
    float: right;
    margin-right: 3px;
    background: #00714d;
}
.badge-box {
    display: inline-block;
    padding: 0 0 0 25px;
    margin: 0;
    vertical-align: -4px;
}
.v-foot>span{
    margin-left: 10px
}
.v-foot>span:last-child{
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    .badge {
        float: right;
        margin-right: 3px;
        background: #00714d;
    }
}
</style>