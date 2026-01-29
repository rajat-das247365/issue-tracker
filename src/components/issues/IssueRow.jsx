import React from "react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

const IssueRow = ({ issue, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition">
      
      {/* Title */}
      <td className="px-6 py-4 font-medium text-white">
        {issue.title}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <StatusBadge status={issue.status} />
      </td>

      {/* Priority */}
      <td className="px-6 py-4">
        <PriorityBadge priority={issue.priority} />
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-right">
        <div className="inline-flex gap-2">

          <button
            onClick={() => onEdit(issue)}
            className="rounded-md px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-400/30 hover:bg-cyan-500/10"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(issue)}
            className="rounded-md px-3 py-1 text-xs text-red-400 ring-1 ring-red-500/30 hover:bg-red-500/10"
          >
            Delete
          </button>

        </div>
      </td>
    </tr>
  );
};

export default IssueRow;
