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
      <div style={{display:"flex",flexDirection:'column',alignItems:'center'}}>
        <span style={{marginBottom:'10px',width:'100vw'}}>Would You pet it?</span>
         <div className="categoryOutline" style={ {display:"flex",flexDirection:'column',border:'1px solid lightgrey',borderRadius:'10px'}}>
           {
             categoryImgs.length >0 ? <img className="categoryImg" src={categoryImgs[categoryImgsCount].url} alt="" style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} /> : "loading"
           }
           <span style={{marginTop:'10px'}}>Cat {categoryImgsCount+1}/10</span>
           <div style={{display:'flex',justifyContent:'center'}}>
             <div onClick={pet} style={{margin:'10px',position:'relative'}} className='pet '>
              <img alt='pet' src={Pet} ></img>
             </div>
             <div onClick={skip} style={{margin:'10px',position:'relative'}} className='skip'>
             <img alt='skip' src={Skip} ></img>
             </div> 
             <div onClick={didntPet} style={{margin:'10px',position:'relative'}} className='dontpet'>
               <img alt='dont pet' src={DontPet} ></img>
             </div>

           </div>
           
           
           
        </div>
      </div>  
    )
}



export default Category
