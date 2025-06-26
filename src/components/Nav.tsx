import { LuChefHat } from "react-icons/lu";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 navbar navbar-expand-lg border-bottom border-success-subtle bg-white bg-opacity-80 sticky-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2">
          <LuChefHat
            className="text-success"
            style={{ height: "32px", width: "32px" }}
          />
          <span className="fs-4 fw-bold text-success">NutriPlan AI</span>
        </div>
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
          <div className="d-flex ms-auto align-items-center gap-3">
            <Link
              to="#features"
              className="text-success text-decoration-none hover-success"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-success text-decoration-none hover-success"
            >
              How it Works
            </Link>
            <Link to="/dashboard" className="btn btn-success py-2 fw-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
