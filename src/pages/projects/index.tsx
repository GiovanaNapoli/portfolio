import useGetPinnedRepositories from "../../services/useGetPinnedRepositories";

const Projects = () => {
  const { data } = useGetPinnedRepositories();
  console.log(data);
  return <h1>Projects</h1>;
};

export default Projects;
