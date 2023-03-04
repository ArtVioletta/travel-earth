import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import Chip from "@mui/material/Chip";
import {CardItem} from "../../interfaces/CardItem";


export const CardTravels: React.FC<CardItem> = (props) => {
    return (
      <Card className={"card"}>
          <CardMedia
            component="img"
            className={"cardImage"}
            image={props.img}
            alt=""
          />
          <CardContent className={'cardContent'}>
            <div>
            <Stack direction="row" spacing={1} margin={"right"} display={"flex"} sx={{marginBottom: "16px"}}>
              <Chip  style={{color:"crimson" ,  padding:"10px 10px"}} label={props.days}/>
              <Chip  style={{color:"crimson",  padding:"10px 0px"}} label={props.people}/>
              <span style={{color:"crimson" , padding:"10px 0px"}}>{props.date}</span>
            </Stack>
            <Typography>
              {props.nameCountry}
            </Typography>
            <Typography>
              {props.content}
            </Typography>
            </div>
          </CardContent>
      </Card>
    );
  }
