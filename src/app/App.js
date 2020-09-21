import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    Header,
    Body,
    Footer,
    LayoutHomepage,
    SearchBar,
    PostDetails,
    Error,
} from 'components';
import globalTheme from 'config/constants/Themes';
import PostCreating from 'pages/CreatePost/createPost';
import UpdatePost from 'pages/UpdatePost';
import Wrapper from './styles';

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={globalTheme}>
                <Wrapper>
                    <Header />
                    <Body>
                        <Switch>
                            <Route
                                exact
                                path="/post/new"
                                component={PostCreating}
                            />
                            <Route
                                exact
                                path="/post/update/:id"
                                component={UpdatePost}
                            />
                            <Route
                                exact
                                path="/post/:id"
                                component={PostDetails}
                            />
                            <Route exact path="/">
                                <SearchBar />
                                <LayoutHomepage />
                            </Route>
                            <Route component={Error} />
                        </Switch>
                    </Body>
                    <Footer />
                </Wrapper>
            </ThemeProvider>
        </Router>
    );
};

export default App;
