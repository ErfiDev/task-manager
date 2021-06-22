import Task from "../services/taskService";

function FilterTasksAction(uuid) {
  return async (dispatch) => {
    const { data } = await Task.getTasks(uuid);
    let defineStatusTrue = data.tasks.filter((item) => item.status === true);
    let defineStatusFalse = data.tasks.filter((item) => item.status === false);
    return dispatch({
      type: "SET_FILTER_TASKS",
      payload: {
        complete: defineStatusTrue.length,
        unComplete: defineStatusFalse.length,
        all: data.tasks.length,
      },
    });
  };
}

export default FilterTasksAction;
