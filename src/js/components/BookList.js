import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Book from './Book';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
}

@connect (mapStateToProps)
export default class BookList extends React.Component {
    state = {

    }
    render() {
        // console.log(this.props.books);
            return (

            <div className="book-list-main">
                <div className="book-list">
                    {this.props.books.map((item, index) =><Book item={item} key={index} index={index} />
                        
                    
                    )}
                </div>
            </div>
        )
    }
}