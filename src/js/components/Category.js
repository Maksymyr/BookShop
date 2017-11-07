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

    constructor(props){
        super(props);
        this.state = {
            toggleId: true,
            top_coord: 1,

        }
        this.handleTest = this.handleTest.bind(this);
    }
    getCoord = (elem) => {
        var box = elem.getBoundingClientRect();
        
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
          };
    }
    windowHeightDetect =() =>{}

    scrolling = () => {
        window.scrollTo(0,420);
    }
    componentDidMount() {
        this.handleTest()
    }
    handleTest(e) {
        
        //console.log(e)
        var wrap = this.getCoord(this.refs.wrapp)
        //console.log(document.documentElement.scrollTop)
        window.onscroll = (e) =>{
           // console.log("Window :"+window.pageYOffset+ " Element: "+wrap.top);
            //console.dir(this.refs.wrapp.getBoundingClientRect().top);
            // console.log(this.state.toggleId)

            if(this.state.toggleId == true){
             if(this.refs.wrapp.getBoundingClientRect().top + this.refs.wrapp.clientHeight + 50 < 0){
                    if(!this.refs.wrapp.classList.contains("fixed_cat")){
                        this.setState({toggleId: false}) 
                        this.setState({top_coord: window.pageYOffset})
                        console.log(this.refs)
                        setTimeout(this.refs.wrapp.classList.add("fixed_position"), 3000)
                        
                        
                    }
                }
             }else if(this.state.toggleId == false){
                console.log(window.pageYOffset)
                if(window.pageYOffset < this.state.top_coord -  this.refs.wrapp.clientHeight -50 -50){
                    //alert("Works")
                    this.setState({toggleId: true}) 

                    
                }  
            }   
        }
             
                
            //  if( window.pageYOffset < this.state.toggleId){
            //     this.setState({toggleId: true}) 
            //     alert("Mem")
            //  }
            //  if(this.refs.wrapp.getBoundingClientRect().top > 0){
            //      this.setState({toggleId: false})
                 
            //  }


            
            
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
            
            <div id={this.props.visible? "w20" : "w0"}  className={this.state.toggleId ? "category_wrap relative_cat" : "category_wrap fixed_cat"} ref="wrapp">
                    <div className="category_hide" ref="hide_show" onClick={this.handleShow}>Category</div>
                    <div className="category_body" ref="category_body">
                    <h3 onClick={this.handleTest} ref="title">Категории:</h3>
                        {this.props.category.map((item, index) =>
                            <Link onClick={this.scrolling} key={index} className="category__link" to={"/category" + index}>{item}</Link>)}
                    </div>
                </div>

        )
    }
    }