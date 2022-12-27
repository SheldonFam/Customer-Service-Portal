import { Button } from "./component/button";
import React, { useState, useRef } from "react";
import { Dialog } from "./component/dialog";
import { Input } from "./component/input";
import { TextArea } from "./component/textarea";
import { MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const [open, setOpen] = useState(false);
  const initialData = { name: "", date: "", actions: "", work: "" };
  const [data, setData] = useState(initialData);
  const { name, date, actions, work } = data;

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
  };

  return (
    <div className="px-14 py-12 w-full max-w-2xl h-full m-auto">
      <div className="flex items-center justify-between mb-2">
        <h1 className="mx-2">Reports</h1>
        <Button variant="primary" shape="circle" onClick={() => setOpen(true)}>
          New Report
        </Button>
      </div>
      <Dialog open={open}>
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
      <div>
        <ul className="border mb-4">
          <li className="flex justify-between px-2 py-4 items-center">
            <span>RN10001</span>
            <span>Customer Name</span>
            <span>25-12-2022</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
