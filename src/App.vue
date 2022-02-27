<template>
  <div id="app">
    <div class="sideNav">
     <LeftSideNav class="fixed-top"></LeftSideNav>
    </div>
    <div class="mainContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftSideNav from "@/components/includes/LeftSideNav";

export default {
  name: 'App',
  components: {
    LeftSideNav:LeftSideNav
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900;1000&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Libre Franklin" !important;
}
html,
body {
  width: 100%;
  height: 100%;
}
.fs-13{
  font-size: 13px;
} 
.fw-600{
  font-weight: 600;
}
.mb-10{
  margin-bottom: 10px;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f5f5f5;
}
.sideNav {
  width: 220px;
  height: 100%;
  background-color: red;
}
.mainContent {
  width: calc(100% - 220px);
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px 25px;
  padding-top: 0;
}
  .overflow-y{
    overflow-y: scroll;
  }
  .overflow-y::-webkit-scrollbar {
    width: 0;
  }
   
  .overflow-y::-webkit-scrollbar-track {
      width: 0;
  }
</style>
