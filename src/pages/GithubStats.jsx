import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../styles/githubstats.scss"
import { Text } from "@chakra-ui/react";
const GithubStats = () => {
  return (
    <section id="github-stats">
      <Text
        color="black"
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "20px", base: "10px" }}
      >
        <span
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          GitHub Stats
        </span>
      </Text>

      {/* GitHUb Calender */}
      <div >
        <GitHubCalendar class="react-activity-calendar" username="nitinkondhari03" />
      </div>

      {/* GitHub Stats */}
      <div id="stats">
        <div>
          <img
          id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=nitinkondhari03"
            alt="GitHUb Stats"
          />
        </div>

        <div>
          <img
           id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=nitinkondhari03&show_icons=true&theme=transparent"
            alt="GitHUb Streak"
          />
        </div>
      </div>
      <div id="statsd">
          <img
          id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nitinkondhari03&hide_progress=true"
            alt="GitHUb Streak"
          />
        </div>


    </section>
  );
};

export default GithubStats;