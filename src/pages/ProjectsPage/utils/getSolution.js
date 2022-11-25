export const getSolution = (users, id) => {
    return users.filter((element) => element.userId._id === id)[0]?.settedStatus
}
