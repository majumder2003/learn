import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../state";

const Theme = () => {
    const dispatch = useDispatch();
    const {themeC} = bindActionCreators(actionCreator,dispatch)
    return (
        <>
            <button type="button" onClick={() => themeC('red')}>Red</button>
            <button type="button" onClick={() => themeC('white')}>Light</button>
        </>
    )
}

export default Theme;