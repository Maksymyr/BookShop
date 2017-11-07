import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterSlider from '../components/FooterSlider'
import Category from '../components/Category'
import Basket from '../components/Basket'
import BookPage from '../components/BookPage'
import { Route, Switch, Link } from 'react-router-dom';
import BookList from '../components/BookList';
import AdminPanel from '../components/AdminPanel';

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
        return (
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route exact path="/" component={BookList}/>
                    <Route path="/category:id" component= {BookList}/>
                    <Route path="/search/:search" component= {BookList}/>
                    <Route path="/basket:id" component= {BookList}/>
                    <Route path="/pages:id" component= {BookList}/>
                    <Route path="/admin" component= {AdminPanel}/>
                    {/* <Route path="/add" component={AddPost}/> */}
                    <Route path="/page:id" component = {BookPage} />
                    <Route path="/basket" component={Basket}/>
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>
                <FooterSlider />
                <Footer />

            </div>
        ); 
    }
}

