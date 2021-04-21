import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container hero">
        <h1>Welcome to LogRocket Pricing Plan</h1>
        <p>Starting: $99.00 / month</p>
        <p>Starting at 1,000 sessions / month</p>
        <p>Start Today: 4/21/2021</p>
      </div>
    </div>
  );
};

export default App;
