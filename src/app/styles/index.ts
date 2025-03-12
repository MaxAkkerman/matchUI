import {extendTheme} from "@chakra-ui/react";
import {ButtonTheme} from "./Button";
import {TextTheme} from "./Text";
import {AccordionTheme} from "./Accordion";
import {BadgeTheme} from "./Badge";

const breakpoints = {
    base: '0px',
    sm: '480px',
    md: '768px',
}

export const theme = extendTheme({
    components: {
        Button: ButtonTheme,
        Text: TextTheme,
        Accordion: AccordionTheme,
        Badge: BadgeTheme,
    },
    breakpoints,
    fonts: {
        body: `'Inter', sans-serif`,
    },
    styles: {
        global: () => ({
            'html': {
                background: 'darken.50',
            },
            'body': {
                background: 'darken.50',
                width: '100%',
                height: '100%',
                padding: {
                    base: '12px',
                    sm: '24px',
                    md: '32px',
                },
            }
        })
    },
    colors: {
        white: {
            100: '#FFFFFF',
        },
        gray: {
            100: '#B4B5B6'
        },
        darken: {
            50: '#090909',
            100: '#101318',
            150: '#0B0E12',
        }
    },
});