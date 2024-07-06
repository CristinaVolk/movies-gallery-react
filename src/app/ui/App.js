import {Outlet} from "react-router-dom";

import {MainLayout} from "../../layouts/MainLayout/ui/MainLayout";
import {Navigation} from "../../widgets/Navigation/ui/Navigation";


export function App() {
  return (
    <MainLayout
        header={<Navigation />}
        left='left'
        content={<Outlet />}
        right='right'
        footer={<div></div>}
    />
  );
}


