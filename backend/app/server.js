import express from "express";
import multer from "multer";
import route from "../routes/route.js";
import apiRoute from "../api/routes/api.route.js";
import apiRouteAuth from "../api/routes/api.route.auth.js";
import cors from "cors";

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({storage});
app.post("/upload", upload.single("uploaded_file"), function (req, res, next) {
  // console.log(req.body);
  // console.log(req.files);
  console.log(req.file, req.body);
  res.send("ok")
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(route);
app.use("/api", apiRoute);
app.use("/api", apiRouteAuth);

app.listen(2023);
