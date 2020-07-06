import Vue from "vue";
import Vuex from "vuex";
import permission from "@/store/modules/permission"
import { userIngoPlugins } from "./plugins/perist"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { permission },
  plugins: [userIngoPlugins]
});
