import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {ChakraProvider} from '@chakra-ui/react'
import {store} from './app/services/store'
import {Provider} from 'react-redux'
import {theme} from "./app/styles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);

