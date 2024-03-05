import express from "express";
import multer from "multer";
import apiRoute from "../api/routes/api.route.js";
import apiRouteAuth from "../api/routes/api.route.auth.js";
import apiHistoryRoute from "../api/routes/api.route.history.js";
import apiSportsRoute from "../api/routes/api.route.sports.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 2023;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post("/upload", upload.single("uploaded_file"), function (req, res, next) {
  console.log(req.file, req.body);
  res.send("ok");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", apiRoute);
app.use("/api", apiRouteAuth);
app.use("/api", apiHistoryRoute);
app.use("/api", apiSportsRoute);

// Maneja los errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Maneja específico para conexión rechazada
app.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} está en uso.`);
  } else {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
