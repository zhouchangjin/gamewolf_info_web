<template>
 <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
    background-color="#023047"
    text-color="#fff"
    active-text-color="#ffd04b" >
    <el-menu-item index="1">菜单1</el-menu-item>
    <el-menu-item index="2">菜单2</el-menu-item>
</el-menu>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
