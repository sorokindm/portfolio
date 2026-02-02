export default GenericSingleTextInputDialog;

interface Props {
  handleConfirm: () => void;
  handleDecline: () => void;
  handleExit: () => void;
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  inputValue:string;
  message:string;
}

function GenericSingleTextInputDialog({handleConfirm, handleDecline, handleExit,handleChange,inputValue, message}: Props) {
  return (<>
    <dialog className="confirm-decline-dialog">
        <button className="close-button" type="button" onClick={handleExit}>✖</button>
        <h3>{message}</h3>
        <input type="text" onChange={handleChange} value={inputValue}/>
        <div className="confirm-reject-button-container">
        <button className="delete-button" type="button" onClick={handleDecline}>Отменить</button>
            <button className="request-button" type="button" onClick={handleConfirm}>Изменить</button>
        </div>

    </dialog>
  </>);
}
