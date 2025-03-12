import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonTheme = defineStyleConfig({
    variants: {
        outline: {
            width: '204px',
            height: '56px',
            border: 'unset',
            borderRadius: '4px',
            padding: '16px',
            gap: '10px',
            background: '#EB0237',
            _hover: {
                background: '#A01131'
            }
        },
    },

    defaultProps: {
        variant: 'outline',
    },
})