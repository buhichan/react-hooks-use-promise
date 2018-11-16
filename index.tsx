import * as React from "react"

export default function usePromise<T>(fn:()=>Promise<T>){
    const initialState = {
        value:undefined as T | undefined,
        loading:false,
        error:null as Error | null
    }
    const [state,setState] = React.useState(initialState)

    const loadValue=()=>{
        setState({
            ...state,
            loading:true,
        })
        fn().then(res=>{
            setState({
                loading:false,
                value:res,
                error:null
            })
        },err=>{
            setState({
                loading:false,
                value:null,
                error:err
            })
        })
    }

    if(state.value === undefined && !state.loading){
        loadValue()
    }

    return {
        ...state as typeof initialState,
        setState:setState as (newState:typeof initialState)=>void,
        loadValue:loadValue as ()=>void,
    }
}