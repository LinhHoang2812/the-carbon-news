import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const ShareLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default ShareLayout;
