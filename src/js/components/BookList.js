import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Category from '../components/Category'

import {searchBook} from '../actions';
import {bindActionCreators} from 'redux';

import Book from './Book';
import Filter from './Filter';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBook}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state, ownProps)
    return !!ownProps.match.params.id
        ? { books: state.books.filter((item, index) => {
            if (state.category[ownProps.match.params.id] == item.type) {
                return item;
            }
            else if(ownProps.match.params.id == "l_d"){
                if(item.futured == true){
                    return item;
                }
            }
            if (state.search != "") {
                if (item.name.toLowerCase().includes(ownProps.match.params.id.toLowerCase())
                ||item.author.toLowerCase().includes(ownProps.match.params.id.toLowerCase())
                ||item.seria.toLowerCase().includes(ownProps.match.params.id.toLowerCase())) {
                    return item;
                }
                         
            }
            
        }), filter: state.filter, search: state.search, }
    : { books: state.books, filter: state.filter, sidebar: state.sidebar }
};


@connect (mapStateToProps, mapDispatchToProps)
export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: this.props.books
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if(nextProps.books !== this.state.books) {
            this.setState({books: nextProps.books});
    
        }
        this.props.searchBook("");
        // console.log(this.props.filter);
        switch(this.props.filter) {
            case("name_a"):
            // console.log(this.props.filter);
            
                this.props.books.sort((item, nextItem) => {if(item > nextItem) {
                    
                }})
                // if( item < nextItem ){
                //     return -1;
                // }else if( item > nextItem ){
                //     return 1;
                // }
                // return 0;
                // })
            
            case("name_z"):
            case("raiting"):            
            case("author_a"):
            case("author_z"):
            case("price_a"):
            case("price_z"):
            default:
                return 
        }
     
    }
  
    render() {
            return (
            <div>    
                <Filter />
                <div>
                    <Category />                
                    <div className="book-list-main">
                         <div id={this.props.sidebar? "w77" : "w96"} className="book-list" ref="book_list">
                            {this.state.books.map((item, index) => <Book item={item} key={index} index={index}/>)}
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
