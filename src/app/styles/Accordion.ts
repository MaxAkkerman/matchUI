import {accordionAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

const {definePartsStyle, defineMultiStyleConfig} =
    createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
    button: {
        background: 'darken.150',
        padding: '16px',
        borderRadius: '16px'
    },
    panel: {
        borderRadius: '16px',
        width: '100%',
        justifyContent: 'space-around',
        display: 'flex',
        gap:'10px'
    },
    container: {
        borderColor: 'unset',
        border: 'unset',
        borderRadius: '4px',
    },
    root: {
        gap:'12px',
        display:'flex',
        flexDirection: 'column',
    }
})

export const AccordionTheme = defineMultiStyleConfig({baseStyle})