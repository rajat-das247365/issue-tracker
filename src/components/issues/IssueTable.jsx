import React from "react";
import IssueRow from "./IssueRow";

const IssueTable = ({ issues, onEdit, onDelete }) => {
  return (
    <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/10 text-white/60">
          <tr>
            <th className="px-6 py-4 font-medium">Title</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Priority</th>
            <th className="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {issues.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="px-6 py-10 text-center text-white/40"
              >
                No issues found
              </td>
            </tr>
          ) : (
            issues.map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
