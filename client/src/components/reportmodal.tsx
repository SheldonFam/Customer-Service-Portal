import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";
import { TextArea } from "./textarea";
import { Reports } from "../models/reports";
import { useState } from "react";

interface ReportModalProps {
  createNewReport: (data: Reports) => void;
  onDismiss: () => void;
  isOpen: boolean;
}

export const ReportModal = ({
  createNewReport,
  onDismiss,
  isOpen,
}: ReportModalProps) => {
  //Form submit initial Data
  const initialData = {
    reportNo: "",
    _id: "",
    name: "",
    date: "",
    actions: "",
    work: "",
  };

  const [data, setData] = useState<Reports>(initialData);

  const { _id, name, date, actions, work } = data;

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
    createNewReport(data);
    setData(initialData);
  };

  return (
    <Modal isOpen={isOpen} title={"Create Report"}>
      <form onSubmit={handleSubmit}>
        <div id={_id}>
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
            type="text"
            onChange={handleInputChange}
            name={"name"}
            value={name}
            required={true}
          ></Input>
          <Input
            label="Description of Work"
            type="text"
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
            <Button onClick={onDismiss}>Cancel</Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
