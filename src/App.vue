<script setup>
import LeftMenu from './view/LeftMenu.vue'
import Banner from './view/Banner.vue'
</script>
<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside  style="background-color: #023047;" width="300px">
          <LeftMenu></LeftMenu>
        </el-aside>
      <el-container style="background-color: #219ebc;">
        <el-header style="background-color: #023047;" height="auto">
        <Banner/>
      </el-header>
        
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
html,body{
  margin: 0;
  padding: 0;
}
</style>