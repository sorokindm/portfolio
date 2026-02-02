export default GenericInfoWindow;

interface Props {
    handleConfirm: () => void;
    handleExit: () => void;
    message:string;
  }

function GenericInfoWindow({handleConfirm, handleExit, message}:Props) {
  return (
    <>
      <dialog className="confirm-decline-dialog">
        <button className="close-button" type="button" onClick={handleExit}>
          ✖
        </button>
        <h3>{message}</h3>
        <div className="confirm-reject-button-container">
          <button
            className="request-button"
            type="button"
            onClick={handleConfirm}
          >
            Ок
          </button>
        </div>
      </dialog>
    </>
  );
}
