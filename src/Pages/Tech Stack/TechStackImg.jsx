import bootstrap from "../../Assets/SkillsIcon/bootstrap.svg";
import css from "../../Assets/SkillsIcon/css.svg";
import express from "../../Assets/SkillsIcon/express-js-icon.svg";
import git from "../../Assets/SkillsIcon/git.svg";
import hmtl from "../../Assets/SkillsIcon/html.svg";
import javascript from "../../Assets/SkillsIcon/javascript.svg";
import mongodb from "../../Assets/SkillsIcon/mongoDB.svg";
import nodejs from "../../Assets/SkillsIcon/nodejs-icon.svg";
import reacticon from "../../Assets/SkillsIcon/react.svg";
import redux from "../../Assets/SkillsIcon/redux.svg";
import chakra from "../../Assets/SkillsIcon/chakra.png";
import nextjs from "../../Assets/SkillsIcon/nextjs.png";
import material from "../../Assets/SkillsIcon/material.png";
import vscode from '../../Assets/SkillsIcon/visual-studio-code-logo.png'
import github from '../../Assets/SkillsIcon/Octicons-mark-github.svg'
import netlify from '../../Assets/SkillsIcon/netlify-logo-png-transparent.png'
import vercel from '../../Assets/SkillsIcon/vercel-icon-512x449-3422jidz.png'
export const TechImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return hmtl;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "reactjs":
      return reacticon;

    case "nextjs":
      return nextjs;

    case "chakra-ui":
      return chakra;

    case "bootstrap":
      return bootstrap;

    case "material-ui":
      return material;

    case "redux":
      return redux;

    case "git":
      return git;

    case "nodejs":
      return nodejs;

    case "expressjs":
      return express;

    case "mongodb":
      return mongodb;

    case "vscode":
      return vscode;

    case "github":
      return github;
    
    case "netlify":
      return netlify;

      case "vercel":
        return vercel;  
    default:
      break;
  }
};
