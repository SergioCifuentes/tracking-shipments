"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/*const app = express();
dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
  });
  
  const connectToDB = async () => {
    try {
      await pool.connect();
    } catch (err) {
      console.log(err);
    }
  };
  connectToDB();

  
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

AppDataSource.initialize()
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
connectToDB();
class App {
  public app: express.Application;
  public port: number;
  public connection: Connection; // TypeORM connection to the database

  // The constructor receives an array with instances of the controllers for the application and an integer to designate the port number.
  constructor(controllers: any[], port: number) {
      this.app = express();
      this.port = port;
      this.initializeModels();
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
  }

  private async initializeModels() {
      const connection = await createConnection();
      if (connection === undefined) { throw new Error('Error connecting to database, connection undefined'); } // In case the connection failed, the app stops.
      connection.synchronize(); // this updates the database schema to match the models' definitions
      this.connection = connection; // Store the connection object in the class instance.
  }

  // Here we can add all the global middlewares for our application. (Those that will work across every contoller)
  private initializeMiddlewares() {
      this.app.use(express.json());
  }
  
  private initializeControllers(controllers: any[]) {
      controllers.forEach((controller) => {
          this.app.use('/', controller.router);
      });
  }

  // Boots the application
  public listen() {
      this.app.listen(this.port, () => {
          console.log(`Server running on port ${this.port}`);
      });
  }
}
*/
// AppDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err)
//     })
// // create and setup express app
// const app = express()
// app.use(express.json())
// // register routes
// app.get("/shipments", async function (req: Request, res: Response) {
//     const users = await AppDataSource.getRepository(Shipment).find()
//     res.json(users)
// })
// app.post("/shipments", async function (req: Request, res: Response) {
//     const user = await AppDataSource.getRepository(Shipment).create(req.body)
//     const results = await AppDataSource.getRepository(Shipment).save(user)
//     return res.send(results)
// })
// // start express server
// app.listen(5000)
// export default app;
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