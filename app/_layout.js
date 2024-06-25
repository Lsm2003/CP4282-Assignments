import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'
import { GameContext } from "../components/GameContext"
import { useState, useContext } from 'react';

export default function HomeLayout() {
  const [gameinfo, setGameinfo] = useState(useContext(GameContext))

  return (
    <>
    <GameContext.Provider value={{gameinfo, setGameinfo}}>
    <NavBar/>
  <Slot />
  </GameContext.Provider>
  </>
);
}