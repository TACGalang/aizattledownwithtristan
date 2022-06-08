import "./style.css";

interface EntourageProps {
  imgSrc: string;
  name: string;
  title: string;
}

const Entourage: React.FC<EntourageProps> = ({ imgSrc, name, title }) => {
  return (
    <div className="entourage">
      <img src={imgSrc} className="img_thumbnail" alt="" />
      <h4 className="name">{name}</h4>
      <h5 className="title">{title}</h5>
    </div>
  );
};

export default Entourage;
