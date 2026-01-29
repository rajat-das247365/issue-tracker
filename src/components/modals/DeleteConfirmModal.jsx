import React from "react";
import Modal from "./Modal";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Issue">
      <div className="space-y-4 text-white/80">
        <p>
          Are you sure you want to delete this issue?
          <br />
          <span className="text-red-400">This action cannot be undone.</span>
        </p>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm text-white/60 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-md bg-red-500/20 px-4 py-2 text-sm text-red-400 ring-1 ring-red-500/40 shadow shadow-red-500/30 hover:bg-red-500/30"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
