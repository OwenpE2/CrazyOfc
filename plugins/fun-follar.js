const handler = async (m, {conn, usedPrefix, command, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  const user = global.db.data.users[who];
  if (!who) return m.reply(`*✳️ menciona a quien deseas follar*\n\n*📌 ejemplo :*\n${usedPrefix + command} @tag`);


  const abrazo = await conn.reply(m.chat, `@${m.sender.split('@')[0]} 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙵𝙾𝙻𝙻𝙰𝙽𝙳𝙾 𝙳𝚄𝚁𝙾 𝙰 @${who.split('@')[0]} 𝚀𝚄𝙴 𝚁𝙸𝙲𝙾𝙾𝙾 🥵 `, m, {mentions: [who, m.sender]});

  conn.sendMessage(m.chat, {react: {text: '😈', key: abrazo.key}});
};
handler.help = ['follar @user'];
handler.tags = ['fun'];
handler.command = ['follar'];
handler.group = true;
export default handler;
