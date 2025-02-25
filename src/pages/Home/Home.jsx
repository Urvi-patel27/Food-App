import "./Home.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import About from "../../components/About";
import Icons from "../../components/Icons";
import { useState } from "react";
// import Contact from "./Contact";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div>
        <ExploreMenu category={category} setCategory={setCategory} />
        <PlaceOrder />
        <Icons />
        <About />
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default Home;
