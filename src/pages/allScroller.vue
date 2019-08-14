<template>
    <div style="width: 100%;height: 100%">
        <div class="box box1">
            123
        </div>
        <div class="box box1">
            123
        </div>
        <div class="box box1">
            123
        </div>
        <div class="box box1">
            123
        </div>
        <div class="box box1">
            123
        </div>
        <div class="box box1">
            123
        </div>
        <div v-for="item in list">
            <div class="box box1">
                {{item}}
            </div>
        </div>
        <li v-if="isshow">没有更多数据</li>
    </div>
</template>

<script>
    export default {
        name: "allScroller",
        data() {
            return {
                list: [],
                length: 10,
                isshow: false
            }
        },
        methods: {

            bindScroll() {
                var mdom = document.getElementsByTagName("body")[0]
                window.addEventListener("scroll", () => {
                    var scrollTop = document.documentElement.scrollTop
                    var scrollHeight = document.documentElement.scrollHeight
                    var windowHeight = document.documentElement.clientHeight
                    var sum = scrollTop + windowHeight
                    if (!this.isshow) {
                        if (Math.ceil(sum) === scrollHeight || Math.floor(sum) === scrollHeight) {
                            console.log("触底")
                            for (let i = 0; i < this.length; i++) {
                                this.list.push(i)
                            }
                            this.length += 5
                            if (this.length >= 35) {
                                this.isshow = true
                            }
                        }
                    }


                })
            }
        },
        mounted() {
            this.bindScroll()
        }
    }
</script>

<style scoped>

    .box {
        height: 600px;
        border: 1px red solid;
    }


    * {
        padding: 0;
        margin: 0;
    }
</style>