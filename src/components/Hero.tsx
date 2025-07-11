import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  const words =
    "Transform your nutrition journey with AI-powered meal planning, smart food tracking, and personalized recommendations tailored to your lifestyle.";
  const wordsArray = words.split(" ");
  console.log(wordsArray);
  return (
    <section
      className="py-5 px-3"
      style={{
        marginTop: "6rem",
        backgroundImage: "url('/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-90 mx-auto text-center" style={{ maxWidth: "1200px" }}>
        <div className="py-5">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="100"
          >
            <BsStars
              className="text-warning me-1"
              style={{ height: "30px", width: "30px" }}
            />
            <span className="badge fs-6 bg-light text-success mb-3 px-3 py-2">
              AI-Powered Nutrition Planning
            </span>
          </span>
          <h1
            className="display-2 fw-bold text-success mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            Your Personal
            <span className="text-warning d-block">Meal Planning</span>
            Assistant
          </h1>
          <p
            className="fs-4 fw-bold text-success text-opacity-75 mb-4 mx-auto py-5"
            data-aos="zoom-up"
            data-aos-duration="2000"
            data-aos-easing="linear"
            data-aos-delay="500"
            style={{ maxWidth: "700px" }}
          >
            {wordsArray.map((words, index) => (
              <span
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <span>{words}</span>{" "}
              </span>
            ))}
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/dashboard" className="btn btn-success btn-lg px-4 py-2">
              Start Planning
            </Link>
            <Link
              to="/search"
              className="btn btn-outline-success bg-white text-success btn-lg px-4 py-2 fw-semibold"
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
