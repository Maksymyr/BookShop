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
            <div key={this.props.index} className='book'>
                <div className='name-book'>
                <h3>{this.props.books.name}</h3>
                </div>
                <div className='cost'>
                    <p>{this.props.books.price}</p>
                </div>
                <div>
                    <input type='number' ref='number' defaultValue='1'/>
                  </div>
                <button onClick={this.del}>del</button>
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