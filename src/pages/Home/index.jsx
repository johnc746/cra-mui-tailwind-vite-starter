import React from 'react';
import { Box, Container, Link, Modal, Typography } from '@mui/material';
import styles from './style';

const Home = () => {
    return (
        <Container className='flex items-center justify-center'>
            <Box>
                <Link
                    href='https://reactjs.org/'
                    target='_blank'
                    underline="none"
                >
                    <Typography className='py-4' variant='h4' color='primary.title'>
                        Create React App + Vite + Mui + Tailwind
                    </Typography>
                </Link>
            </Box>
            <Modal
                open={false}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modal'
                sx={styles.Modal}
            >
                <Typography color={'primary.title'} className='py-2'>
                    Modal
                </Typography>
            </Modal>
        </Container >
    );
};

export default Home;