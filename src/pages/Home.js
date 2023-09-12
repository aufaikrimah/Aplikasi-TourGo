import React from "react";

import HeroComp from "../components/HeroComp";
import GalleryComp from "../components/GalleryComp";
import PromoComp from "../components/PromoComp";
import PointComp from "../components/PointComp";
import TutorComp from "../components/TutorComp";
import TestiComp from "../components/TestiComp";
import ArtikelComp from "../components/ArtikelComp";
import FaqComp from "../components/FaqComp";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";


function Home() {
  return (

    <div>
      
      <NavbarComp/>
      <HeroComp />

      {/* Content */}

      <GalleryComp />
      <PromoComp />
      <PointComp />
      <TutorComp />
      <TestiComp />
      <ArtikelComp />
      <FaqComp/>
      {/* Content */}

      <FooterComp />
    </div>
  );
}


export default Home;
