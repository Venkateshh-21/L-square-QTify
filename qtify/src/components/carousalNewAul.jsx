import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css';

export default function CarousalNew ({newAlbums}) {

   
 return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
    >
      {newAlbums.map((a) => {
        return (
          <SwiperSlide key={a.id}>
            <Card sx={{ maxWidth: 159, maxHeight: 232 }}>
              <CardMedia
                className="image"
                sx={{ height: 140 }}
                image={a.image}
                style={{ width: "159px", height: "179px" }}
                title={a.title + " " + a.songs.length + " songs"}
              />
              <CardContent>
                <Chip
                  label={a.follows + " Follows"}
                  style={{ backgroundColor: "#121212", color: "#FFFFFF" }}
                />
                <div></div>
              </CardContent>
            </Card>
             <Typography
                  variant="p"
                  component="h3"
                  style={{ width: "159px",paddingTop:"20px"}}
                >
                  {a.title}
                </Typography>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
