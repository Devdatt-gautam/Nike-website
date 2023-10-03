import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffer,
} from "./sections";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
const App = () => (
  <BrowserRouter>
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding:b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />{" "}
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />{" "}
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />{" "}
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />{" "}
      </section>
    </main>
  </BrowserRouter>
);
export default App;
