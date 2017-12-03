import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {books: state.books,
        category: state.category,

    }
}

@connect(mapStateToProps, null)
export default class CategoryPage extends React.Component{
    constructor(props){
        super(props);

    }

    

    render(){
        return(
            <div className='category-container'>
                <h1>Поиск книги по жанру</h1>
                <strong>Кстати, а вы знаете?</strong>
                <p> В <Link className='container-link' to={'/'}>каталоге книг</Link> вы можете искать по жанрам. Кроме жанров, там можно искать по рейтингу, автору, цене, и другим параметрам. Чтобы воспользоваться, откройте каталог книг по одной из ссылок ниже.</p>
                <h2>Список жанров:</h2>
                <div className='category-list'>
                {this.props.category.map((item, index) =>
                                <div className='category-variant' key={index}><Link className='link-to-category' to={"/category" + index}>{item}</Link></div>)}
                </div>
            </div>
        )
    }
}