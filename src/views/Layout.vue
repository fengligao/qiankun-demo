<template>
  <div class="box">
    <div class="left">
      <ul>
        <li v-for="(v, i) in list" :key="i" @click="$router.push(v.path)">
          Layout {{ v.name }} {{ i + 1 }}
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        path: '/layout/home',
        name: 'Home'
      }, {
        path: '/layout/content',
        name: 'Content'
      }, {
        path: '/layout/about',
        name: 'About'
      }, {
        path: '/lay-vue/sub-home',
        name: 'Sub Home'
      }]
    }
  },
}
</script>

<style lang="less" scoped>
.box {
  display: flex;

  .left {
    width: 30%;

    >ul {
      >li {
        line-height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>