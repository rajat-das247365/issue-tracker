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
import EditIssueModal from "./components/modals/EditIssueModal";

const App = () => {
  const [statusFilter, setStatusFilter] = useState("All");
const [prioritySort, setPrioritySort] = useState("None");

  const [state, dispatch] = useReducer(issueReducer, initialState);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleCreateIssue = (issue) => {
    dispatch({ type: "ADD_ISSUE", payload: issue });
  };

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [issueToDelete, setIssueToDelete] = useState(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
const [issueToEdit, setIssueToEdit] = useState(null);

const openEdit = (issue) => {
  setIssueToEdit(issue);
  setIsEditOpen(true);
};

const closeEdit = () => {
  setIssueToEdit(null);
  setIsEditOpen(false);
};

const handleUpdateIssue = (updatedIssue) => {
  dispatch({ type: "UPDATE_ISSUE", payload: updatedIssue });
};



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
  const filteredIssues = state.issues
  // Filter by status
  .filter((issue) =>
    statusFilter === "All" ? true : issue.status === statusFilter
  )
  // Sort by priority
  .sort((a, b) => {
    if (prioritySort === "None") return 0;

    const order = { High: 3, Medium: 2, Low: 1 };
    return prioritySort === "High"
      ? order[b.priority] - order[a.priority]
      : order[a.priority] - order[b.priority];
  });


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0f1a] to-[#121826] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        {/* Navbar */}
        <Navbar />

        {/* Filters */}
       <FilterBar onNewIssue={openCreate}   statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
  prioritySort={prioritySort}
  setPrioritySort={setPrioritySort}/>

        {/* ===============================
            ISSUE DISPLAY
           =============================== */}

        {/* Desktop */}
        <IssueTable
          issues={filteredIssues}
          onEdit={openEdit}
          onDelete={openDelete}
        />

        {/* Mobile */}
        <div className="grid gap-4 md:hidden">
          {filteredIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              onEdit={openEdit}
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
        <EditIssueModal  isOpen={isEditOpen}
  issue={issueToEdit}
  onClose={closeEdit}
  onUpdate={handleUpdateIssue}/>
        
      </div>
    </div>
  );
};

export default App;
