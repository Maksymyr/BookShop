import React from 'react';
import BookBasket from './BookBasket'
import {connect} from 'react-redux';
import {delallbasket, addNotify} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => ( bindActionCreators({ delallbasket, addNotify }, dispatch) );

const mapStateToProps = (state) => {
    // if(state.inbasket[0] !=""){
        return {books: state.inbasket}
    // }else{
    //     return {books: [JSON.parse(localStorage.getItem('Basket'))]}
    // }

}

@connect(mapStateToProps, mapDispatchToProps)
export default class Basket extends React.Component {
    constructor(props){
        super(props)
    }

    delallbusket = () =>{
        this.props.delallbasket();
    }
    bought = () => {
        this.props.addNotify("Кросавчег! Твои книги уже в пути!")
        this.props.delallbasket();
    }
    add = () =>{
        if(this.props.books !=""){
            return (
            <div className='basket-book'>
                 <table>
                    <tbody>
                        <tr>
                            <td className='t1'>
                                Книга
                            </td>
                            <td className='t2'>
                                Название
                            </td>
                            <td className='t3'>
                                Цена
                            </td>
                            <td className='t4'>
                                Количество
                            </td>
                            <td className='t5'>
                                Удалить
                            </td>
                        </tr>
                    </tbody>
                </table> 
                {this.props.books.map((item, index)=>{
                return <BookBasket books={item} index={index} key={index}/>
                })}
                <div className="basket-add-contacts">
                    <br/>
                <p> Очистить корзину</p>
                <button className='basket-button del-all' onClick={this.delallbusket}>Удалить всё</button>
                <hr/>
                    <form className='contacts'>
                        <p>Купить книгу сейчас</p>
                        <p>E-mail:</p>
                        <input type='email' placeholder='E-mail'/>
                        <p>Номер телефона:</p>
                        <input type='tel' placeholder='Номер телефона' maxLength='13' size='13'/>
                    </form>
                    <button onClick={this.bought}className='basket-buy'>Купить</button>
                </div>
                
            </div>)
        }else{
            return(
                <div className='nobasket'>
                    <p>Корзина пуста</p>
                </div>
        )
        };
    }

    render(){
        return(
            <div className='basket-list'>
                <h2>Корзина</h2>
                <br/>
                {this.add()}
            </div>
        );
    }
}
