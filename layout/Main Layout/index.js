import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  );
}
