
console.log("Hola Mundo!!!");
import {createServer} from 'http';

const httpServer = createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    let data ='';
    req.on('data', (chunk) => {
        data +=chunk;
        chunkIndex++;
        console.log(chunkIndex);
    });

    req.on('end', () => {
        console.log(data);
        res.end("Resibida colega");
    });    
});

httpServer.listen(5500);

