import { Link } from "react-router-dom";
import { ChefHat, Target, Users, ShoppingCart, MessageCircle, Search, BookOpen } from "lucide-react"
const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Smart Food Search",
      description: "Search thousands of foods with real-time nutritional data",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI Meal Planning",
      description: "Get personalized meal plans based on your goals and preferences",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Food Diary",
      description: "Track your daily intake and monitor your progress",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Nutrition Assistant",
      description: "Ask questions about nutrition and get expert advice",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Smart Shopping Lists",
      description: "Auto-generate grocery lists from your meal plans",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Sharing",
      description: "Share your meal plans and progress with friends",
    },
  ]


const Home = () => {
  return (
    <>
      <h1>Welcome to Home page</h1>;
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
    </>
  );
};

export default Home;
