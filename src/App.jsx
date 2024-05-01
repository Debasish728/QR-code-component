import "./App.css";
import image from "./qr.png";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <img src={image} alt="qr" />
          <h2>Imporve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coading
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
