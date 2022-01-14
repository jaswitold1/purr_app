import React, {useContext} from 'react'
//Context
import { StatsContext } from '../Context/StatsReducer'
//Router
import {useHistory} from 'react-router-dom'

const Stats:React.FC = () => {
    const history = useHistory()
    const stats = useContext(StatsContext)
    
    //useContext for dispatching action
    const {dispatch} = useContext(StatsContext)
    ////start new - purge stats
    const startNew = () => {
        dispatch('RESET')
        history.push('/')
    }

    return (
        <div>
            <div>
            <li>seen {stats?.state.seen}</li>
            <li>petted {stats?.state.petted}</li>
            <li>didn't pet {stats?.state.didntPet}</li>
            <li>skipped {stats?.state.skipped}</li>
            </div>
            <div>
                <button>Restart the same category</button>
                <button onClick={() => startNew()}>Start new category</button>
            </div>
        </div>
        
    )
}

export default Stats
