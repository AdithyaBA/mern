const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT} in ${process.env.NODE_ENV} mode`);
})