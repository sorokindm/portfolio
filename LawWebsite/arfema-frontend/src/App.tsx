import MainPage from "./components/MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/mainPageContent/StartPage";
import UslugiFiz from "./components/mainPageContent/UslugiFiz";
import UslugiUr from "./components/mainPageContent/UslugiUr";
import Prices from "./components/mainPageContent/Prices";
import Contacts from "./components/mainPageContent/Contacts";
import RequestPage from "./components/mainPageContent/RequestPage";
import Prizivnikam from "./components/leftMenuContent/Prizivnikam";
import UrConsult from "./components/leftMenuContent/UrConsult";
import Documents from "./components/leftMenuContent/Documents";
import DogovorDar from "./components/leftMenuContent/DogovorDar";
import SellDogovor from "./components/leftMenuContent/SellDogovor";
import Iskovoe from "./components/leftMenuContent/Iskovoe";
import Sud from "./components/leftMenuContent/Sud";
import Brak from "./components/leftMenuContent/Brak";
import LaborProcess from "./components/leftMenuContent/LaborProcess";
import ZhilProcess from "./components/leftMenuContent/ZhilProcess";
import NedvizRegister from "./components/leftMenuContent/NedvizRegister";
import LandRegister from "./components/leftMenuContent/LandRegister";
import FirmRegister from "./components/leftMenuContent/FirmRegister";
import IpRegister from "./components/leftMenuContent/IpRegister";
import FirmConsulting from "./components/leftMenuContent/FirmConsulting";
import FullContent from "./components/mainPageContent/FullContent";
import News from "./components/mainPageContent/contentPages/News";
import Practice from "./components/mainPageContent/contentPages/Practice";
import Tags from "./components/mainPageContent/contentPages/Tags";
import Search from "./components/mainPageContent/contentPages/Search";
import Admin from "./components/admin/adminPage/Admin";
import Login from "./components/admin/Login/Login";
import { Helmet } from "react-helmet";

function App() {

  return (
    <>
    <Helmet>
      <meta name="keywords" content="юридическое агентство арфема, арфема, юридические услуги воронеж"/>
      <meta name="title" content="Юридическое агентство «Арфема»"/>
      <title>Юридическое агентство Арфема - составление договоров дарения купли-продажи, жилищные и трудовые споры</title>
      <meta name="description" content="Юридическое агентство Арфема - юридические услуги гражданам и организациям в Воронеже, запись на юридическую консультацию"/>
    </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage>
            <StartPage/>
          </MainPage>} />

          <Route path="/novosti/:pageParam?" element={<MainPage><News/></MainPage>} />

          <Route path="/praktika/:pageParam?" element={<MainPage><Practice/></MainPage>} />

          <Route path="/tags/:tagName/:pageParam?" element={<MainPage><Tags/></MainPage>}/>

          <Route path="/search/:searchString/:pageParam?" element={<MainPage><Search/></MainPage>}/>

          <Route
            path="/okazanie-uslug-fizicheskim-litsam"
            element={<MainPage><UslugiFiz/></MainPage>}
          />
          <Route
            path="/okazanie-uslug-yuridicheskim-litsam"
            element={<MainPage><UslugiUr/></MainPage>}
          />
          <Route path="/price-list" element={<MainPage><Prices/></MainPage>} />
          <Route
            path="/zaday-vopros-yuristu-online"
            element={<MainPage><RequestPage/></MainPage>}
          />
          <Route path="/kontakty" element={<MainPage><Contacts/></MainPage>} />

          <Route
            path="/pomoshch-prizyvnikam"
            element={<MainPage><Prizivnikam/></MainPage>}
          />
          <Route
            path="/yuridicheskaya-konsultaciya-voronezh"
            element={<MainPage><UrConsult/></MainPage>}
          />
          <Route
            path="/sostavlenie-dokumentov"
            element={<MainPage><Documents/></MainPage>}
          />
          <Route
            path="/oformlenie-dorovora-dareniya"
            element={<MainPage><DogovorDar/></MainPage>}
          />
          <Route
            path="/oformlenie-dogovora-kupli-prodazhi"
            element={<MainPage><SellDogovor/></MainPage>}
          />
          <Route
            path="/iskovoye-zayavlenie"
            element={<MainPage><Iskovoe/></MainPage>}
          />
          <Route
            path="/predstavlenie-interesov-v-sude"
            element={<MainPage><Sud/></MainPage>}
          />
          <Route
            path="/rastorzhenie-braka-i-razdel-imushchestva-suprugov"
            element={<MainPage><Brak/></MainPage>}
          />
          <Route
            path="/trudovye-spory"
            element={<MainPage><LaborProcess/></MainPage>}
          />
          <Route
            path="/zhilishchny-yurist"
            element={<MainPage><ZhilProcess/></MainPage>}
          />
          <Route
            path="/oformlenie-nedvizhimosti"
            element={<MainPage><NedvizRegister/></MainPage>}
          />
          <Route
            path="/oformlenie-zemelnogo-uchastka"
            element={<MainPage><LandRegister/></MainPage>}
          />
          <Route
            path="/registratsiya-yuridicheskih-lits"
            element={<MainPage><FirmRegister/></MainPage>}
          />
          <Route
            path="/registratsiya-individualnogo-predprinimatelya"
            element={<MainPage><IpRegister/></MainPage>}
          />
          <Route
            path="/soprovozhdenie-organizatsii"
            element={<MainPage><FirmConsulting/></MainPage>}
          />
          <Route
            path="/content/:id"
            element={<MainPage><FullContent/></MainPage>}
          />

          <Route path="/adminka" element={<Admin/>} />

          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
