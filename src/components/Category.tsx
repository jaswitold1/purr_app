import React, { useEffect, useState, useContext } from "react";
//Assets
import DontPet from '../assets/DontPet.svg'
import Pet from '../assets/Pet.svg'
import Skip from '../assets/Skip.svg'
//Interfaces
import ICategoryImgs from "../interfaces/ICategoryImgs";
// Router
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router"
//Context
import { StatsContext } from "../Context/StatsReducer";


const Category:React.FC = () =>  {

   let history = useHistory()
  
   const location = useLocation()
   const [categoryImgs, setCategoryImgs] = useState<ICategoryImgs[]>([])
   const [categoryImgsCount, setCategoryImgsCount] = useState(0)
   //context state
   const stats = useContext(StatsContext) 
  
   useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${stats.state.categoryID}&limit=10`)
     .then(resp => resp.json())
     .then(resp => setCategoryImgs(resp))
         
         
    //pathname for further use in stats - restart same category button
      dispatch({type:'PATH'})
 
   }, [location])
 
  //useContext for incrementing seen pictures and updating state
   const {dispatch} = useContext(StatsContext)
   const {state} = useContext(StatsContext)
 
  //// incrementing categoryImgs array index to show photo
   ////pet functionality
   const pet = () => {
    
    if (state?.seen < 10) {
       
      dispatch({type:'PETTED'})
      dispatch({type:'SEEN'})
      setCategoryImgsCount(prev => prev+1)  
      }  else {
        dispatch({type:'PETTED'})
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
   ////skip functionality
   const skip = () => {
    
    if (state?.seen < 10) {
      
      dispatch({type:'SKIPPED'})
      dispatch({type:'SEEN'})
      setCategoryImgsCount(prev => prev+1)
      }  else {
        dispatch({type:'SKIPPED'})
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
   ////didnt pet
   const didntPet = () => {
    
    if (state?.seen < 10) {
      
      dispatch({type:'DIDNTPET'})
      dispatch({type:'SEEN'})
      setCategoryImgsCount(prev => prev+1)
      }  else {
        dispatch({type:'DIDNTPET'})
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
  
   
  
   
  
    return (

        <div>
           <span>Would You pet it?</span>
           {
             categoryImgs.length >0 ? <img src={categoryImgs[categoryImgsCount].url} alt="" style={{width:'300px',height:'300px'}} /> : "loading"
           }
           <span>Cat {categoryImgsCount+1}/10</span>
           <div>
             <img alt='pet' src={Pet} onClick={pet}></img>
             <img alt='skip' src={Skip} onClick={skip}></img>
             <img alt='dont pet' src={DontPet} onClick={didntPet}></img>
           </div>
           
           
           
        </div>
    )
}



export default Category
