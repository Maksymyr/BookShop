import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {item: state.books[ownProps.match.params.id]}
 }
 
 @connect (mapStateToProps)
export default  class BookPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.match.params.id);
        console.log(this.props.item)
        return(
            <div className="book_page">
                <img src={this.props.item.img} />
                <div>

                </div>
            </div>
        )
    }
}