import React from 'react';
import { LayoutHomepage, SearchBar, PostDetails, NotFound } from 'components';
import { Switch, Route } from 'react-router-dom';
import PostCreating from 'pages/CreatePost/createPost';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/posts/details/:id" component={PostDetails} />
            <Route exact path="/posts/new" component={PostCreating} />
            <Route exact path="/">
                <SearchBar />
                <LayoutHomepage />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
