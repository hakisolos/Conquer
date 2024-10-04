//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0g5SnZHVFhSSWt5R3FRaFpaL2pBWEh4RWtyYWdBRUtPdVBkWGErVWVsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXNlbzkrRjlFMjMwcDA4aDl1YzdpYjZkS3BGYnN1ekRYalBNQTlYZDF3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TS9hRExRWXdWazZjSzI1L1ZwZnI5Z0NySDlEMTQ2d2V3TGlTdVB4cUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCM0pyTzdGUGtFTHIxRHhFSHRJWnBid3NFU2ZwcUFMV25xSmdVSlJRMlRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhBZjlXcXRhRUd2NzAyUEIwRVVNSGlhQStQT3M1eHd3eHZseExsS3RubkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikhxd1kwWXRxRFVHSXhTRTRvb1lwcUFReEdWQ2pCN3NKSmVITkE5YlNwU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xwOFArNzB5eE1ScXRTRHBnN25EYWp2emt5NTZUV2pFNlpBR3FEVFRGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHA1RHdwNGhHWC85MHpLYWdtMzZBNlR2cndvSitUK2xlenN2bVhScnRHMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZrbm9BeDBmQzgxczNueElOc3loTGIzZVdwbHE2emEyVE1WU1lPeE9lUUE0YXlyd1Vwd1VmalZEZlFyQlVMMjdOVVBGdXRGVzdmMnhsUGJZcm80eEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJnZGZUaHZvWFNWZGttZkY2eDE2RE5ITlUvMC9JdTE2VFI0Z0ZjNjgxdXM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxODk4NjIxNDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzUyQjc0RDhBRThDNDM2QjgzM0QyNEE1ODY5QjIwMjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODA3OTkyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE4OTg2MjE0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MjAyNzdFQUIzOUEyNDU4RkVCQ0RCNkQ0MDI5RDA1RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MDc5OTIwfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXY3NLNm94VFRYcTRGY0x0dURjUE1RIiwicGhvbmVJZCI6ImIzYzcwMmQ1LTMxM2UtNDhkZi05Y2U3LWE5ZDNkZjY5Y2I4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZnpOcHZ6VndQQkpKRlVQQ0dKNmF0RmFIYkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmY1RW80aVNqV2lPamhvUUl2UlY3VXMvQUZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFaNTRERjUyIiwibWUiOnsiaWQiOiIyMzQ4MTg5ODYyMTQ1OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVl9DZWUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xQZjRza0hFSi9RZ2JnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZxSFhieTQ0Zm40ZjJiZ1VBZkphK05hWXpKdi93K0U5RzArTGNXbjZxaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFSRzIrWjFScDNUdUlsUDRHVTNXZlptZmdVc1RZcGUvc3RYWlVsZUNIQXFWWmpKeHNrQmNDVHNpUFhjSlQ5MGcwRjdCd2xXOHQ2V3U2RXRBYnk3MkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwTUYzL3l0c0R4K1JsL2lwc0ZycWswb1dmdlJQR1FCUXJhRDUvTUZWWkZraVoxVWxKTExXVUZaamkvS256Q21rak9BK3p3bVl0STdnNXFNbm9CQlRCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxODk4NjIxNDU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWYWgxMjh1T0g1K0g5bTRGQUh5V3ZqV21NeWIvOFBoUFJ0UGkzRnArcW9hIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MDc5OTE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9GdSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
