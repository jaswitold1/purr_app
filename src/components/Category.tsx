import { useEffect, useState } from "react";
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

   useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${location.state}&limit=10`)
     .then(resp => resp.json())
     .then(resp => setCategoryImgs(resp))
     
   }, [location])

   //// incrementing categoryImgs array index to show photo
   const categoryImgsIncrement = () => {
      categoryImgsCount >= 9 ? history.push('/Stats')
      
       : setCategoryImgsCount(prev => prev +1)
   }
   if (categoryImgs) {
     console.log(categoryImgs);
     
   }
  
    
    return (

        <div>
           <p>Would You pet it?</p>
           <button onClick={categoryImgsIncrement}>increment {categoryImgsCount}</button>
           
        </div>
    )
}



export default Category
