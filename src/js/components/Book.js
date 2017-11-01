import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
}

@connect (mapStateToProps)
export default class Book extends React.Component {
    render() {
        console.log(this.props.item);
            return (
            <div className="book">
                <div className="book-inner">
                    {/* <div className="future"></div> */}
                    <img src={this.props.item.img}/>
                    <p className="book_text">{this.props.item.name}</p>
                    <p className="book_author">{this.props.item.author}</p>
                    {this.props.item.seria? <p className="book_seria">{"Серия: " +this.props.item.seria}</p>: null}
                    <p className="book_price">{this.props.item.price + " грн."}</p>
                    
                    
                </div>
            </div>
        )
    }
}