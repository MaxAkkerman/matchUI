import {
    Accordion as AccordionChakra,
    AccordionItem,
} from '@chakra-ui/react'
import {IMatch} from "../../app/services/matches";
import {AccordionButton} from "./AccordionButton";
import {AccordionPanel} from "./AccordionPanel";

interface IAccordion {
    matches: IMatch[]
}

export const MatchesScore = ({matches}: IAccordion) => {
    return (
        <AccordionChakra allowMultiple gap='20px'>
            {matches.map(({awayScore, homeScore, status, homeTeam, awayTeam}) => {
                return (
                    <AccordionItem key={`${homeTeam.name}-${awayScore}-${homeScore}-${awayTeam.name}`} bg='darken.150'>
                        <AccordionButton
                            awayScore={awayScore}
                            homeScore={homeScore}
                            status={status}
                            homeTeamName={homeTeam.name}
                            awayTeamName={awayTeam.name}
                        />
                        <AccordionPanel homeTeam={homeTeam} awayTeam={awayTeam} />
                    </AccordionItem>
                )
            })}
        </AccordionChakra>
    )
}