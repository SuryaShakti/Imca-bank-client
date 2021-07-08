
import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import CropperDialog from '../../../components/cropper/CropperDialog';
import {FormControl, MenuItem, Select} from "@material-ui/core";

const CreateUser = ({show, dismiss, onCropped, onSelected, src, creating, saveClick, name, setName, email, setEmail, phone, setPhone, setAddress, address, dob, setDob, aadhar, setAdhaar, gender, setGender, password, setPassword, image, setSrc }) => {
    const [openCropDialog, setOpenCropDialog] = useState(false);

    return (
        <React.Fragment>
            <Dialog fullWidth maxWidth={'xs'} onClose={dismiss} open={show}>
                <DialogTitle>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant={'h6'}>
                            {'Create New Account'}
                        </Typography>
                        <IconButton onClick={dismiss}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box pb={2} display={'flex'} flexDirection={'column'}>
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Name'}
                            </Typography>
                        </Box>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant={'outlined'}
                            color={'primary'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Email'}
                            </Typography>
                        </Box>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Phone'}
                            </Typography>
                        </Box>
                        <TextField
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Address'}
                            </Typography>
                        </Box>
                        <TextField
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Dob'}
                            </Typography>
                        </Box>
                        <TextField
                            value={dob}
                            type={'date'}
                            onChange={(e) => setDob(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'aadhar number'}
                            </Typography>
                        </Box>
                        <TextField
                            value={aadhar}
                            onChange={(e) => setAdhaar(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Gender'}
                            </Typography>
                        </Box>
                        <FormControl variant="outlined">
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={gender}
                                // defaultValue={1}
                                // displayEmpty
                                onChange={(e) => setGender(e.target.value) }
                            >
                                <MenuItem value={1}>{'Male'}</MenuItem>
                                <MenuItem value={2}>{'Female'}</MenuItem>
                                <MenuItem value={3}>{'Other'}</MenuItem>
                            </Select>
                        </FormControl>
                        <Box mb={2} />
                        <Box width={'100%'} mb={'5px'}>
                            <Typography variant={'caption'}>
                                {'Password to assign'}
                            </Typography>
                        </Box>
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant={'outlined'}
                        />
                        <Box mb={2} />
                        <Button
                            disabled={creating}
                            variant={'contained'}
                            color={'primary'}
                            size={'large'}
                            onClick={saveClick}
                        >
                            {creating ? (
                                <CircularProgress size={15} />
                            ) : (
                                <Typography variant={'button'}>
                                    {'Create'}
                                </Typography>
                            )}
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default CreateUser;
