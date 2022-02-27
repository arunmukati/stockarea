// import axios from "../../shared/axios";
import router from '@/router'
const state = {
  warehouseList: undefined,
  allWarehouseList: [
    {
      "name" : "Warehouse-165",
      "code" : "W-00001",
      "id" : 1,
      "city": "Delhi",
      "space_available": 1234,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-32",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-276",
      "code" : "W-00002",
      "id" : 2,
      "city": "Chennai",
      "space_available": 124,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-3039",
      "code" : "W-00003",
      "id" : 3,
      "city": "Indore",
      "space_available": 134,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-324",
      "code" : "W-00004",
      "id" : 4,
      "city": "Chennai",
      "space_available": 12,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-5454",
      "code" : "W-00005",
      "id" : 5,
      "city": "Chennai",
      "space_available": 1243434,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-4345",
      "code" : "W-00006",
      "id" : 6,
      "city": "Chennai",
      "space_available": 1,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-3455",
      "code" : "W-00007",
      "id" : 7,
      "city": "Mumbai",
      "space_available": 4,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-2",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-23455",
      "code" : "W-00008",
      "id" : 8,
      "city": "Bangalore",
      "space_available": 3456,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-21",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-6457",
      "code" : "W-00009",
      "id" : 9,
      "city": "Bangalore",
      "space_available": 1234545,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-32456",
      "code" : "W-000010",
      "id" : 10,
      "city": "Guwahati",
      "space_available": 121234,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-3245678",
      "code" : "W-000011",
      "id" : 11,
      "city": "Delhi",
      "space_available": 98,
      "type" : "Leasable Space",
      "cluster" : "cluster-v-2",
      "is_registered" : true,
      "is_live" : false
    },
    {
      "name" : "Warehouse-4567",
      "code" : "W-000012",
      "id" : 12,
      "city": "Indore",
      "space_available": 97,
      "type" : "Warehouse Service",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : true
    },
    {
      "name" : "Warehouse-458",
      "code" : "W-000013",
      "id" : 13,
      "city": "Delhi",
      "space_available": 654,
      "type" : "Leasable Space",
      "cluster" : "cluster-a-1",
      "is_registered" : true,
      "is_live" : false
    }
  ],
  filteredWarehouseList:undefined,
  warehouseDetails: undefined,
};

const getters = {};

const actions = {
  async fetchWarehouseList({ commit , dispatch}) {
    let query = router.currentRoute._value.query;
    if(query=={}){
      commit("fetchAllWarehouseList");
    }
    else{
        dispatch('searchandFilterWarehouse');
    }
  },
  async fetchWarehouseDetails({ commit },warehouseId) {
    commit("fetchWarehouseDetails", warehouseId);
},
  async searchandFilterWarehouse({commit}){
    let query = router.currentRoute._value.query;
    commit('fetchAllWarehouseList');
    commit("searchWarehouse",query.search);
    commit("filterWarehouse",query);
    commit('fetchWarehouseList');
  },
};

const mutations = {
    fetchAllWarehouseList: (state) => {
        state.warehouseList = state.allWarehouseList;
      },
  fetchWarehouseList: (state) => {
    state.warehouseList = state.filteredWarehouseList;
  },
  fetchWarehouseDetails: (state, data) => {
    state.warehouseDetails = state.allWarehouseList.find(el=> el.id==data);
  },
  searchWarehouse:(state,data)=>{
     
    if(data){
        data= data.toLowerCase();
      state.filteredWarehouseList = state.allWarehouseList.filter(el=> el.name.toLowerCase().search(data)>-1 || el.code.toLowerCase().search(data)>-1);
    }
    else{
      state.filteredWarehouseList = state.allWarehouseList;
    }
  },
  filterWarehouse: (state,data)=>{
    if(!state.filteredWarehouseList){
      state.filteredWarehouseList = state.allWarehouseList;
    }
    if(data.types && data.types!=''){
      let typs = data.types.split(',');
        state.filteredWarehouseList = state.filteredWarehouseList.filter(el=>typs.includes(el.type));
    }
    if(data.cities && data.cities!=''){
        let cities = data.cities.split(',');
          state.filteredWarehouseList = state.filteredWarehouseList.filter(el=>cities.includes(el.city));
    }
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};