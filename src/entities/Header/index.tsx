import {Flex, Text, Spacer, HStack, useMediaQuery} from '@chakra-ui/react'
import {Spinner} from '@chakra-ui/react'
import {useGetMatchesQuery} from "../../app/services/matches";
import {AlertIcon, LogoIcon} from "../../app/assets";
import {Button} from "../../shared/ui";

export const Header = () => {
    const {isLoading, error, refetch} = useGetMatchesQuery()
    const [isLessThan800] = useMediaQuery('(max-width: 800px)')

    return (
        <Flex minWidth='max-content' flexDirection={isLessThan800 ? 'column' : 'row'} alignItems='center' gap='2'>
            <Flex gap='12px'>
                <LogoIcon/>
            </Flex>
            <Spacer/>
            <Flex gap='12px' flexDirection={isLessThan800 ? 'column-reverse' : 'row'} w={isLessThan800 ? '100%' : 'auto'}>
                {error && <HStack padding='16px' borderRadius='4px' bg='darken.100'>
                    <AlertIcon/>
                    <Text size='md' fontWeight={500}>Ошибка: не удалось загрузить информацию</Text>
                </HStack>
                }
                <Button onClick={()=>refetch()} w={isLessThan800 ? '100%' : '204px'}>
                    <Text variant='base' size='md'>Обновить</Text>
                    {isLoading && <Spinner color='white.100'/>}
                </Button>
            </Flex>
        </Flex>
    )
}