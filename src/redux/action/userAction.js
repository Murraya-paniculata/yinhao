export const ADDUSER = Symbol("add_user");
export const DELETEUSER = Symbol("delete_user");
export const SETUSER = Symbol("set_user");


export const createAdduser = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUser = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createSetUser = (user) => ({
    type: SETUSER,
    payload: user
})
