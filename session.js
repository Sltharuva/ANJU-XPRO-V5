//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "session id",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0768501680",
  PASSWORD: 
    process.env.PASSWORD || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUM2MEFpeDRrbHFFMGVsanFrVTNHV2R2aGxiNkMyMlN5UWdMazV5S00zaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjNDNXZkazdEZldqTGxmVStCYmFBOGp6SjUxNm9WMFgvOUNMV1NnVjltbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SkpzMitYcEJMR1c0YmtkbnVoYUdnWlFjUksrNmdqYUQrRUlnNG9Sa0V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWmFTWERUQnAxbzM0Q1lzR3dFR1FCcFNoWlE5a1FFWmhOSGwvMlVOQ1RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9GY09ZVWx3QkgwalZkVWh6bnNNV2JjOEpFQkFEdFNHMG0wTk91cGMrRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFqVzJzUW8rRnM1SzQ4L2xUb2hFd3pKWndsZDd6ZHFyVHRKS0J2eHJ6QTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlwRUZFNW5IVUNuZENxOUxIaVRNeUVybHVRYnMxZ1o5OG5Kd0NxYVJWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVp2eU15dHB2dU5rU0dBd3c4Sy9GVTRaNnJ0NnBXck9BbEcvVWRMR3hGRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNaU1RwaEdQbGh2NHMrTzlHbTV2VWpNNzM3STh3UGNUWnhuaGxReXoyNUZPMmdjZEFZYVRZTDNQY1V2WFJQdVdKTDR4SkQ1ZUhwRlp0N2VLdWZSVGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InMzUEFSQWJabFM2SnAyT1FRMGRzUERqeXZRcW9xWEJYRno1WTN1d0ZYc289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Njg1MDE2ODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODZGQzM3RDUwRDRGMEE2MTBENUZEQTk1MkY3QzNEMTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTg5MTcwM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Njg1MDE2ODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDk1MDVFNTZCRDgzNjcxRDg1QUFFNjA2MTQ1MDlGNTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTg5MTcwM31dLCJuZXh0UHJlS2V5SWQiOjMyLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzIsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVWhicENHT1FRYU8tVmZTU0tMXzFEQSIsInBob25lSWQiOiI5MDNhZTIwYy1lODc5LTQ3M2MtOTk3MC1hNzViZDZiMWQ3YzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTNsM0RJcVRxcTJEbk5CQ3ozQytKVDRWTi9ZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFvbnZFeDBzemxkcU1LekwrcWNTWDQ0RFRGdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNNEZUSFZIMyIsIm1lIjp7ImlkIjoiOTQ3Njg1MDE2ODA6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ0aGFyaWR1IiwibGlkIjoiMjUzMTU0NTQ5NTkyMDc1OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLKzBqVWdRNW8ranhRWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXOXQwbVNrcVlMWDl2WFk5WmM0RTQydDU2cnMvVm9QdUZJZTdFaS9yLzJjPSIsImFjY291bnRTaWduYXR1cmUiOiJ3dHd6ekMvMDRpRnVvQ21uM3NGVUR0YUlqeHBDYlJ2TCt2bFNXN1I4Nmtuakx5VEluanFrZ3I2VGJPbVoyMUdOS3JBYWF5eXN2eXI4c3V1Mjc1SThCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQkRjTmIwd1RyRkwyNDMvRGorcGcwaXZNOTFjVlRBNG9KaWgyWXVJWWVyRXhuVm1OdFBBbnJtdnpEdWNuK1Z5UitvL2dHL3d5ZXZqckUzOVBKTnVuaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2ODUwMTY4MDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ2YmRKa3BLbUMxL2IxMlBXWE9CT05yZWVxN1AxYUQ3aFNIdXhJdjYvOW4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg5MTcwMCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURwRSJ9",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
