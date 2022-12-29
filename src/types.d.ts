type AddReport = (newReport: Reports) => void;

type Reports = {
  id: string;
  name: string;
  work: string;
  date: string;
  actions: string;
};
