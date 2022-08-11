import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllGames } from "../managers/GameManager"


export const GameList = (props) => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames().then(setGames)
    },[])


    return (
        <>
        <header>Game List</header>
        <button onClick={(() => navigate(`create`))}>Create New Game</button>
        <article className="games">
            {
            games.map(game => {
                return <section key={`game--${game.id}`} className="game">
                    <Link to={`/game/${game.id}`}>
                        <h4 className="game__title">{game.title}</h4>
                    </Link>
                </section>
            })
        }
        </article>
        </>
    )
}