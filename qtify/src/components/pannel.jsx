import { useState, useEffect } from "react";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Pannel({ value }) {
  const [songs, setSongs] = useState([]);
  const [filtered, setFiltred] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setSongs(response.data);
    };
    fetchSongs();
    const filter = songs.filter((a) => {
      return a.genre.key == value;
    });
    setFiltred(filter);
  }, [value]);
  return (
    <>
      {value == "all" ? (
        <TabPanel key={value} value={value}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {songs.map((a) => {
              return (
                <SwiperSlide>
                  <Card sx={{ maxWidth: 159, maxHeight: 232 }}>
                    <CardMedia
                      className="image"
                      sx={{ height: 140 }}
                      image={a.image}
                      style={{ width: "159px", height: "179px" }}
                      title={a.title}
                    />
                    <CardContent>
                      <Chip
                        label={a.likes + " Likes"}
                        style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
                      />
                      <div></div>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="p"
                    component="h3"
                    style={{ width: "159px", paddingTop: "20px" }}
                  >
                    {a.title}
                  </Typography>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </TabPanel>
      ) : (
        <TabPanel key={value} value={value}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {filtered.map((a) => {
              return (
                <SwiperSlide>
                  <Card sx={{ maxWidth: 159, maxHeight: 232 }}>
                    <CardMedia
                      className="image"
                      sx={{ height: 140 }}
                      image={a.image}
                      style={{ width: "159px", height: "179px" }}
                      title={a.title}
                    />
                    <CardContent>
                      <Chip
                        label={a.likes + " Likes"}
                        style={{
                          backgroundColor: "#121212",
                          color: "#FFFFFF",
                        }}
                      />
                      <div></div>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="p"
                    component="h3"
                    style={{ width: "159px", paddingTop: "20px" }}
                  >
                    {a.title}
                  </Typography>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </TabPanel>
      )}
    </>
  );
}
