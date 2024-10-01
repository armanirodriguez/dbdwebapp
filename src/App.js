import React, { useState } from 'react';

const mapsList = [
    "The MacMillan Estate",
    "Autohaven Wreckers",
    "Coldwind Farm",
    "Crotus Prenn Asylum",
    "Haddonfield",
    "Backwater Swamp",
    "Léry's Memorial Institute",
    "Red Forest",
    "Springwood",
    "Gideon Meat Plant",
    "Yamaoka Estate",
    "Ormond",
    "Hawkins National Laboratory",
    "Grave of Glenvale",
    "Silent Hill",
    "Raccoon City",
    "Forsaken Boneyard",
    "Withered Isle",
    "The Decimated Borgo",
    "Dvarka Deepwood"
  ];

const App = () => {
  const [players, setPlayers] = useState(Array(5).fill(''));
  const [selectedMaps, setSelectedMaps] = useState([]);
  const [killer, setKiller] = useState(null);
  const [randomMap, setRandomMap] = useState(null);

  // Handle name input changes
  const handleNameChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  // Handle map selection changes
  const handleMapChange = (map) => {
    setSelectedMaps((prevSelectedMaps) =>
      prevSelectedMaps.includes(map)
        ? prevSelectedMaps.filter((m) => m !== map)
        : [...prevSelectedMaps, map]
    );
  };

  // Function to choose a random killer and map
  const assignKillerAndMap = () => {
    const validPlayers = players.filter((player) => player !== '');
    if (validPlayers.length > 0 && selectedMaps.length > 0) {
      const randomKiller = validPlayers[Math.floor(Math.random() * validPlayers.length)];
      const randomSelectedMap = selectedMaps[Math.floor(Math.random() * selectedMaps.length)];
      setKiller(randomKiller);
      setRandomMap(randomSelectedMap);
    } else {
      alert("Please enter all player names and select at least one map.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dead by Daylight Random Killer and Map Selector</h1>

      <div>
        <h2>Enter Player Names</h2>
        {players.map((player, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Player ${index + 1}`}
              value={player}
              onChange={(e) => handleNameChange(index, e.target.value)}
              style={{ marginBottom: '10px' }}
            />
          </div>
        ))}
      </div>

      <div>
        <h2>Select Maps</h2>
        {mapsList.map((map, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={map}
              onChange={() => handleMapChange(map)}
              checked={selectedMaps.includes(map)}
            />
            <label>{map}</label>
          </div>
        ))}
      </div>

      <button onClick={assignKillerAndMap} style={{ marginTop: '20px' }}>
        Assign Killer and Map
      </button>

      {killer && randomMap && (
        <div style={{ marginTop: '20px' }}>
          <h2>Results</h2>
          <p><strong>Killer:</strong> {killer}</p>
          <p><strong>Map:</strong> {randomMap}</p>
        </div>
      )}
    </div>
  );
};

export default App;