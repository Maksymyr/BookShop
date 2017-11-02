import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books,
        category: state.category}
}

@connect(mapStateToProps)
export default class Category extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {types: []
    //     }
    // }
    // componentWillMount() {
    //     this.arrayOfSeria();
    // }

    // arrayOfSeria = () => {
    //     let arrayOfSerias = [];
    //     this.props.books.map((item,index) => {
    //         if (!arrayOfSerias.includes(item.type)) {
    //             arrayOfSerias.push(item.type);
    //         }  
    //         this.setState({types: arrayOfSerias})
    //     })
        
    //     this.props.arrayTypes(arrayOfSerias);
    // }
    render(){
        
        return(
            <div className="category_wrap">
                <h3>Categories:</h3>
                <div className="category_body">
                     {this.props.category.map((item,index) =>
                     <Link key={index} className="category__link" to={"/category"+index}>{item}</Link>)}
                  
                </div>
            </div>
        )
    }
}