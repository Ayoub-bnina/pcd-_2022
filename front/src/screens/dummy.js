export const newSeason = [
    {
        id: 1,
        stillWatching: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
            {
                id: 5,
            },
            {
                id: 6,
            },
        ],
        details: {
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 2,
        stillWatching: [
            {
                id: 1,

            },
            {
                id: 2,

            },
            {
                id: 3,

            },
            {
                id: 4,

            }
        ],
        details: {
            age: "18+",
            genre: "Romance",
            ratings: 7.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 3,
        stillWatching: [],
        details: {
            age: "16+",
            genre: "Crime",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 4,
        stillWatching: [
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
        ],
        details: {

            progress: "0%"
        }
    },
]
export const continueWatching = [
    {
        id: 1,
        name: "Prison Break",
        overallProgress: "20%",
        details: {

            progress: "50%"
        }
    },
    {
        id: 2,
        name: "House of Cards",
        overallProgress: "50%",
        details: {

            progress: "50%"
        }
    },
    {
        id: 3,
        name: "Bridgerton",
        overallProgress: "70%",
        details: {

            progress: "50%"
        }
    },
    {
        id: 4,
        name: "Money Heist",
        overallProgress: "40%",
        details: {

            progress: "50%"
        }
    },
]

const dummyData = { newSeason, continueWatching };

export default dummyData;