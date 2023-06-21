import LandingPage from "./components/LandingPage";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
const items = ["Goku", "Gohan", "Krillin", "Vegeta", "Piccolo"];

  return (
    <>
    <Navbar />
    <LandingPage />
    <ListGroup items={items} header={'Pick Your Favorite Character!'}/>
    </>
  )
};

export default App
