import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { ArticleMedium, Hash, X } from "phosphor-react";
import { useForm } from "react-hook-form";

export default function StudentForms({ handleDrawerClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const theme = useTheme();

  function onSubmit(data: any) {
    console.log(data);
    reset();
  }

  // const Selects = forwardRef(({   name,
  //   label,
  //   control,
  //   defaultValue,
  //   children,
  //   ...props }: any) => {
  //     const labelId = `${name}-label`;

  //     return (
  //       <FormControl sx={{ m: 1, minWidth: 120 }}>
  //       <InputLabel id={labelid}>
  //         {label}
  //       </InputLabel>
  //       <Select
  //         labelId="demo-simple-select-required-label"
  //         id="demo-simple-select-required"
  //         label="Age"
  //         {...register("gender")}
  //       >
  //         <MenuItem value={"Female"}>Female</MenuItem>
  //         <MenuItem value={"Male"}>Male</MenuItem>
  //         <MenuItem value={"Not prefer to say"}>
  //           Not prefer to say
  //         </MenuItem>
  //       </Select>
  //     </FormControl>
  //     )
  //   };

  // const ReactHookFormSelect = ({
  //   name,
  //   label,
  //   control,
  //   defaultValue,
  //   children,
  //   ...props
  // }: any) => {
  //   const labelId = `${name}-label`;
  //   return (
  //     <FormControl {...props}>
  //       <InputLabel id={labelId}>{label}</InputLabel>
  //       <Controller
  //         render={() => (
  //           <Select labelId={labelId} label={label}>
  //             {children}
  //           </Select>
  //         )}
  //         name={name}
  //         control={control}
  //         defaultValue={defaultValue}
  //       />
  //     </FormControl>
  //   );
  // };

  return (
    <>
      <Stack sx={{ position: "relative" }}>
        <Stack
          direction="column"
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: 123123,
          }}
        >
          <Stack
            p={1}
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          >
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                width: "4%",
              }}
            >
              <X size={20} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            p={2}
            sx={{
              backgroundColor: alpha(
                `${theme.palette.background.default}`,
                0.4
              ),
            }}
          >
            <Typography variant="h6">Create Student</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 200 }}>
              Fill out the fields
            </Typography>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              margin: "9rem auto",
              justifyContent: "flex-start",
              width: "80%",
              maxWidth: "100%",
              zIndex: -11,
            }}
          >
            <Stack direction="column" spacing={5} p={0.5}>
              <TextField
                error={errors.firstName ? true : false}
                id="filled-error-helper-text"
                label="First Name*"
                helperText={
                  errors.firstName?.type === "required"
                    ? "This field is required"
                    : errors.firstName?.type === "minLength"
                    ? "This field must be atleast 2 characters long"
                    : null
                }
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {<ArticleMedium />}
                    </InputAdornment>
                  ),
                }}
                {...register("firstName", { required: true, minLength: 2 })}
              />
              <TextField
                error={errors.middleName ? true : false}
                id="filled-error-helper-text"
                label="Middle Name*"
                helperText={
                  errors.middleName?.type === "required"
                    ? "This field is required"
                    : errors.middleName?.type === "minLength"
                    ? "This field must be atleast 2 characters long"
                    : null
                }
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {<ArticleMedium />}
                    </InputAdornment>
                  ),
                }}
                {...register("middleName", { required: true, minLength: 2 })}
              />
              <TextField
                error={errors.firstName ? true : false}
                id="filled-error-helper-text"
                label="Last Name*"
                helperText={
                  errors.lastName?.type === "required"
                    ? "This field is required"
                    : errors.firstName?.type === "minLength"
                    ? "This field must be atleast 2 characters long"
                    : null
                }
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {<ArticleMedium />}
                    </InputAdornment>
                  ),
                }}
                {...register("lastName", { required: true, minLength: 2 })}
              />
              <TextField
                error={errors.age ? true : false}
                label="Age"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">{<Hash />}</InputAdornment>
                  ),
                }}
                helperText={errors.age?.message as string}
                {...register("age", {
                  // pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                })}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Gender
                </InputLabel>
                <Select
                  defaultValue={""}
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Age"
                  {...register("gender")}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Not prefer to say"}>
                    Not prefer to say
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                error={errors.description ? true : false}
                label="Description*"
                variant="filled"
                multiline
                helperText={
                  errors.description
                    ? "This field must be atleast 10 characters long"
                    : null
                }
                {...register("description", { minLength: 10 })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {<ArticleMedium />}
                    </InputAdornment>
                  ),
                }}
                id="fullWidth"
              />{" "}
            </Stack>
          </Box>
          <Stack
            spacing={3}
            sx={{
              position: "fixed",
              width: "100%",
              bottom: 0,
              zIndex: 1111,
            }}
          >
            <Stack
              p={2}
              direction="row"
              sx={{
                backgroundColor: theme.palette.background.default,
              }}
              spacing={2}
            >
              <button type="submit">Create</button>
              <Button variant={"outlined"} onClick={() => reset()}>
                Reset
              </Button>
              <Button variant="contained">Create and Exit</Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </>
  );
}
