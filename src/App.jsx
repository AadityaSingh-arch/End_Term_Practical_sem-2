import react from "react";
import {useState} from "react";

function App() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return(
    <div>
      <button onClick={handleClick}>{liked ? "❤️" : "🤍"}</button>
    </div>
  );
}
  

export default App;