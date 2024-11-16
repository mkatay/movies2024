import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {img_300} from '../utils'
import { imgUnavailable } from '../utils'
import { motion } from "motion/react"
import { DetailModal } from './DetailModal';


export const SingleContent=({id,poster_path,title,name,media_type,release_date,first_air_date,vote_average})=> {
    const [open, setOpen] = React.useState(false);
    return ( 
        <>
    <Card sx={{ maxWidth: 250 }}>
    <motion.div whileHover={{  scale: 0.95 }}>
      <CardActionArea onClick={()=>setOpen(true)}>
        <CardMedia
          component="img"  
          image={poster_path ? img_300+poster_path : imgUnavailable}
          alt={title||name}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {title||name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary',display:'flex',justifyContent:'space-between' }}>
            <span> {media_type}</span><span>{release_date||first_air_date}</span>
          </Typography>
          <span style={{position:'absolute',top:'0',right:'0',border:'1px solid white',borderRadius:'50%',color:'white',padding:'2px',minWidth:'25px',textAlign:'center'}}>{vote_average}</span>
        </CardContent>
      </CardActionArea>
      </motion.div>
    </Card>
   {open && <DetailModal id={id} setOpen={setOpen} open={open} type={media_type}/>}
    </>
  );
}

