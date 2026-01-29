import React from "react";

const FilterBar = ({ onNewIssue }) => {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 shadow-lg shadow-cyan-500/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Left: Filters (logic later) */}
        <div className="flex gap-3">
          <select className="rounded-md bg-[#0b0f1a] px-3 py-2 text-sm text-white/80 ring-1 ring-white/10">
            <option>All Statuses</option>
          </select>

          <select className="rounded-md bg-[#0b0f1a] px-3 py-2 text-sm text-white/80 ring-1 ring-white/10">
            <option>Sort by Priority</option>
          </select>
        </div>

        {/* Right: CTA */}
        <button
          onClick={onNewIssue}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/40 shadow shadow-cyan-500/30 hover:bg-cyan-500/30"
        >
          + New Issue
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
