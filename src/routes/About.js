import Stages from "../json/exp.json"

function About() {
  return (
    <div className="App">
      {Stages.Stages.map(elem=>(
        <div className="project-elem">
          <p className="title">{elem.title}</p>
          <p>{elem.lieu + " - " + elem.date}</p>
          <p>{elem.description}</p>
        </div>
      ))}
    </div>
  );
}

export default About;