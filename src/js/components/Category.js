import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {sideBarHide} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sideBarHide}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {books: state.books,
        visible: state.sidebar,
        category: state.category}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Category extends React.Component{

    scrolling = () => {
        window.scrollTo(0,420);
    }

    handleShow = () => {


        if(this.props.visible){
            this.refs.hide_show.style.backgroundColor ="lime";
            // this.refs.wrapp.style.width = "0";   
            this.props.sideBarHide(false);

        } else {
            this.refs.hide_show.style.backgroundColor ="steelblue";
            // this.refs.wrapp.style.width = "20%";            
            this.props.sideBarHide(true);
        }
    }

    render(){
        
        return(
            
            <div id={this.props.visible? "w20" : "w0"} className="category_wrap" ref="wrapp">
                    <div className="category_hide" ref="hide_show" onClick={this.handleShow}>Category</div>
                    <div className="category_body" ref="category_body">
                    <h3 ref="title">Категории:</h3>
                        {this.props.category.map((item, index) =>
                            <Link onClick={this.scrolling} key={index} className="category__link" to={"/category" + index}>{item}</Link>)}
                    </div>
                </div>

        )
    }
}