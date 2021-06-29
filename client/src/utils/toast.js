import { toast } from "react-toastify";

export default function Toast(msg, event) {
  if (event === "success") {
    return toast.success(msg, {
      position: "bottom-right",
      closeOnClick: true,
    });
  }
  if (event === "error") {
    return toast.error(msg, {
      position: "bottom-right",
      closeOnClick: true,
    });
  } else {
    toast(msg, {
      position: "bottom-right",
      closeOnClick: true,
    });
  }
}
