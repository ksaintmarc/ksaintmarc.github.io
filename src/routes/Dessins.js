import { useState } from "react";
import InfoArray from "../json/art.json";
import { Modal } from "@mui/material";

function Dessins() {
  const [modal, setModal] = useState(null)
  return (
    <div className="App">
      <div className="gallery">
        {modal && <Modal open={modal} onClose={()=>setModal(null)}>
          <div className="art-modal">
            <h1>{modal.title}</h1>
            <div>
              <img className="artpic" src={"/img/art" + modal.path} alt={modal.description}/>
              <p>{modal.description}</p>
            </div>
          </div>
        </Modal>}
      {InfoArray.Art.map(elem => (
        <>
          <img onClick={()=>setModal(elem)} className="artpic" src={"/img/art" + elem.path} alt={elem.description}/>
        </>
      ))}</div>
    </div>
  );
}

export default Dessins;
