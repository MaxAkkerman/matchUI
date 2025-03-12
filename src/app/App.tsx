import React from 'react';
import {useGetMatchesQuery} from "./services/matches";
import {Header, MatchesScore} from "../entities";
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function App() {
    const {data} = useGetMatchesQuery()

    return (
        <div>
            <Header/>
            {data && <MatchesScore matches={data}/>}
        </div>
    );
}

export default App;
