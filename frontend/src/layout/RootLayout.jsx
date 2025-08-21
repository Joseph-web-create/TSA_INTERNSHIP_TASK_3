import HeaderSection from "../components/HeaderSection";
import PropertSection from "../components/PropertSection";
import { useAuth } from "../store";

export const RootLayout = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <HeaderSection />
      <PropertSection />
    </div>
  );
};
