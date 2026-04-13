import "./GameCard.css";

function GameCard({ game }) {
  return (
    <li className="game-card">
      <div className="game-card__image-container">
        <img src={game.cover} alt="" className="game-card__image" />
      </div>
      <h2 className="game-card__title">{game.name}</h2>
      <div className="game-card__tag-container">
        {/* TO IMPLEMENT: I only want the minimum-required tier to show up. Maybe both tiers apear on hover */}
        <p className="game-card__platform-tag game-card__platform-tag_xb">
          Game Pass
        </p>
        <p className=" game-card__platform-tag game-card__platform-tag_ps">
          PS+ Prem
        </p>
        <p className="game-card__platform-tag game-card__platform-tag_ps">
          PS+ Ex
        </p>
      </div>
    </li>
  );
}

export default GameCard;
