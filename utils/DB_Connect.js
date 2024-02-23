const { default: mongoose, mongo } = require("mongoose")


const DB_Connect = () => {
    if (mongoose.connection.readyState >= 1) return;

    mongoose.connect(process.env.DB_URI);
}

export default DB_Connect;