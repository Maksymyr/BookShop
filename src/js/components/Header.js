import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {searchBook} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchBook}, dispatch)
}

@withRouter
@connect(null, mapDispatchToProps)
export default class Header extends React.Component {

    state = {
        left: 0
    }

    search=(event)=>{
        if (event.key === "Enter") {
            let t= this.refs.search.value
            this.refs.search.value='';
            this.props.searchBook(t);
            return (this.props.history.push(`/search/${t}`))
        }
    }



   


    render(){
        return(
            <header className="header">
                <div className='head-center'>
                <Link to='/' className='logo-wrapper'> 
                    <div style={{backgroundImage: 'url('+ require("../../image/logo.png")+')'}} className='logo-snail'></div>
                    <h1 className="page-title">Snails</h1>
                </Link>
                <div className='header-nav'>
                <form>
                    <input type='search' onKeyPress={this.search} className='menu search' ref='search' placeholder='Поиск' />
                    <button className='menu search-icon'><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                
                <Link to='/buy'><div className='menu-links menu buy'>Купленные книги</div></Link>
                <Link to={'/basket'+"l_d"}><div className='menu-links menu love'>Понравившиеся книги</div></Link>
                <Link to='/basket' className='menu-links menu'>Корзина<i className="menu-cart fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                    
                </div> 
                </div>
                <div className='bottom-line'></div>

                <div className='header-slider-wrapper'>
                    <div className='header-slider' style={{left: this.state.left}}>
                        <div style={{backgroundImage: 'url('+ require("../../image/header-img.png")+')'}} className='header-img'></div>
                        <div style={{backgroundImage: 'url('+ require("../../image/header-img.png")+')'}} className='header-img'></div>
                    </div>
                </div>
            </header>
        );
    }
}