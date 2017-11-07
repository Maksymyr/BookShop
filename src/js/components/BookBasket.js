import React from 'react';
import Basket from './Basket'
import {connect} from 'react-redux';
import {delfrombasket} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => ( bindActionCreators({ delfrombasket }, dispatch) );

@connect(null, mapDispatchToProps)
export default class BookBasket extends React.Component {
    constructor(props){
        super(props)
    }

    bookbuy = () =>{
        return(
            <div className='basket-book-wrapper'>
                <div key={this.props.index} className='basket-book-one'>
                <img className='basket-book-block basket-img' src={this.props.books.img}/>
                <div className='basket-book-block name-book'>
                <h3>{this.props.books.name}</h3>
                </div>
                <div className='basket-book-block cost'>
                    <p>{this.props.books.price}</p>
                </div>
                <div className='basket-book-block basket-input'>
                    <input className='basket-number' type='number' ref='number' defaultValue='1' min='1' max='99'/>
                  </div>
                <button className='basket-book-block basket-button' onClick={this.del}>Удалить</button>
            </div>
            </div>
        )
    }

    del = () =>{
        this.props.delfrombasket(this.props.index)
    }

    render() {
            return this.bookbuy()
    }
}