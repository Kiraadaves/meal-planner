const Cta = () => {
  return (
    <section className="py-5 px-3 "
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container text-center my-5">
        <h2 className="display-4 fw-bold text-success my-5 py-5">
          Ready to Transform Your Nutrition?
        </h2>
        <p
          className="fs-4 text-success my-5 mx-auto"
          style={{ maxWidth: "42rem" }}
        >
          Join thousands of users who have already improved their health with
          AI-powered meal planning
        </p>
        <a
          href="/dashboard"
          className="btn btn-light text-success fs-5 px-5 py-3"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Cta;
