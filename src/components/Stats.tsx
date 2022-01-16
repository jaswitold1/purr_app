import React, {useContext} from 'react'
//Assets
import DontPet from '../assets/DontPet.svg'
import Pet from '../assets/Pet.svg'
import Skip from '../assets/Skip.svg'
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
        <div style={{display:'flex',flexDirection:'column',maxWidth:'1024px',width:'100vw'}}>
            <div style={{display:'flex',justifyContent:'left'}}>
                <span style={{margin:'10px'}}>Cats seen: {stats?.state.seen}</span>
            </div>
                <ul style={{display:'flex',flexWrap:'wrap',justifyContent:'center',maxWidth:'1024px',width:'100vw'}}>
                    <li style={{borderColor:'green'}} className='stat'>
                        <div   className='pet statIcon' >
                            <img alt='pet' src={Pet} ></img>
                        </div>
                        <div className='statInfo' >
                            <span style={{color:'green'}} className='statNumber'>
                                {stats?.state.petted}
                            </span>
                            <span className='statSpan'>
                                Cats You petted
                            </span>
                        </div>
                    </li>
                    <li style={{borderColor:'red'}} className='stat'>
                        <div className='dontpet statIcon'>
                            <img style={{marginRight:'12px'}} alt='didnt pet' src={DontPet} ></img>
                        </div>
                        <div className='statInfo' >
                            <span style={{color:'red'}} className='statNumber'>
                                {stats?.state.didntPet}
                            </span>
                            <span className='statSpan'>
                                Cats You didn't pet
                            </span>
                        </div>
                         
                    </li>
                    <li style={{borderColor:'gray'}} className='stat'>
                         <div className='skip statIcon' >
                            <img alt='skip' src={Skip} ></img>
                        </div>
                        <div className='statInfo' >
                            <span style={{color:'gray'}} className='statNumber'>
                                {stats?.state.skipped}
                            </span>
                            <span className='statSpan'>
                                Cats You skipped
                            </span>
                        </div>
                    </li>
                </ul>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
                <button style={{backgroundColor:'orange',color:'white'}} className='button btn-top' onClick={() => startExisting()}>
                    RESTART THE SAME CATEGORY
                </button>
                <button style={{backgroundColor:'white'}} className='button btn-bottom' onClick={() => startNew()}>
                    START NEW CATEGORY
                </button>
            </div>
        </div>
        
    )
}

export default Stats

