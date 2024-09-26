import NoteView from "../../components/NoteView";
import PageHead from "../../components/PageHead";

export default function DeletedPage() {
  return (
    <>
      <PageHead title="deleted" />
      <NoteView statusFilter="deleted" />
    </>
  );
}
