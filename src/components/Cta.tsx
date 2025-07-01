const Cta = () => {
  return (
    <section
      className="py-5 px-3 "
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-center my-3 my-lg-5">
        <h2 className="display-4 fw-bold text-success my-3 my-lg-5 py-5">
          Ready to Transform Your Nutrition?
        </h2>
        <p
          className="fs-4 text-success my-lg-5 mx-auto"
          style={{ maxWidth: "42rem" }}
        >
          Join thousands of users who have already improved their health with
          AI-powered meal planning
        </p>
        <a
          href="/dashboard"
          className="btn btn-success text-white fs-5 fw-medium px-5 py-3"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Cta;
