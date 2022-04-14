export const LOGINUSER = Symbol("login-user");

export const loginUserAction = (user) => ({
    type: LOGINUSER,
    payload: user
})
