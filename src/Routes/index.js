import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    CreatePost,
    UpdatePost,
    NotFound,
    PostDetails,
    Home,
    Contact,
} from 'pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/posts/new" component={CreatePost} />
            <Route exact path="/posts/update/:id(\d+)" component={UpdatePost} />
            <Route exact path="/posts/:id(\d+)" component={PostDetails} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/">
                <Home />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
