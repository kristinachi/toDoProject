import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteNote } from "../store/noteSlice";
import FormModal from "./FormModal";
import Button from "./Button";
import NoData from "./NoData";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmationModal from "./ConfirmationModal";

interface Note {
  id: number;
  title: string;
  date: string;
  description: string;
  status: string;
}

interface NoteViewProps {
  statusFilter: string;
  currentNote?: Note;
}

const statusColors: Record<string, string> = {
  "to do": "#8c8c8c",
  done: "#34b576",
  deleted: "#d9534f",
  "in progress": "#ffbf00",
};

export default function NoteView({ statusFilter }: NoteViewProps) {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<number | null>(null);

  const handleEdit = (note: Note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  const openConfirmationModal = (id: number) => {
    setNoteToDelete(id);
    setConfirmationOpen(true);
  };

  const handleDelete = () => {
    if (noteToDelete !== null) {
      dispatch(deleteNote(noteToDelete));
      setNoteToDelete(null);
      setConfirmationOpen(false);
    }
  };

  const filteredNotes = useMemo(() => {
    return statusFilter
      ? notes.filter((note) => note.status === statusFilter)
      : notes;
  }, [notes, statusFilter]);

  return (
    <>
      {filteredNotes.length === 0 ? (
        <NoData />
      ) : (
        <div className="items-list">
          {filteredNotes.map((note) => (
            <div key={note.id} className="item">
              <div className="itemBody">
                <div>
                  <div className="title" title={note.title}>
                    {note.title}
                  </div>
                  <div className="text">{note.description}</div>
                </div>

                <div>
                  <div
                    className="label"
                    style={{ backgroundColor: statusColors[note.status] }}
                  >
                    {note.status}
                  </div>
                </div>
              </div>

              <div className="itemActions">
                {note.status !== "deleted" && (
                  <div>
                    <Button
                      className="edit"
                      variant="link"
                      type="button"
                      onClick={() => handleEdit(note)}
                    >
                      <CiEdit />
                    </Button>
                    <Button
                      className="delete"
                      variant="link"
                      type="button"
                      onClick={() => openConfirmationModal(note.id)}
                    >
                      <MdDeleteOutline />
                    </Button>
                  </div>
                )}

                <div className="date">
                  {new Date(note.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        currentNote={currentNote}
      />

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
