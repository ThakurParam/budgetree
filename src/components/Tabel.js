import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
// import { makeStyles } from "@mui/system";
// const useStyles = makeStyles((theme) => ({
//   receiptButton: {
//     color: theme.palette.primary.main,
//   },
// }));
export const Tabel = ({ transactions }) => {
  // const classes = useStyles();
  

  const handleDownloadReceipt = (transactionId) => {};
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Card</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Receipt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.card}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  // className={classes.receiptButton}
                  onClick={() =>
                    handleDownloadReceipt(transaction.transactionId)
                  }
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
