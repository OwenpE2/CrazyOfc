import util from 'util';
import path from 'path';
const user = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata, command, conn, participants}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  const b = ps.getRandom();
  const c = ps.getRandom();
  const d = ps.getRandom();
  const e = ps.getRandom();
  const f = ps.getRandom();
  const g = ps.getRandom();
  const h = ps.getRandom();
  const i = ps.getRandom();
  const j = ps.getRandom();

  if (command == 'topchocolatada') {
    const vn = './media/jojo-feliz-navidad.mp3';
    const top = `*🎅 TOP 10 CHOCOLATADA + PANETON 🎁*
    
🎄.- ${user(a)} *🍫☕🍞*
🎄.- ${user(b)} *🍫☕🍞*
🎄.- ${user(c)} *🍫☕🍞*
🎄.- ${user(d)} *🍫☕🍞*
🎄.- ${user(e)} *🍫☕🍞*
🎄.- ${user(f)} *🍫☕🍞*
🎄.- ${user(g)} *🍫☕🍞*
🎄.- ${user(h)} *🍫☕🍞*
🎄.- ${user(i)} *🍫☕🍞*
🎄.-${user(j)} *🍫☕🍞*`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }
  }
handler.help = handler.command = ['topchocolatada'];
handler.tags = ['games'];
handler.group = true;
export default handler;
