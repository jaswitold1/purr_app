import { useEffect, useState } from "react";
import { useLocation } from "react-router"





const Category:React.FC = () =>  {
  
   const location = useLocation()
   const [categoryImgs, setCategoryImgs] = useState([])

   useEffect(() => {
     fetch(`https://api.thecatapi.com/v1/images/search?category_ids=15&limit=10`)
     
   }, [])

   if (location) {
     console.log(location.state);
     
   }
   useEffect(() => {
     ////interface for images
     ////fetch for images
     ////id from location.state
     
   }, [])
    
    return (

        <div>
           
           
        </div>
    )
}



export default Category
