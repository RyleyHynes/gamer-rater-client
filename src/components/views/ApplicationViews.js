import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { EditGame } from "../game/EditGame"
import { GameDetails } from "../game/GameDetails"
import { GameForm } from "../game/GameForm"
import { GameList } from "../game/GameList"
import { ReviewForm } from "../game/ReviewForm"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
            <Route element={<Authorized />} />
                <Route path="/games" element={<GameList />}  />
                <Route path="/game/:gameId" element={<GameDetails />}  />
                <Route path="/game/create" element={<GameForm />} />
                <Route path="/games/:gameId/review" element={<ReviewForm />} />
                <Route path="/games/:gameId/edit" element={<EditGame />} />

    </Routes>
    </>
}