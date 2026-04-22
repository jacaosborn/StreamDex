import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about__heading">About GameSub Search</h1>
      <p className="about__text">
        GameSub Search is an index of games available across subscription-based
        game libraries. Quickly and easily search across game subscription
        services to find if the games you want to play on on a subscription and
        which ones!
      </p>
      <p className="about__text">
        When I'm in the market for a new game, I like to first check if it's
        available on any of the existing subscriptions to see if it makes sense
        to get a subscription to play it instead of buying it individually but
        it's a hassel to check each service's catalog individually. Thus GameSub
        Search was born! I hope that you can find it to be similarly helpful!
      </p>

      <p className="about__text">
        GameSub Search is a work in progress and currently only supports the two
        largest services, Xbox Game Pass and Playstation Plus Game Catalog, plus
        EA Play (which is included with some Game Pass tiers). Future updates
        are planned to add support for additional services such as Amazon Luna,
        Ubisoft+, and more, plus the addition of a page dedicated to current
        offerings of Limited-Time free games such as those offered through Epic
        Games and Amazon Prime Gaming.
      </p>
    </div>
  );
}

export default About;
