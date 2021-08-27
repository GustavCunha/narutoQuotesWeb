import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Quote = styled.p`
    font-size: 2em;
    text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
    flex: 1;
    margin: 0;
`;

export const Speaker = styled(Quote)`
    text-align: right;
    width: 100%;
    margin-bottom: 50px;
`;