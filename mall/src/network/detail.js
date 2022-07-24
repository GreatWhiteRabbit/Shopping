import {request} from "@/network/request";

export function getDetail(id) {
    return request({
        url:'/detail',
        params:{
            iid:id
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods{
    constructor(itemInfo,columns,services) {
        this.title=itemInfo.title;
        this.desc=itemInfo.desc;
        this.newPrice=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.columns=columns;
        this.services=services;
        this.realPrice=itemInfo.lowNowPrice;
    }
}

export  class Shop{
    constructor(shopInfo) {
            this.shopLogo=shopInfo.shopLogo;
            this.score=shopInfo.score;
            this.shopName=shopInfo.name;
            this.fans=shopInfo.cFans;
            this.sells=shopInfo.cSells;
            this.goodsCount=shopInfo.cGoods;
    }
}