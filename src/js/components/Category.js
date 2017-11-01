import React from 'react';
import {Link} from "react-router-dom";



export default class Category extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        link_list: [
            {
                title: "dsadas",
                link: "hjj"
            },
            {
                title: "Научные книги",
                link: "hjj"
            },
            {
                title: "dsadas",
                link: "hjj"
            }
            
        ]
    }

    render(){
        return(
            <div className="category_wrap">
                <h3>Categories:</h3>
                <div className="category_body">
                    {this.state.link_list.map((item,index) => <Link key={index} className="category__link" to={item.link}>{item.title}</Link>)}
                </div>
            </div>
        )
    }
}