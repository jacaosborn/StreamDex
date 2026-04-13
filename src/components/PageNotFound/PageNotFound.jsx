import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <p className="not-found__text">
        Uh oh! There&apos;s nothing here... Get back to gaming!
      </p>
      <p className="not-found__text">
        Or <a href="/">return home</a> to search for something to play
      </p>
    </div>
  );
}

export default PageNotFound;
