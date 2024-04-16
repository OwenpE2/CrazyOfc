import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
    const str = 
`╭═══〘 ❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎❄︎ 〙══╮
          𖦹 *𝐓𝐡𝐞 𝐂𝐫𝐚𝐳𝐲 - 𝐁𝐨𝐭* 𖦹
 ────────⇌••⇋────────
         ➤ *𝑯𝒐𝒍𝒂, ${taguser}*
 ────────⇌••⇋────────

┏━━━═══⊰⊱ ⬛ ⊰⊱═════━━┓
         *🎧 𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒 🎧*
   ────────⇌••⇋───────
✎ - 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾
➥ᖫ❍ᖭ🔊 _Quien es tu sempai botsito 7w7_
➥ᖫ❍ᖭ🔊 _Te diagnostico con gay_
➥ᖫ❍ᖭ🔊 _A nadie le importa_
➥ᖫ❍ᖭ🔊 _Vivan los novios_
➥ᖫ❍ᖭ🔊 _Feliz cumpleaños_
➥ᖫ❍ᖭ🔊 _Noche de paz_
➥ᖫ❍ᖭ🔊 _Buenos dias_
➥ᖫ❍ᖭ🔊 _Buen dia_
➥ᖫ❍ᖭ🔊 _Bienvenido_
➥ᖫ❍ᖭ🔊 _Buenos tardes_
➥ᖫ❍ᖭ🔊 _Buenos noches_
➥ᖫ❍ᖭ🔊 _Bien pensado woody_
➥ᖫ❍ᖭ🔊 _Audio hentai_
➥ᖫ❍ᖭ🔊 _Dios esta aqui_
➥ᖫ❍ᖭ🔊 _Summer time_
➥ᖫ❍ᖭ🔊 _Detector de marica_
➥ᖫ❍ᖭ🔊 _chipi chapa_
➥ᖫ❍ᖭ🔊 _Droga a la llama_
➥ᖫ❍ᖭ🔊 _Y se marcho_
➥ᖫ❍ᖭ🔊 _Chica lgante_
➥ᖫ❍ᖭ🔊 _Elmo sabe donde vives_
➥ᖫ❍ᖭ🔊 _Esta Zzzz_
➥ᖫ❍ᖭ🔊 _Mi primera chamba_
➥ᖫ❍ᖭ🔊 _Que onda_
➥ᖫ❍ᖭ🔊 _Flash_
➥ᖫ❍ᖭ🔊 _fino señores_
➥ᖫ❍ᖭ🔊 _traiganle una falda_
➥ᖫ❍ᖭ🔊 _En caso de una investigacion_
➥ᖫ❍ᖭ🔊 _Callate down_
➥ᖫ❍ᖭ🔊 _Grupo frontera_
➥ᖫ❍ᖭ🔊 _Estoy cansado jefe_
➥ᖫ❍ᖭ🔊 _Entrada epica al chat_
➥ᖫ❍ᖭ🔊 _Holis_
➥ᖫ❍ᖭ🔊 _Vete a la vrg_
➥ᖫ❍ᖭ🔊 _Pasa pack Bot_
➥ᖫ❍ᖭ🔊 _Atencion grupo_
➥ᖫ❍ᖭ🔊 _Marica quien_
➥ᖫ❍ᖭ🔊 _Murio el grupo_
➥ᖫ❍ᖭ🔊 _Nico nico nii_
➥ᖫ❍ᖭ🔊 _Oh me vengo_
➥ᖫ❍ᖭ🔊 _Y este quien es_
➥ᖫ❍ᖭ🔊 _tio que rico_
➥ᖫ❍ᖭ🔊 _Me anda buscando anonymous_
➥ᖫ❍ᖭ🔊 _Baneado_
➥ᖫ❍ᖭ🔊 _Jere klein_
➥ᖫ❍ᖭ🔊 _Aparatos_
➥ᖫ❍ᖭ🔊 _mapache_
➥ᖫ❍ᖭ🔊 _Omaiga_
➥ᖫ❍ᖭ🔊 _Barbie_
➥ᖫ❍ᖭ🔊 _Snoop dogg_
➥ᖫ❍ᖭ🔊 _Sexo_
➥ᖫ❍ᖭ🔊 _Joder_
➥ᖫ❍ᖭ🔊 _Hola_
➥ᖫ❍ᖭ🔊 _Vete a la verga_
➥ᖫ❍ᖭ🔊 _Se estan riendo de mi_
➥ᖫ❍ᖭ🔊 _Verdad que te engane_
➥ᖫ❍ᖭ🔊 _Patito patito_
➥ᖫ❍ᖭ🔊 _Nyanpasu_
➥ᖫ❍ᖭ🔊 _Te amo_
➥ᖫ❍ᖭ🔊 _Yamete_
➥ᖫ❍ᖭ🔊 _Banate_
➥ᖫ❍ᖭ🔊 _No digas eso papu_
➥ᖫ❍ᖭ🔊 _No pedi tu opinion_
➥ᖫ❍ᖭ🔊 _feliz navidad_
➥ᖫ❍ᖭ🔊 _Es puto_
➥ᖫ❍ᖭ🔊 _La biblia_
➥ᖫ❍ᖭ🔊 _pipipipi_
➥ᖫ❍ᖭ🔊 _Usted esta detenido_
➥ᖫ❍ᖭ🔊 _Onichan_
➥ᖫ❍ᖭ🔊 _Mierda de Bot_
➥ᖫ❍ᖭ🔊 _Free Fire_
➥ᖫ❍ᖭ🔊 _Siuuu_
➥ᖫ❍ᖭ🔊 _Epico_
➥ᖫ❍ᖭ🔊 _Shitpost_
➥ᖫ❍ᖭ🔊 _Rawr_
➥ᖫ❍ᖭ🔊 _UwU_
➥ᖫ❍ᖭ🔊 _:c_
➥ᖫ❍ᖭ🔊 _a_
┣═════⊰⊱ ⬛ ⊰⊱══════┛`.trim();
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
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
