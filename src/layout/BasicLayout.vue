<template>
    <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
        <template #right>
            <van-icon name="search" size="18"/>
        </template>
    </van-nav-bar>


    <div id="content">
        <router-view/>
    </div>

    <van-tabbar v-model="active" @change="onChange" route>
        <van-tabbar-item icon="home-o" name="index" to="/">主页</van-tabbar-item>
        <van-tabbar-item icon="search" name="team" to="/team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="user" to="/user">个人</van-tabbar-item>
    </van-tabbar>

</template>

<script setup>

import {ref} from "vue";

const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);
import {showToast} from "vant";
import Index from "../pages/Index/index.vue";
import Team from "../pages/Team/index.vue";

const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');
</script>

<style scoped>

</style>
