import { Properties } from "./CustomerRequestForm";

export default PhoneField;

function PhoneField({handleChange}:Properties) {
  return (
    <>
      <div className="request-row">
        <label className="request-cell" htmlFor="phone">Контактный телефон:</label>
        <input className="request-cell" type="tel" name="phone" id="phone" onChange={handleChange}></input>
      </div>
    </>
  );
}
