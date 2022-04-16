import React, { useState, useEffect } from "react";
import axios from "axios";


export default function CategoryDisplay(props){
    const [categoryData, setCategoryData] = useState([]);

    useEffect(()=>{
        if (props.category){
        axios.get("http://stream-restaurant-menu-svc.herokuapp.com/item?category="+props.category)
        .then((resp)=>{
            setCategoryData(resp.data)
            });    
        }
    },[props.category])
    
    return(<>
    <div className="category-data"> 

    { props.category ?
        <>
        <b>Iteam in Category: ({props.category}) </b>
        <br/>
        <br/>
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
        {categoryData.map((item,index)=>(
            <tr>
                <td>
                {item.name}
                </td>
                <td>
                {item.description}
                </td>
            </tr>

        ))}
        </table>
         </>
    : "" }

    </div>
    
    </>)
}
