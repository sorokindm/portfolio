import { Properties } from "./CustomerRequestForm";

export default RequestField;

function RequestField({handleChange}:Properties) {
  return (
    <>
      <div className="request-row-last">
        <label className="request-row" htmlFor="request">
          Сообщение:*
        </label>
        <textarea
          name="request"
          id="request"
          cols={40}
          rows={8}
          required
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
}
