<template>
    <div>
        <mscroller :upPull="upPull" :done="done">
            <div v-for="item in list">
            <div class="item">
            {{item}}
            </div>
            </div>

        </mscroller>

    </div>


</template>

<script>
    import mscroller from "../components/mscroller"
    export default {
        name: "scroller",
        data() {
            return {
                list: [4,6,6,6,6,8,8,9,95,6,55,5454,6544,646,464,6546,5465,46,546,54,654654,654,654,64,654,654,654,654,654,654,654,6],
                length: 10,
                done:false
            }
        },
        components:{
          mscroller
        },

        methods: {
            upPull(){
                this.length ++
                setTimeout(()=>{
                    for (let i = 0; i <this.length ; i++) {
                        this.list.push(i)
                    }
                    if(this.length >= 20){
                        this.done = true
                    }
                },1000)


            }

        },
        mounted() {

        }
    }
</script>

<style scoped>

    .item {
        height: 50px;
        width: 100%;
    }

</style>