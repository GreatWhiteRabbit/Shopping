import {request} from "@/network/request";
export function getHomeMulitdata(){
    return request({
        url:'/home/multidata'
        }
    )
}
export function getHomeData(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}