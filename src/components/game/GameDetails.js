import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategories } from "../managers/CategoryManager"
import { getSingleGame } from "../managers/GameManager"

export const GameDetails = () => {
    const {gameId} = useParams()
    const [game, setGame] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getSingleGame(gameId).then(data => setGame(data))
    },[])

    return(
        <>
        
        <h1>{game.title}</h1>

        <div>Designer: {game.designer}</div>
        <div>Year Released: {game.year_released}</div>
        <div>Number Of Players: {game.number_of_players}</div>
        <div>Estimated Time To Play: {game.estimated_time_to_play}</div>
        <div>Age Recommendation: {game.age_recommendation}</div>

        {
            game.categories?.map(category => {
                return <div key={`category -- ${category?.id}`}>{category?.name}</div>
            })
        }
        </>
    )
}