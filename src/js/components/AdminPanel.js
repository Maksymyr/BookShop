
import React from 'react';
import { addBook } from '../actions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addBook}, dispatch)
}
const mapStateToProps = (state) => {
    return {state: state}
}



@connect(mapStateToProps, mapDispatchToProps)
export default class AdminPanel extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }

    handleOnSubmit(event) {
        event.preventDefault();

        if(this.refs.title.value.trim() !== '' || this.refs.description.value.trim() !== '') {
            let new_book = {
                name: this.refs.title.value,
                author: this.refs.author.value,
                price: this.refs.price.value,
                type: this.refs.type.value,
                seria: this.refs.type.value,
                image: this.refs.image.value,
                description: this.refs.description.value,
                futured: false,
                code: this.props.state.books.length

            };
            console.log(this.props.state)
            this.props.addBook(new_book);

            this.refs.title.value = '';
            this.refs.author.value = '';
            this.refs.price.value = '';
            this.refs.type.value = '';
            this.refs.seria.value = '';
            this.refs.image.value = '';
            this.refs.description.value = '';
        }
    };

    render() {
        return (
            <div className="add-book clearfix">
                <h3 className='clearfix'>Добавить новую книгу</h3>
                
                <form className='admin-form clearfix' onSubmit={this.handleOnSubmit}>
                    <input type="text" ref="title" placeholder="Имя книги"/>
                    <input type="text" ref="author" placeholder="Автор книги"/>
                    <input type="text" ref="price" placeholder="Цена книги"/>
                    <input type="text" ref="type" placeholder="Тип книги"/>
                    <input type="text" ref="series" placeholder="Серия книги"/>
                    <input type="text" ref="image" placeholder="Картинка книги"/>


                    <textarea ref="description" placeholder="Описание книги"/>
                    <button type="submit">Добавить новую книгу</button>
                </form>
            </div>
        );
    }
}