<template>
  <div id="sidenav">
    <div class="profile">
      <div class="det">
        <div class="pic">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <h1>Amanda</h1>
      </div>
    </div>
    <div class="nav" >
      <div id="navDecoration"></div>
      <router-link :active="isActive" :to="'/warehouses'" id="/warehouses">
        <div class="links">
          <img src="@/assets/warehouse.png" />
          <span>Warehouse List</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidenav {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: scroll;
  position: relative;
}
#sidenav::-webkit-scrollbar {
  width: 0;
}

#sidenav::-webkit-scrollbar-track {
  width: 0;
}
.profile {
  width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
  position: sticky;
  background-color: white;
  top: 0;
}
.profile .det {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.pic > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.det > h1 {
  font-size: 1.5rem;
  font-weight: 500;
}

.nav {
  width: 100%;
  position: relative;
  display: block;
}
.isActive span {
  color: #0050b3;
  font-weight: 600;
  font-size: 15px;
  font-family: "Libre Franklin" !important;
}
.nav .links {
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #343438;
  display: flex;
  align-items: center;
  height: 35px;
  cursor: pointer;
}
.nav .links img {
  width: 20px;
  margin: 0 30px;
}
.nav h1 {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #cbcbcb;
  font-weight: 600;
  margin: 20px 0 10px 0;
}
.nav a {
  outline: none;
  border: none;
  color: black;
  text-decoration: none;
}
#navDecoration {
  position: absolute;
  left: 0;
  border-left: 5px solid #0050b3;
  width: 65px;
  padding-right: 30px;
  background-image: linear-gradient(
    to right,
    rgba(0, 80, 179, 0.3),
    rgba(245, 245, 245, 0.8)
  );
  height: 35px;
  border-radius: 0 20px 20px 0;
   transition: all 0.1s ease;
    transition-timing-function: linear;
}
</style>
