import NoteView from "../../components/NoteView";
import PageHead from "../../components/PageHead";

export default function DonePage() {
  return (
    <>
      <PageHead title="done" />
      <NoteView statusFilter="done" />
    </>
  );
}
