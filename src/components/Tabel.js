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

export const Tabel = ({ transactions }) => {
  const handleDownloadReceipt = (transactionId) => {};
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Description
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Transaction ID
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Type
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Card
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Amount
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: "20px" }}>
              Receipt
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{ fontSize: "15px", color: "purple", fontWeight: 600 }}
              >
                {transaction.description}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                {transaction.transactionId}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "15px",
                  color: "Green",
                  fontWeight: 600,
                }}
              >
                {transaction.type}
              </TableCell>
              <TableCell
                sx={{ fontSize: "15px", color: "black", fontWeight: 600 }}
              >
                {transaction.card}
              </TableCell>
              <TableCell sx={{ fontSize: "15px", color: "", fontWeight: 600 }}>
                {transaction.date}
              </TableCell>
              <TableCell
                sx={{ fontSize: "15px", color: "purple", fontWeight: 600 }}
              >
                {transaction.amount}
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
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
