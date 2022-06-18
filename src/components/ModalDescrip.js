import { Button, Modal } from 'react-bootstrap'

export const ModalDescrip = ({open, set, info}) => {
    return (
        <div>
            <Modal
                show={open}
                backdrop="static"
                keyboard={false}>
                <Modal.Header >
                    <Modal.Title>{info.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={set}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
