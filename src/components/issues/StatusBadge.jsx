import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    Open: "bg-amber-400/20 text-amber-300 ring-amber-400/40 shadow-amber-500/30",
    "In Progress":
      "bg-cyan-400/20 text-cyan-300 ring-cyan-400/40 shadow-cyan-500/30",
    Closed:
      "bg-green-400/20 text-green-300 ring-green-400/40 shadow-green-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 shadow ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
