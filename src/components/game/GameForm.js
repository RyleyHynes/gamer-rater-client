import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../managers/CategoryManager"
import { CreateGame } from "../managers/GameManager"

export const GameForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    const [currentGame, setCurrentGame] = useState({
        title: "",
        designer: "",
        description: "",
        numberOfPlayers: 0,
        estimatedTimeToPlay: 0,
        recommendedAge: 0,
        yearReleased: 0,
        category: 0
    })

    const changeGameState = (domEvent) => {
        const newGame = {...currentGame}
        newGame[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGame)
    }

    return (
        <>
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" required autoFocus className="form-control" value={currentGame.title}
                    onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
            <label htmlFor="designer">Designer: </label>
                <div className="form-group">
                <input type="text" name="designer" required autoFocus className="form-control" value={currentGame.designer}
                    onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" required autoFocus className="form-control" value={currentGame.description}
                    onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="numberOfPlayers">Number Of Players: </label>
                <div className="form-group">
                    <input type="number" name="numberOfPlayers" required className="form-control" min="1" max="50" value={currentGame.numberOfPlayers}
                        onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="estimatedTimeToPlay">Estimated Time To Play: </label>
                <div>
                <input type="number" name="estimatedTimeToPlay" required className="form-control" min="1" max="50" value={currentGame.estimatedTimeToPlay}
                        onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="recommendedAge">Recommended Age: </label>
                <div>
                <input type="number" name="ageRecommendation" required className="form-control" min="1" max="50" value={currentGame.ageRecommendation}
                        onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="yearReleased">Year Released: </label>
                <div>
                <input type="number" name="yearReleased" required className="form-control" min="1" max="50" value={currentGame.yearReleased}
                        onChange={changeGameState} />
                </div>
            </fieldset>

            <fieldset>
                <div>
                <label htmlFor="category">Category: </label>
                    <select className="form-control" name="category" value={currentGame.category} required onChange={changeGameState}>
                    <option value="0">Choose Game Category</option>
                    {
                        categories.map(category => {
                            return <option value={category.id} key={`cat--${category.id}`}>{category.name}</option>
                        })
                    }
                    </select>
                </div>
            </fieldset>

            <button type="submit" onClick={event => {
                event.preventDefault()

                const game = {
                    title: currentGame.title,
                    designer: currentGame.designer,
                    description: currentGame.description,
                    number_of_players: parseInt(currentGame.numberOfPlayers),
                    estimated_time_to_play: parseInt(currentGame.estimatedTimeToPlay),
                    age_recommendation: parseInt(currentGame.ageRecommendation),
                    year_released: parseInt(currentGame.yearReleased),
                    category: parseInt(currentGame.category),
                }
                /*Send post request to API*/
                CreateGame(game)
                    .then(() => navigate("/games"))
            }}
                className="btn btn-primary">Create</button>

        </form>
        </>
    )
}