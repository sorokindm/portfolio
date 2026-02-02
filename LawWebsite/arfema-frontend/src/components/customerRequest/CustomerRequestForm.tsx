import NameField from "./NameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import RequestField from "./RequestField";
import SubmitRequestButton from "./SubmitRequestButton";
import { useState } from "react";

export default CustomerRequestForm;

export interface Properties
{
  handleChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
}

function CustomerRequestForm() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    request: '',
  });

  const [isVisible, setVisible] = useState(true);
  const [isSuccess, setSuccess] = useState(true);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)
  {
    const {name, value} = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetch(import.meta.env.VITE_SUBMIT_REQUEST_URL, getRequestOptions())
    .then(response => {
      if (response.status === 200) {
        setVisible(false);
      }
      if (response.status === 429) {
        setVisible(false);
        setSuccess(false);
      }
    });
  }

  function getRequestOptions() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    };
    return requestOptions;
  }

  return (
    <>
      <form className="request-form" onSubmit={handleSubmit} method="POST">
        <div className="request-inputs">
          <NameField handleChange={handleInputChange}/>
          <PhoneField handleChange={handleInputChange}/>
          <EmailField handleChange={handleInputChange}/>
        </div>
        <RequestField handleChange={handleInputChange}/>
        <SubmitRequestButton isVisible={isVisible} success={isSuccess}  />
      </form>
    </>
  );
}
