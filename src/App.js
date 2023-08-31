import "./App.css";
function Mockup({ mockupData }) {
  return (
    <>
      <h3>Add members to Front-end development team</h3>
      <div>Find members</div>
      <MockupBox mockupData={mockupData} />
    </>
  );
}
function MockupBox({ mockupData }) {
  return (
    <>
      {mockupData.map((mockup, indx) => (
        <SingleMockupBox name={mockup.name} key={indx} />
      ))}
    </>
  );
}
function SingleMockupBox(props) {
  return <>{props.name}</>;
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
    <div>
      <Mockup mockupData={mockupData} />
    </div>
  );
}

export default App;
