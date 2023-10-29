// CSS
import './Modal.css'

export default function Modal({ setIsOpen, title, status }) {
    return (
        <>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div className='modal'>
                <div className='modalHeader'>
                    <h4 className='heading'>{title}</h4>
                </div>
                <div className='modalContent'>
                    <p>{status}</p>
                </div>
                <div className='modalActions'>
                    <button className='agreeBtn' onClick={() => setIsOpen(false)}>
                        D'accord
                    </button>
                </div>
                </div>
            </div>
        </>
      );
}
