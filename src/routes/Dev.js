
import Projets from "../json/project.json"
function Dev() {
  return (
    <div className="App">
      {Projets.Projects.map(elem=>(
        <div className="project-elem">
          <p className="title">{elem.title}</p>
          <p>{elem.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Dev;