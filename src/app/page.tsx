import Footer from "@/components/footer";
import AboutPage from "./about";
import AdvantagesPage from "./advantages";
import FAQPage from "./faq";
import HomePage from "./home";
import LocationPage from "./location";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <AdvantagesPage />
      <LocationPage />
      <FAQPage />
      <Footer />
    </>
  );
}
