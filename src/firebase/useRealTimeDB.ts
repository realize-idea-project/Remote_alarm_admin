import { db } from "./firebase";

export const useRealTimeDB = () => {
  const id = 1;
  const realTime = db.ref(`company/company_${id}`);

  const getData = async (date: number) => {
    const snapshot = await realTime.child(`${date}`).get();

    if (snapshot.exists()) {
      return snapshot.val();
    }
  };

  const setData = async (date: number, time: string) => {
    await realTime.child(`${date}`).set(time);
  };

  return {
    getData,
    setData,
  };
};
