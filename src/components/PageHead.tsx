import { useState } from "react";
import Button from "./Button";
import FormModal from "./FormModal";
import { clearDeletedNotes } from "../store/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";
import { RootState } from "../store/store";

interface Note {
  id: number;
  title: string;
  date: string;
  description: string;
  status: string;
}

interface PageHeadProps {
  title: string;
}

export default function PageHead({ title }: PageHeadProps) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const notes = useSelector((state: RootState) => state.notes.notes);

  const deletedNotesCount = notes.filter(
    (note) => note.status === "deleted"
  ).length;

  const addNote = () => {
    setCurrentNote(null);
    setModalOpen(true);
  };

  const onCleanAllNotes = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(clearDeletedNotes());
    setConfirmationOpen(false);
  };

  return (
    <>
      <div className="pageHead">
        <h1>{title} Page</h1>
        {/* {title !== "deleted" && (
          <div>
            <Button type="button" variant="primary" onClick={addNote}>
              Add Note
            </Button>
          </div>
        )} */}

        <div>
          <Button
            type="button"
            variant="primary"
            onClick={title === "deleted" ? onCleanAllNotes : addNote}
            disabled={title === "deleted" && deletedNotesCount === 0}
          >
            {title === "deleted" ? "Clear All" : "Add Note"}
          </Button>
        </div>

        {/* <div>
          <Button
            type="button"
            variant="primary"
            onClick={addNote}
            disabled={title === "deleted"}
          >
            Add Note
          </Button>
        </div> */}
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        currentNote={currentNote}
      />

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
