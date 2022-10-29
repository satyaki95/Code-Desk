import { title } from 'process';
import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { PlaygroundContext } from '../../ModalContext/PlaygroundContext';
import { CloseButton, Modalprops, Header, Input } from '../Modal'

function EditFolderTitle({closeModal, identifier} : Modalprops) {

  const {folderId, cardId} = identifier;

  const { folders, editFolderTitle } = React.useContext(PlaygroundContext)!;

  const [title, setTitle] = React.useState(folders[folderId].title as string);


  return (
    <div>
      <Header>
        <h2>Edit Folder Title</h2>
        <CloseButton
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
      <input type = 'text' value ={title}
      onChange ={(e) => {setTitle(e.target.value)}} />
      <button
      onClick={() => {editFolderTitle(folderId, title); closeModal();}}
      >Update Title</button>
      </Input>
    </div>
  )
}

export default EditFolderTitle;