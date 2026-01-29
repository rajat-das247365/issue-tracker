import React, { useState } from "react";
import Modal from "./Modal";

const CreateIssueModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onCreate({
      id: crypto.randomUUID(),
      title,
      description,
      status,
      priority,
    });

    // Reset + close
    setTitle("");
    setDescription("");
    setStatus("Open");
    setPriority("Medium");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Issue">
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Issue title"
          className="w-full rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
          autoFocus
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full rounded-md bg-[#0b0f1a] px-3 py-2 text-white ring-1 ring-white/10"
          rows={3}
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
            Create
          </button>
        </div>

      </form>
    </Modal>
  );
};

export default CreateIssueModal;
