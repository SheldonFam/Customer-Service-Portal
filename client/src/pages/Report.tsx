import { Button } from "../component/button";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../component/modal";
import { useState } from "react";
import { Input } from "../component/input";
import { TextArea } from "../component/textarea";

interface ReportDataProps {
  reports: Array<Reports>;
  updateReports: (updateData: Reports) => void;
  deleteReports: (reportData: Reports) => void;
}

export const ReportPages: React.FC<ReportDataProps> = ({
  reports,
  updateReports,
  deleteReports,
}) => {
  const navigate = useNavigate();

  //reportID :string | undefined???
  const { reportId } = useParams();

  const data = Object.values(reports).find((report) => report._id === reportId);

  const returnToHome = () => {
    navigate("/");
  };

  //For modal open and close
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const inData = {
    reportNo: data?.reportNo,
    _id: data?._id,
    name: data?.name,
    work: data?.work,
    date: data?.date,
    actions: data?.actions,
  };

  const [editReport, setEditReport] = useState<Reports>(inData);

  const handleEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditReport((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEditTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditReport((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  //after edit then submit form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
    updateReports(editReport);
  };

  const handleDelete = () => {
    deleteReports(editReport);
    returnToHome();
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  return (
    <div className="px-6 py-10 md:px-12 min-h-screen max-w-3xl m-auto text-sm md:text-base">
      <div className="flex flex-row justify-between mb-2">
        <div>
          <Button onClick={returnToHome}>Go Back</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"primary"} onClick={() => setOpen(true)}>
            Edit
          </Button>
          <Button variant={"danger"} onClick={handleOpenDeleteModal}>
            Delete
          </Button>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="font-bold">Report {data?.reportNo}</div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>Date: {data?.date}</div>
          <div>Customer Name: {data?.name}</div>
          <div>Description of Work: {data?.work}</div>
          <div>Actions Performed: {data?.actions}</div>
        </div>
      </div>
      <div>
        <Modal isOpen={open} title={"Edit Report"}>
          <form onSubmit={handleSubmit} id={editReport._id}>
            <Input
              label="Date"
              type="date"
              name={"date"}
              value={editReport.date}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <Input
              label="Customer Name"
              type="text"
              name={"name"}
              value={editReport.name}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <Input
              label="Description of Work"
              type="text"
              name={"work"}
              value={editReport.work}
              onChange={handleEditInput}
              required={true}
            ></Input>
            <TextArea
              label="Actions Performed"
              name={"actions"}
              value={editReport.actions}
              onChange={handleEditTextArea}
              required={true}
            ></TextArea>
            <div className="flex justify-end mt-2 gap-2">
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </form>
        </Modal>
      </div>
      <div>
        <Modal isOpen={openDeleteModal} title={"Delete Report?"}>
          <div className="flex justify-end mt-2 gap-2">
            <Button
              onClick={() => {
                setOpenDeleteModal(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="danger" type="submit" onClick={handleDelete}>
              Yes
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
