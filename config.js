const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_27_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImt2aWJtdVVhRkNPdGlzU2xaUEFwY2lmd24yY3ZGdmU2dmlXMTFDcis0Z1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODU4MjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUE4MDcxQ0Q5RTNBMjA0MEZBRTFCQkE3MDU1MzJGNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTg4ODQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODU4MjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODlGRDY2RTAxMjk5MTE0RUUxMkIwREVEOUNFMzMzQTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTg4ODQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODU4MjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUU0MDZGRUEyODcxMUVGOUM4QjE1ODE4MkQxMDYwOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTg4ODQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3ODU4MjYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEU5NEMyRjFBQjdGNTU5M0YyNTAxQzcwRjM3ODhFMzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTg4ODQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRJa1pMMzNLVHFTaDhTZWFzSzlpMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE5MjlmMmYtNzk0OC00ZjQyLWJiNGEtZGRmYTVkNGE2ZThjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMjIyLFxuICAgICAgNjgsXG4gICAgICAxNDIsXG4gICAgICAyNTAsXG4gICAgICAyMTUsXG4gICAgICA4LFxuICAgICAgOTcsXG4gICAgICAxMTUsXG4gICAgICAyMixcbiAgICAgIDI0MyxcbiAgICAgIDI1NSxcbiAgICAgIDI1MixcbiAgICAgIDEyMSxcbiAgICAgIDM1LFxuICAgICAgMjQ2LFxuICAgICAgMTEyLFxuICAgICAgMTA0LFxuICAgICAgMTQ4LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTMxLFxuICAgICAgMjEsXG4gICAgICA5MCxcbiAgICAgIDY5LFxuICAgICAgMTcwLFxuICAgICAgNDMsXG4gICAgICAxNzEsXG4gICAgICAxMTAsXG4gICAgICAxOTksXG4gICAgICAyMDUsXG4gICAgICAxMzMsXG4gICAgICAxOCxcbiAgICAgIDI0NyxcbiAgICAgIDEwMixcbiAgICAgIDE2MixcbiAgICAgIDIxNyxcbiAgICAgIDcsXG4gICAgICA0NixcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBM1AyODQ2OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODU4MjYyNzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYzMjUyMjI3MDUxNjIyOjQyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuG0j8m0yp/Kj1/htI/JtOG0h1/wn6WH4bSH4bSN4bSYyarKgOG0h1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmVDM4TUVFS1dqaUxnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUhWRG9JeXd3QzV6YXp4S2xIL1FycXMrUENGQ0V1VnprSVpEQmVWT0dqTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6elVIWmtMZW4xNjZJeWtKMDVPSTZoem5KM0YvY25JZ0FNS2w4MXZVTGVOWHZTNERmQXhMYVZrNjlSMFlidEJQb2ZjN2o5SmtDaDJRNkd4dThsendCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0UXBDdk1IOXVpdUVUS0cxd0RGZzFsdnFFdXNOTlJuNHdPdjdtenhrUjN3TER0Z0RDUDZGNktuYVUyM0VoSUx6aXVDMkhvZXpiMk0vY1BKaTN3eGRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4NTgyNjI3OjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxODg4NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5pNC5qc29uIjogIntcImtleURhdGFcIjpcInJXVTN2cUZFbEM4TllkVTJtei9rZU1WT3NuaGdlSU8wN3ljZlhWbXVrSk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxNTgxODIzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MTg4ODQyNTkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",
  packname: process.env.PACK_NAME || "Suhail_XMD",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
