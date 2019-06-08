import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const InfoModal = (props) => (
  <Modal isOpen={props.open} toggle={props.onClose} className={props.className} size="lg">
    <ModalHeader toggle={props.onClose}>{props.title}</ModalHeader>
    <ModalBody>{props.body}</ModalBody>
    <ModalFooter>
      {
        props.button && (
          <Button color="primary" onClick={props.onClose}>Do Something</Button>
        )
      }
      <Button color="secondary" onClick={props.onClose}>Close</Button>
    </ModalFooter>
  </Modal>
)

export default InfoModal
