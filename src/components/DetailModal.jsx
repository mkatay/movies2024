import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useQuery } from '@tanstack/react-query';
import { getData, img_500, noPictureLandscape } from '../utils';
import { CircularProgress } from '@mui/material';
import { Carousel } from './Carousel';
import YouTubeIcon from '@mui/icons-material/YouTube';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection:'column'
};
const spinnerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
}

export const DetailModal=({open,setOpen,id,type})=> {
    
  const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data:dataDetails,isLoading:isLoadingDetails,isError:isErrorDetails}=useQuery({queryKey:['details',urlDetails],queryFn:getData})

  const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data:dataVideos,isLoading:isLoadingVideos,isError:isErrorVideos}= type=='movie' ? useQuery({queryKey:['videos',urlVideos],queryFn:getData}):{}
/*console.log(id,type);
console.log(urlDetails);
console.log(urlVideos);*/
if (isLoadingDetails || isLoadingVideos) 
    return <CircularProgress color="secondary" size="3rem"sx={spinnerStyle}/>

  if (isErrorDetails || isErrorVideos) 
    return <div>Error occurred while fetching data! </div>;
  


console.log(dataDetails);
  //console.log(dataVideos.results);
  
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflowY:'scroll' }}
      >
        <Box sx={style}>
           
               <img style={{width:'100%'}} src={dataDetails.backdrop_path ? img_500+dataDetails.backdrop_path : noPictureLandscape} 
                    alt={dataDetails?.title || dataDetails?.name}   />
       
          {/*<Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>*/}
          <Typography id="modal-modal-description" sx={{ mt: 2,display:'flex',flexDirection:'column',alignItems: 'center'}} > 
                <span><b>{dataDetails?.title || dataDetails?.name}</b>({(dataDetails?.release_date||dataDetails?.first_air_date)||dataDetails?.published_at})</span>
                <span style={{color:'blue'}}><i>{dataDetails?.tagline}</i></span>
                <span className="overview">{dataDetails?.overview}</span>  
          </Typography> 
             <Carousel id={id} type={type}/>
             {dataVideos?.results && dataVideos.results.length>0 && <div>
                    <Button
                      className="video"
                      variant='contained'
                      startIcon={<YouTubeIcon />}
                      color='secondary'
                      target='_blank'
                      href={`https://www.youtube.com/watch?v=${dataVideos?.results[0].key}`}
                    >
                      Watch the trailer
                    </Button>
                </div>
             
            }
        </Box>
     
      </Modal>
    </div>
  );
}
/*

  const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data,status}=useQuery(['details',urlDetails],getData)

  const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data:dataVideos,status:statusVideos}=type=='movie' ? useQuery(['videos',urlVideos],getData):{}



  //console.log(type,id);
//status=='success' && console.log(data);
statusVideos=='success' && console.log(dataVideos?.results[0]);
  return (
    <div >
      <Button onClick={handleOpen} className="single-content" >
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           {status=='success' &&
            <div className="content-modal">
              {/*img  src={data.backdrop_path ? img_500+data.backdrop_path : noPictureLandscape} alt={data?.title || data?.name} />*/
        /*      <div className="lazy-holder">
                <LazyLoadImage
         
                src={data.backdrop_path ? img_500+data.backdrop_path : noPictureLandscape}
                alt={data?.title || data?.name}
               
                placeholderSrc='placeholder.webp'
                effect="blur"
              />
              </div>
              
              <Box sx={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
                <div><b>{data?.title || data?.name}</b>({(data?.release_date||data?.first_air_date)||data?.published_at})</div>
                <div className="tagline"><i>{data.tagline}</i></div>
                <div className="overview">{data.overview}</div>
            </Box>
            </div>
            } 
            <div><Carousel type={type} id={id}/></div>  
            {statusVideos && dataVideos?.results && dataVideos.results.length>0 && <div>
                    <Button
                      className="video"
                      variant='contained'
                      startIcon={<YouTubeIcon />}
                      color='secondary'
                      target='_blank'
                      href={`https://www.youtube.com/watch?v=${dataVideos?.results[0].key}`}
                    >
                      Watch the trailer
                    </Button>
                </div>
             
            }
         
      </Box>
      </Fade>
      */