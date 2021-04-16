<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-views :recommends = 'recommends'></recommend-views>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <ul><li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>d</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          <li>s</li>
          </ul>

    
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabcontrol/TabControl'


import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendViews from './childComps/RecommendViews'
import FeatureView from './childComps/FeatureView'
import {getHomeMultidata,getHomeGoods} from '../../network/home'




export default {
  data() {
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}

      }
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendViews,
    FeatureView,
    TabControl
    
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
      
    },
    methods:{
      getHomeMultidata(){
        // 1.请求多个数据
        getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        //每次请求page+1页面
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res.data.data.list);
          //将数据放到对应的选项里  扩展字符串的方法
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    }

}
    
</script>

<style>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
}
.tab-control{
  position: sticky;
    top: 44px;
}
</style>