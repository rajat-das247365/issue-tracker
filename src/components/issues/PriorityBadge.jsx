import React from "react";

const PriorityBadge = ({ priority }) => {
  const styles = {
    High: "bg-red-500/20 text-red-300 ring-red-400/40 shadow-red-500/30",
    Medium:
      "bg-yellow-400/20 text-yellow-300 ring-yellow-400/40 shadow-yellow-500/30",
    Low: "bg-teal-400/20 text-teal-300 ring-teal-400/40 shadow-teal-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 shadow ${styles[priority]}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;
