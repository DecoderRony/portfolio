import { Grid, GridItem } from "@chakra-ui/react";
import ExperienceTimeline from "./ExperienceTimeline";
import { useMemo, useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import { Experience as IExperience } from "../consts";
import ExperienceContext from "../state-management/context/ExperienceContext";

const experiences: IExperience[] = [
  {
    id: 0,
    role: "Product Engineer",
    company: "Tata Consultancy Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
    startDate: "Aug 2022",
    technology: ["React", "Java"],
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tata Consultancy Services",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
    startDate: "Jun 2022",
    endData: "Jul 2022",
    technology: ["React", "Java"],
  },
  {
    id: 2,
    role: "App Developer",
    company: "Cogzent solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae, nihil libero incidunt saepe quas quam vitae, sapiente non sed consequatur aut placeat molestias itaque cupiditate fugiat ipsa quidem aliquam.Provident, quibusdam doloribus! Ipsum sunt, ab aperiam natus a atque excepturi impedit rem praesentium? Aliquam, doloremque harum doloribus, optio voluptatem, consequuntur temporibus minima dolores accusamus eligendi ducimus nemo possimus magnam.Numquam earum aspernatur porro explicabo, quis quam rem autem. Dicta architecto deserunt necessitatibus incidunt nesciunt exercitationem earum, aliquam magnam similique officia quos repellendus iusto, quaerat harum dignissimos, nemo dolorum. Pariatur.Maxime libero harum itaque velit unde ipsa quisquam esse perferendis eaque accusantium? Quo repellendus, nihil quibusdam aut error fugiat saepe itaque consequuntur placeat velit quam labore porro ad molestiae vel?",
    startDate: "Sep 2020",
    endData: "Nov 2020",
    technology: ["React", "Java"],
  },
];

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState<
    undefined | IExperience
  >(undefined);

  const experienceContextValue = useMemo(
    () => ({ currentExperience, setCurrentExperience }),
    [currentExperience]
  );

  return (
    <Grid
      templateAreas={`"timeline experienceDetails"`}
      templateRows={"1fr"}
      templateColumns={"20rem 1fr"}
      height="100%"
      p={5}
    >
      <GridItem area="timeline">
        <ExperienceContext.Provider value={experienceContextValue}>
          <ExperienceTimeline experiences={experiences} />
        </ExperienceContext.Provider>
      </GridItem>

        <GridItem area="experienceDetails">
          <ExperienceDetails experienceDetails={currentExperience} />
        </GridItem>
      </Grid>
    </ExperienceContext.Provider>
  );
};

export default Experience;
