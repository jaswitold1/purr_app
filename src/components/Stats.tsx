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
        dispatch({type:'RESET'})
        history.push('/')
    }
    ////start existing category - purge stats
    const startExisting = () => {
        history.push(stats.state.path)
        dispatch({type:'RESET'})
    }

    return (
        <div>
            <span>seen {stats?.state.seen}</span>
                <div>
                    <li>petted {stats?.state.petted}</li>
                    <li>didn't pet {stats?.state.didntPet}</li>
                    <li>skipped {stats?.state.skipped}</li>
                </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <button onClick={() => startExisting()}>Restart the same category</button>
                <button onClick={() => startNew()}>Start new category</button>
            </div>
        </div>
        
    )
}

export default Stats
