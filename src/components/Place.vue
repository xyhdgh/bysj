<template>
  <div id="place-content">
    <div>
      <ul class="clearfix">
        <li v-for="(item,index) in areaClassify" :key="index" 
        @click="showOutline(item.id)"
        :class="{outline: item.outlineStyle}">
          {{item.name}}
          <div class="triangle" v-show="item.showTriangle"></div>
        </li>
      </ul>
    </div>
    <div class="area-content clearfix" v-on:click="$emit('test')">
      <div v-for="(item,index) in hotAreaList" :key="index" class="hotarea" >
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div class="ac-bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "place",
  data() {
    return {
      areaClassify: [
        {
          name: "国内热门",
          id: 0,
          outlineStyle: true,
          showTriangle: true
        },
        {
          name: "ABCD",
          id: 1,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "EFGH",
          id: 2,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "JKLM",
          id: 3,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "NPQRS",
          id: 4,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "TWXYZ",
          id: 5,
          outlineStyle: false,
          showTriangle: false
        }
      ],
      hotAreaList: ["上海","北京","成都","昆明","西安","深圳","重庆","杭州","厦门",
      "乌鲁木齐","广州","海口","哈尔滨","南京","武汉","长沙"],
      val:"aaaaa"
    }
  },
  methods: {
    showOutline(id){
      let arr = [];
      this.areaClassify.map((item) => {
        if(item.id == id){
          item.outlineStyle = true;
          item.showTriangle = true;
        }else{
          arr.push(item);
        }
      })
      arr.map((item) => {
        item.outlineStyle = false;
        item.showTriangle = false;
      })
    },
    placeName(){
      this.val="aaaa";
      console.log(this)
      this.$emit("place-name",this.val);
    }
  },
}
</script>
<style scoped>
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
a{
  text-decoration: none;
  display: block;
  color: #333;
  padding: 0 5px;
  text-align: center;
  line-height: 22px;
  height: 22px;
  width: 87px;
  font-size: 14px;
}
ul{
  width: 100%;
  padding-left: 0;
  height: 30px;
  margin-block-start: 0;
  margin-block-end: 0;
}
ul li{
  list-style: none;
  float: left;
  width: 64px;
  font-size: 13px;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  padding-right: 1px;
  position: relative;
}
ul li:hover{
  color: #00d0d4;
  cursor: pointer;
}
#place-content{
  width: 392px;
  height: 30px;
  margin-top: 0;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 67px;
  left: 28px;
  border: 1px solid rgba(170, 170, 170, 0.932);
}
.triangle{
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 5px solid #00d0d4;
  border-top: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 21px;
  left: 28px;
}
.area-content{
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(170, 170, 170, 0.932);
  border-top: none;
  margin-top: 1px;
  position: absolute;
  top: 31px;
  left: -1px;
}
.hotarea{
  width: 96px;
  height: 22px;
  padding-top: 3px;
  float: left;
}
.ac-bottom{
  width: 392px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: -1px;
  border-left: 1px solid rgba(170, 170, 170, 0.932); 
  border-right: 1px solid rgba(170, 170, 170, 0.932); 
  border-bottom: 1px solid rgba(170, 170, 170, 0.932); 
}
.hotarea:hover{
  background-color: #00d0d4;
}
</style>