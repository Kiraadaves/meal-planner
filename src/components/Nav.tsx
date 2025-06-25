import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>Welcome to nav page</h1>;
      <div className="d-flex justify-content-center gap-4">
        <Link to="/dashboard">
          <button type="button" className="btn btn-primary">
            Dashboard
          </button>
        </Link>
        <Link to="/profile">
          <button type="button" className="btn btn-success">
            Profile
          </button>
        </Link>
        <Link to="/settings">
          <button type="button" className="btn btn-warning">
            Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
