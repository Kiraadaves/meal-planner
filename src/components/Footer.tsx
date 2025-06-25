import { LuChefHat } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-5 px-3">
      <div className="container text-center">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <LuChefHat className="me-2" />
          <span className="fs-4 fw-bold">NutriPlan AI</span>
        </div>
        <p className="text-light mb-3">
          Empowering healthy living through intelligent nutrition planning
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link
            to="/privacy"
            className="text-light text-decoration-none hover-white"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-light text-decoration-none hover-white"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="text-light text-decoration-none hover-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
