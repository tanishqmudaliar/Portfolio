import React, { useState, useEffect } from 'react';
import "../App.css";
import { db } from '../Config/firebase.js';
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import {
    Box,
    Breadcrumbs,
    Card,
    CardContent,
    CardMedia,
    Checkbox,
    Divider,
    FormControlLabel,
    Slider,
    Typography,
} from "@mui/material";
import anime from "../Assets/anime1.png";
import { useNavigate } from 'react-router-dom';

function Portfolio() {
    const [projects, setProjects] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const docRef = (collection(db, "portfolio"));
        const docqRef = query(docRef, orderBy("createdOn", "desc"));
        onSnapshot(docqRef, (snapshot) =>
            setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))),
        )
      });
    
    return (
        <div>
            <Box
                sx={{
                    mt: '10vh',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: 'background.default',
                    height: '90vh',
                }}
            >
                <Box
                    sx={{
                        display: 'flexbox',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        fontFamily: 'Sofia Sans',
                        fontSize: '6.583vw', // 100px
                        textAlign: 'left',
                        width: '40vw',
                        color: '#ffb300',
                    }}
                >
                    Portfolio!
                    <Box
                        sx={{
                            fontSize: '2.37vw', // 36px
                            color: 'text.secondary',
                        }}
                    >
                        Check out some of the projects, I have been working on recently.
                        <Box
                            sx={{
                                mt: 2,
                                fontSize: '1.185vw' , // 18px
                                color: 'text.secondary',
                            }}
                        >
                            I've build a few websites, did some projects for my college, including designing some circuits and PCB's. 
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        fontFamily: 'Sofia Sans',
                        fontSize: '6.583vw', // 100px
                        width: '40vw',
                        color: '#ffb300'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            fontFamily: 'Sofia Sans',
                            fontSize: '18px',
                        }}
                    >
                        <FormControlLabel
                            sx={{ color: 'text.secondary' }}
                            control={<Checkbox defaultChecked sx={{ '&.Mui-checked': {color: '#ffb300'}}}/>}
                            label="Creativity"
                        />
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="text.primary">Home</Typography>
                            <Typography color="text.primary">Portfolio</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Slider defaultValue={40} sx={{ color: '#ffb300', width: '10.145cm' }}/>
                    <iframe
                        title="my_spotify_playlist"
                        style={{border: 0, marginBottom: -45, height: 200}}
                        src="https://open.spotify.com/embed/playlist/43PcDa3cJzvjolJ5iavbWe?utm_source=generator"
                        width="100%"
                    ></iframe>
                    <Card sx={{ 
                        mt: 1,
                        width: '10.145cm',
                     }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={anime}
                        alt="anime"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Anime is hand-drawn and computer-generated animation originating from Japan.
                        Outside of Japan and in English, anime refers specifically to animation produced in Japan.
                        </Typography>
                        </CardContent>
                        </Card>
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    fontSize: '36px',
                    fontFamily: 'Sofia Sans',
                    py: 2,
                    color: 'text.secondary',
                }}
            >
                Some of my projects!
            </Box>
            {!projects &&
                <Box
                    sx={{
                        backgroundColor: 'background.default',
                        fontSize: '22px',
                        fontFamily: 'Sofia Sans',
                        pb: 12,
                        color: 'text.secondary',
                    }}
                >
                    <Divider
                        variant='middle'
                        sx={{
                            mb: 10,
                        }}
                    /> 
                    No projects uploaded yet to be shown.
                </Box>
            }
            {projects && 
                <Box
                    sx={{
                        pb: '5vh',
                        backgroundColor: 'background.default',
                        color: 'text.secondary',
                    }}
                    className="portfolio"
                >
                    {projects && projects?.map((project) => (
                        <div key={project.id} className='p_hover'>
                        <Card
                            onClick={() =>
                                navigate(`/portfolio/${project.id}`)
                            }
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'left',
                                fontFamily: 'Sofia Sans',
                                cursor: 'pointer',
                                borderRadius: '10px',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={project.thumbnail}
                                alt="thumbnail"
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    mx: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        mt: 1.5,
                                        fontSize: '28px',
                                        textAlign: 'left',
                                        width: '50%',
                                    }}
                                >
                                    {project.title}
                                </Box>
                                <Box
                                    sx={{
                                        mt: 1.5,
                                        display: 'grid',
                                        alignItems: 'flex-end',
                                        fontSize: '18px',
                                        textAlign: 'right',
                                        width: '50%',
                                    }}
                                >
                                    <Box>
                                        {project.category}
                                    </Box>
                                </Box>
                            </Box>
                            <Divider
                                variant='middle'
                                sx={{
                                    my: 0.5
                                }}
                            />
                            <Box
                                sx={{
                                    ml: 2,
                                    mb: 1,
                                    fontSize: '15px',
                                }}
                            >
                                {project.date}
                            </Box>
                        </Card>
                        </div>
                    ))}
                </Box>
            }
        </div>
    )
}

export default Portfolio