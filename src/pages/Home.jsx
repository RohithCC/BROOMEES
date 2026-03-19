import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import Highlights from "../components/Highlights";
import BackedBy from "../components/BackedBy";
import HumansOfBroomees from "../components/HumansOfBroomees";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import InsuranceSection from "../components/InsuranceSection";
import ReviewsSection from "../components/ReviewsSection";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Highlights />
      <BackedBy />
      <HumansOfBroomees />
      <WhyChooseUs />
      <FAQ />
      <InsuranceSection />
      <ReviewsSection />
    </>
  );
}

export default Home;