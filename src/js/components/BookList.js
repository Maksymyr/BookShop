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
    if(ownProps.match.params.id) {
        if(ownProps.match.url.replace(/[^a-z]/g, '')=='pages'){
            if(state.books.length>20){
                let bbb=state.books.slice((ownProps.match.params.id-1)*20, (ownProps.match.params.id-1)*20+20);
                console.log(bbb)
                return {books: bbb};
            }
        }
        else
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
            }), sidebar: state.sidebar, filter: state.filter,
        }
    }    
    else if(ownProps.match.params.search) { 
        return {books: state.books.filter((item, index) => {
            if (item.name.toLowerCase().includes(ownProps.match.params.search.toLowerCase())
            ||item.author.toLowerCase().includes(ownProps.match.params.search.toLowerCase())
            ||item.seria.toLowerCase().includes(ownProps.match.params.search.toLowerCase()))
                return item;
            }), sidebar: state.sidebar, filter: state.filter,
        }
    }
    else {
        return { books: state.books, filter: state.filter, sidebar: state.sidebar}
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
        if(nextProps.books !== this.state.books) {
            this.setState({books: nextProps.books}); 
        }
        
        if (nextProps.filter !== this.props.filter) {
            this.setState({check: nextProps.filter})
        }     
    }

    componentDidUpdate(){
        
        if(this.state.check == this.props.filter) {
            switch(this.state.check) {
                case("name_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.name.trim() < nextItem.name.trim()) ? -1 : (item.name.trim() > nextItem.name.trim()) ? 1 : 0), check: null });
                    break;
                case("name_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.name.trim() < nextItem.name.trim()) ? 1 : (item.name.trim() > nextItem.name.trim()) ? -1 : 0), check: null });
                    break;
                case("raiting"):  
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.rating < nextItem.rating) ? -1 : (item.rating > nextItem.rating) ? 1 : 0), check: null });
                    break;          
                case("author_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.author.trim() < nextItem.author.trim()) ? -1 : (item.author.trim() > nextItem.author.trim()) ? 1 : 0), check: null });
                    break;  
                case("author_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.author.trim() < nextItem.author.trim()) ? 1 : (item.author.trim() > nextItem.author.trim()) ? -1 : 0), check: null });
                    break; 
                case("price_a"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.price < nextItem.price) ? -1 : (item.price > nextItem.price) ? 1 : 0), check: null });
                    break; 
                case("price_z"):
                    this.setState({ books: this.state.books.sort((item, nextItem) => (item.price < nextItem.price) ? 1 : (item.price > nextItem.price) ? -1 : 0), check: null });
                    break; 
                default:
                    return ;
            }
        }    
    }

    page = () =>{
        if(this.props.books.length>20){
            let a=[];
            for(var i=1; i<Math.floor(this.props.books.length/20)+1; i++){
                if(a[i]=='undefined'){
                    a[i]=<Link to={`/pages${i+1}`}><p key={i} >{i+1}</p></Link>
                }else{
                    a[i]=<Link to={`/pages${i+1}`}><p key={i}>{i+1}</p></Link>
                }
            }
            return a.map((item)=>{return item});
        }
    }    

    render() {
            return (
            <div>    
                <Filter />
                <div>
                    <Category />                
                    <div className="book-list-main">
                        <div id={this.props.sidebar? "w77" : "w96"}  className="book-list"  ref="book_list">
                         {/*console.log(this.state.books)*/} 
                            {this.state.books.slice(0,20).map((item, index) => <Book item={item} key={index} index={index}/>)}
                            {this.page()}
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
