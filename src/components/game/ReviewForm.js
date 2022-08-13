import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createReview } from "../managers/ReviewManager"

export const ReviewForm = () => {
    const { gameId } = useParams()
    const navigate = useNavigate()

    //Create review object
    const [review, setReview] = useState({
        review: ""
    })

    const changeReviewState = (domEvent) => {
        const newReview = { ...review }
        newReview[domEvent.target.name] = domEvent.target.value
        setReview(newReview)
    }

    return (
        <>
            <form>
                <h2 className="gameReview--title">Review Game</h2>
                <fieldset>
                    <div>
                        <label htmlFor="review">Review: </label>
                        <textarea name="review" required autoFocus className="form-control" value={review.review}
                            onChange={changeReviewState} />
                    </div>
                </fieldset>

                <button type="submit" onClick={evt => {
                    // prevents the form from being submitted
                    evt.preventDefault()

                    const postReview = {
                        review: review.review,
                        game: gameId
                    }
                    // Send POST request to API
                    createReview(postReview)
                        .then(() => navigate(`/game/${gameId}`))
                }}
                    className="btn btn-primary">Create</button>
            </form>
        </>
    )
}