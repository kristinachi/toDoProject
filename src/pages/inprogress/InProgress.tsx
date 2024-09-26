import NoteView from "../../components/NoteView";
import PageHead from "../../components/PageHead";

export default function InProgressPage() {
  return (
    <>
      <PageHead title="in progress" />
      <NoteView statusFilter="in progress" />
    </>
  );
}
