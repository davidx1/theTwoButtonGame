import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:absolute;
    height: 100px;
    width: 1150px;
    border-style: dotted;
`
export default class ProfileBar extends React.Component {
    render() {
        return (
            <Wrapper>
                <h4>Profile Bar</h4>
            </Wrapper>
        )
    }
}