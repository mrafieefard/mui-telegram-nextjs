"use client"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';



interface props {
    children: ReactNode
}

const darkTheme = createTheme({
    palette: {
        background : {
            default : "black"
        },
        mode: 'dark',
    },
});

export function MuiProvider(props: props) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
}