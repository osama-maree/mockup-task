import { BiSolidUser } from "react-icons/bi";
import { RxCheckCircled } from "react-icons/rx";

function SingleMockupBox(props) {
  return (
    <div className={`singleBox ${props.checked ? "" : "gray-color"}`}>
      <div className="leftItem">
        <BiSolidUser className="me-5" /> <div>{props.name}</div>
      </div>
      <div>
        {props.checked ? (
          <RxCheckCircled
            className="icon"
            style={{ color: "rgb(75,181,67)" }}
          />
        ) : (
          <div className="iconCircle"></div>
        )}
      </div>
    </div>
  );
}

export default SingleMockupBox;