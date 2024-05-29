import React from "react";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary btn-sm">
            detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
