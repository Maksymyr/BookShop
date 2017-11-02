import React from 'react';
import BookBasket from './BookBasket'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    // if(state.inbasket[0] !=""){
        return {books: state.inbasket}
    // }else{
    //     return {books: [JSON.parse(localStorage.getItem('Basket'))]}
    // }

}

@connect(mapStateToProps)
export default class Basket extends React.Component {
    constructor(props){
        super(props)
    }

    add = () =>{
        if(this.props.books !=""){
            return (
            <div>
                {console.log(this.props.books)}
                {this.props.books.map((item, index)=>{
                return <BookBasket books={item} index={index} key={index}/>
                })}
                <button>buy</button>
            </div>)
        }else{
            return(
                <div>
                    <p>basket null</p>
                </div>
        )
        };
    }

    render(){
        return(
            <div className='basket-list'>
                <h2>basket</h2>
                {this.add()}
            </div>
        );
    }
}
