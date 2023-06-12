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
    try {
      const date = new Date().getDate();
      setData(date, "14:33,16:36,18:00");
      alert("알림이 갱신되었습니다.");
    } catch (err) {
      console.error(err);
      alert("알림 갱신에 실패하였습니다.");
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>get</button>
      <button onClick={handleSet}>set</button>
    </div>
  );
}

export default App;
