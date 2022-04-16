import axios from "axios";
import React from "react";

export default class MenuItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items :  [],
            name: ''
           
        };
    }
    componentDidMount(){
        axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
        .then((resp)=>{
           this.setState({items:resp.data});
           
        }); 
    }
    render(){
        const{items} = this.state;
        return(<>
                    <h1>Menu Categories</h1> 
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item)=>(<tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>))}

                        </tbody>
                    </table>
                 </>
        );         
    }
}