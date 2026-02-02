export default PasswordInput;

function PasswordInput() {
  return (
    <>
      <div className="request-row">
        <label className="request-cell" htmlFor="password">Пароль:</label>
        <input className="request-cell" name="password" type="password"></input>
      </div>
    </>
  );
}
