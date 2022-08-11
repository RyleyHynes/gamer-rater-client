/*Getter Functions To Fetch Games*/
export const getAllGames = () => {
    return fetch(`http://localhost:8000/games`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}


export const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}

