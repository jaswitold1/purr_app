import React, { useEffect, useState, createContext } from "react";
//Assets
import DontPet from '../assets/DontPet.svg'
import Pet from '../assets/Pet.svg'
import Skip from '../assets/Skip.svg'
//Interfaces
import ICategoryImgs from "../interfaces/ICategoryImgs";
// Router
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router"


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
   
   //// incrementing categoryImgs array index to show photo
   const categoryImgsIncrement = () => {
      categoryImgsCount >= 9 ? 
      history.push('/Stats') :
      setCategoryImgsCount(prev => prev +1)
   }
   if (categoryImgs) {
     console.log(categoryImgs);
     
   }
   
    ///// zastanowic sie jak wyrenderowac w /stats liczby z category
    /////context API ??
    /////albo nie zmieniac routa na stats i odpada renderowanie 
    /////nowego komponentu jestesmyw starym i mamy stare liczby
    return (

        <div>
           <span>Would You pet it?</span>
           {
             categoryImgs.length >0 ? <img src={categoryImgs[categoryImgsCount].url} alt="" style={{width:'100px',height:'100px'}} /> : "loading"
           }
           <span>Cat {categoryImgsCount+1}/10</span>
           <div>
             <img src={Pet} onClick={categoryImgsIncrement}></img>
             <img src={Skip} onClick={categoryImgsIncrement}></img>
             <img src={DontPet} onClick={categoryImgsIncrement}></img>
           </div>
           
           
           
        </div>
    )
}



export default Category
