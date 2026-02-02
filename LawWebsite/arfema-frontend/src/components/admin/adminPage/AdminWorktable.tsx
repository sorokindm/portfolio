import AdminSubpage from "../../../util/enum/AdminSubpage";
import Edit from "./Edit";
import New from "./New";
import Prices from "./Prices/Prices";
import AdminRequests from "./requests/AdminRequests";
import Start from "./Start";

export default AdminWorktable;

interface Props {
  state: AdminSubpage;
}

function AdminWorktable({ state }: Props) {
  return (
    <>
      {state === AdminSubpage.Start ? <Start /> : null}
      {state === AdminSubpage.Add ? <New /> : null}
      {state === AdminSubpage.Edit ? <Edit /> : null}
      {state === AdminSubpage.Requests ? <AdminRequests /> : null}
      {state === AdminSubpage.Prices ? <Prices /> : null}
    </>
  );
}
