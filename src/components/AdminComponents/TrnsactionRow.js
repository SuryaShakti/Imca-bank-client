import React, {useState} from 'react';
import {useSnackbar} from "notistack";
import { IconButton, TableCell, TableRow} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {withStyles} from "@material-ui/styles";
import ConfirmDialog from "../confirm/ConfirmDialog";
import {deleteAccount} from "../../apis/accounts";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const TransactionRow = ({ each, i, pageLimit, page }) => {

    return (
        <>
            <StyledTableRow key={i}>
                <TableCell align="center">{pageLimit * (page - 1) + (i + 1)}</TableCell>
                <TableCell align="center">{each.user.name ? each.user.name : 'N/A'}</TableCell>
                <TableCell align="center">{each.receiver.name ? each.receiver.name : 'N/A'}</TableCell>
                <TableCell align="center">{each.amount ? each.amount : 'N/A'}</TableCell>
                <TableCell align="center">{each.transactionCode ? each.transactionCode : 'N/A'}</TableCell>
            </StyledTableRow>
        </>
    );
};

export default TransactionRow;