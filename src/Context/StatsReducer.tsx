import React, {createContext,useReducer} from 'react'
import type {ReactNode} from 'react'
//interfaces
import IStatsContext from '../interfaces/IStatsContext';
import ICategories from '../interfaces/ICategories';

//type declarations
export type Action = {type:'SEEN'}| {type:'PETTED'} | {type:'DIDNTPET'} | {type:'SKIPPED'} | {type:'RESET'} | {type:'PATH'} 
export type State = IStatsContext
//default state of the Context
const defaultState:IStatsContext = {
    seen:1,
    didntPet:0,
    petted:0,
    skipped:0 ,
    path:'/',
    

}
//createContext
export const StatsContext = createContext<{state:State,dispatch:React.Dispatch<Action>} >({state:defaultState, dispatch:()=>{}})

//reducer
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
                seen:1,
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
            default:
                return state    
        
            
        }
    }
        
    
        
//provider
export const StatsProvider = ({children}:{children:ReactNode}) => {
  const [state, dispatch] = useReducer(StatsReducer, defaultState)

  return (
      <StatsContext.Provider value={{state,dispatch}}>
          {children}
      </StatsContext.Provider>
  )
}
