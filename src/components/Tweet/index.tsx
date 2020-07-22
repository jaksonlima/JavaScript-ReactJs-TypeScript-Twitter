import React from 'react';
import { Description } from 'styled-icons/material';
import { Body, CommentIcon, Container, Dot, Header, Icons, ImageContent, LikeIcon, Retweeted, RetweetIcon, RocketseatIcon, Status } from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Voce retweetou
            </Retweeted>

            <Body>
                <Header>
                    <strong>Rocketseat</strong>
                    <strong>@rocketseat</strong>
                    <Dot />
                    <time>27 de jun</time>
                </Header>

                <Description>Foguete não tem ré</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        18
                    </Status>
                    <Status>
                        <LikeIcon />
                        18
                    </Status>
                </Icons>
            </Body>
        </Container>
    )
}

export default Tweet;
