import styled, { css } from 'styled-components';

import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Rocketseat
} from '../../styles/Icons'

export const Container = styled.div`
    display: none;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px){
        align-items: flex-start;
    }
`;
export const Logo = styled.div`
    width: 41px;
    height: 41px;

    > path {
        fill: var(--twitter);
    }
`;
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;

            font-weight: bold;
            font-size: 19px;
        }

        padding-right: 15px;
    }

    padding: 8.25px 0;
    outline: 0;

    & + {
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;
        

        width: 40px;
        height: 40px;

        > span {
            display: none:
        }

        @media (min-width: 1280px) {
            width: 100%;
            height: unset;

            > span {
                display: inline;
            }
        }
    }

    cursor: pointer;
    border-radius: 25px;

    &:hover{
        background: var(--twitter-dark-hover);
    }

    &:hover, &.active {
        span, svg {
            color: (--twitter);
            fill: (--twitter);
        }
    }
`;

const iconCss = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`${iconCss}`;
export const BellIcon = styled(Notifications)`${iconCss}`;
export const EmailIcon = styled(Email)`${iconCss}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCss}`;
export const ProfileIcon = styled(Person)`${iconCss}`;
