import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/modal-slice";
import Box from "@mui/material/Box";
import NonLinearSlider from "./Slider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const isOpen = useSelector((state: any) => state.modalSlice.value);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(toggleModal());
  }

  function handleSubmit() {
    dispatch(toggleModal());
  }

  return (
    <div className="">
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NonLinearSlider title="Work Time" min={5} max={120} step={5} />
          <NonLinearSlider title="Break Time" min={1} max={10} step={1} />
          <NonLinearSlider title="Long Break Time" min={10} max={30} step={1} />
          <button
            className="rounded-md bg-indigo-600 text-stone-200  py-1  px-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Box>
      </Modal>
    </div>
  );
}
