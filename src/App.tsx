import React from "react";
import { useRealTimeDB } from "./firebase/useRealTimeDB";
import { Schedule } from "./Schedule/Schedule";

function App() {
  const { getData, setData } = useRealTimeDB();

  const handleClick = async () => {
    const date = new Date().getDate();
    console.log(await getData(date));
  };

  const handleSet = () => {
    const date = new Date().getDate();
    setData(date, "14:33,16:36,18:00");
  };

  return (
    <div className="App">
      {/* <Schedule onSubmit={() => {}} /> */}
      <button onClick={handleClick}>get</button>
      <button onClick={handleSet}>set</button>
    </div>
  );
}

export default App;
