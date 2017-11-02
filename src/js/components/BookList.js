import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Book from './Book';

const mapStateToProps = (state, ownProps) => {
   return {books: state.books, category: state.category}
}

@connect (mapStateToProps)
export default class BookList extends React.Component {

    render() {
            return (
                    <div className="book-list-main">
                        <div className="book-list">
                        {!!this.props.match.params.id ? 
                            this.props.books.map((item, index) => {
                                if (this.props.category[this.props.match.params.id] == item.type) {
                                    console.log(item);
                                   return <Book item={item} key={index} index={index}/>
                                } else if(this.props.match.params.id == "love"){
                                    if(item.futured == true){
                                        return <Book item={item} key={index} index={index}/>
                                    }
                                }
                            }) :
                            this.props.books.map((item, index) =><Book item={item} key={index} index={index}/>)}
                        </div>
                    </div>
        
        )
    }
}