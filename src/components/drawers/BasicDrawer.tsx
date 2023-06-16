import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = "알림 설정";

export const BasicDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer open={isOpen} onClose={onClose}>
        <div>
          <Toolbar />
          <Divider />

          <List sx={{ py: 0 }}>
            {["알림 설정"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ pr: 5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};
