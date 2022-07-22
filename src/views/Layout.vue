<template>
  <div class="box">
    <div class="left">
      <ul>
        <li v-for="(v, i) in list" :key="i" @click="changeRoute(v)">
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
    console.log(location);
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
        name: 'Sub Home',
        query: true
      }]
    }
  },
  methods: {
    changeRoute(v) {
      let path = v.query ? v.path + '?backUrl=' + location.pathname : v.path
      this.$router.push(path)
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