import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => (
  <h1 style={{ backgroundColor: "green" }}>{name}</h1>
);
const RightHandComponent = ({ message }) => (
  <h1 style={{ backgroundColor: "red" }}>{message}</h1>
);

const people = [
  {
    name: " John Doe",
    age: "54",
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Joseph" />
      <RightHandComponent message="I'm the happiest man in the world" />
    </SplitScreen>
  );
}

export default App;
