import React, { useContext } from "react";
import { ModalContext } from "../Context/ModalContext.js";
import {
  EditFolder,
  EditPlayGroundTitle,
  Loading,
  NewFolder,
  NewPlayGround,
  NewPlayGroundAndFolder,
} from "./Modaltypes";

const Modal = () => {
  const { isOpenModal } = useContext(ModalContext);
  const { modalType } = isOpenModal;
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div
        className="relative w-auto my-6 mx-auto max-w-3xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white focus:outline-none">
          {modalType === 1 && <NewFolder />}
          {modalType === 2 && <NewPlayGround />}
          {modalType === 3 && <NewPlayGroundAndFolder />}
          {modalType === 4 && <EditFolder />}
          {modalType === 5 && <EditPlayGroundTitle />}
          {modalType === 6 && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
