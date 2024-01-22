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
import { Box } from "@mui/system";

export const Tabel = ({ transactions }) => {
  const handleDownloadReceipt = (transactionId) => {};
  return (
    <Box sx={{ bgcolor: "white", p: 2, borderRadius: "30px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: " #11409b ",
                pb: 4,
              }}
            >
              Description
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: " #11409b ",
                pb: 4,
              }}
            >
              Transaction ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: " #11409b ",
                pb: 4,
              }}
            >
              Type
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: "  #11409b",
                pb: 4,
              }}
            >
              Card
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: "#11409b",
                pb: 4,
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: "#11409b ",
                pb: 4,
              }}
            >
              Amount
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                color: "#11409b ",
                pb: 4,
              }}
            >
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
                  sx={{
                    borderRadius: "40px",
                    color: "#123288",
                    border: "2px solid #123288",
                  }}
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
    </Box>
  );
};
