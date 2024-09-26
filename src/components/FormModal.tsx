import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../store/noteSlice";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

interface Note {
  id: number;
  title: string;
  date: string;
  description: string;
  status: string;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNote?: Note;
}

const statuses = ["to do", "done", "in progress", "deleted"];

export default function FormModal({
  isOpen,
  onClose,
  currentNote,
}: FormModalProps) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentNote?.title || "");
  const [date, setDate] = useState(currentNote?.date || "");
  const [description, setDescription] = useState(
    currentNote?.description || ""
  );
  const [status, setStatus] = useState(currentNote?.status || statuses[0]);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
    if (currentNote) {
      setTitle(currentNote.title);
      setDate(currentNote.date);
      setDescription(currentNote.description);
      setStatus(currentNote.status);
    }
  }, [isOpen, currentNote]);

  const resetForm = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setStatus(statuses[0]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const noteData = {
      id: currentNote ? currentNote.id : Date.now(),
      title,
      date,
      description,
      status,
    };
    if (currentNote) {
      dispatch(editNote(noteData));
    } else {
      dispatch(addNote(noteData));
    }
    onClose();
  };

  const modalContainer = document.getElementById("modal-container");

  if (!modalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="backdrop"
      appElement={document.getElementById("root")!}
    >
      <div className="modalTitle">
        {currentNote ? "Edit Note" : "Add New Note"}
      </div>

      <div className="modalBody">
        <form onSubmit={handleSubmit} className="modalForm">
          <Input
            name="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <Input
            name="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <Textarea
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Select
            name="Status"
            value={status}
            options={statuses}
            onChange={(e) => setStatus(e.target.value)}
            disabled={!currentNote}
          />

          <div className="modalActions">
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {currentNote ? "Save" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>,
    modalContainer
  );
}
