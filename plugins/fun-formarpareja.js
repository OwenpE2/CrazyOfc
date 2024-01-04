const handler = async (m, {conn, usedPrefix, command, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  const user = global.db.data.users[who];
  if (!who) return m.reply(`*✳️ menciona con quien deseas casarte *\n\n*📌 ejemplo :*\n${usedPrefix + command} @tag`);

  𝙼𝙸 𝙿𝙰𝚁𝙴𝙹𝙰 𝙴𝚂 𝚈 𝙼𝙴 𝙲𝙰𝚂𝙾 💍 𝙲𝙾𝙽 @${who.split('@')[0]}𝙷𝙰𝙲𝙴𝙽 𝚄𝙽𝙰 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💓*`, m, {mentions: [who, m.sender]});

  conn.sendMessage(m.chat, {react: {text: '😍'}});
};
handler.help = ['formarpareja @user'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
