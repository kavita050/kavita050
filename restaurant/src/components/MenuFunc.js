import axios from "axios";
import React, { useState, useEffect } from "react";
import CategoryDisplay from "./CategoryDisplay"

export default function MenuFunc(props){
   const [items, setItems] = useState([]);
   const [category, setCategory] = useState('');
  
    useEffect(()=>{
        axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
        .then((resp)=>{
            setItems(resp.data)
            });    
           
    },[])

    function updateCategory(item){
        setCategory(item)
    }

    return(<>
            <div className="category"> 
            <h1>Menu Categories</h1> 
            <ul>   
                {items.map((item)=>(
                <li onClick={()=> updateCategory(item.short_name)} key={item.id}>{item.name} - ({item.short_name})</li> ))}
            </ul> 
             </div>
           
            <CategoryDisplay category={category}/>    
         </>
        );         
}