let handler = async (m, { conn, command, text }) => {
let love = `══════ •⊰✧⊱• ══════ \n𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐧𝐝𝐨 𝐎𝐝𝐢𝐨 😡
el odio entre ${text} y tu es de: ${Math.floor(Math.random() * 100)}%\n══════ •⊰✧⊱• ══════ `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.command = /^(odio)$/i
export default handler
