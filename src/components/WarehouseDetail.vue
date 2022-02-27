<template>
  <div class="homePage overflow-y">
    <div class="search">
      <nav>
        <div class="back" v-on:click="$router.go(-1)">
          <img src="@/assets/left-arrow-15.png" alt="" srcset="" />
          Back
        </div>
        <div class="srch"></div>
      </nav>
    </div>
    <div class="details" v-if="warehouseDetails">
        <h1>Id - <span>{{warehouseDetails.id}}</span></h1>
        <h1>Name - <span>{{warehouseDetails.name}}</span></h1>
        <h1>Code - <span>{{warehouseDetails.code}}</span></h1>
        <h1>City - <span>{{warehouseDetails.city}}</span></h1>
        <h1>Space Available - <span>{{warehouseDetails.space_available}}</span></h1>
        <h1>Type - <span>{{warehouseDetails.type}}</span></h1>
        <h1>Cluster - <span>{{warehouseDetails.cluster}}</span></h1>
        <h1>Registered - <span>{{warehouseDetails.is_registered}}</span></h1>
        <h1>Live - <span>{{warehouseDetails.is_live}}</span></h1>
    </div>
   
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WarehouseDetail",
  computed: {
    ...mapState({
      warehouseDetails: (state) => state.WarehouseList.warehouseDetails,
    }),
  },
  async mounted() {
    try {
      let vm = this;
      await vm.$store.dispatch(
        "WarehouseList/fetchWarehouseDetails",
        vm.$route.params.warehouseId
      );
    } catch (err) {
      console.error("error fetching checkins -", err);
    }
  },
};
</script>

<style scoped>
.homePage {
  width: 100%;
  height: 100%;
}
.back {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
.back img {
  width: 12px;
  margin-right: 5px;
}
a {
  text-decoration: none;
  color: #4a6177;
}
.search {
  position: sticky;
  top: 0;
  padding-top: 0;
  z-index: 2;
  background-color: #f5f5f5;
  box-shadow: 0px 25px 12px #f5f5f5;
}
.search nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 30px;
}

.search nav h5 {
  font-weight: 500;
  font-size: 1rem;
}
.details{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
.details h1{
font-size: 15px;
}
</style>
