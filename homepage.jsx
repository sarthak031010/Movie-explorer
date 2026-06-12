import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(time);
  }, [navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cyan-950">
      <img
        src="/photos/istockphoto-535504850-612x612.jpg"
        alt="center"
        className="
        max-w-[250 px]
        sm-max-w-[350 px]
        md-max-w-[500 px]
        lg-max-w-[600 px]
        xl-max-w-[1080 px]
        mx-auto"
      />
    </div>
  );
}

export default Homepage;
