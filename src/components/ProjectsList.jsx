import { useState } from "react";
import { useEffect } from "react";
import { getProjects } from "../utils/api";

export default function ProjectsList() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects("brianhenrydev").then(res => setProjects(res))
  }, [])

  return (
    <ul>
      {
        projects.map(({ name, description, html_url }) =>

          <li
            key={html_url}
            className="link-text"
          >
            <a
              href={html_url}
              target="_blank"
              className="link-text"
            >{name}</a>
            - <span className="text-desc">{description}</span>
          </li>

        )
      }
    </ul>
  )
}
