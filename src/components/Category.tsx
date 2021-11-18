import { useEffect, useState } from "react";
import { useLocation } from "react-router"
//interface
import ICategoryImgs from "../interfaces/ICategoryImgs";




const Category:React.FC = () =>  {
  
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
      categoryImgsCount > 9 ? console.log('STATS')
       : setCategoryImgsCount(prev => prev +1)
   }
   if (categoryImgs) {
     console.log(categoryImgs);
     
   }
  
    
    return (

        <div>
           <p>Would You pet it?</p>
           
        </div>
    )
}



export default Category
