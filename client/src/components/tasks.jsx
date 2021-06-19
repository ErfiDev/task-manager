import React, { Fragment } from "react";
// import SingleTask from "./singleTask";

const Tasks = ({ match }) => {
  // const [toggle, setToggle] = useState(false);

  console.log(match);
  return (
    <Fragment>
      <div className="tasks">
        {/* {tasks.map((item) => (
          <SingleTask title={item.title} time={item.endTime} />
        ))} */}
      </div>
    </Fragment>
  );
};

export default Tasks;
