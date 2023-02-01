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
import { visuallyHidden } from "@mui/utils";
import "../styles/RightTableStyle.css"

function createData(group, clicks, cost, conversions, revenue) {
  return {
    group,
    clicks,
    cost,
    conversions,
    revenue
  };
}

const rows = [
  createData("Male", 348, "USD 12,528", 42, "USD 62,118"),
  createData("Female", 692, "USD 24,912", 35, "USD 5,175"),
  createData("Unknown", 105, "USD 3,943", 3, "USD 4,489"),
  createData("Total", "1,145", "USD 41,383", 80, "USD 71,782"),
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
    id: "group",
    numeric: false,
    disablePadding: true,
    label: "Group"
  },
  {
    id: "clicks",
    numeric: true,
    disablePadding: false,
    label: "Clicks"
  },
  {
    id: "cost",
    numeric: false,
    disablePadding: false,
    label: "Cost"
  },
  {
    id: "conversions",
    numeric: true,
    disablePadding: false,
    label: "Conversion"
  },
  {
    id: "revenue",
    numeric: false,
    disablePadding: false,
    label: "Revenue"
  }
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};


export default function RightTableComp() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("clicks");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <>
      <div className="box-container2" sx={{ width: '100%', mb: 2 }}>
        <TableContainer className="table-container2">
          <Table
            className="table2"
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className="table-body2">
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow
                      className="table-row2"
                      hover
                      tabIndex={-1}
                      key={row.group}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {row.group}
                      </TableCell>
                      <TableCell align="right">{row.clicks}</TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      <TableCell align="right">{row.conversions}</TableCell>
                      <TableCell align="right">{row.revenue}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
