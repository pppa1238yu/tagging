<template>
    <div>
        <div class="personInfo">
            <p>姓名: <span class="bold">{{personInfo.name}}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别: <span class="bold">{{personInfo.sex}}</span></p>
            <p>年龄: <span class="bold">{{personInfo.age}}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检测日期: <span class="bold">{{personInfo.time}}</span></p>
            <p>手机号: <span class="bold">{{personInfo.telephone}}</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结果及建议: <span class="bold">{{personInfo.result}}</span></p>
        </div>

        <div class="echartsBox">
            <div id="ecg-chart" style="width: 100%;height:300px">
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Prop} from "vue-property-decorator";
    import axios from 'axios';
    declare let echarts: any;
    @Component({})
    export default class EchartsBox extends Vue {
        @Prop()
        personInfo: any;
        data: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 2, 2, 3, 4, 5];
        xData: Array<Number> = Array.apply(null,{length:15000}).map((v:any,i:any)=>i);
        myChart: any;//chart实例
        //心电波形图初次绘制
        drawEcg(ele: any) {
            let option = {
                xAxis: {
                    type: 'category',
                    show: false,
                    data: this.xData
                },
                yAxis: {
                    type: 'value',
                    show: false,
                    max: Math.max.apply(null, this.data),
                    min: Math.min.apply(null, this.data)
                },
                grid: {
                    top: '2%',
                    left: '3%',
                    right: '3%',
                    bottom: '2%'
                },
                animation: false,
                series: [{
                    data: this.data,
                    smooth: false,
                    symbol: 'none',
                    type: 'line'
                }]
            };
            this.myChart.setOption(option);
        }

        private getEcgData() {
            this.myChart = echarts.init(document.getElementById("ecg-chart"));
            this.myChart.showLoading();
            axios.get('/ecgData', {
                params: {
                    userId: this.personInfo.userId,
                    reportId: this.personInfo.reportId,
                    blockIndex: 0
                }
            }).then((data) => {
                this.myChart.hideLoading();
                if(data.data){
                    if(data.data.length){
                        this.data = data.data;
                        this.drawEcg(this.myChart);
                    }
                }
            }).catch((err) => {
                this.myChart.hideLoading();
                this.$message.error("" + err);
            });
        }

        mounted() {
            this.getEcgData();
        }

        updated() {
            this.data = [];
            this.myChart.dispose();
            this.getEcgData();
        }
    }


</script>
<style scoped>

</style>