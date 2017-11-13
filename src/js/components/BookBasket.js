import React from 'react';
import Basket from './Basket'
import {connect} from 'react-redux';
import {delfrombasket} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => ( bindActionCreators({ delfrombasket }, dispatch) );
const mapStateToProps = (state) => {
    return {book: state.inbasket}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class BookBasket extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cost:this.props.books.price,
            updown:0
        }
    }

    componentDidMount = () =>{
        if(this.props.book !=""){
            let a=0;
            this.props.book.map((item)=>{if(item.code==this.props.books.code){a=a+1}})
            this.refs.number.value=a;
            this.setState({cost: this.state.cost*a})
            this.setState({updown: this.refs.number.value})
            
        }
        this.props.allcost(this.state.cost, this.state.updown, this.refs.number.value);
    }
    cost = () =>{
        this.setState({cost: this.state.cost*a})
    }
    updownbtn = () => {
        if(this.state.updown!=0){
            if(this.state.updown>this.refs.number.value){
                this.props.allcost(this.state.cost/this.state.updown*this.refs.number.value, this.state.updown, this.refs.number.value);
                this.setState({cost: this.state.cost/this.state.updown*this.refs.number.value})
                this.setState({updown: this.refs.number.value})
                
            }else{
                this.props.allcost(this.state.cost/this.state.updown*this.refs.number.value, this.state.updown, this.refs.number.value);
                this.setState({cost: this.state.cost/this.state.updown*this.refs.number.value})
                this.setState({updown: this.refs.number.value})
            }
        }
    }

    bookbuy = () =>{
            return(
                <div className='basket-book-wrapper'>
                    <div key={this.props.index} className='basket-book-one'>
                    <img className='basket-book-block basket-img' src={this.props.books.img}/>
                    <div className='basket-book-block name-book'>
                    <h3>{this.props.books.name}</h3>
                    </div>
                    <div className='basket-book-block cost'>
                        <p>{this.state.cost}</p>
                    </div>
                    <div className='basket-book-block basket-input'>
                        <input onClick={this.updownbtn} className='basket-number' defaultValue='' type='number' ref='number' min='1' max='99'/>
                    </div>
                    <button className='basket-book-block basket-button' onClick={this.del}>Удалить</button>
                </div>
                </div>
            )
    }

    del = () =>{
        this.props.delfrombasket(this.props.index)
    }

    render() {
            return this.bookbuy()
    }
}