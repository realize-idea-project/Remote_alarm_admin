import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography } from "@mui/material";

interface Props {}

export const PermanentDrawer: React.FC<Props> = () => {
  const [currentTab, setCurrentTab] = useState("알림 설정");

  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            position: "relative",
            height: "100vh",
          },
        }}
      >
        <Box sx={{ minWidth: 200, maxWidth: 280, width: "30vw" }}>
          <Toolbar />
          <Divider />

          <List sx={{ py: 0 }}>
            {["알림 설정"].map((text) => {
              const isSelected = text === currentTab;

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <AccessTimeIcon
                        sx={{
                          color: isSelected ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: isSelected ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
