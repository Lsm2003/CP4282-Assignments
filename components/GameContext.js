import { createContext } from 'react';
import gamedata from "../assets/Data/Games.json"

export const GameContext = createContext(gamedata.gamedata);