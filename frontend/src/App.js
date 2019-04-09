import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.scss";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Wishlists from "./components/Wishlists";
import WishlistItems from "./components/WishlistItems";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
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
