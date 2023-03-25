import React, { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";

const EditFolder = () => {
  const { closeModal, isOpenModal } = useContext(ModalContext);
  const { editFolderTitle, folders } = useContext(PlaygroundContext);
  const { folderId } = isOpenModal.identifiers;
  const [folderTitle, setFolderTitle] = useState(folders[folderId].title);
  return (
    <>
      <div className="flex flex-row justify-end p-4">
        <RxCross1 className="cursor-pointer" onClick={() => closeModal()} />
      </div>
      <div className="px-6 py-4 flex flex-col items-center justify-center gap-6">
        <h2>Edit folder title</h2>
        <input
          type="text"
          onChange={(e) => setFolderTitle(e.target.value)}
          value={folderTitle}
          placeholder="Please enter folder title "
          className="border-[.5px] text-sm border-gray-100 rounded-lg shadow-sm p-2 w-full"
        />
        <button
          onClick={() => {
            editFolderTitle(folderId, folderTitle);
            closeModal();
          }}
          className="p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray-100 shadow-lg"
        >
          {" "}
          Proced
        </button>
      </div>
    </>
  );
};

export default EditFolder;
