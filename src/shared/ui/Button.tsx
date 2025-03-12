import {Button as ButtonChakra} from '@chakra-ui/react'
import {FC, PropsWithChildren} from "react";
import {ButtonProps} from "@chakra-ui/react/dist/types/button/button";

export const Button:FC<PropsWithChildren & ButtonProps> = ({children, ...props})=>{
    return (
        <ButtonChakra {...props} variant="outline">
            {children}
        </ButtonChakra>
    )
}