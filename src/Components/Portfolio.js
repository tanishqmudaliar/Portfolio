import React, { useState, useEffect } from 'react';
import { db } from '../Config/firebase.js';
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import { Box } from "@mui/material";

function Portfolio() {
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [miniTitle, setMiniTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    useEffect(() => {
        const docRef = doc(db, `portfolio/WCOomM7nNlJoYv8PoTKW`)
        onSnapshot(docRef, (doc) => {
          setAuthor(doc.data().Author)
          setDate(doc.data().Date)
          setMiniTitle(doc.data().Mini_Title)
          setThumbnail(doc.data().Thumbnail)
          setTitle(doc.data().Title)
          setContent(doc.data().Content)
        })
      }, []);
    return (
        <div>
            <Box
                sx={{
                    my: '15vh',
                }}
            >
                {title}
                {author}
                {date}
                {miniTitle}
                {thumbnail}
                {content}
            </Box>
        </div>
    )
}

export default Portfolio