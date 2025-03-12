import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const boxy = defineStyle({
    borderRadius: '4px',
    padding: '6px 14px',
    color: 'white.100',
    textTransform: 'unset'
})

export const BadgeTheme = defineStyleConfig({
    variants: { boxy },
})