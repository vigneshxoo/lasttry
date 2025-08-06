"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookieParser = require("cookie-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
// api/index.ts
const Route_1 = require("./Router/Route");
const MONGO_1 = __importDefault(require("./DATABASE/ConnectDb/MONGO"));
app.use((0, cors_1.default)({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(cookieParser());
app.use(Route_1.Router);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
(0, MONGO_1.default)();
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
exports.default = app;
