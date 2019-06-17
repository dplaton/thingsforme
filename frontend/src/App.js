import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import Layout from './components/Layout';
import Home from './components/Home';

import Wishlists from './components/Wishlists';
import WishlistItems from './components/WishlistItems';
import Wishes from './components/Wishes';

import createClient from './withData';
import {ApolloProvider} from 'react-apollo';
import dotenv from 'dotenv';

dotenv.config();

class App extends Component {
    render() {
        return (
            <ApolloProvider client={createClient()}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/wishlists" component={Wishlists} />
                            <Route path="/wishes" component={Wishes} />
                            <Route
                                path="/wishlist/:id/items"
                                component={WishlistItems}
                            />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default App;
