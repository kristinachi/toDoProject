import { FaRegFrownOpen } from "react-icons/fa";

export default function NoData() {
  return (
    <div className="noData">
      <div className="noDataText"> Nothing here yet...</div>
      <div className="noDataIcon">
        <FaRegFrownOpen />
      </div>
    </div>
  );
}
