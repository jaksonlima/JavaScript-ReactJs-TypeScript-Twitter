import React from 'react';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Busca no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <p>{'Loren Busca no Twitter '.repeat(100)}</p>
            </Body>
        </Container>
    );
}

export default SideBar;