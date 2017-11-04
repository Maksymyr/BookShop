import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {item: state.books[ownProps.match.params.id], books: state.books}
 }
 
 @connect (mapStateToProps)
export default  class BookPage extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        counter: 0,
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
                    <div id="page_buy">Купить</div>

                    
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
                    <input type="text"/>
                    <textarea rows="10" type="text"/>
                    <button>Отправить</button>
                    </div>

            </div>
        )
    }
}