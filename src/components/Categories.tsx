import {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
//interface
import  ICategories  from '../interfaces/ICategories';
import IImgUrls from '../interfaces/IImgUrls';
//Context
import { StatsContext } from '../Context/StatsReducer';

const Categories:React.FC = () => {
const [categories, setCategories] = useState<ICategories[]>([])
const [imgUrls, setImgUrls] = useState<IImgUrls[][]>([])

///dispatch for categoryID
const {dispatch} = useContext(StatsContext)

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
        <ul className='categories'>
        
           {
               imgUrls.map(element => {
                   return (
                       <Link to={{pathname:`${element[0].categoryName}`}}
                             key={element[0].categoryName} 
                             onClick={()=>dispatch({type:'CATEGORYID',payload:element[0].body[0].categories[0].id})}
                             style={{display:'flex',justifyContent:'center',alignItems:'end' ,position:'relative',height:'300px',width:'300px',margin:'10px'}}>
                                 
                           <span style={{backgroundColor:'white', padding:'10px 30%',marginBottom:'10px', borderRadius:'10px',fontWeight:'bold'}} >{element[0].categoryName}</span>
                           <img src={element[0].body[0].url} alt="" style={{zIndex:'-1' ,width:'300px',height:'300px',position:'absolute',top:'0',left:'0'}} />
                       </Link>
                   )
               }) 
           }
        </ul>
            

    )
}


export default Categories
