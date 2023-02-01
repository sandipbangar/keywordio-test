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
import "../styles/LeftTableStyle.css";

function createData(campaigns, clicks, cost, conversions, revenue) {
  return {
    campaigns,
    clicks,
    cost,
    conversions,
    revenue
  };
}

const rows = [
  createData("Cosmetics", 712, "USD 4,272", 8, "USD 16,568"),
  createData("Serums", 3961, "USD 27,331", 115, "USD 362,526"),
  createData("Facewash", 9462, "USD 76,831", 123, "USD 266,800"),
  createData("Shampoos", 439, "USD 2,151", 5, "USD 11,029"),
  createData("Conditioners", 1680, "USD 3,864", 49, "USD 175,245"),
  createData("Facewash 2", 4978, "USD 29,370", 189, "USD 623,106"),
  createData("Total", 26510, "USD 1,43,819", 489, "USD 15,73,563")
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
    id: "campaigns",
    numeric: false,
    disablePadding: true,
    label: "Campaigns"
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
    label: "Conversions"
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

export default function LeftTableComp() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("clicks");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    < >
      <div className="box-container" sx={{ width: '100%', mb: 2 }}>
        <TableContainer className="table-container" >
          <Table
            className="table"
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className="table-body">
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow
                      className="table-row"
                      hover
                      tabIndex={-1}
                      key={row.campaigns}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {row.campaigns}
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
