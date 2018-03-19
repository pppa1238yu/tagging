<template>
    <div class="task-flex-box">
        <el-card class="box-card">
            <p class="title">标注任务</p>
            <div class="tableBox">
                <el-table
                        :data="tableData"
                        style="width: 100%;">
                    <el-table-column
                            prop="code"
                            label="编号"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180"
                    >
                        <template slot-scope="scope">
                            <el-button type="info" size="small">标注</el-button>
                            <el-button type="success" size="small">分配</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card class="box-card">
            <p class="title alright">已完成</p>
            <div class="tableBox">
                <el-table
                        :data="tableData"
                        style="width: 100%;">
                    <el-table-column
                            prop="code"
                            label="编号"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180"
                    >
                        <template slot-scope="scope">
                            <el-button type="warning" size="small">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import axios from 'axios';
    @Component({})
    export default class Task extends Vue {
        tableData:Array<any> = [{
            code:'123123123123123',
            name:'张大胆'
        },
            {
                code:'123123123123123',
                name:'张大胆'
            },
            {
                code:'123123123123123',
                name:'张大胆'
            },
            {
                code:'123123123123123',
                name:'张大胆'
            }]
    }
</script>

<style scoped>
    .title{
        background-color: #08bdcc;
        color: #fff;
        line-height: 40px;
        padding: 0 10px;
    }
    .alright{
        background-color: #84cca4;
    }
    .tableBox{
        background-color: #d6d6d6;
    }
    .task-flex-box {
        display: flex;
        justify-content: space-between;
        width: 1240px;
        margin: 0 auto;
    }

    .box-card {
        box-sizing: border-box;
        width: 610px;
        padding: 10px 0px;
    }
</style>
