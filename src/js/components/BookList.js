import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Book from './Book';

const mapStateToProps = (state, ownProps) => {
   return {books: state.books, category: state.category, search: state.search, sidebar: state.sidebar}
}

@connect (mapStateToProps)
export default class BookList extends React.Component {
    
    page = () =>{
        if(this.props.books.length>20){
            let a=[];
            for(var i=0; i<Math.floor(this.props.books.length/20); i++){
                if(a[i]=='undefined'){
                    a[i]=<Link to={`/page${i+2}`}><p key={i} >{i+2}</p></Link>
                }else{
                    a[i]=<Link to={`/page${i+2}`}><p key={i}>{i+2}</p></Link>
                }
            }
            return a.map((item)=>{return item});
        }
    }    

    render() {
            return (
                    <div className="book-list-main">
                        <div id={this.props.sidebar? "w77" : "w96"} className="book-list" ref="book_list">
                        {!!this.props.match.params.id ? 
                            this.props.books.map((item, index) => {
                                if(this.props.match.url.replace(/\d/g, '') == '/page'){
                                    return <Book item={item} key={index} index={index}/>
                                }
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
                            {this.page()}
                        </div>
                    </div>
        
        )
    }
}