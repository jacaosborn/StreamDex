import { useState } from "react";
import "./GameCard.css";

function GameCard({ game }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className={`game-card${isLoaded ? " game-card_visible" : ""}`}>
      <div className="game-card__image-container">
        <img
          src={game.cover}
          alt={game.name}
          className="game-card__image"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h2 className="game-card__title">{game.name}</h2>
      <div className="game-card__tag-container">
        {game.platforms.includes("gp") && (
          <p className="game-card__platform-tag game-card__platform-tag_xb">
            Game Pass
          </p>
        )}
        {game.platforms.includes("ps-prem") && (
          <p className="game-card__platform-tag game-card__platform-tag_ps">
            PS+ Premium Only
          </p>
        )}
        {game.platforms.includes("ps-ex") && (
          <p className="game-card__platform-tag game-card__platform-tag_ps">
            PS+ Extra/Prem
          </p>
        )}
        {game.platforms.includes("ea") && (
          <div className="game-card__ea-container">
            <p className="game-card__platform-tag game-card__platform-tag_xb">
              Game Pass Ult & PC
            </p>{" "}
            <p className="game-card__title">via</p>
            <p className="game-card__platform-tag game-card__platform-tag_ea">
              EA Play
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export default GameCard;
