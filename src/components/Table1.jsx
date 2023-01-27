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
  createData("Cosmetics", 712, "4272", 8, "16568"),
  createData("Serums", 3961, "27331", 115, "362526"),
  createData("Facewash", 9462, "76831", 123, "226800"),
  createData("Shampoos", 439, "2151", 5, "11029"),
  createData("Conditioners", 1680, "3864", 49, "175245"),
  createData("Facewash 2", 4978, "29370", 189, "623106"),
  createData("Total", 26510, "143819", 489, "1573563"),
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
    label: "Campaigns",
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

export default function ReusableTable() {
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
