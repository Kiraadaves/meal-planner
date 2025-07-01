import {
  FiBookOpen,
  FiMessageCircle,
  FiShoppingCart,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const features = [
  {
    icon: <IoSearch style={{ height: "36px", width: "36px" }} />,
    title: "Smart Food Search",
    description: "Search thousands of foods with real-time nutritional data",
  },
  {
    icon: <FiTarget style={{ height: "36px", width: "36px" }} />,
    title: "AI Meal Planning",
    description:
      "Get personalized meal plans based on your goals and preferences",
  },
  {
    icon: <FiBookOpen style={{ height: "36px", width: "36px" }} />,
    title: "Food Diary",
    description: "Track your daily intake and monitor your progress",
  },
  {
    icon: <FiMessageCircle style={{ height: "36px", width: "36px" }} />,
    title: "AI Nutrition Assistant",
    description: "Ask questions about nutrition and get expert advice",
  },
  {
    icon: <FiShoppingCart style={{ height: "36px", width: "36px" }} />,
    title: "Smart Shopping Lists",
    description: "Auto-generate grocery lists from your meal plans",
  },
  {
    icon: <FiUsers style={{ height: "36px", width: "36px" }} />,
    title: "Social Sharing",
    description: "Share your meal plans and progress with friends",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-5 ">
      <div className="">
        <div className="text-center mb-4">
          <h2 className="fs-2 fw-bold text-success mb-3">
            Everything You Need for Healthy Living
          </h2>
          <p
            className="fs-5 fw-medium text-success text-opacity-75 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Our comprehensive platform combines AI intelligence with nutritional
            science to help you achieve your health goals.
          </p>
        </div>

        <div className="row gap-4 justify-content-center  px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-3 card border-success-subtle shadow-sm py-4`}
              style={{
                transition: "all 0.5s ease",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="card-header border-0 bg-transparent text-success mb-2">
                {feature.icon}
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">{feature.title}</h5>
                <p className="card-text text-success">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
