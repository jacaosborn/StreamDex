import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about__heading">About GameSub Dex</h1>
      <p className="about__text">
        GameSub Dex is an index of games available across all subscription-based
        game libraries. Quickly and easily search across game subscription
        services to find if the games you want to play on on a subscription and
        which ones!
      </p>
      <p className="about__text">
        When I'm in the market for a new game, I like to first check if it's
        available on any of the existing subscriptions but it's a hassel to
        check each one individually. Thus GameSub Dex was born! I hope that you
        can find it to be similarly helpful!
      </p>

      <p className="about__text">
        GameSub Dex is a work in progress and currently only supports the two
        largest services, Xbox Game Pass and Playstation Plus Game Catalog.
        Future updates add support for additional services such as Amazon Luna,
        EA Play, Ubisoft+, and more, plus the addition of a page dedicated to
        current offerings of Limited-Time free games such as those offered
        through Epic Games and Prime Gaming.
      </p>
    </div>
  );
}

export default About;
