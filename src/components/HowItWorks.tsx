const HowItWorks = () => {
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
      <div className="w-90 mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-5">
          <h2 className="fs-2 fw-bold text-success mb-3">
            How NutriPlan AI Works
          </h2>
          <p
            className="fs-5 text-success text-opacity-75 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Get started in three simple steps and transform your nutrition
            journey
          </p>
        </div>

        <div className="row gap-4 justify-content-center">
          {[
            {
              step: "1",
              title: "Set Your Goals",
              description:
                "Tell us about your dietary preferences, health goals, and lifestyle",
            },
            {
              step: "2",
              title: "Get AI Recommendations",
              description:
                "Our AI analyzes your needs and creates personalized meal plans",
            },
            {
              step: "3",
              title: "Track & Optimize",
              description:
                "Log your meals, track progress, and let AI optimize your plans",
            },
          ].map((step, index) => (
            <div key={index} className={`col-md-3 text-center border border-success-subtle card pt-5 pb-4`}>
              <div
                className="rounded-circle bg-success text-white fw-bold fs-4 d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: "64px",
                  height: "64px",
                }}
              >
                {step.step}
              </div>
              <h3 className="fs-4 fw-bold text-success mb-3">{step.title}</h3>
              <p className="text-success text-opacity-75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
