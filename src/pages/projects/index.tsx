import useGetPinnedRepositories from "../../services/useGetPinnedRepositories";
import { FaStar } from "react-icons/fa";

const Projects = () => {
  const { data } = useGetPinnedRepositories();
  return (
    <div className="flex flex-col w-full mt-16 max-w-3xl">
      <main className="flex flex-col gap-4 px-7">
        <div>
          <h1 className="text-xl font-aptos-black">Meus projetos</h1>
          <p>Esses são os projetos em destaque no Github</p>
        </div>
        <div className="flex flex-col gap-2">
          {data?.user.pinnedItems.edges.map(
            ({ node: { id, name, url, description, stargazerCount } }) => (
              <div className="flex flex-col w-full" key={id}>
                <div className="inline-flex items-center gap-2">
                  <a
                    className="font-aptos-semibold underline text-sky-500"
                    href={url}
                    target="_blank"
                  >
                    {name}
                  </a>
                  <FaStar /> <span>{stargazerCount}</span>
                </div>
                <span className="text-sm text-zinc-400">{description}</span>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
