import AdminWorktable from "./AdminWorktable";
import LogoutButton from "./LogoutButton";
import AdminMenu from "./AdminMenu";
import { useState } from "react";
import AdminSubpage from "../../../util/enum/AdminSubpage";

export default Admin;



function Admin() {

  const [state, setState] = useState<AdminSubpage>(AdminSubpage.Start);

  function handleStart() {
    setState(AdminSubpage.Start);
  }

  function handleAdd() {
    setState(AdminSubpage.Add);
  }

  function handleEdit() {
    setState(AdminSubpage.Edit);
  }

  function handleReuqests() {
    setState(AdminSubpage.Requests);
  }

  function handlePrices() {
    setState(AdminSubpage.Prices)
  }

  return (
    <>
      <div className="top-admin-bar">
        <h1 className="admin-heading" onClick={handleStart}>Администрирование</h1>
        <AdminMenu handleAdd={handleAdd} handleEdit={handleEdit} handleRequests={handleReuqests} handlePrices={handlePrices}/>
        <LogoutButton />
      </div>
      <div className="administrator-wrapper">
        <AdminWorktable state={state} />
      </div>
    </>
  );
}
