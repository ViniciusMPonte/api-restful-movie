import mongoose from "mongoose"
import config from "config"
import Logger from "./logger"

async function connect() {
  const dbURI = config.get<string>("dbURI")

  try {
    await mongoose.connect(dbURI)
    Logger.info("Conectado ao banco de dados!")
  } catch (error) {   
    Logger.error("Não foi possivel conectar!")
    Logger.error(`Erro: ${error}`)
    process.exit(1)
  }
}

export default connect
