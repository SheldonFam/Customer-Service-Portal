import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";
import { TextArea } from "./textarea";
import { Reports } from "../models/reports";
import { useState } from "react";

interface EditReportModalProps {
  updateReport: (data: Reports) => void;
  onDismiss: () => void;
  isOpen: boolean;
}

export const EditReportModal = ({
  updateReport,
  onDismiss,
  isOpen,
}: EditReportModalProps) => {
  const [reportData, setReportData] = useState({
    reportNo: "",
    _id: "",
    name: "",
    work: "",
    date: "",
    actions: "",
  });

  const handleEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEditTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReportData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateReport(reportData);
  };

  return (
    <Modal isOpen={isOpen} title={"Edit Report"}>
      <form onSubmit={handleSubmit} id={reportData._id}>
        <Input
          label="Date"
          type="date"
          name={"date"}
          value={reportData.date}
          onChange={handleEditInput}
          required={true}
        ></Input>
        <Input
          label="Customer Name"
          type="text"
          name={"name"}
          value={reportData.name}
          onChange={handleEditInput}
          required={true}
        ></Input>
        <Input
          label="Description of Work"
          type="text"
          name={"work"}
          value={reportData.work}
          onChange={handleEditInput}
          required={true}
        ></Input>
        <TextArea
          label="Actions Performed"
          name={"actions"}
          value={reportData.actions}
          onChange={handleEditTextArea}
          required={true}
        ></TextArea>
        <div className="flex justify-end mt-2 gap-2">
          <Button onClick={onDismiss}>Cancel</Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </form>
    </Modal>
  );
};
