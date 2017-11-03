import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Category from '../components/Category'

import Book from './Book';

const mapStateToProps = (state, ownProps) => {
   return {books: state.books, category: state.category, search: state.search, sidebar: state.sidebar}
}

@connect (mapStateToProps)
export default class BookList extends React.Component {
    

    render() {
            return (

                <div>
                    <Category />                
                    
                    <div className="book-list-main">
                        <div id={this.props.sidebar? "w77" : "w96"} className="book-list" ref="book_list">
                        {!!this.props.match.params.id ? 
                            this.props.books.map((item, index) => {
                                if (this.props.category[this.props.match.params.id] == item.type) {
                                    
                                   return <Book item={item} key={index} index={index}/>
                                } else if(this.props.match.params.id == "love"){
                                    if(item.futured == true){
                                        return <Book item={item} key={index} index={index}/>
                                    }
                                }
                                else if(this.props.match.params.id == "l_d"){
                                    if(item.futured == true){
                                        return <Book item={item} key={index} index={index}/>
                                    }
                                }
                                if (this.props.search != "") {
                                    if (item.name.toLowerCase().includes(this.props.match.params.id.toLowerCase())
                                    ||item.author.toLowerCase().includes(this.props.match.params.id.toLowerCase())
                                    ||item.seria.toLowerCase().includes(this.props.match.params.id.toLowerCase())) {
                                        return <Book item={item} key={index} index={index}/>
                                    }
                                }
                            }) :
                            this.props.books.map((item, index) =><Book item={item} key={index} index={index}/>)}
                        </div>
                    </div>
        </div>
        )
    }
}