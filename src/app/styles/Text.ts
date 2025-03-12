import { defineStyleConfig } from '@chakra-ui/react'

export const TextTheme = defineStyleConfig({
    baseStyle: {
        fontWeight: 600,
        lineHeight: '100%',
        letterSpacing: '0',
        color: 'white.100',
        fontSize: { base: '12px', sm: '14px', md: '16px' }
    },
    sizes: {
        sm: {
            fontSize: '12px',
        },
        md: {
            fontSize: '18px',
        },
        lg: {
            fontSize: '20px',
        }
    },
    defaultProps: {
        variant: 'base',
    },
})