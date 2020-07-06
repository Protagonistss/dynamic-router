export const getUserInfo = () => {
    return new Promise((resolve: any, reject: any) => {
        resolve({ code: 200, message: "success", data: { name: "huangshan" } })
    })
}

export const login = (payloads: any) => {
    return new Promise((resolve: any, reject: any) => {
        resolve({ code: 200, message: "success", data: { ...payloads } })
    })
}