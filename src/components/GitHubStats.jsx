import { useEffect, useState } from "react"
import { getProjects, getPullRequests, getTotalCommits } from "../utils/api"
export default function GitHubStats() {
  const [pullReleaseTotal, setPullReleaseTotal] = useState("loading..");
  const [projectCount, setProjectCount] = useState("loading..");
  const [totalCommits, setTotalCommits] = useState("loading..");
  useEffect(() => {
    getPullRequests("brianhenrydev").then(({ total_count }) => setPullReleaseTotal(total_count))
    getProjects("brianhenrydev").then((projects) => setProjectCount(projects.length))
    getTotalCommits("brianhenrydev").then(evts => setTotalCommits(evts.length))
  }, [])
  return (
    <div className="flex flex-col rounded-lg bg-gray-700 p-4 shadow-md">
      <h2 className="mb-2 text-xl font-semibold text-blue-700">Overview</h2>
      <div className="space-y-2">
        <div className="text-lg text-blue-500">
          I have <code>{pullReleaseTotal}</code> Pull Requests
        </div>
        <div className="text-lg text-blue-500">
          I have <code>{projectCount}</code> Projects
        </div>
        <div className="text-lg text-blue-500">
          I have made <code>{totalCommits}</code> commits in the last 90 days
        </div>
      </div>
    </div>
  )
}

