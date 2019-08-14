<template>

    <div class="div1" @scroll="bindScroll($el)">
        <slot></slot>
        <div v-if="!done">
            <div  class="loading">
                <div class="loadingRadius">
                </div>
            </div>
        </div>
        <div v-else>
            <div  class="loading">
              加载完成
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "scroller",
        data(){
            return{
                timer:""
            }
        },
        props: {
            upPull: {//上拉加载执行函数
                type: Function,
            },
            done: {//是否加载完成
                type: Boolean,
                default: false
            }

        },
        methods: {
            bindScroll(el) {//滚动事件
                var scrollTop = el.scrollTop/*距离顶部的高度*/
                var scrollHeight = el.scrollHeight  /*滚动条高度*/
                var windowHeight = el.clientHeight /*可见窗口高度*/
                /*滚动条高度 = 距离顶部的高度 + 可见窗口的高度    --- 近似相等，一般相差±1之内*/
                var sum = scrollTop + windowHeight

                if(!this.done){
                if (Math.ceil(sum) === scrollHeight || Math.floor(sum) === scrollHeight) {
                        this.upPull()
                    }

                }
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>

    .div1 {
        position: absolute;
        /*top: 2.5rem;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*left: 0;*/
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background-color: #ddd;


    }


    .loading{
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #aaa;
    }
    .loadingRadius{
        width: 20px;
        height: 20px;
        border:2px solid #f3f3f3;
        border-top:2px solid #3498db;
        border-radius: 50%;
        background: transparent;
        display: inline-block;
        animation: light 1s infinite;
        
    }


    @keyframes light {
        0% {

            transform: rotate(0deg);

        }

        100% {

            transform: rotate(360deg);

        }

    }

</style>