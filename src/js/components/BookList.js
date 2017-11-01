import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
}

@connect (mapStateToProps)
export default class BookList extends React.Component {
    render() {
        console.log(this.props.books);
            return (
            <div className="book-list-main">
                <div className="book-list">
asd
                </div>
            </div>
        )
    }
}