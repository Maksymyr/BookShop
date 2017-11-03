import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {futureBook, addBasket} from '../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({ futureBook, addBasket }, dispatch) );

const mapStateToProps = (state, ownProps) => {
    return {books: state.books, futured: state.futured}
}

@connect (mapStateToProps, mapDispatchToProps)
export default class Book extends React.Component {

    state = {
        flag: 0,

    }
    
    handleBasket =(e) => {
        e.preventDefault();
        this.props.addBasket(this.props.item)
    }
    handleClick = () => {
        this.props.futureBook(this.props.item.name)  
    }

    render() {

            return (
            <div className="book">
                <p className="book_price">{this.props.item.price + " грн."}</p>
                <a id="book_buy" onClick={this.handleBasket} href="#btn">Купить</a>
                <div className="book-inner">

                     <div className="future" ref="futures" style={this.props.item.futured?{backgroundImage: 'url('+ require("../../icon/heart-fill.png")+')'}:{backgroundImage: 'url('+ require("../../icon/heart-empty1.png")+')'} } onClick={this.handleClick}></div> 

                    <Link to="/"><img src={this.props.item.img}/></Link>
                    <p className="book_text"><Link className="book_link" to="/">{this.props.item.name}</Link></p>
                    <p className="book_author">{this.props.item.author}</p>
                    {this.props.item.seria? <p className="book_seria">{"Серия: " +this.props.item.seria}</p>: null}
                    
                    
                    
                </div>
            </div>
        )
    }
}