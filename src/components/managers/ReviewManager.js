/*Getter Functions To Fetch Games*/
export const getReviewByGame = (gameId) => {
    return fetch(`http://localhost:8000/reviews?gameId=${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(response => response.json())
}


/*Post requests*/
export const createReview = (review) => {
    return fetch(`http://localhost:8000/reviews`, {
        method: "POST",
        headers: {
                "Authorization": `Token ${localStorage.getItem("gr_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
}