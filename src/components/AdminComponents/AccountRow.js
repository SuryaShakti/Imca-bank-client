import React, {useState} from 'react';
import {useSnackbar} from "notistack";
import {Box, Button, Fade, Menu, MenuItem, TableCell, TableRow, Typography} from "@material-ui/core";
import {MoreHoriz} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const AccountRow = ({ each, i, pageLimit, page, deleteCallback, editCallback }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <>
            <StyledTableRow key={i}>
                <TableCell align="center">{pageLimit * (page - 1) + (i + 1)}</TableCell>
                <TableCell align="center">{each.accountNumber ? each.accountNumber : 'N/A'}</TableCell>
                <TableCell align="center">{each.user.name ? each.user.name : 'N/A'}</TableCell>
                <TableCell align="center">{each && each.accountType === 1 ? 'Savings' : 'Current'}</TableCell>
                <TableCell align="center">{each.balance ? each.balance : 'N/A'}</TableCell>
                <TableCell align="center">{each.branch ? each.branch : 'N/A'}</TableCell>
                {/*<TableCell align="center">*/}
                {/*    <Button*/}
                {/*        color={'primary'}*/}
                {/*        aria-controls="fade-menu"*/}
                {/*        aria-haspopup="true"*/}
                {/*        onClick={() => clickHandler()}*/}
                {/*    >*/}
                {/*        <Typography variant={'button'}>*/}
                {/*            <Translate>{'view'}</Translate>*/}
                {/*        </Typography>*/}
                {/*    </Button>*/}
                {/*</TableCell>*/}
                {/*<TableCell align="center">*/}
                {/*    <Switch*/}
                {/*        checked={status === 1 ? true : false}*/}
                {/*        onChange={handleSwitchChange}*/}
                {/*        color="primary"*/}
                {/*        name="checkedB"*/}
                {/*        inputProps={{ 'aria-label': 'primary checkbox' }}*/}
                {/*    />*/}
                {/*</TableCell>*/}
                <TableCell align="right">
                    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreHoriz />
                    </Button>
                </TableCell>
            </StyledTableRow>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Box p={1}>
                    <MenuItem
                        component={Box}
                        display={'flex'}
                        justifyContent={'center'}
                        // onClick={() => {
                        //     setOpenEdit(true);
                        //     setAnchorEl(null);
                        // }}
                    >
                        <Typography align={'center'} component={Box} px={3}>
                            {'View'}
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        component={Box}
                        display={'flex'}
                        justifyContent={'center'}
                        onClick={() => {
                            setOpenEdit(true);
                            setAnchorEl(null);
                        }}
                    >
                        <Typography align={'center'} component={Box} px={3}>
                            {'edit'}
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        component={Box}
                        display={'flex'}
                        justifyContent={'center'}
                        onClick={() => {
                            setOpenDelete(true);
                            setAnchorEl(null);
                        }}
                    >
                        <Typography align={'center'} component={Box} px={3}>
                            {'delete'}
                        </Typography>
                    </MenuItem>
                </Box>
            </Menu>
        </>
    );
};

export default AccountRow;