import Footer from "@/components/footer";
import HomePage from "./home";
import SobreNosPage from "./sobre";
import LocalizacaoPage from "./localizacao";
import DuvidasPage from "./duvidas";
import VantagensPage from "./vantagens";

export default function Home() {
  return (
    <>
      <HomePage />
      <SobreNosPage />
      <VantagensPage />
      <LocalizacaoPage />
      <DuvidasPage />
      <Footer />
    </>
  );
}
