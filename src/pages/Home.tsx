import { Button } from "../component/button";
import React, { useState } from "react";
import { Dialog } from "../component/dialog";
import { Input } from "../component/input";
import { TextArea } from "../component/textarea";
import { ReportList } from "../component/reportlist";

interface ReportDataProps {
  addReport: AddReport;
  reportList: Array<Reports>;
}

export const HomePages: React.FC<ReportDataProps> = ({
  addReport,
  reportList,
}) => {
  //For modal open and close
  const [open, setOpen] = useState(false);
  //Form submit initial Data
  const initialData = {
    id: "",
    name: "",
    date: "",
    actions: "",
    work: "",
  };
  const [data, setData] = useState<Reports>(initialData);
  const { id, name, date, actions, work } = data;

  //For Input Submit function
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    setOpen(false);
    addReport(data);
    setData(initialData);
  };

  return (
    <div className="px-14 py-12 w-full max-w-2xl h-full m-auto">
      <div className="flex items-center justify-between mb-2">
        <h1 className="mx-2">Reports</h1>
        <Button variant="primary" shape="circle" onClick={() => setOpen(true)}>
          New Report
        </Button>
      </div>
      <Dialog open={open} title={"Create Report"}>
        <form onSubmit={handleSubmit}>
          <div key={id} id={id}>
            <Input
              label="Date"
              type="date"
              onChange={handleInputChange}
              name={"date"}
              value={date}
              required={true}
            ></Input>
            <Input
              label="Customer Name"
              onChange={handleInputChange}
              name={"name"}
              value={name}
              required={true}
            ></Input>
            <Input
              label="Description of Work"
              onChange={handleInputChange}
              name={"work"}
              value={work}
              required={true}
            ></Input>
            <TextArea
              label="Actions Performed"
              onChange={handleTextAreaChange}
              name={"actions"}
              value={actions}
              required={true}
            ></TextArea>
            <div className="flex justify-end mt-2 gap-2">
              <Button
                onClick={() => {
                  setOpen(false);
                  setData(initialData);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
      <ReportList reports={reportList} />
    </div>
  );
};
