import React from "react";
import { Content } from "../components/Content";
import { div } from "motion/react-client";

const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false`;

export const Trendings = () => {
   return (
    <div style={{paddingTop:'65px'}}>
      <Content url={urlTrending} name='trendings' type={null}/>
   </div>
  );
};