import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchBook} from '../actions';
import {bindActionCreators} from 'redux';

import Book from './Book';
import Filter from './Filter';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBook}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    if(ownProps.match.params.id) {
        return {
            books: state.books.filter((item, index) => {
                if (state.category[ownProps.match.params.id] == item.type) {
                    return item;
                }
                else if(ownProps.match.params.id == "l_d"){
                    if(item.futured == true){
                        return item;
                    }
                }     
            })
        }
    }    
    else if(ownProps.match.params.search) { 
        return {books: state.books.filter((item, index) => {
            if (item.name.toLowerCase().includes(ownProps.match.params.search.toLowerCase())
            ||item.author.toLowerCase().includes(ownProps.match.params.search.toLowerCase())
            ||item.seria.toLowerCase().includes(ownProps.match.params.search.toLowerCase()))
                return item;
            })
        }
    }
    else {
        return { books: state.books, filter: state.filter}
    }
};

@connect (mapStateToProps, mapDispatchToProps)
export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: this.props.books, 
            check: null
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: >>> ", nextProps);
        if(nextProps.books !== this.state.books) {
            console.log("a")
            this.setState({books: nextProps.books}); 
        }
        
        if (nextProps.filter !== this.props.filter) {
            console.log("b")
            this.setState({check: nextProps.filter})
        }     
    }

    componentDidUpdate(){
        console.log("Did Update: state.check >>> ", this.state.check)
        if(this.state.check == this.props.filter) {
            switch(this.state.check) {
                case("name_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.name.trim() < nextItem.name.trim()) ? -1 : (item.name.trim() > nextItem.name.trim()) ? 1 : 0), check: null });
                    break;
                case("name_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.name.trim() < nextItem.name.trim()) ? 1 : (item.name.trim() > nextItem.name.trim()) ? -1 : 0), check: null });
                    break;
                case("raiting"):  
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.rating.trim() < nextItem.rating.trim()) ? -1 : (item.rating.trim() > nextItem.rating.trim()) ? 1 : 0), check: null });
                    break;          
                case("author_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.author.trim() < nextItem.author.trim()) ? -1 : (item.author.trim() > nextItem.author.trim()) ? 1 : 0), check: null });
                    break;  
                case("author_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.author.trim() < nextItem.author.trim()) ? 1 : (item.author.trim() > nextItem.author.trim()) ? -1 : 0), check: null });
                    break; 
                case("price_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.price.trim() < nextItem.price.trim()) ? -1 : (item.price.trim() > nextItem.price.trim()) ? 1 : 0), check: null });
                    break; 
                case("price_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.price.trim() < nextItem.price.trim()) ? 1 : (item.price.trim() > nextItem.price.trim()) ? -1 : 0), check: null });
                    break; 
                default:
                    return ;
            }
        }    
    }
    render() {
            return (
                    <div className="book-list-main">
                        <Filter />
                        <div id={this.props.sidebar? "w77" : "w96"}  className="book-list"  ref="book_list">
                            {this.state.books.map((item, index) => <Book item={item} key={index} index={index}/>)}
                        </div>
                    </div>
        
        )
    }
}
