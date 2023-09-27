import SingleMockupBox from "./SingleMockupBox.jsx";

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

export default MockupBox