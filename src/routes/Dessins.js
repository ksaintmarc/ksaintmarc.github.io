import InfoArray from "../json/art.json";

function Dessins() {
  return (
    <div className="App">
      <div className="gallery">
      {InfoArray.Art.map(elem => (
        <>
          <img className="artpic" src={"/img/art" + elem.path} alt={elem.description}/>
        </>
      ))}</div>
    </div>
  );
}

export default Dessins;
