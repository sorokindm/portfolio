import { ReactNode } from "react";

export default MainView;

interface Props {
  children: ReactNode;
}

function MainView({children} :Props) {
  return (
        <div className="main-view">
          {children}
        </div>
  );
}