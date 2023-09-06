<script setup>
import {ref,computed} from 'vue'
import LeftMenu from './view/LeftMenu.vue'
import Banner from './view/Banner.vue'
import Home from './view/home/Home.vue'
import { onMounted } from 'vue'
//import axios from 'axios'
import {ListDefaultMenu} from '@/api/ui/menu.js'

const routes = {
  '/': Home,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
});
let menudata=ref([
    {
        id:1,
        menuCname:"菜单1"
    },
    {
        id:2,
        menuCname:"菜单2"

    }
]);

onMounted(() => {
    ListDefaultMenu().then(res=>{
      console.log(res.data)
      menudata.value=res.data.data;
   })
})

</script>
<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside  style="background-color: #023047;" width="300px">
          <LeftMenu :menu="menudata"></LeftMenu>
        </el-aside>
      <el-container style="background-color: #219ebc;">
        <el-header style="background-color: #023047;" height="auto">
        <Banner/>
      </el-header>
        
        <el-main>
            <component :is="currentView" />

        </el-main>
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