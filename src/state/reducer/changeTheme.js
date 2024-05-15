const changeTheme = (state='',action) => {
    if(action.type === 'themeChange') {
        return action.payload;
    }
    else {
        return state;
    }
}
export default changeTheme;