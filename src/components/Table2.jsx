import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import "../styles/ReusableTableStyle.css"

function createData(name, clicks, cost, conversion, revenue) {
  return {
    name,
    clicks,
    cost,
    conversion,
    revenue,
  };
}

const rows = [
  createData("Male", 348, "12528", 42, "62118"),
  createData("Female", 692, "24912", 35, "5175"),
  createData("Unknown", 105, "3934", 3, "4489"),
  createData("Total", 1145, "41383", 80, "71782"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Group",
  },
  {
    id: "clicks",
    numeric: true,
    disablePadding: false,
    label: "Clicks",
  },
  {
    id: "cost",
    numeric: true,
    disablePadding: false,
    label: "Cost (USD)",
  },
  {
    id: "conversion",
    numeric: true,
    disablePadding: false,
    label: "Conversions",
  },
  {
    id: "revenue",
    numeric: true,
    disablePadding: false,
    label: "Revenue (USD)",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function Table2() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("clicks");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box className="box-container">
      <Paper className="paper">
        <Typography className="ad-insights">Ad Insights</Typography>
        <TableContainer className="table-container">
          <Table className="table" aria-labelledby="tableTitle">
            <EnhancedTableHead
              className="table-head"
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className="table-body">
              {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className="table-row"
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        className="table-cell"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.clicks}</TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      <TableCell align="right">{row.conversion}</TableCell>
                      <TableCell align="right">{row.revenue}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
