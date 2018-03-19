<template>
    <div class="loginBox">
        <div class="logo">
            <img src="images/logo.png">
        </div>
        <h1>
            Sign in to Tagging System
        </h1>
        <div class="mainBox">
            <label for="login_field">Username or email address</label>
            <el-input placeholder="Username or email address" id="login_field" style="margin:5px 0 15px 0;"
                      v-model="username"></el-input>
            <label for="password">Password</label>
            <el-input type="password" placeholder="Password" id="password" style="margin:5px 0 15px 0;" v-model="password"></el-input>
            <el-button size="small" type="primary" style="width:100%;font-size: 16px" @click="login">Sign in</el-button>
        </div>
        <div class="footer">
            <a href="https://stocktips.calfdata.com">calfdata</a>
            <a href="https://ai.calfdata.com/#/">ai.laboratory</a>
            <a href="https://fineyes.calfdata.com/">小牛投研平台</a>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import axios from 'axios';
    @Component({})
    export default class Login extends Vue {

        username: string = '';
        password: string = '';

        private login() {
            axios.get('/admin/login', {
                params: {
                    userName: this.username,
                    password: this.password
                }
            }).then((data) => {
                if (data.data) {
                    localStorage.setItem("loginState", 'true');
                    location.href = '#/Task';
                    location.reload();
                }else {
                    this.$message.error('账号或密码输入错误');
                }
            }).catch((err) => {
                this.$message.error(err);
            });

        }
    }
</script>

<style scoped>
    .loginBox {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        width: 308px;
        margin: 120px auto;
    }

    .logo {
        padding: 32px 0 24px 0;
        width: 48px;
        margin: auto;
    }

    .logo img {
        width: 100%;
    }

    .loginBox h1 {
        text-align: center;
        letter-spacing: -.5px;
        font-size: 24px;
        font-weight: 300;
        color: #333;
    }

    .loginBox .mainBox {
        box-sizing: content-box;
        border: 1px solid #d8dee2;
        border-radius: 5px;
        padding: 20px;
        font-size: 14px;
        background-color: #fff;
        margin-top: 16px;
    }

    .footer {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        padding: 40px 0;
    }

    .footer a {
        text-decoration: none;
        color: #333;
    }

    .footer a:hover {
        color: #248452;
    }
</style>
