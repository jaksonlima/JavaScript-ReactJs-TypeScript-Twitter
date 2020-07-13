import React from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Folowage,
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                {/* <EditButton outlined>Editar Perfil</EditButton> */}

                <h1>Jakson Lima</h1>
                <h2>@jaksonlima</h2>
                <p>
                    Developer at
                    <a href="https://jaksonlima.github.io/"> @LimaSystem</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Santa Catarina, Brasil.
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido (a) em 19 setembro 1997.
                    </li>
                </ul>
            </ProfileData>

            <Folowage>
                <span>
                    seguindo <strong>100</strong>
                </span>
                <span>
                    <strong>10942 </strong> seguidores
                </span>
            </Folowage>
        </Container>
    );
};

export default ProfilePage;
