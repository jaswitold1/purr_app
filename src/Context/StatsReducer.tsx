import React, {createContext,useReducer} from 'react'
import type {ReactNode} from 'react'
import IStatsContext from '../interfaces/IStatsContext';

export type Action = {type:'SEEN'}| {type:'PETTED'} | {type:'DIDNTPET'} | {type:'SKIPPED'} | {type:'RESET'} | {type:'PATH'} | {type:'CATEGORYID',payload:number}
export type State = IStatsContext

const defaultState:IStatsContext = {
    seen:1,
    didntPet:0,
    petted:0,
    skipped:0 ,
    path:'/',
    categoryID:0

}



export const StatsContext = createContext<{state:State,dispatch:React.Dispatch<Action>} >({state:defaultState, dispatch:()=>{}})

function StatsReducer(state: State,action: Action ) {
    
    switch (action.type) {
        case 'SEEN':
            return {
                ...state,
                seen: state.seen +1
            }
            case 'PETTED':
            return {
                ...state,
                petted: state.petted +1
            }
            case 'DIDNTPET':
            return {
                ...state,
                didntPet: state.didntPet +1
            }
            case 'SKIPPED':
            return {
                ...state,
                skipped: state.skipped +1
            }
            case 'RESET':
            return {
                ...state,
                seen:0,
                didntPet:0,
                petted:0,
                skipped:0 ,
                path:'/',
            }
            case 'PATH':
            return {
                ...state,
                path: window.location.pathname
            }
            case 'CATEGORYID':
            return {
                ...state,
                categoryID: action.payload
            }
        
        default:
            return state    
    
        
    }
}

export const StatsProvider = ({children}:{children:ReactNode}) => {
  const [state, dispatch] = useReducer(StatsReducer, defaultState)

  return (
      <StatsContext.Provider value={{state,dispatch}}>
          {children}
      </StatsContext.Provider>
  )
}
