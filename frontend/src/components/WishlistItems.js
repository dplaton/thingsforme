import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import data from "../data/testData";

class WishlistItem extends Component {
    render() {
        const id = this.props.match.params.id;
        const items = data().find(wishlist => wishlist.id === id).items;
        return (
            <div>
                <h1>Items on whishlist</h1>
                <CardDeck>
                    {items.map(item => (
                        <Card key={item.id}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.url}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        );
    }
}

export default WishlistItem;
