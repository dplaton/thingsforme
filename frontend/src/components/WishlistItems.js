import React, { Component } from "react";
import styled from "styled-components";

import data from "../data/testData";

const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    grid-gap: 60px;
`;

const Item = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 4px 0 #eee;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    h2 {
        font-size: 2rem;
        padding: 0 2rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
        padding: 0 3rem;
        flex-grow: 1;
    }
    .buttonList {
        background: lightgray;
        border-top: 1px solid lightgray;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 1px;
        width: 100%;
        & > * {
            background: white;
            border: 0;
            font-size: 1rem;
            padding: 1rem;
        }
        &:focus {
            border: 0;
        }
    }
`;

class WishlistItem extends Component {
    render() {
        const id = this.props.match.params.id;
        const items = data().find(wishlist => wishlist.id === id).items;
        return (
            <div>
                <h1>Items on whishlist</h1>
                <ItemList>
                    {items.map(item => (
                        <Item key={item.id}>
                            <h2>{item.name}</h2>
                            <img src={item.imageUrl} />
                            <p>{item.url}</p>
                            <p>{item.description}</p>
                            <div className="buttonList">
                                <button>✏️ Edit</button>
                                <button>Delete</button>
                            </div>
                        </Item>
                    ))}
                </ItemList>
            </div>
        );
    }
}

export default WishlistItem;
