import {Badge as BadgeChakra} from '@chakra-ui/react'
import {FC, PropsWithChildren} from "react";

export const Badge:FC<PropsWithChildren & {color: string}> = ({children, color}) => {
    return (
        <BadgeChakra variant='boxy' bg={color}>
            {children}
        </BadgeChakra>
    )
}