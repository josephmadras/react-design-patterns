import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => (
  <h1 style={{ backgroundColor: "green" }}>Left!</h1>
);
const RightHandComponent = () => (
  <h1 style={{ backgroundColor: "red" }}>Right!</h1>
);

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
