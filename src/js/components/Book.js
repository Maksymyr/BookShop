import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
}

@connect (mapStateToProps)
export default class Book extends React.Component {

    state = {
        flag: 0,

    }
    handleEmpty = () => {
        this.refs.futures.style.background = 'url('+ require("../../icon/heart-empty1.png")+')';
        this.refs.futures.style.backgroundSize= "100% 100%"
        //+require("../../icon/bascket.png")+
    }

    handleFill = () => {
        console.log(this.refs.futures);
    
        this.refs.futures.style.background = 'url('+ require("../../icon/heart-fill.png")+')';
        this.refs.futures.style.backgroundSize= "100% 100%"
        
    }

    render() {
        // console.log(this.props.item);
            return (
            <div className="book">
                <p className="book_price">{this.props.item.price + " грн."}</p>
                <div className="book-inner">
                     <div className="future" ref="futures" style={{backgroundImage: 'url('+ require("../../icon/heart-empty1.png")+')'}} onMouseEnter ={this.handleFill} onMouseLeave={this.handleEmpty}></div> 
                    <Link to="/"><img src={this.props.item.img}/></Link>
                    <p className="book_text"><Link className="book_link" to="/">{this.props.item.name}</Link></p>
                    <p className="book_author">{this.props.item.author}</p>
                    {this.props.item.seria? <p className="book_seria">{"Серия: " +this.props.item.seria}</p>: null}
                    
                    
                    
                </div>
            </div>
        )
    }
}