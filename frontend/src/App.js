import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Wishlists from "./components/Wishlists";
import WishlistItems from "./components/WishlistItems";

const GlobalStyle = createGlobalStyle`
    html {
        font-size:10px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    *:visited {
        text-decoration: none;
        color: inherit;
    }
    body {
        @import url("https://fonts.googleapis.com/css?family=Roboto");
        font-family: 'Roboto';
        font-weight: normal;
        font-style:normal;
        line-height: 1.5;
        margin:0;
        padding:0;
    }
`;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <GlobalStyle />
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/wishlists" component={Wishlists} />
                        <Route
                            path="/wishlist/:id/items"
                            component={WishlistItems}
                        />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
