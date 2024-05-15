export const dipositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'diposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const addCart = (price) => {
    return (dispatch) => {
        dispatch({
            type: 'addtocart',
            payload: price
        })
    }
}

export const themeC = (theme) => {
    return (dispatch) => {
        dispatch({
            type: 'themeChange',
            payload: theme
        })
    }
}