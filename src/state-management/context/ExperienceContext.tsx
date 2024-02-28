import React from "react";
import { Experience } from "../../consts";

interface ExperienceContextType {
  currentExperience?: Experience;
  setCurrentExperience: (experience: Experience) => void;
}

const ExperienceContext = React.createContext<ExperienceContextType>(
  {} as ExperienceContextType
);

export default ExperienceContext;
