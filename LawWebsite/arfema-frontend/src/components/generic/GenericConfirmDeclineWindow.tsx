export default GenericConfirmDeclineWindow;

interface Props {
  handleConfirm: () => void;
  handleDecline: () => void;
  handleExit: () => void;
  message:string;
}

function GenericConfirmDeclineWindow({handleConfirm, handleDecline, handleExit, message}: Props) {
  return (<>
    <dialog className="confirm-decline-dialog">
        <button className="close-button" type="button" onClick={handleExit}>✖</button>
        <h3>{message}</h3>
        <div className="confirm-reject-button-container">
            <button className="delete-button" type="button" onClick={handleDecline}>Нет</button>
            <button className="request-button" type="button" onClick={handleConfirm}>Да</button>
        </div>

    </dialog>
  </>);
}
