type AddReport = (newReport: Reports) => void;

type Reports = {
  id: string | undefined;
  name: string | undefined;
  work: string | undefined;
  date: string | undefined;
  actions: string | undefined;
};
