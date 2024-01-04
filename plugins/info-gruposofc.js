const handler = async (m, {conn, usedPrefix}) => {
  const doc = [''];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝙳𝙴𝙹𝙰𝚁𝙼𝙴 𝙵𝙾𝙻𝙻𝙾𝚆 𝙴𝙽 𝙼I 𝙸𝙶 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻 𝙱𝚈 𝙲𝚁𝙰𝚉𝚈 𝙱𝙾𝚃😈 *

*➤ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼👹 *
*1.-* https://instagram.com/oween._.001?igshid=MzMyNGUyNmU2YQ==

`.trim();
  const buttonMessage= {
    'document': {url: `https://instagram.com/oween._.001?igshid=MzMyNGUyNmU2YQ==`},
    'mimetype': `application/${document}`,
    'fileName': `「  @𝙾𝚆𝙴𝙴𝙽._.001 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://instagram.com/oween._.001?igshid=MzMyNGUyNmU2YQ==',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://instagram.com/oween._.001?igshid=MzMyNGUyNmU2YQ=='}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
