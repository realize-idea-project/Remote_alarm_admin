import { db } from "./firebase";

export const useRealTimeDB = () => {
  const id = 1;
  const realTime = db.ref(`company/company_${id}`);

  const getData = async () => {
    const snapshot = await realTime.get();

    if (snapshot.exists()) {
      return snapshot.val();
    }
  };

  const setData = async (date: number, time: string) => {
    await realTime.set({ [date]: time });
  };

  return {
    getData,
    setData,
  };
};
