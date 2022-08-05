import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/", (req:Request, res: Response) => {
    res.send("Está funcionando")
})

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is runnig in http://localhost ${address.port}`)
    } else {
        console.error(`Failura upon starting server`)
    }
})


