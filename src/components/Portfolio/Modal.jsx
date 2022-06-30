import TechStack from './TechStack'
  return (
    <div className='modal' tabIndex='-1' onClick={closeModal}>
      <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{project.title}</h5>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
