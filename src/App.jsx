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
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState("light");
  const themeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };
  return (
    <BrowserRouter>
      <main className={`relative overflow-y-hidden ${theme}`}>
        <Nav themeSwitch={themeSwitch} />
        <section className="xl:padding-l wide:padding-r padding:b dark:bg-black dark:text-white">
          <Hero />
        </section>
        <section className="padding dark:bg-black dark:text-white">
          <PopularProducts />
        </section>
        <section className="padding dark:bg-black dark:text-white">
          <SuperQuality />
        </section>
        <section className="padding-x py-10 dark:bg-black dark:text-white">
          <Services />
        </section>
        <section className="padding dark:bg-black dark:text-white">
          <SpecialOffer />{" "}
        </section>
        <section className="padding bg-pale-blue dark:bg-gray-800 dark:text-white ">
          <CustomerReviews />{" "}
        </section>
        <section className="padding-x sm:py-32 py-16 w-full dark:bg-black dark:text-white">
          <Subscribe />{" "}
        </section>
        <section className="bg-black padding-x padding-t pb-8 dark:border-t-white dark:border-t-2 dark:bg-black dark:text-white">
          <Footer />{" "}
        </section>
      </main>
    </BrowserRouter>
  );
};
export default App;
