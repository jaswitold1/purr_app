




const Category:React.FC<Ihej> = ({props}) =>  {
   console.log(props.name);
   
    
    return (

        <div>
            {props.name}
           
        </div>
    )
}

interface Ihej {
  props: {
    name:string
    surname:string

  }
}

export default Category
