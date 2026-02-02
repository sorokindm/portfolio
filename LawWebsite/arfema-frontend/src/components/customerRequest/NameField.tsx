import { Properties } from "./CustomerRequestForm";

export default NameField;

function NameField({handleChange}:Properties) {
  return (
    <>
      <div className="request-row">
        <label className="request-cell" htmlFor="name">Ваше имя:*</label>
        <input className="request-cell" type="text" name="name" id="name" required onChange={handleChange}></input>
      </div>
    </>
  );
}
