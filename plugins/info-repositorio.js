import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args, usedPrefix }) => {
   const res = await fetch('https://api.github.com/repos/BrunoSobrino/TheMystic-Bot-MD');
   const json = await res.json();
   let txt = `_*< INFO - REPOSITORIO />*_\n\n`;
      txt += `▢ *Nombre:* ${json?.name || 'CrazyBot.OFC'}\n\n`;
      txt += `▢ *Actualización:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n\n`;
      txt += `▢ *URL:* ${json?.html_url || 'https://github.com/CrazyBoot001/AlacranEdit'}\n\n`;
      txt += `${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues\n\n`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});
};
handler.command = ['script', 'repositorio', 'repo']
export default handler;
