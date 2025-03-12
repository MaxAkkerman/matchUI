import {
    AccordionPanel as AccordionPanelChakra, Flex, Grid, HStack, Stack, Text
} from '@chakra-ui/react'
import {IPlayer} from "../../app/services/matches";
import {DividerIcon} from "../../app/assets";

const UserIcon = require('../../app/assets/icons/avatarIcon.png')

interface ITeamData {
    name: string
    place: number
    players: IPlayer[]
    points: number
    total_kills: number
}

interface IAccordionPanel {
    homeTeam: ITeamData
    awayTeam: ITeamData
}

const TeamTotalResult = ({players, points, total_kills, place}: ITeamData) => {
    return (
        <Grid gridTemplateColumns='1fr 1fr 1fr' w='100%' gap='10px'>
                    {players.map(({kills, username}) => (
                        <Flex w='auto' gap='40px' p='4px 24px' justifyContent='center' bg='darken.100' minHeight='52px' borderRadius='4px'>
                            <HStack>
                                <img src={UserIcon}/>
                                <Text>{username}</Text>
                            </HStack>
                            <HStack>
                                <Text opacity='40%'>Убийств:</Text>
                                <Text>{kills}</Text>
                            </HStack>
                        </Flex>

                    ))}
            <Flex bg='darken.100' minHeight='52px' gridColumnStart='1' gridColumnEnd='4' gridRowStart='2' >
                <HStack w='100%' justifyContent='space-around' divider={<DividerIcon/>}>
                <HStack p='4px 24px' w='100%' justifyContent='center'>
                    <Text opacity='40%'>Points:</Text>
                    <Text>{points}</Text>
                </HStack>
                <HStack p='4px 24px' w='100%' justifyContent='center'>
                    <Text opacity='40%'>Место:</Text>
                    <Text>{place}</Text>
                </HStack>
                <HStack p='4px 24px' w='100%' justifyContent='center'>
                    <Text opacity='40%'>Всего убийств:</Text>
                    <Text>{total_kills}</Text>
                </HStack>
                </HStack>
            </Flex>
            </Grid>
    )
}

export const AccordionPanel = ({homeTeam, awayTeam}: IAccordionPanel) => {
    return (
        <AccordionPanelChakra>
            <TeamTotalResult {...homeTeam}/>
            <TeamTotalResult {...awayTeam}/>
        </AccordionPanelChakra>
    )
}