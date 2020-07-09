<template>
  <div>
    <label for>
      <span>名字</span>
      <input type="text" v-model="account" />
    </label>
    <label for>
      <span>密码</span>
      <input type="password" v-model="password" />
    </label>
    <p class="submit" @click="submit">提交</p>
    <footer>测试CI</footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      account: null,
      password: null
    };
  },
  computed: {},
  methods: {
    ...mapActions("permission", {
      userLogin: "userLogin",
      initUserInfo: "initUserInfo"
    }),
    async submit() {
      //
      console.log("---");
      const response = this.userLogin({
        account: this.account,
        password: this.password
      });
      if (response.code === 200) {
        //
        console.log("-------");
        await this.initUserInfo();
      }
    }
  }
};
</script>

<style scoped>
</style>