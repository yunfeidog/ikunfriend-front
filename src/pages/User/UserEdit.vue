<template>
    <van-form @submit="onSubmit">
        <van-field
            v-model="editUser.currentValue"
            :name="editUser.editKey"
            :label="editUser.editName"
            :placeholder="`请输入${editUser.editName}`"
        />
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>

</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const editUser = ref({
    editKey: route.query.editKey,
    editName: route.query.editName,
    currentValue: route.query.currentValue
})
console.log(route.query)

const onSubmit = (values) => {
    //todo 提交到后台
    console.log('onSubmit', values)
}

</script>

<style scoped>

</style>
