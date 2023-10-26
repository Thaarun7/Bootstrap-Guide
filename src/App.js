import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Card from "./components/Card";
import { data } from "./data/data";
import FormComponent from "./components/FormComponent";
import Footer from "./layouts/Footer";

function App() {
  const [staticData, setStaticData] = useState(data);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Bootstrap utilities in all the components
    <React.Fragment>
      {/* Bootstrap Nav */}
      <Navbar />
      <div className="container mt-3 ">
        {/* FlexBox */}
        <FlexBoxComponent>{currentTime}</FlexBoxComponent>
        {/* Bootstrap Grid */}
        <Card staticData={staticData} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

// FlexBox Component
const FlexBoxComponent = ({ children }) => {
  return (
    <div className="d-md-flex justify-content-between">
      <p className="h3">List Of Card</p>
      <div className="text-success h4 d-flex">
        <div className="me-3">
          {/* Bootstrap Form */}
          <FormComponent />
        </div>
        <div className="timmer">{children.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default App;
