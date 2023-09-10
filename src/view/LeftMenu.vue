<script setup>
    import {
  Platform,Grid,InfoFilled,House,Comment
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const prop=defineProps(['menu','otherprop'])
console.log(prop)
</script>
<template>
<el-menu background-color="#335c67" text-color="#fff"  active-text-color="#ffd04b">
    <!--
    <el-sub-menu index="1">
        <template #title>
            <el-icon><location /></el-icon>
            <span>标题以后是传参</span>
        </template>
        <el-menu-item index="1-1">第一个参数</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
        <template #title>
            <el-icon><location /></el-icon>
            <span>标题以后是传参2</span>
        </template>
        <el-menu-item index="2-1">第一个参数2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
        <template #title>
            <el-icon><location /></el-icon>
            <span>标题以后是传参3</span>
        </template>
        <el-menu-item index="3-1">第一个参数2</el-menu-item>
        <el-menu-item index="3-2">第一个参数2</el-menu-item>
    </el-sub-menu>
    -->
    <el-menu-item v-for="menuitem in prop.menu" :key="menuitem.id" :index="menuitem.id">
        <template #title>
            <el-icon>
                <platform v-if="menuitem.menuIcon=='platform'" />
                <grid v-if="menuitem.menuIcon=='grid'" />
                <InfoFilled v-if="menuitem.menuIcon=='info'" />
                <House v-if="menuitem.menuIcon=='house'" />
                <Comment v-if="menuitem.menuIcon=='comment'" />
            </el-icon>
            <span>{{ menuitem.menuCname}}</span>    
        </template>
        
    </el-menu-item>
</el-menu>
</template>
