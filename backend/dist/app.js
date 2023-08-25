"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
// Import API Routes
const shipmentRoutes_1 = __importDefault(require("./routes/shipmentRoutes"));
// Use Enviroment Variables
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Parse JSON 
app.use(express_1.default.json());
// Create connection with database
(0, ormconfig_1.default)();
// Fetching API from the routes
app.use("/shipments", shipmentRoutes_1.default);
const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map