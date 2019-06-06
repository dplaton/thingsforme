import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    li {
        border-bottom: 1px solid lightgrey;
        cursor: pointer;
        display: grid;
        grid-template-columns: 10rem auto 10rem;
        grid-column-gap: 1rem;
        line-height: 2rem;
        .data {
            .name {
                font-size: 2rem;
                padding: 1rem 0;
            }
            .description {
                font-size: 1.8rem;
                font-style: italic;
                padding: 1rem 0;
            }
        }
        .actions {
            display: grid;
            background: white;
            grid-gap: 2px;
            grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
            button {
                background: white;
                border: none;
                border-bottom: 1px solid lightgrey;
                cursor: pointer;
                :last-child {
                    border-bottom: none;
                }
            }
        }
        :hover {
            background-color: #eee;
            transition: background-color 0.2s ease-in-out;
        }
    }
    a {
        text-decoration: none;
    }
`;

export default List;
