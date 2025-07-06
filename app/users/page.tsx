import { getAllUsers } from "@/services/user";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

import Link from "next/link";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export async function generateMetadata() {
  return {
    title: "List of Users",
  };
}

export default async function AllUsers() {
  const users = await getAllUsers();
  console.log(users);
  return (
    <Box>
      <Typography
        variant="h5"
        component="div"
        sx={{ padding: 2, textAlign: "center" }}
      >
        Users Table
      </Typography>
      <TableContainer component={Paper} sx={{ width: "80%", margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>View Deitails</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`}>
                    <ArrowForwardIosIcon fontSize="small" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
