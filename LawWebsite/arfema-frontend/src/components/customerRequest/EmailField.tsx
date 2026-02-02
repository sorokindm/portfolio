import { Properties } from "./CustomerRequestForm";

export default EmailField;

function EmailField({handleChange}:Properties) {
  return (
    <>
      <div className="request-row">
        <label className="request-cell" htmlFor="email">E-mail:*</label>
        <input className="request-cell" type="email" name="email" id="email" required onChange={handleChange}></input>
      </div>
    </>
  );
}
