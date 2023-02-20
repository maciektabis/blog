import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RemovePostModal(props) {
	return (
		<>
			<Modal
				show={props.showModal}
				onHide={props.handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={props.handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={props.handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default RemovePostModal;
