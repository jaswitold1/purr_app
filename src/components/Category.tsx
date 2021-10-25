import { useLocation } from "react-router"
import ICategories from "../interfaces/ICategories"




const Category:React.FC = () =>  {
  
   let location = useLocation()
   if (location) {
     console.log(location.state);
     
   }
    
    return (

        <div>
           
           
        </div>
    )
}



export default Category
