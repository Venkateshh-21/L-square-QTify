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
import CarousalTop from "./carousalTopAul";

export default function Albums() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [toggle,setToggle]= useState(false)
  console.log(topAlbums)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbums(response.data);
    };
    fetchData();
  }, []);
  const handleToggle= ()=>{
    setToggle(!toggle)
  }
  
  return (
    <div className="topAlbums">
    
      <div  className="albums"style={{ paddingLeft: "50px", paddingRight: "50px",paddingBottom:"50px" }}>
        <Typography variant="h5" component="h4" className="heading">
          Top Albums
        </Typography>
       
        <Button id="collapse" onClick={handleToggle} >{toggle ? "Collapse":"Change View"}</Button>
      </div>
     {toggle ? <Grid className="grid"
        style={{ paddingLeft: "50px" }}
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 7,xl:12 }}
      >
        {topAlbums.map((a) => {
          return (
            <>
              <Grid className="gridItem">
                <Stack direction={"column"} key={a.id}>
                  <Card sx={{ maxWidth: 200, maxHeight: 232 }}>
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
                  style={{ width: "159px",paddingTop:"20px"}}
                >
                  {a.title}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
      :<CarousalTop TopAlbums={topAlbums}/>}
    </div>
  );
}
