import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Pannel from "./pannel";
import "./songTabs.css"

export default function SongsTabs() {
  const [value, setValue] = useState("all");
  const [geners, setGeners] = useState([]);

  useEffect(() => {
    const fetchGeneres = async () => {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      setGeners([{ key: "all", label: "All" }, ...response.data.data]);
    };
    fetchGeneres();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(geners);

  return (
    <div className="SongTabs">
      <div className="songsHeading">
        <Typography variant="h5" component="h4" className="heading" sx={{ textAlign: 'left' }}>
          Songs
        </Typography>
      </div>
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
          '.MuiTabs-indicator': {
            backgroundColor: '#1DB954', // Green for the active tab indicator (like Spotify)
          },
          '.MuiTab-root': {
            color: '#FFFFFF', // Default text color for inactive tabs
            '&.Mui-selected': {
              color: '#FFFFFF', // White text color for the selected tab
            },
          },
          // You can also change the background of the entire tab bar if needed
          // backgroundColor: '#000000', // Black background for the tab container
        }}
        >
          {geners.map((a) => {
            return <Tab label={a.label} key={a.key} value={a.key} />;
          })}
        </TabList>
        <Pannel value={value} />
      </TabContext>
    </Box>
    </div>
  );
}
