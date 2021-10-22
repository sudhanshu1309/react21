import React from "react";

const Card = ({
  title = "DefaultTitle",
  buttonText = "DefaultButton",
  url = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  content = "Some quick example text to build on the card title and make up the bulk of the card's content.",
}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{content}</p>
        <a href="#" class="btn btn-success">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
