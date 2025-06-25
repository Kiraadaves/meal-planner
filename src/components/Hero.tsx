import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="py-5 px-3"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-90 mx-auto text-center" style={{ maxWidth: "1200px" }}>
        <div>
          <span className="badge bg-light text-success mb-3 px-3 py-2">
            AI-Powered Nutrition Planning
          </span>
          <h1 className="display-3 fw-bold text-success mb-4">
            Your Personal
            <span className="text-warning d-block">Meal Planning</span>
            Assistant
          </h1>
          <p
            className="fs-5 text-success text-opacity-75 mb-4 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Transform your nutrition journey with AI-powered meal planning,
            smart food tracking, and personalized recommendations tailored to
            your lifestyle.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/dashboard" className="btn btn-success btn-lg px-4 py-2">
              Start Planning
            </Link>
            <Link
              to="/search"
              className="btn btn-outline-success btn-lg px-4 py-2"
            >
              Explore Foods
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
