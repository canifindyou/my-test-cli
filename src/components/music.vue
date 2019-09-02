<!--  -->
<template>
    <div class="swipper-box">
        <div v-if="isplay" class="play " @click="begin()">
            <svg class="icons" aria-hidden="true">
                <use xlink:href="#iconbofang-copy" />
            </svg>
        </div>
        <div v-else  class="pause " @click="end()">
            <svg class="icons1" aria-hidden="true">
                <use xlink:href="#iconzanting-copy" />
            </svg>
        </div>
        <audio
            :src="musicSrc"
            id="ao"
            @loadeddata="initdata"
            @timeupdate="updateTime"
        ></audio>
        <span class="cur">{{startTime}}</span>
        <input type="range" @change="changeIt()" min="0" max="100" class="range" value="0" />
        <span class="max">{{endTime}}</span>
    </div>
</template>
   <script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
<script>
export default {
      props:{
          musicSrc:{
              type:String
          }
      },
    data() {
      
        return {
            startTime: "00:00",
            endTime: "",
            tap: false,
            isplay:true
        };
    },

    components: {},

    computed: {},
    watch: {
        tap() {}
    },

    mounted() {},

    methods: {
        initdata() {
            this.endTime = this.timeToStr(
                document.getElementById("ao").duration
            );
            var dom = document.getElementsByClassName("range")[0];
            dom.max = document.getElementById("ao").duration;
        },
        updateTime() {
            this.startTime = this.timeToStr(
                document.getElementById("ao").currentTime
            );
            var dom = document.getElementsByClassName("range")[0];
            dom.value = document.getElementById("ao").currentTime;
        },
        timeToStr(time) {
            var m = 0,
                s = 0,
                _m = "00",
                _s = "00";
            time = Math.floor(time % 3600);
            m = Math.floor(time / 60);
            s = Math.floor(time % 60);
            _s = s < 10 ? "0" + s : s + "";
            _m = m < 10 ? "0" + m : m + "";
            return _m + ":" + _s;
        },
        begin() {
            var dom = document.getElementById("ao");
            this.isplay = !this.isplay
            dom.play();
        },
        changeIt() {
            var dom = document.getElementsByClassName("range")[0];
            document.getElementById("ao").currentTime = dom.value;
            console.log(dom.value);
        },
        end() {
            this.isplay = !this.isplay
            document.getElementById("ao").pause();
        }
    }
};
</script>
<style  scoped>
.wipper-box {
    height: 50px;
    /* width: 100px; */
    position: relative;
}
.play{
    display: inline-block;
    vertical-align: -10px;
    cursor: pointer;
}
.pause{
    display: inline-block;
    vertical-align: -10px;
    cursor: pointer;
}
input {
    border: none;
}
.range {
    display: inline-block;
    width: 100px;
    height: 2px;
    background: #2386e4;
    border-radius: 1px;
    vertical-align: 4px;
    -webkit-appearance: none !important;
}
/* 进度滑块 */
.range::-webkit-slider-thumb {
    width: 6px;
    height: 6px;
    background: #fff;
    border: 1px solid #f18900;
    cursor: pointer;
    border-radius: 3px;
    -webkit-appearance: none !important;
}
.icons {
    height: 30px;
    width: 30px;
}
.icons1 {
    height: 30px;
    width: 30px;
}
</style>