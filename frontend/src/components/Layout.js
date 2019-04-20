import React from "react";
import styled from "styled-components";

import Header from "./Header";

const InnerStyle = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    padding: 2rem;
`;

const ContentPage = styled.main`
    padding: 2rem 0;
`;

const layout = props => (
    <div>
        <InnerStyle>
            <Header />
            <ContentPage>{props.children}</ContentPage>
        </InnerStyle>
    </div>
);

export default layout;
