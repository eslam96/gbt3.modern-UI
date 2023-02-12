import {
  Blog,
  Header,
  Footer,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Brand, CTA, Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;