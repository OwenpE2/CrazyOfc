import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘 〙══╮
  ║           *✔︎𝙲𝚁𝙰𝚉𝚈 𝙱𝙾𝚃 ✔*
  ┃─────────⇌••⇋─────────┃
    
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
      *🀄𝑽𝑬𝑹𝑺𝑼𝑺 𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶🀄*
┃─────────⇌••⇋───────┃
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc4_
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc6_
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc8_
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc12_
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc16_
  ᖫ❍ᖭ🎲 _${usedPrefix}Masc24_
  ᖫ❍ᖭ🎲 _${usedPrefix}Ligamasc200_
  ᖫ❍ᖭ🎲 _${usedPrefix}Ligamasc500_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
        *💌𝑽𝑬𝑹𝑺𝑼𝑺 𝑭𝑬𝑴𝑬𝑵𝑰𝑵𝑶💌*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ💕 _${usedPrefix}Fem4_
  ᖫ❍ᖭ💕 _${usedPrefix}Fem6_
  ᖫ❍ᖭ💕 _${usedPrefix}Fem8_
  ᖫ❍ᖭ💞 _${usedPrefix}Fem12_
  ᖫ❍ᖭ💞 _${usedPrefix}Fem16_
  ᖫ❍ᖭ💞 _${usedPrefix}Fem24_
  ᖫ❍ᖭ💞 _${usedPrefix}Ligafem500_
  ᖫ❍ᖭ💞 _${usedPrefix}Ligafem200_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
    *💥𝑳𝑰𝑮𝑨𝑺 𝒀 𝑺𝑪𝑹𝑰𝑴 𝑴𝑰𝑿𝑻𝑨💥*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ👾 _${usedPrefix}LigaMixta200_
  ᖫ❍ᖭ👾 _${usedPrefix}LigaMixta500_
  ᖫ❍ᖭ👾 _${usedPrefix}ScrimMixta_
  ᖫ❍ᖭ👾 _${usedPrefix}Bermuda Mapa
  ᖫ❍ᖭ👾 _${usedPrefix}Purgatorio Mapa
  ᖫ❍ᖭ👾 _${usedPrefix}kalahari Mapa
  ᖫ❍ᖭ👾 _${usedPrefix}Alpes Mapa
  ᖫ❍ᖭ👾 _${usedPrefix}Nexterra Mapa
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Versus|versus)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
