import { ReactNode, useState } from "react";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import MainView from "./MainView";
import TopMenu from "./TopMenu";
import HeaderV2 from "./header/HeaderV2";

interface Props {
    children: ReactNode;
}

export default MainPage;

function MainPage({children}:Props) {

  const [topMenuVisible, setTopMenuVisible] = useState<boolean>(false);

  return (
  <>
    <div className={topMenuVisible?"blocker visible":"blocker"} onClick={()=>setTopMenuVisible(false)}/>
    <HeaderV2 handleClick={()=>setTopMenuVisible(!topMenuVisible)} handleBlur={()=>setTopMenuVisible(false)}/>
    <TopMenu visibility={topMenuVisible} />
    <LeftMenu visibility={topMenuVisible}/>
    <MainView children={children}/>
    <Footer />
  </>);
}
