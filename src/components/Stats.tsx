import React, {useContext} from 'react'
//Context
import { StatsContext } from '../Context/StatsReducer'

const Stats:React.FC = () => {
    const stats = useContext(StatsContext)
    return (
        <div>
            {stats?.state.seen}
        </div>
    )
}

export default Stats
