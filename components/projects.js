import Image from "next/image"
import styles from "./styles/projects.module.scss"
import Link from "next/link"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"
import { FiExternalLink } from "react-icons/fi"
import { useState } from "react"

const myProjects = [
  {
    name: "Timetable Scheduler",
    description:
      "A React application that utilizes the Genetic Algorithms in order to generate a full university timetable with no conflicts. This application was developed to suit the Islamic University of Gaza Engineering department's specification for generating a schedule",
    techStack: [
      "NextJS",
      "React",
      "Redux",
      "React Spectrum",
      "Genetic Algorithms",
      "CSS grids",
      "CSS modules",
      "Vercel",
    ],
    websiteUrl: "https://nextjs-timetable-generator.vercel.app",
    githubRepo: "https://github.com/moooeee/nextjs-timetable-generator",
  },
  {
    name: "React Minesweeper",
    description:
      "The famous Minesweeper game built in React with a beautiful design and layout, also using some audio effects to give the user a great experience",
    techStack: ["NextJS", "Redux Toolkit", "SSR", "CSS modules", "Vercel"],
    websiteUrl: "https://next-js-minesweeper.vercel.app",
    githubRepo: "https://github.com/moooeee/nextJS-minesweeper",
  },
  {
    name: "Chess App",
    description:
      "NextJS Chess game where the user plays against a javascript chess engine with multiple difficulty levels using a Drag and Drop Chessboard built from scratch with an option to switch between different skins for board and pieces as well as drawing arrows and highlighting squares",
    techStack: [
      "NextJS",
      "React",
      "Redux",
      "ReactDND",
      "Chakra UI",
      "CSS modules",
      "Vercel",
    ],
    websiteUrl: "https://nextjs-chess-app.vercel.app",
    githubRepo: "https://github.com/moooeee/nextjs-chess-app",
  },
  {
    name: "Rick and Morty Characters",
    description:
      "NextJS app that hits 3rd party API to get all Rick and Morty characters and episodes with a dedicated devtool specific for this app, to control things like delays, error rate, max/min response time",
    techStack: ["NextJS", "React", "React Query", "Vercel"],
    websiteUrl: "https://rick-and-morty-rho.vercel.app/",
    githubRepo: "https://github.com/moooeee/rick-and-morty",
  },
  {
    name: "Frame Company Website",
    description:
      "The official page of Frame Inc. featuring all the services and courses the company has to offer, with an engaging layout and animations, I was solely responsible for developing this website from square one",
    techStack: ["Webpack", "SASS", "Netlify"],
    websiteUrl: "https://frame-v3.netlify.app/",
    githubRepo: "https://github.com/moooeee/frame-website",
  },
  {
    name: "Gatsby Blog and Portfolio",
    description:
      "My old Gatsby portfolio that i used to display personal projects as well as a platform to write articles about tech stuff· Full-featured blog platform with code highlighting, quotes, illustrative pictures and more, all built from the ground up",
    techStack: ["Gatsby", "React", "Styled Components", "MDX", "Netlify"],
    websiteUrl: "https://moe-dev.netlify.app/",
    githubRepo: "https://github.com/moooeee/gatsby-portfolio",
  },
  {
    name: "Sracastic News",
    description:
      "NextJS satirical news website that features sarcastic fictional news just for fun, with a serious news-like layout with marquees, grids and animations",
    techStack: ["NextJS", "React", "CSS Modules", "Vercel"],
    websiteUrl: "http://satirical-news-website.vercel.app/",
    githubRepo: "https://github.com/moooeee/satirical-news-website",
  },
]

const previousProjects = [
  {
    name: "Timetable Scheduler 1.0",
    webkitURL: "https://timetable-generator.netlify.app/",
    githubRepo: "https://github.com/moooeee/ScheduleGenerator",
  },
  {
    name: "Minesweeper game 1.0",
    webkitURL: "https://cool-minesweeper.netlify.app/",
    githubRepo: "https://github.com/moooeee/react-minesweeper",
  },
  {
    name: "Chess app 1.0",
    webkitURL: "https://react-chess-app.netlify.app/",
    githubRepo: "https://github.com/moooeee/react-chess-app",
  },
]

function Project({ project }) {
  const { name, description, techStack, websiteUrl, githubRepo } = project
  return (
    <li className={styles.projectItem}>
      <article>
        <div className={styles.titleWrapper}>
          <Link href={websiteUrl}>
            <a
              title="Opens in a new tab"
              target="_blank"
              className={styles.projectName}
            >
              {name}
            </a>
          </Link>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectDesc}>
            <p>{description}</p>
            <ul>
              {techStack.map((tech) => {
                return <li key={tech}>{tech}</li>
              })}
            </ul>
          </div>
          <div className={styles.githubUrl}>
            <Link href={githubRepo}>
              <a title="Opens in a new tab" target="_blank">
                <GoMarkGithub size={20} />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </li>
  )
}

function ProjectMini({ project }) {
  return (
    <li className={styles.projectMini}>
      <article>
        <h3>
          <span>{project.name}</span>
          <div className={styles.urls}>
            <Link href={project.webkitURL}>
              <a title="Opens in a new tab" target="_blank">
                <FiExternalLink size={20} />
              </a>
            </Link>
            <Link href={project.githubRepo}>
              <a title="Opens in a new tab" target="_blank">
                <GoMarkGithub size={20} />
              </a>
            </Link>
          </div>
        </h3>
      </article>
    </li>
  )
}

function Projects() {
  const [showMore, setShowMore] = useState(false)
  return (
    <article className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2>Projects</h2>
      </div>
      <ul>
        {Array(4)
          .fill(null)
          .map((_, i) => {
            return <Project key={myProjects[i].name} project={myProjects[i]} />
          })}
        {!showMore && (
          <div className={styles.showMoreBtnWrapper}>
            <button
              className={styles.showMoreBtn}
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>
          </div>
        )}
        {showMore && (
          <>
            <div className={styles.hrLine}></div>
            {Array(myProjects.length - 4)
              .fill(null)
              .map((_, i) => {
                const index = i + 4
                return (
                  <Project
                    key={myProjects[index].name}
                    project={myProjects[index]}
                  />
                )
              })}
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              {previousProjects.map((project) => {
                return <ProjectMini key={project.name} project={project} />
              })}
            </ul>
          </>
        )}
      </ul>
    </article>
  )
}

export default Projects
