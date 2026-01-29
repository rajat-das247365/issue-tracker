import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const EditIssueModal = ({ isOpen, onClose, issue, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Medium");

  // Populate form when issue changes
  useEffect(() => {
    if (!issue) return;

    setTitle(issue.title);
    setDescription(issue.description);
    setStatus(issue.status);
    setPriority(issue.priority);
  }, [issue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...issue,
      title,
      description,
      status,
      priority,
    });

    onClose();
  };

  if (!issue) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Issue">
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
        />

        <div className="flex gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="flex-1 rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="flex-1 rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm text-white/60 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300 ring-1 ring-cyan-400/40 hover:bg-cyan-500/30"
          >
            Save Changes
          </button>
        </div>

      </form>
    </Modal>
  );
};

export default EditIssueModal;
