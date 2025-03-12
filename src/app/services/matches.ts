import {api} from './api'

export type TStatuses = 'Ongoing' | 'Finished' | 'Scheduled'

export interface IPlayer {
    kills: number,
    username: string
}

export interface IMatch {
    awayScore: number,
    awayTeam: {
        name: string,
        place: number,
        players: IPlayer[],
        points: number,
        total_kills: number
    },
    homeScore: number,
    homeTeam: {
        name: string,
        place: number,
        players: IPlayer[],
        points: number,
        total_kills: number
    },
    status: TStatuses,
    time: Date,
    title: string
}

interface IMatchesResponse {
    data: { matches: IMatch[] }
}

export const matchesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMatches: build.query<IMatch[], void>({
            query: () => ({url: 'fronttemp'}),
            transformResponse: (_matches: IMatchesResponse) => _matches.data.matches
        }),

    }),
})

export const {
    useGetMatchesQuery,
} = matchesApi

