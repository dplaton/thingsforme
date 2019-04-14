import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Wishlists from "./components/Wishlists";
import WishlistItems from "./components/WishlistItems";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto', sans-serif; ;
        src: url("https://fonts.googleapis.com/css?family=Roboto");
        font-weight: normal;
        font-style:normal;
    }


    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    *:visited {
        text-decoration: none;
        color: inherit;
    }
    body {
        padding:0;
        margin:0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Roboto'
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
