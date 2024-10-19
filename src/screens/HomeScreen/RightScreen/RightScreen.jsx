import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./right.scss";
import { PlaygroundContext } from "../../../providers/PlaygroundProvider";
import { modalConstants, ModalContext } from "../../../providers/ModalProvider";
import { useNavigate } from "react-router-dom";

const Folder = ({ folderTitle, cards, id }) => {
  const { deleteFolder, deleteFile } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);
  const navigate = useNavigate();

  const onDeleteFolder = () => {
    deleteFolder(id);
  };

  const onEditFolderTitle = () => {
    setModalPayload(id);
    openModal(modalConstants.UPDATE_FOLDER_TITLE);
  };

  const openCreateCardModal = () => {
    setModalPayload(id);
    openModal(modalConstants.CREATE_CARD);
  };

  return (
    <div className="folder-container" key={id} id={id}>
      <div className="folder-header">
        <div className="folder-header-item">
          <FontAwesomeIcon icon={faFolderOpen} style={{ color: "#FFD43B" }} />
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete"
            onClick={onDeleteFolder}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit"
            onClick={onEditFolderTitle}
          />
          <button onClick={openCreateCardModal}>
            <FontAwesomeIcon icon={faPlus} />
            <span>New Playground</span>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards?.map((file, index) => {
          const onEdit = () => {
            setModalPayload({ fileId: file.id, folderId: id });
            openModal(modalConstants.UPDATE_FILE_TITLE);
          };

          const onDeleteFile = () => {
            deleteFile(id, file.id);
          };

          const navigateToPlaygroundScreen = () => {
            navigate(`/playground/${file.id}/${id}`);
          };

          return (
            <div
              className="card"
              key={index}
              onClick={navigateToPlaygroundScreen}
            >
              <img src="logo.png" alt="" />
              <div className="title-container">
                <span>{file?.title}</span>
                <span>Language: {file?.language}</span>
              </div>
              <div>
               <div onClick={(e) => {
                      e.stopPropagation(); //stop click propagation from child to parent
                    }}>
               <FontAwesomeIcon
                  icon={faTrashCan}
                  className="delete"
                  onClick={onDeleteFile}
                />
                <FontAwesomeIcon
                  className="edit"
                  icon={faPenToSquare}
                  onClick={onEdit}
                />
               </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RightScreen = () => {
  const { folders } = useContext(PlaygroundContext);
  const modalFeatures = useContext(ModalContext);

  const openCreateNewFolderModal = () => {
    modalFeatures.openModal(modalConstants.CREATE_FOLDER);
  };

  return (
    <div className="right-container">
      <div className="header">
        <div className="title">
          <span>My</span> Playground
        </div>
        <button className="add-folder" onClick={openCreateNewFolderModal}>
          <FontAwesomeIcon icon={faPlus} />
          <span>New Folder</span>
        </button>
      </div>
      {folders?.map((folder, index) => {
        return (
          <Folder
            folderTitle={folder?.title}
            cards={folder?.files}
            key={folder.id}
            id={folder.id}
          />
        );
      })}
    </div>
  );
};

export default RightScreen;
