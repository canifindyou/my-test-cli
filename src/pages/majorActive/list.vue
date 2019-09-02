<!--  -->
<template>
    <div v-if="data !== ''">
        <!-- 第一项 -->
        <div class="ac-item-box">
            <ul style="width:100%" v-for="(item,index) in data[listNum]">
                <li class="ac-item" @click="goto(code,item.itemBelong,item.itemFlag)">
                    <!-- <img src alt class="ac-item-img" /> -->
                    <div class="ac-item-right">
                        <span class="ac-item-right-title">{{item.listTitle}}</span>
                        <p class="ac-item-right-content">{{item.listContent}}</p>
                        <div class="ac-item-right-foot">
                            <span class="foot-person">
                                <svg class="icons" aria-hidden="true">
                                    <use xlink:href="#iconren-copy" />
                                </svg>
                                <span class="foot-text">{{item.person}}</span>
                            </span>
                            <span class="foot-date">
                                <svg class="icons" aria-hidden="true">
                                    <use xlink:href="#iconriqi-copy" />
                                </svg>
                                <span class="foot-text">{{item.date}}</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: "",
            code: this.$route.query.code,
            listNum: this.$route.query.listNum
        };
    },

    components: {},

    computed: {},
    watch: {
        $route(to, from) {
            this.code = this.$route.query.code;
            this.listNum = this.$route.query.listNum;
            this.data = this.readFile(
                "../../../static/file/majorActive/majorActive.json"
            );
        }
    },

    mounted() {
        this.data = this.readFile(
            "../../../static/file/majorActive/majorActive.json"
        );
    },

    methods: {
        goto(code, itemBelong, itemFlag) {
            this.$router.push({
                path: "/majorActive/list/detail",
                query: {
                    code: code, //导航栏所处位置
                    listNum: itemBelong, //此项属于列表名
                    itemFlag: itemFlag //此项编号，用来查看此项对应的详情内容
                }
            });
        }
    }
};
</script>
<style  scoped>
.ac-item {
    width: 100%;
    display: inline-flex;
    border-bottom: 1px #ddd solid;
    padding: 0 0 10px 0;
    cursor: pointer;
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