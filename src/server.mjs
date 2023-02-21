import SocketClient from './lib/socketClient.mjs';
import express from "express";
import handle from "./lib/handle.mjs";

const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));

app.get('/current', function(req, res) {
    res.status(200).json({data: handle.listCurrent });
});

app.get('/mirror', function(req, res) {
    res.status(200).json({data: handle.listMirror });
});

new SocketClient('reiusdt', 3600000); 
new SocketClient('renusdt', 3601000); 
new SocketClient('zilusdt', 3602000); 
new SocketClient('requsdt', 3603000); 
new SocketClient('rifusdt', 3604000); 
new SocketClient('rlcusdt', 3605000); 
new SocketClient('rndrusdt', 3606000); 
new SocketClient('roseusdt', 3607000); 
new SocketClient('rsrusdt', 3608000); 
new SocketClient('runeusdt', 3609000); 
new SocketClient('rvnusdt', 3610000); 
new SocketClient('sandusdt', 3611000); 
new SocketClient('santosusdt', 3612000); 
new SocketClient('scrtusdt', 3613000); 
new SocketClient('scusdt', 3614000);
new SocketClient('sfpusdt', 3615000); 
new SocketClient('shibusdt', 3616000);  
new SocketClient('sklusdt', 3617000); 
new SocketClient('slpusdt', 3618000); 
new SocketClient('snxusdt', 3619000); 
new SocketClient('solusdt', 3620000); 
new SocketClient('spellusdt', 3621000); 
new SocketClient('steemusdt', 3622000); 
new SocketClient('stgusdt', 3623000); 
new SocketClient('stmxusdt', 3624000); 
new SocketClient('storjusdt', 3625000);
new SocketClient('stptusdt', 3626000); 
new SocketClient('straxusdt', 3627000); 
new SocketClient('stxusdt', 3628000); 
new SocketClient('sunusdt', 3629000); 
new SocketClient('superusdt', 3630000); 
new SocketClient('sushiusdt', 3631000); 
new SocketClient('sxpusdt', 3632000); 
new SocketClient('sysusdt', 3633000); 
new SocketClient('tfuelusdt', 3634000);
new SocketClient('thetausdt', 3635000);
new SocketClient('tkousdt', 3636000); 
new SocketClient('tlmusdt', 3637000); 
new SocketClient('tomousdt', 3638000); 
new SocketClient('zrxusdt', 3639000); 

new SocketClient('trbusdt', 3640000); 
new SocketClient('troyusdt', 3641000); 
new SocketClient('truusdt', 3642000); 
new SocketClient('trxusdt', 3643000); 
new SocketClient('tusdt', 3644000); 
new SocketClient('tvkusdt', 3645000); 
new SocketClient('twtusdt', 3646000); 
new SocketClient('umausdt', 3647000); 
new SocketClient('unfiusdt', 3648000); 
new SocketClient('uniusdt', 3649000); 
new SocketClient('utkusdt', 3650000); 
new SocketClient('vetusdt', 365100); 
new SocketClient('vgxusdt', 3652000); 
new SocketClient('vidtusdt', 3653000);
new SocketClient('viteusdt', 3654000); 
new SocketClient('voxelusdt', 3655000); 
new SocketClient('vthousdt', 3656000); 
new SocketClient('wanusdt', 3657000); 
new SocketClient('wavesusdt', 3658000); 
new SocketClient('waxpusdt', 3659000); 
new SocketClient('wingusdt', 3660000); 
new SocketClient('winusdt', 3661000); 
new SocketClient('wnxmusdt', 3662000); 
new SocketClient('woousdt', 3663000); 
new SocketClient('wrxusdt', 3664000); 
new SocketClient('wtcusdt', 3665000);
new SocketClient('xecusdt', 3666000); 
new SocketClient('xemusdt', 3667000); 
new SocketClient('xlmusdt', 3668000); 
new SocketClient('xmrusdt', 3669000); 
new SocketClient('xnousdt', 3670000); 
new SocketClient('xrpusdt', 3671000); 
new SocketClient('xtzusdt', 3672000); 
new SocketClient('xvgusdt', 3673000); 
new SocketClient('xvsusdt', 3674000);
new SocketClient('yfiiusdt', 3675000);
new SocketClient('yfiusdt', 3676000); 
new SocketClient('yggusdt', 3677000); 
new SocketClient('zecusdt', 3678000); 
new SocketClient('zenusdt', 3679000); 

