import React from 'react';
import { SearchPage, SearchBar, PostDetails, NotFound } from 'components';
import { Switch, Route } from 'react-router-dom';
import PostCreating from 'pages/CreatePost';
import UpdatePost from 'pages/UpdatePost';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/posts/new" component={PostCreating} />
            <Route exact path="/posts/update/:id" component={UpdatePost} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/">
                <SearchBar />
                <SearchPage />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
