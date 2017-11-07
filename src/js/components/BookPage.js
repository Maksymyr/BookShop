import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import BookPageComment from '../components/BookPageComment'
import {bindActionCreators} from 'redux';
import {addComment, addNotify, addBasket} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addComment, addNotify, addBasket}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {item: state.books[ownProps.match.params.id], books: state.books}
 }
 
 @connect (mapStateToProps, mapDispatchToProps)
export default  class BookPage extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        like: false,
        disslike: false,
    }
    handleClick = () => {
        console.log(this)
        if(this.refs.desc.value != "" && this.refs.title.value != ""){    
            let obj = {

                info: {
                    title: this.refs.title.value,
                    desc: this.refs.desc.value,
                    like: 0
                },
                code: this.props.item.code
            }
            this.props.addComment(obj)
            //this.setState({comments: [...this.state.comments, obj]})
            this.refs.title.value = "";
            this.refs.desc.value = "";
            //console.log(this.state.comments)
        }
    } 
    handleLike = () =>{
        this.setState({like: !this.state.like})
        console.log(this)
    }
    handleDiss = () => {
        this.setState({disslike: !this.state.disslike})
    }
    bought = () => {
        this.props.addBasket(this.props.item)
        this.props.addNotify("В корзину добавлен новый товар!")
    }
    render(){
        //console.log(this.props.match.params.id);
        //console.log(this.props.item)
        return(
            <div className="book_page">
                
                    <img id="imeg2" src={this.props.item.img} />
                    <h1 className="page_title">{this.props.item.name}</h1>
                    <p className="page_info"><span>Автор:</span> {this.props.item.author}</p>
                    <p className="page_info"><span>Жанр:</span> {this.props.item.type}</p>
                    {this.props.item.seria? <p className="page_info"><span>Серия:</span> {this.props.item.seria}</p> : null}
                    <div className="price_container">
                    <p id="page_price">{this.props.item.price} грн.</p>
                    <div id="page_buy" onClick={this.bought}>Купить</div>
                    </div>

                    <div className="clear"></div>

                    <h3>Описание книги:</h3>
                    <div>
                    <p className="page_description">{this.props.item.description}</p>
                    <h3>Книги автора: </h3>
                    <div className="similar">

                        {this.props.books.map((itm, index) => {
                            if(this.props.item.author == itm.author){
                                return  <Link to={`page${itm.code}`} key={index}><div  className="small_book">
                                        <img id="imeg" src={itm.img}/>
                                        <p>{itm.name}</p>
                                        </div></Link>
                            }
                        })}
                    </div>
                    </div>

                    <div className="clear"></div>
                    
                    <h3>Отзывы & Обзоры</h3>
                    <div className="review">
                    <p className="page_info"><span>Написать отзыв</span></p>
                    <input ref="title" type="text"/>
                    <textarea ref="desc" rows="10" type="text"/>
                    <button onClick={this.handleClick}>Отправить</button>
                    </div>
                    
                    {this.props.item.comments.length != 0 ? this.props.item.comments.map((item, index) => 
                    <div className="comment" key={index}> 
                        <BookPageComment book={this.props.item.code} id={index} item={item}/>
                    </div>) : null}


            </div>
        )
    }
}