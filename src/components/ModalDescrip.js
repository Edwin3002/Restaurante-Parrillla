import { Modal } from 'react-bootstrap'
import { XFill } from '../icons/icons'
import '../style/modal.css'
import clock from '../icons/clock.png'
import { Fire } from './Fire'

export const ModalDescrip = ({ open, set, info }) => {
    return (
        <div>
            <Modal
                show={open}
                onHide={set}
                keyboard={false}
                size="lg"
                centered >
                <Modal.Header className='my-0 mHeader'>
                    <p className='delete2' onClick={set}><XFill /></p>
                    <h2 className='text-center text-light my-0'>{info.nombre}</h2>
                </Modal.Header>
                <Modal.Body className='m'>
                    <div className='d-flex '>
                        <div className='cardContent2 w-50'>
                            <img className='cardImg' src={info.img} alt='food' />
                        </div>
                        <div className='d-flex w-50 mx-2 p-2 flex-column justify-content-between modalBody'>
                            <p className='fs-6 fw-bold'>{info.descripcion}</p>
                            <div>
                                <p className='d-flex'><img width='20px' src={clock} alt='clock' />
                                <div className='d-flex justify-content-between'>
                                <Fire n={info.tiempo}/>
                                    </div>
                                </p>
                                <h3>$ {Intl.NumberFormat('de-DE').format(info.precio)}</h3>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
