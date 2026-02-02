export default GenericShtorka;

interface Props {
    handleClick:()=>void;
    handleBlur:()=>void;
}

function GenericShtorka({handleClick, handleBlur}:Props) {
    return <button className="shtorka" onMouseDown={event=>event.preventDefault()} onClick={handleClick} onBlur={handleBlur}>
        <div/>
        <div/>
        <div/>
    </button>
}