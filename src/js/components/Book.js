import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {futureBook} from '../actions';

const mapDispatchToProps = dispatch => ( bindActionCreators({ futureBook }, dispatch) );

const mapStateToProps = (state, ownProps) => {
    return {books: state.books, futured: state.futured}
}

@connect (mapStateToProps, mapDispatchToProps)
export default class Book extends React.Component {

    state = {
        flag: 0,

    }
    

    handleClick = () => {
        console.log(this.props.item.futured)
        console.log(this.props.index)
        this.props.futureBook(this.props.index)
        
    }

    render() {
        // console.log(this.props.item);
            return (
            <div className="book">
                <p className="book_price">{this.props.item.price + " грн."}</p>
                <a id="fgh" href="#btn">Купить</a>
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