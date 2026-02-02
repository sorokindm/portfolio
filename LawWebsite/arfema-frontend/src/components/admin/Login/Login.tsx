import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import SubmitLoginButton from "./SubmitLoginButton";
import getCookie from "../../../util/getCookie";

export default Login;

function Login() {
  return (
    <>
      <form
        className="request-form login-form"
        action="/perform_login"
        method="POST"
      >
        <div className="request-inputs">
          <UsernameInput/>
          <PasswordInput/>
          <input type="hidden" name="_csrf" value={getCookie("XSRF-TOKEN")??""}/>
        </div>

        <SubmitLoginButton />
      </form>
    </>
  );
}
