import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import BackgroundVFX from "../vfx/BackgroundVFX";

export default function Layout({ children }) {
  return (
    <div className="h-full">
      <div className="fixed inset-0 overflow-hidden">
        <BackgroundVFX />
      </div>
      <div className="relative flex flex-col h-full">
        <Header />
        <MainContainer className="flex flex-grow">{children}</MainContainer>
        <Footer />
      </div>
    </div>
  );
}
