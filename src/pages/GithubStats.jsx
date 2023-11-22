
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../styles/githubstats.css";
import { Text } from "@chakra-ui/react";
function GithubStats() {
	const selectLast12Months = (contributions) => {
		const today = new Date();
		const startTimestamp = new Date(
			today.getFullYear(),
			today.getMonth() - 11,
			1
		).getTime();
		const endTimestamp =
			new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

		return contributions.filter((day) => {
			const contributionTimestamp = new Date(day.date).getTime();

			return (
				contributionTimestamp >= startTimestamp &&
				contributionTimestamp <= endTimestamp
			);
		});
	};

	return (
		<div  id="github-stats" className="github-main">
		<Text
        color="black"
        fontSize={{ md: "35px", base: "28px" }}
        textAlign="center"
        marginLeft={{ md: "25px", base: "10px" }}
      >
        <span
        
          style={{
            borderBottom: "solid",
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "8px",
          }}
        >
          GitHub
        </span>
      </Text>
			<div className="github-calender">
				<GitHubCalendar
					className="github-calendar-class"
					transformData={selectLast12Months}
					username="nitinkondhari03"
					color={"black"}
					blockSize={20}
					fontSize={20}
					showColorLegend
					hideTotalCount
				>
					<ReactTooltip delayShow={20} html />
				</GitHubCalendar>
			</div>
			<div className="github-stats">
				<div id="github-streak">
					<img
						src="https://github-readme-streak-stats.herokuapp.com?user=nitinkondhari03&ring=red&currStreakLabel=000000&fire=black&theme=transparent&hide_border=true&stroke=e0eff8"
						alt="Nitin Stats"
						id="github-streak-stats"
					/>
				</div>
				<div id="github-language">
					<img
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=nitinkondhari03&layout=compact&langs_count=4&bg_color=black&hide_border=true"
						alt="Nitin Stats"
						id="github-top-langs"
					/>
				</div>
				<div id="github-streak-status">
					<img
						src="https://github-readme-stats.vercel.app/api?username=nitinkondhari03&theme=black&show_icons=true&bg_color=black&hide_border=true"
						alt="Nitin Stats"
						id="github-stats-card"
					/>
				</div>
			</div>
		</div>
	);
}

export default GithubStats;