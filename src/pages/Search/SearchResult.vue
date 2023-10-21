<template>
    <van-card
        v-for="user in userList"
        :desc="user.profile"
        :title="`${user.username}（${user.ikunCode}）`"
        :thumb="user.avatarUrl"
    >
        <template #tags>
            <van-tag plain type="primary" v-for="tag in user.tags"
                     style="margin-right: 5px;margin-top: 5px;">
                {{ tag }}
            </van-tag>
        </template>
        <template #footer>
            <van-button size="mini" type="default">联系我</van-button>
        </template>
    </van-card>


</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import request from "../../plugins/request";
import qs from 'qs'

const route = useRoute();
const {tags} = route.query;
const mockUser = {
    id: 1,
    username: 'ikun',
    userAccount: 'ikun',
    avatarUrl: "https://s2.loli.net/2023/10/16/QRiUYmDLB2vZuE6.webp",
    gender: '男',
    phone: "114514",
    email: "1@qq.com",
    ikunCode: 1,
    tags: ['java', 'python'],
    createTime: new Date(),
    profile: "蔡徐坤,会唱跳打篮球"
}
const userList = ref([])

onMounted(async () => {
    const userListData = await request.get('/user/search/tags', {
        params: {tagNameList: tags},
        paramsSerializer: params => {
            return qs.stringify(params, {indices: false})
        }
    }).then(function (response) {
        return response.data?.data;
    }).catch(function (error) {
    })
    if (userListData) {
        userListData.forEach(user => {
            if (user.tags) {
                user.tags = JSON.parse(user.tags);
            }
        })
        userList.value = userListData;
    }
})

</script>

<style scoped>

</style>
