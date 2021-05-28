const Content = () => {
  return (
    <div className="container hero">
      <h1>Hello, let's learn how to use React-Intl</h1>
      <p>How $59.99 is displayed in your selected language</p>
      <p>This is how 2,000 is formatted in the selected locale</p>
      <p>Start Today: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Content;
