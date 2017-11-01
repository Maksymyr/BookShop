import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import Book from './Book';

// this.props.arrayTypes[this.props.match.params.id] == item.type 
const mapStateToProps = (state, ownProps) => {
    return {books: state.books.filter((item, index) => ownProps.arrayTypes[ownProps.match.params.id] == item.type )}
}
@withRouter
@connect (mapStateToProps)
export default class CategoryList extends React.Component {
    render() {
        // console.log(this.props.arrayTypes);
            return (
                <div className="book-list-main">
                    <div className="book-list">
                        {this.props.books.map((item, index) => <Book item={item} key={index} index={index} />)}
                    </div>
                </div>
        )
    }
}