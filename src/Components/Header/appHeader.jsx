import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../Img/data-science.png'
import '@fontsource/babylonica';
import RenderUserMenu from "./AuthCompotents/ConditionalRender/renderUserMenu";


function ResponsiveAppBar() {



    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
            <Container>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                        {/*Логотип*/}
                        <img src={Logo} style={{ width: '65px' }} alt={'Ooops'} />

                        {/*Название*/}
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'babylonica',
                                fontWeight: 700,
                                letterSpacing: '.4rem',
                                color: '#9e6ded',
                                textDecoration: 'none',
                            }}
                        >
                            React posts
                        </Typography>
                    </Box>

                    {/*// Аватар + меню пользователя + Форма авторизации*/}
                    <Box sx={{ display: 'flex' }}>
                        <RenderUserMenu />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default ResponsiveAppBar;