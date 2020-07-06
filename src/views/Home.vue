<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  async created() {
    // await this.initUserInfo();
  },
  methods: {
    ...mapActions("permission", {
      initUserInfo: "initUserInfo"
    })
  }
};
</script>
