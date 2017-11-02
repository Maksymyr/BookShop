import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    if(state.inbasket){
        return {books: state.inbasket}
    }else{
        return {books: JSON.parse(localStorage.getItem('basket'))}
    }
{/*dfsdf*/}
}
@connect(mapStateToProps)
export default class Basket extends React.Component {
    constructor(props){
        super(props)
    }

    add = () =>{
        console.log(this.props.books);
        if(this.props.books !=""){
            return this.props.books.map((item, index)=>{
                return(
                    <div key='index' className='book'>
                        <div className='name-book'>
                        <h3>{item.name}</h3>
                        </div>
                        <div className='cost'>
                            <p>{item.price}</p>
                        </div>
                        <div>
                            <input type='number' ref='number' defaultValue='1'/>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    <p>basket null</p>
                </div>
        )
        };
    }

    render(){
        return(
            <div className='basket-list'>
                <h2>basket</h2>
                {this.add()}
                <button>buy</button>
            </div>
        );
    }
}