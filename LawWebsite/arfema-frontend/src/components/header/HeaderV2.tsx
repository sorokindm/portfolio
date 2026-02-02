import { useNavigate } from "react-router-dom";
import GenericShtorka from "../generic/GenericShtorka";
import BackgroundLogo from "./BackgroundLogo";
import HeaderContacts from "./HeaderContacts";
import Logo from "./Logo";

export default HeaderV2;

interface Props {
    handleClick:()=>void;
    handleBlur:()=>void;
}

function HeaderV2({handleClick, handleBlur}:Props) {

    const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="logo-header">
            <BackgroundLogo />
            <div className="logo">
                <Logo/>
            </div>
            <h1 onClick={()=>navigate("/")}>
            ЮРИДИЧЕСКОЕ АГЕНТСТВО «АРФЕМА»
          </h1>
          <GenericShtorka handleClick={handleClick} handleBlur={handleBlur}/>
        </div>
        <HeaderContacts />
      </div>
    </>
  );
}
