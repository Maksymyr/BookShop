import React from 'react';
import {connect} from 'react-redux';
import {delfrombasket} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => ( bindActionCreators({ delfrombasket }, dispatch) );

const mapStateToProps = (state) => {
    if(state.inbasket){
        return {books: state.inbasket}
    }else{
        return {books: JSON.parse(localStorage.getItem('basket'))}
    }

}
@connect(mapStateToProps, mapDispatchToProps)
export default class Basket extends React.Component {
    constructor(props){
        super(props)
    }

    add = () =>{
        if(this.props.books !=""){
            return (
            <div>
                {this.addbooks()}
                <button>buy</button>
            </div>)
        }else{
            return(
                <div>
                    <p>basket null</p>
                </div>
        )
        };
    }

    addbooks = () => {
        return this.props.books.map((item, index)=>{
            return(
                <div key={index} className='book'>
                    <div className='name-book'>
                    <h3>{item.name}</h3>
                    </div>
                    <div className='cost'>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <input type='number' ref='number' defaultValue='1'/>
                    </div>
                    <button onClick={this.del}>del</button>
                </div>
            )
        })
    }

    del = () =>{
        console.log(this.props);
        this.props.delfrombasket()
    }

    render(){
        return(
            <div className='basket-list'>
                <h2>basket</h2>
                {this.add()}
            </div>
        );
    }
}