import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { GameDetails } from "../game/GameDetails"
import { GameList } from "../game/GameList"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
            <Route element={<Authorized />} />
                <Route path="/games" element={<GameList />}  />
                <Route path="/game/:gameId" element={<GameDetails />}  />

    </Routes>
    </>
}