import "./projects.scss";
import { BouncyCardsFeatures } from "./BouncyCardsFeatures ";
// import WaterDropGrid from "../hero/WaterDropGrid"
// import { BouncyCardsFeatures } from "./ContohCard"
import { HoverImageLinks } from "./HoverImageLinks";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="title">
          <hr className="garis-projects" />
          <h1>
            Projects<span className="green-projects-text">.</span>
          </h1>
        </div>
        {/* <WaterDropGrid/> */}

        {/* <BouncyCardsFeatures /> */}
        <HoverImageLinks />

        {/* <Contoh/> */}
        {/* <ContohCard/> */}
      </div>
    </>
  );
};

export default Projects;
