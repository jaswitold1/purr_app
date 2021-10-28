import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
//interface
import  ICategories  from '../interfaces/ICategories';
import IImgUrls from '../interfaces/IImgUrls';

const Categories:React.FC = () => {
const [categories, setCategories] = useState<ICategories[]>([])
const [imgUrls, setImgUrls] = useState<IImgUrls[][]>([])
/// useEffect fetch for categories
useEffect(() => {
    fetch('https://api.thecatapi.com/v1/categories')
    .then(resp => resp.json())
    .then(resp => setCategories(resp))
    
    
    
}, [])
/// useEffect for category photos
useEffect(() => {
    categories.forEach(element => {
        fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${element.id}`)
        .then(resp => resp.json())
        .then(resp => setImgUrls(prev => [...prev,[{body:resp,categoryName:element.name}]]))

}) 
        
}, [categories])
    





        
    return (
        <ul>
           {
               imgUrls.map(element => {
                   return (
                       <Link to={{pathname:`${element[0].categoryName}`,state:element[0].body[0].categories[0].id}} key={element[0].categoryName}>
                           <img src={element[0].body[0].url} alt="" style={{width:'100px',height:'100px'}} />
                           <span>{element[0].categoryName}</span>
                       </Link>
                   )
               }) 
           }
        </ul>
            

    )
}


export default Categories
