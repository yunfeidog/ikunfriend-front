<template>
    <van-cell title="用户名" is-link :value="user.username"
              @click="toEdit('username','用户名',user.username)"/>
    <van-cell title="账号" is-link :value="user.userAccount"/>
    <van-cell title="头像" is-link :value="user.avatarUrl">
        <VanImage :src="user.avatarUrl" height="48px" alt="cxk"/>
    </van-cell>
    <van-cell title="性别" is-link :value="user.gender"
              @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link :value="user.phone"
              @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email"
              @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="ikun编号" is-link :value="user.ikunCode"/>
    <van-cell title="注册时间" is-link :value="user.createTime.toDateString()"/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
    id: 1,
    username: 'ikun',
    userAccount: 'ikun',
    avatarUrl: "https://s2.loli.net/2023/10/16/QRiUYmDLB2vZuE6.webp",
    gender: '男',
    phone: "114514",
    email: "1@qq.com",
    ikunCode: 1,
    createTime: new Date()
}

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
    router.push({
        path: '/user/edit',
        query: {
            editKey,
            editName,
            currentValue,
        }
    })
}

</script>

<style scoped>

</style>
