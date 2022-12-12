import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);

  //   const { id } = useParams();
  //   console.log(id);
  //   const [project, setProject] = useState([]);
  //   //   console.log(project);
  //   useEffect(() => {
  //     fetch("projects.json")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [id]);

  return (
    <div className="pt-32">
      <h1>Project Details</h1>
    </div>
  );
};

export default ProjectDetails;
