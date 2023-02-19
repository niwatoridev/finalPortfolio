import React from 'react';
import { Container } from 'react-bootstrap';

const PjContainer = ({ children }) => {
    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '80%',
                width: '80%',
                maxWidth: '1000px',
                maxHeight: '600px',
                overflow: 'auto'
            }}
        >
            {children}
        </Container>
    );
};

export default PjContainer;
