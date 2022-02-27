import {
    createRouter,
    createWebHistory
} from 'vue-router'
import WarehouseList from '@/components/WarehouseList.vue'
import WarehouseDetail from '@/components/WarehouseDetail.vue'
const routes = [
    {
        path: '/',
        redirect: '/warehouses'
    },
    {
        path: '/warehouses',
        name: 'WarehouseList',
        component: WarehouseList,
        meta: {
            scrollPos: {
                top: 0,
                left: 0,
              },
        }
    },
    {
        path: '/warehouse-details/:warehouseId',
        name: 'WarehouseDetail',
        component: WarehouseDetail
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to){
        if(to.meta){
            let scrollDiv = document.getElementById('scrollDiv');
            if(scrollDiv){ 
               scrollDiv.scrollTop = to.meta.scrollPos.top
            }
        }
        return
    },
});
router.beforeEach((to,from,next)=>{
    if(from.meta){
        let scrollDiv = document.getElementById('scrollDiv');
        if(scrollDiv){ 
            from.meta.scrollPos.top = scrollDiv.scrollTop
        }
    }
    return next()
})

export default router