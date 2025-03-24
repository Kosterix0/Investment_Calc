import MainCalc from "./components/MainCalc";

const LOGO_URL = "investment-calculator-logo.png";

function App() {
  return (
    <>
      <div className="logo">
        <img src={LOGO_URL} id="imagetitle" />
        <h1 className="title">Investment Calculator</h1>
      </div>
      <MainCalc />
    </>
  );
}

export default App;
