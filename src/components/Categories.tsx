import {useState} from 'react';



const Categories:React.FC = () => {
const [categories, setCategories] = useState([])

    fetch('https://api.thecatapi.com/v1/categories')
    .then(resp => resp.json())
    .then(resp => setCategories(resp))

    return (
        <div>
            hej
        </div>
    )
}


export default Categories
