import React from 'react';
import {Link} from 'react-router-dom';
import {filterBooks} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterBooks}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {filter: state.filter, books: state.books}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        let count = 0;
        this.refs.selected.value = "";
        this.props.books.map(item => { count++ })
        this.setState({count: count})
    }
    filtring = () => {
        // console.log(this.refs.selected.value);
        this.props.filterBooks(this.refs.selected.value)
    }
    render() {
        
        return (         
            <div className="filter-style">
                <p>В наличии {this.state.count} книг</p>
                <form onChange= {this.filtring}>
                    <div>
                        <label>Сортировка: </label>
                        <select ref="selected">
                            <option value=''></option>
                            <option value='name_a'>По названию (А-Я)</option>
                            <option value='name_z'>По названию (Я-А)</option>
                            <option value='raiting'>По рейтингу</option>
                            <option value='author_a'>По автору (А-Я)</option>
                            <option value='author_z'>По автору (Я-А)</option>
                            <option value='price_a'>Цена по убыванию</option>
                            <option value='price_z'>Цена по возрастанию</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}