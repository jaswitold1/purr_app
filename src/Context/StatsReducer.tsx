import React, {createContext,useReducer} from 'react'
import type {ReactNode} from 'react'
import IStatsContext from '../interfaces/IStatsContext';

export type Action = 'SEEN' | 'PETTED' | 'DIDNTPET' | 'SKIPPED'
export type State = typeof defaultState

const defaultState = {
    seen:0,
    didntPet:0,
    petted:0,
    skipped:0 ,
}

export const StatsContext = createContext<{state:State,dispatch:React.Dispatch<Action>} >({state:defaultState, dispatch:()=>{}})

function StatsReducer(state: State,action: Action ) {
    switch (action) {
        case 'SEEN':
            return {
                ...state,
                seen: state.seen +1
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
