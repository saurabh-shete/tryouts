const Content = () => {
  return (
    <div className="container hero">
      <h1>Hello, let's learn how to use React-Intl</h1>
      <p>How $99.00 is displayed in your selected language</p>
      <p>This is how 1,000 is formatted in the selected locale</p>
      <p>Start Today: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Content;
