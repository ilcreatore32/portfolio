import { useEffect, useState } from "react";
import Api from "../../api/configuration";
import { Link } from "react-router-dom";
import Project from "../../types/Project";
import { Projects as Skeleton } from "../../components/Animations/Skeleton/Skeleton";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("none");
  const [loading, setLoading] = useState(true);

  async function getRepos() {
    await setLoading(true);
    await Api.get("/repos")
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    await setLoading(false);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <div>
        <h1 className="">My Projects</h1>
        {loading != false && error != "" ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col gap-3 p-2 mt-3">
            {projects.map((project: Project) => (
              <div
                key={project.id}
                className="item w-full p-4 border-indigo-900 border bg-slate-800 rounded-md"
              >
                <div className="flex flex-col gap-3">
                  <p>{project.name}</p>
                  <p className="text-sm text-justify md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-row gap-2 items-center justify-start">
                    {project.language != null ? (
                      <p className="text-sm text-gray-400">
                        Main language:
                        <span className="text-sm ml-1 text-green-400">
                          {project.language}
                        </span>
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 justify-start items-start  sm:justify-between mt-3">
                    <button>
                      <Link to={`/portfolio/project/${project.name}`}>
                        <span className="text-blue-400 text-xs sm:text-sm">
                          Read about this project
                        </span>
                      </Link>
                    </button>
                    <div className="flex gap-2">
                      <button>
                        <a href={project.html_url}>
                          <span className="text-blue-400 text-xs sm:text-sm">
                            Github Repo
                          </span>
                        </a>
                      </button>
                      <button>
                        <a
                          href={`https://ilcreatore32.github.io/${project.name}`}
                        >
                          <span className="text-green-400 text-xs sm:text-sm">
                            Live
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
