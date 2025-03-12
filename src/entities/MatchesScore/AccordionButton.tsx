import {
    AccordionButton as AccordionButtonChakra, HStack, Flex, Text, VStack
} from '@chakra-ui/react'
import {TStatuses} from "../../app/services/matches";
import {TeamIcon} from "../../app/assets";
import {Badge} from "../../shared/ui";

interface IAccordionButton {
    awayScore: number,
    homeScore: number
    status: TStatuses,
    homeTeamName: string,
    awayTeamName: string
}

interface IStatusValues {
    color: string
    label: string
}
const StatusSchema: Record<TStatuses, IStatusValues> = {
    'Finished': {color: '#EB0237', label: 'Finished'},
    'Ongoing': {color: '#43AD28', label: 'Live'},
    'Scheduled': {color: '#EB6402', label: 'Match preparing'},
}
export const AccordionButton = ({
                                    awayScore,
                                    homeScore,
                                    status,
                                    homeTeamName,
                                    awayTeamName
                                }: IAccordionButton) => {
    return (
        <AccordionButtonChakra bg='darken.150' >
            <Flex justifyContent='space-between' minHeight='55px' width='100%'>
                <HStack>
                    <TeamIcon/>
                    <Text>{homeTeamName}</Text>
                </HStack>
                <VStack justifyContent='space-between'>
                    <Text size='md'>{homeScore} : {awayScore}</Text>
                    <Badge color={StatusSchema[status].color}>
                        <Text size='sm'>{StatusSchema[status].label}</Text>
                    </Badge>
                </VStack>
                <HStack>
                    <Text>{awayTeamName}</Text>
                    <TeamIcon/>
                </HStack>
            </Flex>
        </AccordionButtonChakra>
    )
}
