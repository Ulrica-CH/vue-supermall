<template>
  <div class="tab-control">
    <div v-for= '(item,index) in titles' 
    class="tab-control-item" 
    :class="{active: index === currentIndex}" 
    @click = 'tabitemClick(index)'>
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
            return{
                currentIndex: 0
            }
        },
    methods:{
        tabitemClick(index) {
            this.currentIndex = index
        }
    
}
}

</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    
}
.tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 44px;
    

}
.active{
   color:var(--color-high-text)
}
.active span {
    border-bottom: 1px solid red;
    padding: 5px;
}
</style>