import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Category from '../components/Category'
import { Route, Switch, Link } from 'react-router-dom';

import BookList from '../components/BookList';
import CategoryList from '../components/CategoryList';

export default class MainLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {types: []
        }
        this.arrayTypes = this.arrayTypes.bind(this);
    }
    arrayTypes(type) {
        this.setState({types: type});
    }
    render() {
        console.log(this.state.types);
        return (
            <div className="wrapper">
                <Header />
                {/*<Header />     
                1. Search;
                2. Slider;
                3. Enter to the cabinet & busket;
                =====> Viktor*/}

                {/*<Category />     
                =====> Vova*/}

                {/*<BookList />
                1. Filter;
                2. Books;
                =====> Maks*/}
                <Category arrayTypes={this.arrayTypes} />
                <Switch>
                    <Route exact path="/" component={BookList}/>
                    <Route path="/category-:id" component= {() =><CategoryList arrayTypes={this.state.types} />}/>
                    {/* <Route path="/add" component={AddPost}/> */}
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>
                <Footer />
                {/*<Footer />        
                1. Copyrights;
                2. Contacts;
                3. Social net's links;
                4. Recently looked goods;
                =====> Maya*/}

            </div>
        ); 
    }
}

