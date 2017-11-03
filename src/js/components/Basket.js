import React from 'react';
import BookBasket from './BookBasket'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    // if(state.inbasket[0] !=""){
        return {books: state.inbasket}
    // }else{
    //     return {books: [JSON.parse(localStorage.getItem('Basket'))]}
    // }

}

@connect(mapStateToProps)
export default class Basket extends React.Component {
    constructor(props){
        super(props)
    }

    add = () =>{
        if(this.props.books !=""){
            return (
            <div className='basket-book'>
                <table>
                    <tbody>
                        <tr>
                            <td className='t1'>
                                img
                            </td>
                            <td className='t2'>
                                name
                            </td>
                            <td className='t3'>
                                cost
                            </td>
                            <td className='t4'>
                                number
                            </td>
                            <td className='t5'>
                                del
                            </td>
                        </tr>
                    </tbody>
                </table>
                {this.props.books.map((item, index)=>{
                return <BookBasket books={item} index={index} key={index}/>
                })}
                <div className="basket-add-contacts">
                    <br/>
                <p> del all basket</p>
                <button className='basket-button del-all'>del-all</button>
                <hr/>
                    <div className='contacts'>
                        <p>Buy book now </p>
                        <p>Write email like:(asdf@gmail.com)</p>
                        <input type='email' defaultValue='email'/>
                        <p>Write tel like:(+380123456789)</p>
                        <input type='tel' defaultValue='+380' maxLength='13' size='13'/>
                    </div>
                    <button className='basket-buy'>buy</button>
                </div>
                
            </div>)
        }else{
            return(
                <div className='nobasket'>
                    <p>basket null</p>
                </div>
        )
        };
    }

    render(){
        return(
            <basket className='basket-list'>
                <h2>basket</h2>
                <br/>
                {this.add()}
            </basket>
        );
    }
}
