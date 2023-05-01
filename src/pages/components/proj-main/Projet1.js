export default function Projet1({
  id,
  titre,
  description,
  adresse,
  video,
  productionAnuelle,
  type,
  img,
}) {
  return (
    <div className="proj container-fluid d-flex justify-content-center ">
      <div className="row justify-content-center">
        <div className=" col-sm-12 col-md-6">
          <img className="cards-blog1" src={img}></img>
        </div>
        <div className=" col-sm-12 col-md-6">
          <h4 className="proj-title">{titre}</h4>
          <div className="proj-text text-secondary">Type : {type}</div>
          <div className="proj-text text-secondary">Adresse de ce projet : {adresse}</div>
          <div className="proj-text text-secondary">La Production annuelle : {productionAnuelle}</div>
 




        </div>
      </div>
    </div>
  );
}
