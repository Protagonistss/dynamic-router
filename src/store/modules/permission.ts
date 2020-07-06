import { getUserInfo, login } from "@/api/permission"
import router from "@/router/index"
import { generateRoutes } from "@/constants/router"
const state = {
    userInfo: null,
}
const actions = {
    async initUserInfo(ctx: any) {
        const response = await getUserInfo()
        console.log("get user info response", response)
        router.addRoutes(generateRoutes)
        return response
    },

    async userLogin(ctx: any, payloads: any) {
        const response: any = await login(payloads)
        if (response.code === 200) {
            sessionStorage.setItem('auth', JSON.stringify(response.data))
            router.addRoutes(generateRoutes)
            router.push({ path: '/first' })
        }
        return response
    }
}

const mutations = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}