// Sequelize.define}
import db from "../database/db";
// Importamos la conexión a db
import { DataTypes } from "sequelize";

db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModel