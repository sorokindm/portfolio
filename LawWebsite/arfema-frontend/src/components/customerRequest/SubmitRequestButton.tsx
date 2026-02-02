export default SubmitRequestButton;

interface Props {
  isVisible:boolean,
  success: boolean,
}

function SubmitRequestButton({isVisible, success}:Props) {
  return (
  <>
        <div className="request-row-last">
          {isVisible?<button className="request-button">Оставить заявку</button>:
          success?<div className="success-message">Успешно отправлено!</div>:<div className="error-message">Превышено количество запросов, попробуйте позднее.</div>
          }
          
    </div>
  </>


  );
}


