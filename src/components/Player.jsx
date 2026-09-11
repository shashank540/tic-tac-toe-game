import {useState} from 'react';

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    let handleEditClick= () =>{
        setIsEditing(!isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editibalePlayerName = <span className="player-name">{playerName}</span>;
    //let buttonCaption = "Edit";
    if(isEditing) {
        //editibalePlayerName = <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>; //this will also works same as onchage in oneliner code
        editibalePlayerName = <input type="text" value={playerName} onChange={handleChange}/>; //this will also works same as onchage with additional function handleChange
    }
    

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editibalePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}