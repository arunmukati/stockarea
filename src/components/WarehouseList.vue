<template>
  <div id="scrollDiv" class="homePage overflow-y">
    <div class="search">
      <nav>
        <h5>Warehouses</h5>

        <div class="srch">
          <input
            v-model="searchText"
            v-on:keyup="searchWarehouseList"
            type="text"
            class="search-input"
            placeholder="Warehouse search"
          />
          <div class="div">
            <div
              class="filter dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                xml:space="preserve"
              >
                <desc>Created with Fabric.js 1.7.22</desc>
                <defs></defs>
                <g transform="translate(128 128) scale(0.72 0.72)" style="">
                  <g
                    style="
                      stroke-width: 3px;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      opacity: 1;
                    "
                    transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                  >
                    <path
                      d="M 38.047 90 c -0.507 0 -1.015 -0.128 -1.472 -0.386 c -0.944 -0.532 -1.528 -1.531 -1.528 -2.614 V 45.698 L 4.044 4.813 C 3.356 3.905 3.242 2.686 3.748 1.666 C 4.255 0.645 5.296 0 6.435 0 h 77.129 c 1.14 0 2.18 0.645 2.687 1.666 c 0.507 1.02 0.393 2.239 -0.296 3.147 L 54.952 45.698 v 32.873 c 0 1.049 -0.548 2.021 -1.445 2.565 l -13.904 8.429 C 39.125 89.854 38.586 90 38.047 90 z M 12.475 6 l 27.963 36.877 c 0.396 0.521 0.609 1.158 0.609 1.813 v 36.984 l 7.905 -4.792 V 44.689 c 0 -0.654 0.214 -1.291 0.609 -1.813 L 77.524 6 H 12.475 z M 51.952 78.571 h 0.01 H 51.952 z"
                      style="
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </svg>
              Filter
              <div class="mark" v-if="filter.types.size || filter.cities.size"></div>
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <input
                v-model="filterSearchText"
                type="text"
                class="dropdown-header filter-search-input"
                placeholder="search"
              />
              <div class="filter-scroll" v-on:click="$event.stopPropagation()">
                <h6 class="dropdown-header depart-header">Warehouse Type</h6>
                <div
                  class="filter-drop"
                  v-for="(type, index) in getTypesFilterResult"
                  :key="index"
                >
                  <li class="dropdown-item" v-on:click="setFilterValue(type, 'types')">
                    <input type="checkbox" :checked="filter.types.has(type)" />
                    {{ type }}
                  </li>
                </div>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header country-header">Cities</h6>
                <div
                  class="filter-drop"
                  v-for="(city, index) in getCitiesFilterResult"
                  :key="index"
                >
                  <li class="dropdown-item" v-on:click="setFilterValue(city, 'cities')">
                    <input type="checkbox" :checked="filter.cities.has(city)" />
                    {{ city }}
                  </li>
                </div>
              </div>
              <button class="dropdown-btn" v-on:click="filterWarehouse">Filter</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="tableWarapper">
      <table class="table">
        <thead>
          <tr scope="row">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th>Type</th>
            <th>City</th>
            <th scope="col">Live</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="warehouse in warehouseList" :key="warehouse.id">
            <tr scope="row">
              <td scope="col">
                <h1 class="fs-13 fw-600">
                  {{ warehouse.id }}
                </h1>
              </td>
              <td scope="col">
                <h1 class="fs-13 fw-600">{{ warehouse.name }}</h1>
              </td>
              <td scope="col">
                <h1 class="fs-13 fw-600">
                  {{ warehouse.code }}
                </h1>
              </td>
              <td scope="col">
                <h1 class="fs-13 fw-600">{{ warehouse.type }}</h1>
              </td>
              <td scope="col">
                <h1 class="fs-13 fw-600">{{ warehouse.city }}</h1>
              </td>
              <td scope="col">
                <h1 class="fs-13 fw-600" :class="warehouse.is_live? 'live' : 'not-live'">{{ warehouse.is_live ? 'yes' : 'no' }}</h1>
              </td>
              <td>
                <router-link :to="`/warehouse-details/${warehouse.id}`">
                  Details <img src="@/assets/right-arrow.png" alt="" srcset="" />
                </router-link>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WarehouseList",
  data() {
    return {
      searchText: "",
      filterSearchText: "",
      filter: {
        types: new Set(),
        cities: new Set(),
      },
      types: ["Leasable Space", "Warehouse Service"],
      cities: ["Delhi", "Chennai", "Indore", "Mumbai", "Bangalore", "Guwahati"],
    };
  },
  computed: {
    ...mapState({
      warehouseList: (state) => state.WarehouseList.warehouseList,
    }),
    getTypesFilterResult() {
      return this.filterSearchText == ""
        ? this.types
        : this.types.filter(
            (el) => el.toLowerCase().search(this.filterSearchText.toLowerCase()) > -1
          );
    },
    getCitiesFilterResult() {
      return this.filterSearchText == ""
        ? this.cities
        : this.cities.filter(
            (el) => el.toLowerCase().search(this.filterSearchText.toLowerCase()) > -1
          );
    },
  },
  async mounted() {
    //   console.log("sssssss",this.$route.query)
    let query = this.$route.query;
    this.searchText = query.search || "";
    if (query.types) {
      query.types.split(",").forEach((el) => this.filter.types.add(el));
    }
    if (query.cities) {
      query.cities.split(",").forEach((el) => this.filter.cities.add(el));
    }
    this.fetchWarehouseList();
  },
  methods: {
    async fetchWarehouseList() {
      try {
        let vm = this;
        await vm.$store.dispatch("WarehouseList/fetchWarehouseList");
      } catch (err) {
        console.error("error fetching warehouses -", err);
      }
    },
    async searchWarehouseList() {
      this.$router.replace({ query: { ...this.$route.query,search: this.searchText } });
      this.$route.query.search = this.searchText;
      console.log(this.$router)
      try {
        let vm = this;
        await vm.$store.dispatch("WarehouseList/searchandFilterWarehouse");
      } catch (err) {
        console.error("error fetching warehouses -", err);
      }
    },
    async filterWarehouse() {
      let types = Array.from(this.filter[`types`]);
      let cities = Array.from(this.filter[`cities`]);
        
      this.$router.replace({
        query: {
          ...this.$route.query,
          types: types.toString(),
          cities: cities.toString(),
        },
      });
      this.$route.query.types = types.toString();
      this.$route.query.cities = cities.toString();
      try {
        let vm = this;
        await vm.$store.dispatch("WarehouseList/searchandFilterWarehouse");
      } catch (err) {
        console.error("error fetching warehouses -", err);
      }
    },
    setFilterValue(value, type) {
      if (!this.filter[`${type}`].has(value)) {
        this.filter[`${type}`].add(value);
      } else {
        this.filter[`${type}`].delete(value);
      }
    },
  },
};
</script>
<style scoped>
.homePage {
  width: 100%;
  height: 100%;
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
.search .srch {
  position: relative;
  display: flex;
  align-items: center;
}

.search .search-input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0px 30px;
  background-color: #eeeeee;
  margin-right: 50px;
}
.filter-search-input {
  width: 90%;
  margin: 0 5%;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0px 10px;
  background-color: #eeeeee;
}
.table {
  width: 100%;
}
.table thead tr th {
  border: none;
  font-size: 14px;
  color: #4a6177;
  text-align: start;
}

