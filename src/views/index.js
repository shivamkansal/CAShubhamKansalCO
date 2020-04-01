import React from "react";

//components
import IndexNav from "../components/navbar";
import IndexHeader from "../components/IndexHeader";
import Card from "../components/card";
import TeamImages from "../components/teamImages";
import Footer from "../components/footer";
import SimpleMap from "../components/map";

function Index() {
  return (
    <>
      <IndexNav />
      <div className="wrapper">
        <IndexHeader />
        <Card />
        <TeamImages />
        <SimpleMap />
      </div>
      <Footer />
    </>
  );
}

export default Index;
