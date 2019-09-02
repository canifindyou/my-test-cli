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
                    <span class="foot-text">{{data[listNum][itemFlag].person}}</span>
                </span>
                <span class="foot-date">
                    <svg class="icons" aria-hidden="true">
                        <use xlink:href="#iconriqi-copy" />
                    </svg>
                    <span class="foot-text">{{data[listNum][itemFlag].date}}</span>
                </span>
            </div>
            <div v-for="item in data[listNum][itemFlag].content">
                <p class="content-text">{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: this.$route.query.code,
            listNum: "",
            data: "",
            itemFlag:""
        };
    },
    watch: {
        $route(to, from) {
            this.code = this.$route.query.code;
        }
    },
    components: {},
    computed: {},
    methods: {},
    mounted() {
        this.itemFlag = this.$route.query.itemFlag
        this.listNum = this.$route.query.listNum;
        this.data = this.readFile(
            "../../../static/file/workPlan/detail.json"
        );
    }
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
</style>