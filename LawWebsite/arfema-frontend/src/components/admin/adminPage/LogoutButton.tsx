import getCookie from "../../../util/getCookie";

export default LogoutButton;

function LogoutButton() {
  return (<>
          <form method="POST" action="logout">
          <input
            type="hidden"
            name="_csrf"
            value={getCookie("XSRF-TOKEN") ?? ""}
          />
          <button className="request-button">Выход</button>
        </form>
  </>);
}
