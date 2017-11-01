import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

@withRouter
export default class MainLayout extends React.Component {

    search=(event)=>{
        if (event.key === "Enter") {
            let t= this.refs.search.value
            this.refs.search.value='';
            return (this.props.history.push(`/search/${t}`))
            
        }
    }

    render(){
        return(
            <header className="header">
                <Link to='/'><h1 className="page-title">Book Shop</h1></Link>
                <input type='text' onKeyPress={this.search} className='search' ref='search'/>
                <Link to='/basket'><div className='basket'></div></Link>
                <Link to='/room'><div className='room'></div></Link>
            </header>
        );
    }
}