<!--  -->
<template>
    <div class="box">
        <div class="container">
            <div class="row" style="padding:5px;display: inline-flex;width:100%;">
                <div class="head">
                    <div class="head-left">
                        <div class="name">朱洪军</div>
                        <div class="info">
                            <p>职称：讲师</p>
                            <p>研究方向：javaEE</p>
                        </div>
                        <img src="../../static/img/pic1.png" alt class="img" />
                    </div>
                    <!-- <div class="head-right">
                       <p>联系方式</p>
                       <p>QQ:1729825672</p>
                       <p>email:17255337639@163</p>
                    </div>-->
                </div>
            </div>
            <div class="row" style="padding:5px;width:100%">
                <div class="body-box">
                    <div  class="conten-text">
                        <div class="body-box-head">个人简介</div>
                        <span class="line"></span>
                        <p class="text">2011年毕业于安徽工业大学计算机应用与技术专业。从事高等学校教育工作五年来一直在教学一线，担任过多门课程的任课老师。主要研究方向包括：自然语言处理，云计算与大数据，数据挖掘等。2013年赴中科院遥感所进修遥测大数据处理科目。现为安徽信息工程学院计算机与软件工程系专职教师。</p>
                    </div>
                      <div  class="conten-text">
                        <div class="body-box-head">项目简介</div>
                        <span class="line"></span>
                        <p class="text">这里是项目简介</p>
                    </div>
                     <div  class="conten-text">
                        <div class="body-box-head">教学成果</div>
                        <span class="line"></span>
                        <p class="text">这里教学成果简介</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style scoped>
html body {
    height: 100%;
    width: 100%;
}
.box {
    background: #b9dec9;
    width: 100%;
    height: 100%;
}
.head {
    height: 100px;
    width: 100%;
    display: inline-flex;
    position: relative;
}
.name {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #679f48;
    text-align: center;
    line-height: 100px;
    display: inline-block;
    overflow: hidden;
}
.info {
    display: inline-block;
    /* height: 100px; */
    overflow: hidden;
    vertical-align: bottom;
}
.info p {
    color: #666;
    padding: 0 0 10px 20px;
    margin: 0;
}
.img {
    height: 100px;
    display: inline-block;
    vertical-align: sub;
}

.head-right {
    display: inline-block;
    height: 100px;
    width: 150px;
    background: #fff;
    /* float: right; */
    position: absolute;
    right: 0;
}
.body-box {
    width: 100%;
}
.body-box-head {
    width: 100%;
    padding: 10px 0 0 10px;
}
.line {
    display: inline-block;
    width: 100%;
    height: 0;
    border: 1px solid #006a48;
    margin: 5px;
}
.text {
    text-indent: 25px;
    line-height: 20px;
}
.conten-text{
    padding: 0 0 30px 0
}

@media screen and (max-width: 1200px) {
    .img {
        height: 100px;
        display: none;
        vertical-align: sub;
    }
}
</style>