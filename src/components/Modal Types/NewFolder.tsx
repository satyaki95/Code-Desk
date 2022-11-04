import { title } from 'process';
import React, { useState, useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { PlaygroundContext } from '../../ModalContext/PlaygroundContext';
import { CloseButton, Modalprops, Header, Input } from '../Modal'

function CreateNewFolder({closeModal, identifier} : Modalprops) {

 // access our card from folders state
 
  const { folders, createNewFolder } = useContext(PlaygroundContext)!;

  const [title, setTitle] = useState('');


  return (
    <div>
      <Header>
        <h2>Create New Folder</h2>
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
      onClick={() => {createNewFolder(title); closeModal();}}
      >Create Folder</button>
      </Input>
    </div>
  )
}

export default CreateNewFolder;