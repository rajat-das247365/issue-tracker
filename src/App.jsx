import React, { useReducer, useState } from "react";
import { issueReducer, initialState } from "./reducers/issueReducer";

// Layout

// Issue display

import Navbar from "./components/Navbar";
import FilterBar from "./components/filters/FilterBar";
import IssueTable from "./components/issues/IssueTable";
import IssueCard from "./components/issues/IssueCard";
import CreateIssueModal from "./components/modals/CreateIssueModal";
import DeleteConfirmModal from "./components/modals/DeleteConfirmModal";

const App = () => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleCreateIssue = (issue) => {
    dispatch({ type: "ADD_ISSUE", payload: issue });
  };

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [issueToDelete, setIssueToDelete] = useState(null);

  const openDelete = (issue) => {
    setIssueToDelete(issue);
    setIsDeleteOpen(true);
  };

  const closeDelete = () => {
    setIssueToDelete(null);
    setIsDeleteOpen(false);
  };

  const confirmDelete = () => {
    dispatch({ type: "DELETE_ISSUE", payload: issueToDelete.id });
    closeDelete();
  };

  const openCreate = () => setIsCreateOpen(true);
  const closeCreate = () => setIsCreateOpen(false);

  // STEP 4: temporary passthrough (real filtering comes later)
  const filteredIssues = state.issues;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0f1a] to-[#121826] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        {/* Navbar */}
        <Navbar />

        {/* Filters */}
        <FilterBar onNewIssue={openCreate}/>

        {/* ===============================
            ISSUE DISPLAY
           =============================== */}

        {/* Desktop */}
        <IssueTable
          issues={filteredIssues}
          onEdit={() => {}}
          onDelete={openDelete}
        />

        {/* Mobile */}
        <div className="grid gap-4 md:hidden">
          {filteredIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              onEdit={() => {}}
              onDelete={openDelete}
            />
          ))}
        </div>
        {/*Modal */}
        <CreateIssueModal
          isOpen={isCreateOpen}
          onClose={closeCreate}
          onCreate={handleCreateIssue}
        />
        <DeleteConfirmModal
          isOpen={isDeleteOpen}
          onClose={closeDelete}
          onConfirm={confirmDelete}
        />
       
      </div>
    </div>
  );
};

export default App;
