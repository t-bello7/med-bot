import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div className="relative overflow-scroll bg-darkBlue text-[12px] text-white md:text-[14px]">
      <Navbar />
      Welcome
      <FooterSection />
    </div>
  );
};

export default Home;
