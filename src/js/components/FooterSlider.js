import React from 'react'
import {connect} from 'react-redux'
import watchedBooks from '../constants/watchedBooks'
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {watchedBooks: state.watchedBooks}
}


@connect(mapStateToProps)
export default class FooterSlider extends React.Component{
  state = {
    watchedBooks: {},
    left : 0

  }

  handleClickRight = () =>{
    if(this.state.left <= -110){
    this.setState({left: this.state.left+110})
    }
  }

  handleClickLeft = () =>{
    if(this.state.left >= -330){
      this.setState({left: this.state.left-110})
    }
    
    
  }
  sliderInitialize(someBooks){

    
    return (
    <div className="footer-slider-wrapper">
      <h2>Недавно просмотренные</h2>
      <span className='btn btn-left' onClick={this.handleClickLeft}>&#60;</span>
      <div className='slider-block'>
        <div className='slider-inline' style={{left: this.state.left+'px'}}>
        
        {someBooks.map((item, index) => {
        return(
        <Link to='/' key={index}><img src={item.img}/></Link>
        )
        } )}
        </div>
      </div>
    <span className='btn btn-right' onClick={this.handleClickRight}>&#62;</span>
    </div>)
  }
    componentDidMount(){
      this.setState({watchedBooks})

    }

    render () {
      
        return(
           
              this.sliderInitialize(watchedBooks)

        )
    }
}