.table tbody tr td .pImg {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  float: right;
  margin-right: 10px;
}

.table tbody tr td {
  border: none;
  font-size: 13px;
  font-weight: 300;
  padding: 20px 0;
}
.d-flex {
  display: flex;
  align-items: center;
}
.toggleImg {
  width: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.orderbyImg {
  height: 10px;
  margin-left: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.detail {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}
.detail .details {
  margin: 20px;
}
.opened,
.desc {
  transform: rotate(180deg);
}
a {
  text-decoration: none;
  color: #4a6177;
}
.pageDiv {
  position: fixed;
  bottom: 0;
  padding: 15px 0;
  width: 100%;
  background-color: white;
}
.tableWarapper {
  margin-bottom: 30px;
}
.filter {
  font-size: 13px;
  font-weight: 500;
  color: #0050b3;
  stroke: #0050b3;
  fill: #0050b3;
  position: relative;
  padding: 0px 8px;
}
.filter svg {
  width: 10px;
  height: 10px;
  display: inline-block;
}
.filter .mark {
  position: absolute;
  top: 2px;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #0050b3;
}
.dropdown-btn {
  width: 100%;
  background-color: #0050b3;
  font-size: 13px;
  color: white;
  outline: none;
  border: none;
  padding: 4px 0;
}
.dropdown-menu {
  padding-bottom: 0;
}
.filter-drop{
    cursor: pointer;
}
.filter-drop li {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.filter-drop input {
  margin-right: 10px;
}
.filter-scroll {
  max-height: 200px;
  overflow-y: scroll;
  position: relative;
}
.depart-header {
  z-index: 1;
  position: sticky;
  background-color: white;
  top: 0;
}
.country-header {
  z-index: 2;
  position: sticky;
  background-color: white;
  top: 0;
}
.live{
    background: green;
    display: flex;
    text-align: center;
    border-radius: 20px;
    width: fit-content;
    padding: 4px 10px;
    color: white;
}
.not-live{
    background: red;
    display: flex;
    text-align: center;
    border-radius: 20px;
    width: fit-content;
    padding: 4px 10px;
    color: white;
}
</style>
