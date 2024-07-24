import { Slot } from 'expo-router';
import NavBar from '../components/NavBar'

import {SQLiteProvider} from 'expo-sqlite'

export default function HomeLayout() {

  return (
    <SQLiteProvider databaseName='games.db' onInit={initializeDB}>
    <NavBar/>
  <Slot />
  </SQLiteProvider>
);
}
async function initializeDB(db) {
  await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS games (name TEXT PRIMARY KEY NOT NULL, year TEXT NOT NULL, rating TEXT NOT NULL, developer TEXT NOT NULL, imagelink TEXT NOT NULL);
  `);
   const result = await db.getAllAsync('SELECT * FROM games');
  if( result.length == 0 ) {
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "AC Black Flag", "1997", "95", "Ubisoft", "https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg" );
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "Jedi Survivor", "2023", "90", "Respawn Entertainment", "https://lumiere-a.akamaihd.net/v1/images/sw-jedi-survivor-key-art-1080x1080_c38222d5.jpeg?region=0,0,1080,1080" );
      await db.runAsync('INSERT INTO games (name, year, rating, developer, imagelink) VALUES (?, ?, ?, ?, ?)', "Jedi Fallen Order", "2019", "67", "Respawn Entertainment", "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg/220px-Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg" );
  }
  const firstRow = await db.getFirstAsync('SELECT * FROM games');
  console.log(firstRow.name, firstRow.year, firstRow.actors, firstRow.imageIndex);
}