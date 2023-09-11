import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { alpha } from "@mui/material";
import {
  GridColDef,
  GridApi,
  GridKeyValue,
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import { ArrowLineRight, Eye } from "phosphor-react";

export default function StudentTabled() {
  const { themeMode } = useSettings();

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const theme = useTheme();

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const mockDataContacts = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, SY 10001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 10001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      city: "New York",
      zipCode: "87281",
      registrarId: 4132513,
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
      city: "New York",
      zipCode: "15551",
      registrarId: 123512,
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
      address: "11122 Welping Ave, Tenting, CD 21321",
      city: "Tenting",
      zipCode: "14215",
      registrarId: 123512,
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
      address: "1234 Canvile Street, Esvazark, NY 10001",
      city: "Esvazark",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
      address: "22215 Super Street, Everting, ZO 515234",
      city: "Evertin",
      zipCode: "51523",
      registrarId: 123512,
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
      address: "4123 Ever Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 512315,
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
      address: "51234 Avery Street, Cantory, ND 212412",
      city: "Colunza",
      zipCode: "111234",
      registrarId: 928397,
    },
    {
      id: 10,
      name: "Enteri Redack",
      email: "enteriredack@gmail.com",
      age: 42,
      phone: "(222)444-5555",
      address: "4123 Easer Blvd, Wentington, AD 142213",
      city: "Esteras",
      zipCode: "44215",
      registrarId: 533215,
    },
    {
      id: 11,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      age: 11,
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      city: "Colunza",
      zipCode: "1234",
      registrarId: 92197,
    },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", pinnable: true },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      minWidth: 180,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      minWidth: 180,
      headerName: "Phone Number",
    },
    {
      field: "email",
      minWidth: 200,
      headerName: "Email",
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 400,
    },
    {
      field: "city",
      headerName: "City",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
    },
    {
      field: "actions",
      filterable: false,
      hideable: false,
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation();

          const api: GridApi = params.api;

          const thisRow: Record<string, GridKeyValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach((c) => {
              console.log(
                (thisRow[c.field] = params.api.getCellValue(params.id, c.field))
              );
              return (thisRow[c.field] = params.api.getCellValue(
                params.id,
                c.field
              ));
            });

          alert(JSON.stringify(thisRow, null, 4));
        };

        return (
          <>
            <Tooltip title="Read Data" placement="bottom">
              <IconButton onClick={onClick}>
                <Eye size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Modify Data" placement="bottom">
              <IconButton onClick={onClick}>
                <ArrowLineRight size={18} />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <Box
      m="10px 0 0 0"
      height="65vh"
      width={"100%"}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color:
            themeMode === "dark"
              ? theme.palette.common.white
              : alpha(`${theme.palette.common.black}`, 0.78),
          width: "2rem",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.paper,
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.background.paper,
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: theme.palette.background.paper,
        },
        "& .MuiCheckbox-root": {
          color: theme.palette.background.paper,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color:
            themeMode === "dark"
              ? theme.palette.common.white
              : alpha(`${theme.palette.common.black}`, 0.78),
        },
      }}
    >
      <DataGrid
        rows={mockDataContacts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 15]}
      />
    </Box>
  );
}
