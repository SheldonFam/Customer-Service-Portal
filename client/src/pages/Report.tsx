import { Button } from "../component/button";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "../component/dialog";
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
  // fetchReport,
  updateReports,
  deleteReports,
}) => {
  const navigate = useNavigate();

  //reportID :string | undefined???
  const { reportId } = useParams();
  console.log(reportId);
  console.log(reports);
  const data = Object.values(reports).find((report) => report._id === reportId);
  console.log(data);

  const returnToHome = () => {
    navigate("/");
  };

  //For modal open and close
  const [open, setOpen] = useState(false);

  const inData = {
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

  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-row justify-between mb-2">
        <div>
          <Button onClick={returnToHome}>Go Back</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant={"primary"} onClick={() => setOpen(true)}>
            Edit
          </Button>
          <Button variant={"danger"} onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <div>Report</div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>Date: {data?.date}</div>
          <div>Customer Name: {data?.name}</div>
          <div>Description of Work: {data?.work}</div>
          <div>Actions Performed: {data?.actions}</div>
        </div>
      </div>
      <div>
        <Dialog open={open} title={"Edit Report"}>
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
        </Dialog>
      </div>
      {/*Delete Report Modal? */}
      {/* <div>
        <Dialog open={open} title={"Delete Report?"}>
          <div className="flex justify-end mt-2 gap-2">
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="danger" type="submit">
              Yes
            </Button>
          </div>
        </Dialog>
      </div> */}
    </div>
  );
};
