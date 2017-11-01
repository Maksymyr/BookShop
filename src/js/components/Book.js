import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books}
}

@connect (mapStateToProps)
export default class Book extends React.Component {
    render() {
        // console.log(this.props.item);
            return (
            <div className="book">
                <div className="book-inner">
                    <p>{this.props.item.name}</p>
                    
                </div>
            </div>
        )
    }
}