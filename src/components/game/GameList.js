import { useEffect, useState } from "react"
import { getGames } from "../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getGames.then(data => setGames(data))
    },[])


    return (
        <>
        <h1>Game List</h1>
        </>
    )
}