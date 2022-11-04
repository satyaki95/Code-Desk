import { title } from 'process';
import React, { useState, useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { PlaygroundContext } from '../../ModalContext/PlaygroundContext';
import { CloseButton, Modalprops, Header, Input } from '../Modal'

function EditCardTitle({closeModal, identifier} : Modalprops) {

  const {folderId, cardId} = identifier;

// access our card from folders state

  const { folders, editCardTitle } = useContext(PlaygroundContext)!;

  const [title, setTitle] = useState(folders[folderId].items[cardId].title as string);


  return (
    <div>
      <Header>
        <h2>Edit Card Title</h2>
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
      onClick={() => {editCardTitle(folderId, cardId, title); closeModal();}}
      >Update Title</button>
      </Input>
    </div>
  )
}

export default EditCardTitle