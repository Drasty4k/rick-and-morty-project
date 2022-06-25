import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharactersList from './components/characters_list';
import CharacterDetails from './components/character_details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/:id" element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
