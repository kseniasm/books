import React from 'react'
import Toast from 'react-bootstrap/Toast';


const ToastrMessage = ({type, text}) => {
    return (
        <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '200px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
              <strong className="mr-auto">{type}</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
          </Toast>
    
        </div>
      </div>
    )
}

export default ToastrMessage;