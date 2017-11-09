import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {sideBarHide, setStick} from '../actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sideBarHide, setStick}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {books: state.books,
        visible: state.sidebar,
        category: state.category,
        stick: state.stick,

    }
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
    componentWillUnmount(){
        window.onscroll = null;
    }

    handleTest(e) {
        
        var wrap = this.getCoord(this.refs.wrapp)
        window.onscroll = (e) =>{
            //console.log(this.refs.check_postion.getBoundingClientRect().top);
            //console.log(window.scrollY + this.refs.wrapp.clientHeight>this.props.stick)
            //console.log(this.refs.check_postion.getBoundingClientRect().top + this.refs.wrapp.clientHeight)
            if(this.refs.check_postion.getBoundingClientRect().top<0){
                if(window.scrollY + this.refs.wrapp.clientHeight + 30>this.props.stick){
                    console.log("SASSSS")
                    //this.refs.wrapp.classList.add("fixed_position")
                    //top = this.props.stic - this.refs.wrapp.clientHeight
                }else if(this.refs.check_postion.getBoundingClientRect().top + this.refs.wrapp.clientHeight + 60 <0){
                    this.refs.wrapp.classList.add("fixed_cat")
                    setTimeout(()=>{
                        this.refs.wrapp.classList.add("fixed_animate")
                        this.refs.wrapp.classList.remove("relative_cat")
                
                        },100)
                   //fixed
                   // top 50px
                }
            }else{
                this.refs.wrapp.classList.remove("fixed_animate")
                this.refs.wrapp.classList.remove("fixed_cat")
                this.refs.wrapp.classList.add("relative_cat")
                
                //initial position
            }




            //console.log(window.pageYOffset)
        //     if(this.state.toggleId == true){
        //      if(this.refs.wrapp.getBoundingClientRect().top + this.refs.wrapp.clientHeight + 60 < 0){
        //             if(!this.refs.wrapp.classList.contains("fixed_cat")){
        //                 this.setState({toggleId: false}) 
        //                 this.setState({top_coord: window.pageYOffset})
        //                 setTimeout(this.refs.wrapp.classList.add("fixed_position"), 3000)
                        
        //             }
        //         }
        //      }else if(this.state.toggleId == false){

        //         if(window.pageYOffset < this.state.top_coord -  this.refs.wrapp.clientHeight -50 -50){
        //             this.setState({toggleId: true}) 

        //         }  
        //     } 

        //     console.log(window.scrollY + this.refs.wrapp.clientHeight>this.props.stick)
        //     // if(window.){
                
        //     // } 
        }  
    }
    
    handleShow = () => {


        if(this.props.visible){
            this.refs.hide_show.style.backgroundColor ="lime";  
            this.props.sideBarHide(false);

        } else {
            this.refs.hide_show.style.backgroundColor ="steelblue";           
            this.props.sideBarHide(true);
        }
    }

    render(){
        return(
            <div ref="check_postion">
                <div id={this.props.visible? "w20" : "w0"}  className={this.state.toggleId ? "category_wrap relative_cat" : "category_wrap fixed_cat"} ref="wrapp">
                        <div className="category_hide" ref="hide_show" onClick={this.handleShow}>Category</div>
                        {/* <div className="category_bookmark" style={{backgroundImage: 'url('+ require("../../icon/bookmark.png")+')'}}></div> */}
                        <div className="category_body" ref="category_body">
                        <h3 onClick={this.handleTest} ref="title">Категории:</h3>
                            {this.props.category.map((item, index) =>
                                <Link onClick={this.scrolling} key={index} className="category__link" to={"/category" + index}>{item}</Link>)}
                        </div>
                    </div>
            </div>
        )
    }   
}