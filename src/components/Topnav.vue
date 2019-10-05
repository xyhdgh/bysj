<template>
  <div class="container">
    <div class="clearfix navbar_right_container">
      <div class="navbar_left">让旅行更美好！</div>
      <div class="navbar_right">
        <ul class="clearfix">
          <li>
            <router-link to="/login">{{login}}</router-link>
            <span>|</span>
          </li>
          <li>
            <router-link to="/register">{{register}}</router-link>
            <span>|</span>
          </li>
          <li>
            <router-link to="/message">消息通知</router-link>
            <span>|</span>
          </li>
          <li class="check_order">
            <router-link to="/order" class="order">查看订单</router-link>
            <i
              class="iconfont icon-triangle-copy-copy-copy"
              @click="goOrder"
              @mouseover="showOrders"
              ref="icon"
            ></i>
            <div v-show="isShow" class="control-show-orders" @mouseleave="hideOrders">
              <a>酒店订单</a>
              <a>机票订单</a>
              <a>火车票订单</a>
              <a>门票订单</a>
              <a>团购订单</a>
              <a>度假订单</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topnav",
  data() {
    return {
      login: "登录",
      register: "注册",
      isShow: false
    };
  },
  methods: {
    goOrder() {
      this.$router.push("/order");
    },
    showOrders() {
      this.isShow = true;
      this.$refs.icon.style.transform = "rotate(180deg)";
    },
    hideOrders(){
      this.isShow = false;
      this.$refs.icon.style.transform = "rotate(0deg)";
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.container {
  position: relative;
}
ul li {
  float: left;
  list-style: none;
  font-size: 15px;
}
a {
  text-decoration: none;
  padding: 0 5px;
  color: #2c3e50;
  font-size: 15px;
}
.navbar_right {
  float: right;
  padding-right: 50px;
}
.navbar_right_container {
  padding: 10px 0;
  background: linear-gradient(90deg, #13e09e 19%, #478685 58%, #8cf593 100%);
  position: relative;
  z-index: 10;
}
a:hover {
  color: #ff6700;
}
.navbar_left {
  float: left;
  font-size: 15px;
  color: #2c3e50;
  padding-left: 2%;
}
.order {
  padding: 0 0 0 5px;
}
.check_order i {
  display: inline-block;
  transition: all 0.5s ease;
}
.check_order i:hover {
  color: #ff6700;
  cursor: pointer;
  /* transform: rotate(180deg); */
}
.control-show-orders {
  width: 80px;
  border: 1px solid #d3d3d3;
  position: absolute;
  right: 1px;
  top: 30px;
  background-color: #fff;
}
.control-show-orders a {
  display: block;
  width: 80px;
  text-align: center;
  padding: 1px;
}
.control-show-orders a:hover {
  color: #fff;
  background-color: #00bcd4;
}
.check_order {
  position: relative;
}
</style>