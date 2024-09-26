import NoteView from "../../components/NoteView";
import PageHead from "../../components/PageHead";

export default function ToDoPage() {
  return (
    <>
      <PageHead title="to do" />
      <NoteView statusFilter="to do" />
    </>
  );
}
