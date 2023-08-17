import {
  Navbar,
  Hero,
  LogoSlider,
  Slider2,
  About,
  Pricing,
  MoviesSlider,
  Services,
  Reviews,
  TVSection,
  Faq,
  Map,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoSlider />
      <Slider2 />
      <About />
      <Pricing />
      <MoviesSlider />
      <Services />
      <Reviews />
      <TVSection />
      <Faq />
      <Map />
      <Footer />
    </main>
  );
}
