import { Button } from "../component/button";
import React, { useState } from "react";
import { Dialog } from "../component/dialog";
import { Input } from "../component/input";
import { TextArea } from "../component/textarea";
import { ReportList } from "../component/reportlist";

export const HomePages = () => {
  const [open, setOpen] = useState(false);
  const initialData = {
    id: "",
    name: "",
    date: "",
    actions: "",
    work: "",
  };
  const [data, setData] = useState<Reports>(initialData);
  const { name, date, actions, work } = data;

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
    setData(initialData);
    setOpen(false);
    addReport(data);
  };

  //For Report List
  const DefaultList = [
    {
      id: "10001",
      name: "Customer Name",
      work: "Work",
      date: "Date",
      actions: "Actions",
    },
  ];
  const [reports, setReports] = useState<Array<Reports>>(DefaultList);
  const addReport: AddReport = (newReport) => {
    const id = "RE10000";
    newReport.id = id + "1";
    setReports([...reports, newReport]);
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
        </form>
      </Dialog>
      <ReportList reports={reports} />
    </div>
  );
};