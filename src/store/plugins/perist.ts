import store from "..";

const userIngoPlugins = (store: any) => {
    //
    store.dispatch('permission/initUserInfo')
    store.subscribe((mutations: any, state: any) => {
        console.log("mutation", mutations)
        //
    })
}

export { userIngoPlugins }