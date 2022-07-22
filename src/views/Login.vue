<template>
  <div>
    <input type="text" v-model="token">
    <button @click="save">保存登录</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        token: ''
      }
    },
    methods: {
      save() {
        if(this.token == '') {
          alert('请输入token')
          return false
        }
        localStorage.setItem('token', this.token);
        setTimeout(() => {
          this.$router.push('/home')
        }, 2000)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>