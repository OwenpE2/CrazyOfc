const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*_🐼 𝐂𝐫𝐚𝐳𝐲 𝐁𝐨𝐭 𝐥𝐨𝐬 𝐈𝐧𝐯𝐨𝐜𝐚 𝐏𝐮𝐭𝐱𝐬 🐼_* ${pesan}`;
  let teks = `*➥👑@𝙾𝚠𝚎𝚎𝚗._.001*\n\n ${oi}\n\nː͡ㅤ҉ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 :*
  \n`;
  for (const mem of participants) {
    teks += `┣➥🏖️ 🐼@${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n*𝑨𝒅𝒒𝒖𝒊𝒆𝒓𝒆 𝒕𝒖 𝑪𝒓𝒂𝒛𝒚 𝑩𝒐𝒕 𝒄𝒐𝒏 wa.me/+51942286712*\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|CrazyTodos)$/i;
handler.admin = true;
handler.group = true;
export default handler;
