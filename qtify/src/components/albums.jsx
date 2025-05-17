import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Album.css"

export default function Albums() {
  const [TopAlbums, setTopAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbums(response.data);
    };
    fetchData();
  }, []);
  console.log(TopAlbums);
  return (
    <div className="topAlbums">
    
      <div  className="albums"style={{ paddingLeft: "10px", paddingBottom: "50px" }}>
        <Typography variant="h5" component="h4" className="heading">
          Top Albums
        </Typography>
       
        <Button id="collapse">Collapse</Button>
      </div>
      <Grid className="grid"
        style={{ paddingLeft: "50px" }}
        container
        rowSpacing={7}
        columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 4,xl:10 }}
      >
        {TopAlbums.map((a) => {
          return (
            <>
              <Grid className="gridItem">
                <Stack direction={"column"} key={a.id}>
                  <Card sx={{ maxWidth: 159, maxHeight: 232 }}>
                    <CardMedia
                      className="image"
                      sx={{ height: 140 }}
                      image={a.image}
                      style={{ width: "159px", height: "179px" }}
                      title={a.title+" "+a.songs.length+" Songs"}
                    />
                    <CardContent>
                      <Chip
                        label={a.follows + " Follows"}
                        style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
                      />
                      <div></div>
                    </CardContent>
                  </Card>
                </Stack>
                <Typography
                  variant="p"
                  component="h3"
                  style={{ width: "159px" }}
                >
                  {a.title}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}
