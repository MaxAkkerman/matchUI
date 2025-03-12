import {Flex, Text, Spacer, HStack} from '@chakra-ui/react'
import {Spinner} from '@chakra-ui/react'
import {useGetMatchesQuery} from "../../app/services/matches";
import {AlertIcon, LogoIcon} from "../../app/assets";
import {Button} from "../../shared/ui";

export const Header = () => {
    const {isLoading, error, refetch} = useGetMatchesQuery()
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Flex gap='12px'>
                <LogoIcon/>
            </Flex>
            <Spacer/>
            <Flex gap='12px'>
                {error && <HStack padding='16px' borderRadius='4px' bg='darken.100'>
                    <AlertIcon/>
                    <Text size='md' fontWeight={500}>Ошибка: не удалось загрузить информацию</Text>
                </HStack>
                }
                <Button onClick={()=>refetch()}>
                    <Text variant='base'>Обновить</Text>
                    {isLoading && <Spinner color='white.100'/>}
                </Button>
            </Flex>
        </Flex>
    )
}