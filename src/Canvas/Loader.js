import { Box } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          fontSize: '10px',
          color: 'grey',
          fontWeight: 800,
        }}
      >
        {progress.toFixed(2)}%
      </Box>
    </Html>
  );
};

export default CanvasLoader;