import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleGame } from "../managers/GameManager"
import { getReviewByGame } from "../managers/ReviewManager"

export const GameDetails = () => {
    const {gameId} = useParams()
    const navigate = useNavigate()
    const [game, setGame] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getSingleGame(gameId).then(setGame)
        .then(() => {
            getReviewByGame(gameId).then(setReviews)
        })
    },[gameId])


    return(
        <>
        
        <h1>{game.title}</h1>

        <div>Designer: {game.designer}</div>
        <div>Year Released: {game.year_released}</div>
        <div>Number Of Players: {game.number_of_players}</div>
        <div>Estimated Time To Play: {game.estimated_time_to_play}</div>
        <div>Age Recommendation: {game.age_recommendation}</div>
        <div>Categories: 
        {
            game.categories?.map(category => {
                return <div key={`category -- ${category?.id}`}>{category?.name}</div>
            })
        }
        </div>
        <div>Reviews: 
        {
            reviews?.map(review => {
                return <div key={`review -- ${review?.id}`}>{review?.review}</div>
            })
        }
        </div>
        <button onClick={(() => navigate(`/games/${gameId}/review`))}>Review Game</button>
        <button onClick={(() => navigate(`/games/${gameId}/edit`))}>Edit Game</button>
        
        </>
    )
}