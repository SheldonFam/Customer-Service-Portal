import { Reports } from "../../models/reports";

const reportApi = "https://reports-api.vercel.app";
const localhost = "http://localhost:8000";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.console.error();
    throw Error(errorMessage);
  }
}

export async function fetchAllReports(): Promise<Reports[]> {
  const response = await fetchData("http://localhost:8000/reports", {
    method: "GET",
  });
  const reports = await response.json();
  const allReports = reports.reports;
  return allReports;
}

export async function fetchSingleReport(
  reportId: string | undefined
): Promise<Reports> {
  const response = await fetchData(
    "http://localhost:8000/reports/" + reportId,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`;
    window.alert(message);
  }
  const singleReport = await response.json();
  return singleReport;
}

// export interface ReportInput {
//   name: string;
//   work: string;
//   date: string;
//   actions: string;
// }

export async function createReport(newReport: Reports): Promise<Reports> {
  const response = await fetch("http://localhost:8000/reports", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReport),
  });
  return response.json();
}

export async function updateReport(updateData: Reports): Promise<Reports> {
  const response = await fetch(
    "http://localhost:8000/reports/" + updateData._id,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updateData.name,
        work: updateData.work,
        date: updateData.date,
        actions: updateData.actions,
      }),
    }
  );
  return response.json();
}

export async function deleteReports(reportId: string) {
  const response = await fetch("http://localhost:8000/reports/" + reportId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
