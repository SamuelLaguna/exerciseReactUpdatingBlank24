
import { useState } from "react";

const Exercise1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "David",
    },
  });

  const handleClick = () => {
    setGame({...game,player:{...game.player,name:"Aaron" }});
  };

  return (
  
    <>
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Update Name</button>
      </div>
    </>
  );
};

export default Exercise1;
