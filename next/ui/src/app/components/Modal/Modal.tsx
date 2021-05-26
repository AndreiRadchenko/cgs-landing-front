import { MouseEventHandler, ReactPortal, useEffect } from 'react';
import * as Styled from './Modal.styles';
import ReactDOM from 'react-dom';

const Modal: React.FC<{ children: any; closeModal: Function }> = ({
  children,
  closeModal,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // function handleOverlayClick(event) {
  //   if (event.currentTarget === event.target) {
  //     closeModal();
  //   }
  // }

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <Styled.Overlay className="Overlay">
      <Styled.Modal className="Modal">{children}</Styled.Modal>
    </Styled.Overlay>,
    modalRoot
  );
};
export default Modal;
