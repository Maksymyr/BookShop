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
        category: state.category}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Category extends React.Component{

    constructor(props){
        super(props)
    }
    state = {
        visible: true
    }

    handleShow = () => {


        if(this.state.visible){
            this.refs.hide_show.style.backgroundColor ="lime";
            this.refs.wrapp.style.width = "0";
            this.setState({visible: !this.state.visible})
            this.props.sideBarHide(false);

        } else {
            this.refs.hide_show.style.backgroundColor ="steelblue";
            this.refs.wrapp.style.width = "20%";        
            this.setState({visible: !this.state.visible})
            this.props.sideBarHide(true);
        }
    }

    render(){
        
        return(
            
            <div className="category_wrap" ref="wrapp">
                    <div className="category_hide" ref="hide_show" onClick={this.handleShow}>Category</div>
                    <div className="category_body" ref="category_body">
                    <h3 ref="title">Категории:</h3>
                        {this.props.category.map((item, index) =>
                            <Link key={index} className="category__link" to={"/category" + index}>{item}</Link>)}
                    </div>
                </div>

        )
    }
}