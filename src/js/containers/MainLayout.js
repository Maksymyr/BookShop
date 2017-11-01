import React from 'react';
import Header from '../components/Header'

import { Route, Switch, Link } from 'react-router-dom';

import BookList from '../components/BookList';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
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
                <Switch>
                    <Route exact path="/" component={BookList}/>
                    { /*<Route path="/post-:postId" component={PostView}/>
                    <Route path="/add" component={AddPost}/> */}
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>
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

