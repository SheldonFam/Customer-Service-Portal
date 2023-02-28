import { Reports } from "../models/reports";
import { reportApiBaseUrl } from "./api-constant";

export async function fetchAllReports(): Promise<Reports[]> {
  const response = await fetch(`${reportApiBaseUrl}/reports`, {
    method: "GET",
  });
  const reports = await response.json();
  const allReports = reports.reports;
  return allReports;
}

export async function fetchSingleReport(
  reportId: string | undefined
): Promise<Reports> {
  const response = await fetch(`${reportApiBaseUrl}/reports/` + reportId, {
    method: "GET",
  });
  if (!response.ok) {
    const message = `An error has occurred: ${response.statusText}`;
    window.alert(message);
  }
  const singleReport = await response.json();
  return singleReport;
}

export interface ReportInput {
  name: string;
  work: string;
  date: string;
  actions: string;
}

export async function createReport(newReport: ReportInput): Promise<Reports> {
  const response = await fetch(`${reportApiBaseUrl}/reports/`, {
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
    `${reportApiBaseUrl}/reports/` + updateData._id,
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
  const response = await fetch(`${reportApiBaseUrl}/reports/` + reportId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
