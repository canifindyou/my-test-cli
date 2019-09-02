<!-- 详情 -->
<template>
    <div v-if="data !== ''">
        <div class="ac-item-right">
            <h4 class="content-title">{{data[listNum][itemFlag].title}}</h4>
            <div class="content-info">
                <span class="foot-person">
                    <svg class="icons" aria-hidden="true">
                        <use xlink:href="#iconren-copy" />
                    </svg>
                    <span class="foot-text">朱洪军</span>
                </span>
                <span class="foot-date">
                    <svg class="icons" aria-hidden="true">
                        <use xlink:href="#iconriqi-copy" />
                    </svg>
                    <span class="foot-text">2019.6.9</span>
                </span>
            </div>
            <div class="content-text">
                <span>功能描述：</span>
                <div class="detail-text" >
                    <div v-for="item in data[listNum][itemFlag].content">
                        <p class="content-p-text">{{item}}</p>
                    </div>
                </div>

                <div class="content-foot-box">
                    <p class="content-foot">建议组队人数：{{data[listNum][itemFlag].stuNum}}</p>
                    <p class="content-foot">最低贡献代码行数：{{data[listNum][itemFlag].leastDemoRow}}</p>
                    <p class="content-foot">项目所占分值：{{data[listNum][itemFlag].grade}}</p>
                    <p class="content-foot">验收：{{data[listNum][itemFlag].checkTeacher}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: this.$route.query.code,
            listNum : this.$route.query.listNum,
            itemFlag: this.$route.query.itemFlag,
            data:""
        };
    },
    watch: {
        $route(to, from) {
            this.code = this.$route.query.code;
        }
    },
     mounted() {
        this.itemFlag = this.$route.query.itemFlag
        this.listNum = this.$route.query.listNum;
        this.data = this.readFile(
            "../../../static/file/teachProject/detail.json"
        );
    },
    components: {},
    computed: {},
    methods: {}
};
</script>
<style scoped>
.ac-item-right {
    display: inline-block;
    width: 100%;
    padding: 0 10px 0 10px;
}
.content-title {
    text-align: center;
    margin: 0;
}
.content-info {
    width: 100%;
    text-align: center;
    padding: 25px 0 20px 0;
    border-bottom: 1px #eee solid;
}
.content-text {
    color: #999;
    /* text-indent: 24px; */
    line-height: 25px;
    padding: 20px 5px 30px 5px;
}
.content-p-text {
    color: #999;
    text-indent: 24px;
    line-height: 25px;
    padding: 5px;
    margin: 0
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
    margin-left: 30px;
}
.foot-person {
    margin-right: 30px;
}
.detail-text {
    text-indent: 48px;
    width: 100%;
    border-bottom: 1px #ddd solid;
    padding: 10px 0 10px 0;
    height: 500px;
}
.content-foot-box{
    text-align: center;
}
.content-foot {
    display: inline-block;
}
@media screen and (max-width: 440px) {
    .foot-date {
        margin-left: 0px;
        display: block;
        padding: 8px 0 0 10px;
    }
    .foot-person {
        margin-right: 0px;
    }
}
@media screen and (max-width: 994px) {
.content-foot-box{
    text-align: left;
}
.content-foot {
    display: block;
}
}
</style>