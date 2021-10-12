import myServer from './services/server';
import { dbConnection } from './db/mongoDB';
import { initWsServer } from './services/sockets';

const port = process.env.PORT || 8080;
initWsServer(myServer);
dbConnection();
console.log(process.env.FACEBOOK_APP_ID)

myServer.listen(port, () => console.log(`Server up on port ${port}`));