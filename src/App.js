import "./App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import { RxCheckCircled } from "react-icons/rx";
function Mockup({ mockupData }) {
  return (
    <>
      <h4>Add members to Front-end development team</h4>
      <div className="searchItem">
        <AiOutlineSearch className="me-5" />
        <h5>Find members</h5>
      </div>
      <MockupBox mockupData={mockupData} />
    </>
  );
}
function MockupBox({ mockupData }) {
  return (
    <>
      {mockupData.map((mockup, indx) => (
        <SingleMockupBox
          name={mockup.name}
          checked={mockup.clicked}
          key={indx}
        />
      ))}
    </>
  );
}
function SingleMockupBox(props) {
  return (
    <div className={`singleBox ${props.checked ? "" : "gray-color"}`}>
      <div className="leftItem">
        <BiSolidUser className="me-5" /> <div>{props.name}</div>
      </div>
      <div>
        {props.checked ? (
          <RxCheckCircled className="icon" style={{ color: "#198754" }} />
        ) : (
          <div className="iconCircle"></div>
        )}
      </div>
    </div>
  );
}
function MyButton({ background, color }) {
  return <>myButton</>;
}

const mockupData = [
  { name: "Corolien Bloeme", clicked: false },
  { name: "Sun Jun", clicked: true },
  { name: "Song Bao", clicked: false },
  { name: "Olivia Arribas", clicked: true },
  { name: "Bonginkosi Mdladlana", clicked: false },
  { name: "Arina Belomestnykh", clicked: true },
  { name: "Jacqueline Likoki", clicked: true },
];
function App() {
  return (
    <div className="app">
      <Mockup mockupData={mockupData} />
    </div>
  );
}

export default App;
