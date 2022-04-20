import { createContext, useReducer} from "react";
import calculationsReducer from './CalculationsReducer'

const CalculationsContext = createContext()


export const CalculationsProvider = ({children}) => {
    const initialState = {
        values: 0
    }

    const [state, dispatch] = useReducer(calculationsReducer, initialState)

    const setValues = (val) => {
        dispatch({
                type: 'CALC',
                payload: val
            })
    }

    const clearValues = () => {
        dispatch({
            type: 'CLEAR'
        })
    }


    return <CalculationsContext.Provider value={{
        values: state.values,
        setValues,
        clearValues
        
    }}>
        {children}
    </CalculationsContext.Provider>
}

export default CalculationsContext