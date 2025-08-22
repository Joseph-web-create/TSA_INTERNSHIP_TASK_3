import DiscoverProduct from "../components/DiscoverProduct";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import PropertSection from "../components/PropertSection";

export const RootLayout = () => {
  return (
    <div>
      <HeaderSection />
      <PropertSection />
      <DiscoverProduct />
      <Footer />
    </div>
  );
};
