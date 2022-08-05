import { app } from "./Controller/app";
import { useRouter } from "./Router/useRouter";

app.use("/user", useRouter)
