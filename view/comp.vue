<template>
  <div>
    <MyCom></MyCom>
    <img v-if="flag" src="../img/strawberry.jpeg" class="pic" @click="dark"/>
    <!-- 以上看起来没有意义的操作仅仅为了验证loader的有效性 -->
  </div>
</template>

<script>
import MyCom from "../components/MyCom.vue";
export default {
  components: {
    MyCom
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
      dark() { // 点击图片消失，点击第三方调用按钮显示
          this.flag = false;
      }
  }
};
</script>

<style scoped>
.pic {
  width: 100px;
  height: 100px;
}
</style>