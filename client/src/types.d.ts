type AddReport = (newReport: Reports) => void;

type Reports = {
  report_no: number | undefined;
  _id: string | undefined;
  name: string | undefined;
  work: string | undefined;
  date: string | undefined;
  actions: string | undefined;
};
