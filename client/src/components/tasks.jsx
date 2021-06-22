import React, { Fragment, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Task from "../services/taskService";
import SingleTask from "./singleTask";

const Tasks = ({ match }) => {
  const tasks = useSelector((state) => state.tasks);
  const dis = useDispatch();
  useEffect(() => {
    async function get() {
      let { data } = await Task.getTasks(match.params.uuid);
      if (data.status === 200) {
        return dis({ type: "SET_TASKS", payload: data.tasks });
      } else {
        toast.error("can't get tasks", {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
    }
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {tasks.length < 0 ? (
        "Nothing"
      ) : (
        <div className="tasks">
          {tasks.map((item) => (
            <SingleTask
              uuidTask={item.uuid}
              title={item.title}
              time={item.endTime}
              uuid={match.params.uuid}
              status={item.status}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Tasks;
