import React, { useEffect, useState } from 'react';
import { Box, Card, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { db } from '../Config/firebase.js';
import { onSnapshot, doc, collection } from "firebase/firestore";

function DetailedPortfolio() {
    const { id } = useParams();
    const [document, setDocument] = useState('');
    const [steps, setSteps] = useState('');
    // useEffect(() => {
    //     window.scrollTo(0,0);
    // },[])

    useEffect(() => {
        const ref = doc(db, `portfolio/${id}`)
        onSnapshot(ref, (snapshot) => {
            setDocument({ ...snapshot.data() })
        })
    })

    useEffect(() => {
        onSnapshot(collection(db, `portfolio/${id}/Steps`),
        (snapshot) =>
            setSteps(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    })
    
    return (
        <div>
            <Box
                sx={{
                    pt: '10vh',
                    height: '90vh',
                    backgroundColor: 'background.default',
                    color: 'text.secondary',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '40vw',
                        fontFamily: 'Sofia Sans',
                        fontSize: '56px',
                        textAlign: 'left',
                    }}
                >
                    {document.subTitle}
                    <Divider sx={{ my: 1 }}/>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: '22px',
                                width: '50%',
                                textAlign: 'left',
                                fontWeight: '200',
                            }}
                        >
                            {document.title}
                        </Box>
                        <Box
                            sx={{
                                fontSize: '22px',
                                width: '50%',
                                textAlign: 'right',
                                fontWeight: '200'
                            }}
                        >
                            {document.date}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            fontSize: '22px',
                            fontWeight: '200',
                            mt: 5,
                        }}
                    >
                        {document.subContent}
                    </Box>
                </Box>
                <img className='thumbnail' src={document.thumbnail} alt="thumbnail" />
            </Box>
            <Divider />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flexbox',
                }}
            >
                <img className='content1' src={document.maincontentimage} alt="content" />
            </Box>
            <Divider />
            {steps && steps?.map((step) => (
                <div key={step.id}>
                    <Box
                        sx={{
                            height: 'min-content',
                            backgroundColor: 'background.default',
                            color: 'text.secondary',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            py: '2vw',
                        }}
                    >
                        <Box
                            sx={{
                                fontFamily: 'Sofia Sans',
                                width:'70vw',
                                textAlign: 'left'
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '56px',
                                    mb: 5,
                                }}
                            >
                                {step.title}
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '22px',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html:step.content
                                }}
                            />
                        </Box>
                    </Box>
                </div>
            ))}
        </div>
    )
}

export default DetailedPortfolio