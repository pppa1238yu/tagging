<template>
    <div class="mainPage" id="app">
        <div v-if="ifLogin">
            <header>
                <el-row>
                    <el-col :span="1">
                        <el-button size="mini" type="info" @click="changeLabel" style="vertical-align: 3px;">
                            <i :class="{'el-icon-remove-outline':!expand,'el-icon-circle-plus-outline':expand}"></i>
                        </el-button>
                    </el-col>
                    <el-col :span="19"><span class="headTitle">Tagging System</span></el-col>
                    <el-col :span="4" class="userInfo">
                        <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner">
                            <img src="images/head.jpg" class="headerHead"/>
                            <span class="username">王大胆</span>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item divided command="logout">
                                    <div @click="logout">
                                        退出登录
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>

                </el-row>
            </header>
            <div class="content">
                <div class="nav">
                    <el-menu class="el-menu-vertical-demo"
                             default-active="Task"
                             :collapse="expand" router>
                        <el-menu-item index="Task">
                            <i class="el-icon-printer"></i>
                            <span slot="title">任务列表</span>
                        </el-menu-item>
                        <el-menu-item index="Tagging">
                            <i class="el-icon-share"></i>
                            <span slot="title">标注系统</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div :class="{'mainContent':!expand,'mainContentNo':expand}">
                    <router-view/>
                </div>
            </div>
        </div>
        <div v-else>
            <Login></Login>
        </div>

    </div>
</template>


<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Login from "./App/pages/Login.vue";
    @Component({
        components:{
            "Login":Login
        }
    })
    export default class App extends Vue {
        expand: boolean = true;
        ifLogin: boolean = false;

        created(){
            let loginState = localStorage.getItem('loginState');
            if(!loginState){
                this.ifLogin = false;
                location.href = '#/';
            }else if(loginState === 'true'){
                this.ifLogin = true;
            }else {
                this.ifLogin = false;
                location.href = '#/';
            }
        }

//        切换侧边栏展开
        private changeLabel() {
            this.expand = !this.expand;
        }
//        跳转到设置页面
        private handleClick() {
            location.href="#/Setting";
        }

        private logout(){
            localStorage.setItem("loginState",'false');
            location.reload();
        }
    }
</script>

<style scoped>
    .mainPage {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    header {
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        padding: 0 30px 0 10px;
        background-color: #5b6378;
    }

    .headTitle{
        font-size: 24px;
        color: #fff;
        margin-left: 40px;
    }

    .content {
        display: flex;
        justify-content: space-between;
    }

    .headerHead{
        width: 34px;
        height: 34px;
        border-radius: 17px;
        overflow: hidden;
        margin-right: 10px;
        vertical-align: -12px;
    }
    .username{
        font-size: 14px;
        color: #fff;
    }

    .userInfo{
        text-align: right;
        padding-right: 30px;
    }

    .mainContent {
        width: calc(100% - 241px);
        padding: 20px;
        background-color: #d6d6d6;
    }

    .mainContentNo {
        width: calc(100% - 105px);
        padding: 20px;
        background-color: #d6d6d6;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        height: calc(100vh - 50px);
    }
</style>
