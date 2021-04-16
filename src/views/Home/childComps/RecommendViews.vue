<template>
  <div class="recommend">     
          <div v-for= 'item in recommends' class="recommend-item">
              <a :href="item.link">
                  <img :src="item.image" alt="">
                  <div>{{item.title}}</div>
              </a>
          </div>>  
  </div>
</template>

<script>
export default {
  
props:{
    recommends:{
        type:Array,
        defult(){
            return[]
        }
    }
}
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
}
.recommend-item{
    flex: 1;
    padding: 15px 0 20px 0;
    border-bottom: 8px solid #eee;
}
.recommend-item img{
    margin-top: 5px;
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
    

}
</style>