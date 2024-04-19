/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'red'
  };

// eslint-disable-next-line react/prop-types
function UserModal({ user, show, handleModal }) {
    if (!user) return null;
    return <>
    <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {user.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {user.company.name}
          </Typography>
        </Box>
      </Modal>
    </>
    
}
export default UserModal;