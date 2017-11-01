import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                
                <Switch>
                    {/* <Route exact path="/" component={Posts}/>
                    <Route path="/post-:postId" component={PostView}/>
                    <Route path="/add" component={AddPost}/> */}
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>

            </div>
        ); 
    }
}

