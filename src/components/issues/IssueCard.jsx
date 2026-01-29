import React from "react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

const IssueCard = ({ issue, onEdit, onDelete }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow shadow-cyan-500/10">
      <div className="space-y-3">
        
        <h3 className="font-medium text-white">
          {issue.title}
        </h3>

        <p className="text-sm text-white/60 line-clamp-3">
          {issue.description || "No description provided"}
        </p>

        <div className="flex items-center gap-2">
          <StatusBadge status={issue.status} />
          <PriorityBadge priority={issue.priority} />
        </div>

        <div className="flex justify-end gap-4 pt-2">
          <button
            onClick={() => onEdit(issue)}
            className="text-sm text-cyan-300 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded"
            aria-label="Edit issue"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(issue)}
            className="text-sm text-red-400 hover:text-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 rounded"
            aria-label="Delete issue"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default IssueCard;
