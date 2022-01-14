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

  //utilised uselocation hook not to repeat code fetching category id
   useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${location.state}&limit=10`)
     .then(resp => resp.json())
     .then(resp => setCategoryImgs(resp))
     
   }, [location])
  //useContext for incrementing seen pictures and updating state
   const {dispatch} = useContext(StatsContext)
   const {state} = useContext(StatsContext)
   
  //// incrementing categoryImgs array index to show photo
   ////pet functionality
   const pet = () => {
    
    if (state?.seen < 9) {
       
      dispatch('PETTED')
      dispatch('SEEN')
      setCategoryImgsCount(prev => prev+1)
        
      }  else {
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
   ////skip functionality
   const skip = () => {
    
    if (state?.seen < 9) {
      
      dispatch('SKIPPED')
      dispatch('SEEN')
      setCategoryImgsCount(prev => prev+1)
        
      }  else {
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
   ////didnt pet
   const didntPet = () => {
    
    if (state?.seen < 9) {
      
      dispatch('DIDNTPET')
      dispatch('SEEN')
      setCategoryImgsCount(prev => prev+1)
        
      }  else {
        history.push('/Stats') 
        setCategoryImgsCount(0)
      }
      
   }
  
   
  
    return (

        <div>
           <span>Would You pet it?</span>
           {
             categoryImgs.length >0 ? <img src={categoryImgs[categoryImgsCount].url} alt="" style={{width:'100px',height:'100px'}} /> : "loading"
           }
           <span>Cat {categoryImgsCount+1}/10</span>
           <div>
             <img src={Pet} onClick={pet}></img>
             <img src={Skip} onClick={skip}></img>
             <img src={DontPet} onClick={didntPet}></img>
           </div>
           
           
           
        </div>
    )
}



export default Category
