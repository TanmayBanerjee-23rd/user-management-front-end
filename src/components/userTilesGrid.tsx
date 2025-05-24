import { CardActions, CardMedia, Container, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import UserDetailedView, { IUserDetails } from "./userDetailedView";

interface ITilesGridProps {
  users: IUserDetails[];
}

const UsersTilesGridView = ({ users }: ITilesGridProps) => {
  const [userDetailsModalOpen, setUserDetailsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUserDetails>();
  const handleUserDetailsModalOpenOrClose = () =>
    setUserDetailsModalOpen(!userDetailsModalOpen);

  return (
    <Container
      sx={{
        marginTop: 10,
        maxWidth: "unset",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 4,
        }}
      >
        {users.map((user) => (
          <Card
            key={user.login.uuid}
            sx={{
              background: `rgba(252, 173, 150, 0.12)`,
            }}
          >
            <CardActionArea
              onClick={() => {
                setSelectedUser(user);
                handleUserDetailsModalOpenOrClose();
              }}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <CardContent
                sx={{
                  height: "45%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography variant="h6" component="div">
                    {user.name.first} {user.name.last}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {user.email}
                  </Typography>
                </div>
                <CardActions
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="flag">
                    <OutlinedFlagIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <UserDetailedView
        open={userDetailsModalOpen}
        handleClose={handleUserDetailsModalOpenOrClose}
        userDetails={selectedUser as IUserDetails}
      />
    </Container>
  );
};

export default UsersTilesGridView;
