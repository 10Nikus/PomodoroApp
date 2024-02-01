import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/modal-slice";

export default function NestedModal() {
  const isOpen = useSelector((state: any) => state.modalSlice.value);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(toggleModal());
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="flex justify-center items-center bg-white">
          <h1>Modal</h1>
        </div>
      </Modal>
    </div>
  );
}
