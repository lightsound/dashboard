import { CallToAction } from "./components/CallToAction";
import { Faqs } from "./components/Faqs";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { SecondaryFeatures } from "./components/SecondaryFeatures";
import { Testimonials } from "./components/Testimonials";

const Page = () => {
  return (
    <div>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </div>
  );
};

export default Page;
