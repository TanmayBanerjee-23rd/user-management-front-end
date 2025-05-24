import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import CakeIcon from "@mui/icons-material/Cake";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EditSquareIcon from "@mui/icons-material/EditSquare";

export interface IUserDetails {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: string;
  location: {
    city: string;
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
  };
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

interface IUserDetailedViewProps {
  open: boolean;
  handleClose: () => void;
  userDetails: IUserDetails;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "68%",
  bgcolor: "#FFEAE0BF",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  flexGrow: 1,
  overflow: "scroll",
  "scrollbar-width": "none",
};

export default function UserDetailedView({
  open,
  handleClose,
  userDetails,
}: IUserDetailedViewProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Button sx={{ position: "absolute", right: 20 }}>
              <EditSquareIcon sx={{ color: "black" }} />
            </Button>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 12 }} height={230}>
                <div className="flex-col-center">
                  <Avatar
                    alt={`${userDetails?.name.first} ${userDetails?.name.last}`}
                    src={userDetails?.picture.large}
                    sx={{
                      width: 150,
                      height: 150,
                      ":hover": {
                        scale: 1.1,
                      },
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >{`${userDetails?.name.first} ${userDetails?.name.last}`}</Typography>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    background: `rgba(255, 252, 252, 0.71)`,
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Personal Information
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        {userDetails?.gender === "male" ? (
                          <MaleIcon color="primary" />
                        ) : (
                          <FemaleIcon color="secondary" />
                        )}
                      </div>
                      <div>
                        {userDetails?.gender
                          .charAt(0)
                          .toUpperCase()
                          .concat(userDetails.gender.substring(1))}
                      </div>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <CakeIcon color="warning" />
                      </div>
                      <div>
                        {new Date(userDetails?.dob.date).toLocaleString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <CalendarMonthIcon color="success" />
                      </div>
                      <div>{`${userDetails?.dob.age} years old`}</div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    background: `rgba(255, 252, 252, 0.71)`,
                    borderRadius: 3,
                    height: 160,
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Contact Details
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <PhoneEnabledIcon color="primary" />
                      </div>
                      <div>
                        <a href={`tel:${userDetails?.cell}`}>
                          {userDetails?.cell}
                        </a>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(userDetails.email)}
                        style={{ marginLeft: "1rem" }}
                      >
                        <ContentCopyIcon />
                      </Button>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <EmailIcon color="primary" />
                      </div>
                      <div>
                        <a href={`mailto:${userDetails?.email}`}>
                          {userDetails?.email.trim().length > 23
                            ? `${userDetails?.email.substring(0, 18)}...`
                            : userDetails?.email}
                        </a>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(userDetails.email)}
                        style={{ marginLeft: "1rem" }}
                      >
                        <ContentCopyIcon />
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    background: `rgba(255, 252, 252, 0.71)`,
                    borderRadius: 3,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Registration Information
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <CalendarMonthIcon color="secondary" />
                      </div>
                      <div>
                        {`Registered: ${new Date(
                          userDetails?.registered.date
                        ).toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}`}
                      </div>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <PersonIcon color="secondary" />
                      </div>
                      <div>
                        {`Age at registration: ${userDetails?.registered.age} years`}
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    background: `rgba(255, 252, 252, 0.71)`,
                    borderRadius: 3,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Location Details
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ paddingRight: "0.5rem" }}>
                        <LocationPinIcon color="error" />
                      </div>
                      <div>
                        <div>
                          {`${userDetails?.location.street.number} ${userDetails?.location.street.name}`}
                        </div>
                        <div>
                          {`${userDetails?.location.country}, ${userDetails?.location.postcode}`}
                        </div>
                        <div>
                          {`${userDetails?.location.city}, ${userDetails?.location.state}`}
                        </div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
