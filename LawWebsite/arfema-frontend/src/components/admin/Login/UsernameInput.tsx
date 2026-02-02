export default UsernameInput;

function UsernameInput() {
  return (
    <>
      <div className="request-row">
        <label className="request-cell" htmlFor="username">Логин:</label>
        <input className="request-cell" name="username" type="text"></input>
      </div>
    </>
  );
}
