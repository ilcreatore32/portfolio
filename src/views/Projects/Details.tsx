// React
import { useState, useEffect } from "react";

// Api
import Api from "../../api/configuration";

// React-Router
import { useParams } from "react-router-dom";

// Types
import Project from "../../types/Project";

// Components
import { Project as Skeleton } from "../../components/Animations/Skeleton/Skeleton";

const Details = () => {
  const { name } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState("none");
  const [loading, setLoading] = useState(true);

  async function getRepo() {
    await setLoading(true);
    await Api.get("/repos")
      .then((res) => {
        return res.data;
      })
      .then((repos: Array<Project>) => {
        repos.find((repo) => {
          if (repo.name === name) {
            setProject(repo);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    await setLoading(false);
  }

  useEffect(() => {
    getRepo();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div
          key={project?.id}
          className="item w-full p-4 border-indigo-900 border bg-slate-800 rounded-md"
        >
          <div className="flex flex-col gap-1 items-end sm:justify-end sm:flex-row sm:gap-3">
            <span className="text-slate-300 opacity-30 text-xs md:text-sm">
              Created at: {project?.created_at.slice(0, 10)}
            </span>
            <span className="text-slate-300 opacity-30 text-xs md:text-sm">
              Last update: {project?.updated_at.slice(0, 10)}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium leading-tight text-4xl my-2 text-white">
              {project?.name}
            </h1>
            <div className="w-full px-2">
              <p className="text-slate-300 text-justify">
                <span className="text-white">Short description: </span>
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
