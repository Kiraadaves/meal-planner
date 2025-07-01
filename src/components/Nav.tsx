import { LuChefHat } from "react-icons/lu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className="p-4 navbar navbar-expand-lg border-bottom border-success-subtle bg-white bg-opacity-80 fixed-top">
      <div className="container-fluid">
        <Link
          to="/"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <LuChefHat
            className="text-success"
            style={{ height: "40px", width: "40px" }}
          />
          <span className="fs-3 fw-bold text-success">NutriPlan AI</span>
        </Link>
        <button
          className="navbar-toggler border-success "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ms-auto align-items-center gap-5">
            <HashLink
              smooth
              to="#features"
              className="fs-5 fw-medium text-success text-decoration-none hover-success"
            >
              Features
            </HashLink>
            <HashLink
              smooth
              to="#how-it-works"
              className="fs-5 fw-medium text-success text-decoration-none hover-success"
            >
              How it Works
            </HashLink>
            <Link
              to="/dashboard"
              className="fs-5 fw-medium btn btn-success py-2 fw-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
