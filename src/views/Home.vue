<template>
  <!-- 主页面 -->
  <div class="home">
    <!-- 头部导航栏 -->
    <Topnav></Topnav>
    <!-- 图片 输入框 图片 -->
    <div class="content_top clearfix">
      <div class="ct-left"></div>
      <div class="ct-right"></div>
      <Inputfield class="ct-middle"></Inputfield>
    </div>
    <!-- 功能导航栏 -->
    <Navigation></Navigation>
    <div class="content-middle clearfix">
      <Ticketform></Ticketform>
      <div class="tour_one">
        <img src="../assets/images/tour_one.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>

import Topnav from '@/components/Topnav.vue';
import Inputfield from '@/components/Inputfield.vue';
import Navigation from '@/components/Navigation.vue';
import Ticketform from '@/views/Ticketform.vue';

export default {
  name: 'home',
  components: {
    Topnav,
    Inputfield,
    Navigation,
    Ticketform
  }
}
</script>

<style scoped>
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
.content_top{
  margin-top: 20px;
}
.ct-left,.ct-right{
  width: 200px;
  height: 130px;
}
.ct-left{
  float: left;
  background: url("../assets/images/tourist.png?__sprite") no-repeat center/100%
}
.ct-right{
  float: right;
  background: url("../assets/images/tourist.jpg?__sprite") no-repeat center/100%
}
.ct-middle{
  width: calc(100% - 400px);
  height: 130px;
  margin-left: 200px;
  position: relative;
}
.content-middle{
  margin-top: 20px;
}
.tour_one{
  float: right;
  width: 384px;
  height: 195px;
}
.tour_one img{
  width: 384px;
  height: 250px;
}
</style>
