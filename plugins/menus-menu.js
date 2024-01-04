import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = 
` ╭═══〘 𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘 〙══╮
  ║           *✔︎𝙲𝚁𝙰𝚉𝚈 𝙱𝙾𝚃 ✔*
  ┃─────────⇌••⇋─────────┃
     🔯 *Creador: Jona*
     🔯 *Ig Del Owner: @oween._.001*
     🔯 *Adquerir Bot:* +51942286712
     🔯 *Yape:* +51942286712
     🔯 *Fecha: ${date}*
 ┃──────────⇌••⇋───────┃
  ༄ 🐼 *Nivel:* ${level}
  ༄ 🐼 *Experiencia:* ${exp}
  ༄ 🐼 *Rango:* *${role}*
  ༄ 🐼 *Diamantes:* ${limit}
  ༄ 🐼 *CrazyCoins:* ${money}
  ༄ 🐼 *Tokens:* ${joincount}
  ༄ 🐼 *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}
╰═══╡𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘𖣘╞═══╯

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓ 
  *✔𝑴𝑬𝑵𝑼𝑺 𝑨𝑫𝑰𝑪𝑰𝑶𝑵𝑨𝑳𝑬𝑺✔*
┃─────────⇌••⇋───────┃
  ᖫ❍ᖭ🔊 _${usedPrefix}menuaudios_
  ᖫ❍ᖭ🔞 _${usedPrefix}labiblia_
  ᖫ❍ᖭ🕹️ _${usedPrefix}Versus_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
    *📌𝑪𝑴𝑫𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻📌*
┃─────────⇌••⇋───────┃
  ᖫ❍ᖭ🃏 _${usedPrefix}terminosycondiciones_
  ᖫ❍ᖭ🃏 _${usedPrefix}grupos_
  ᖫ❍ᖭ🃏 _${usedPrefix}estado_
  ᖫ❍ᖭ🃏 _${usedPrefix}infobot_
  ᖫ❍ᖭ🃏 _${usedPrefix}speedtest_
  ᖫ❍ᖭ🃏 _${usedPrefix}donar_
  ᖫ❍ᖭ🃏 _${usedPrefix}owner_
  ᖫ❍ᖭ🃏 _${usedPrefix}reporte *<txt>*_
  ᖫ❍ᖭ🃏 _${usedPrefix}join *<wagp_url>*_
  ᖫ❍ᖭ🃏 _${usedPrefix}fixmsgespera_
  ᖫ❍ᖭ🃏 _bot_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable restrict_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable restrict_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable autoread_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable autoread_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable antispam_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable antispam_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable anticall_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable anticall_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable modoia_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable modoia_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable audios_bot_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable audios_bot_
  ᖫ❍ᖭ🃏 _${usedPrefix}enable antiprivado_
  ᖫ❍ᖭ🃏 _${usedPrefix}disable antiprivado_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
            *🎮 𝑱𝑼𝑬𝑮𝑶𝑺 🎮*
┃────────⇌••⇋───────┃
  ᖫ❍ᖭ👹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  ᖫ❍ᖭ👹 _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ᖫ❍ᖭ👹 _${usedPrefix}ppt *<papel / tijera /piedra>*_
  ᖫ❍ᖭ👹 _${usedPrefix}prostituto *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}prostituta *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}gay2 *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}lesbiana *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}pajero *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}pajera *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}puto *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}puta *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}manco *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}manca *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}rata *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}love *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}doxear *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}odio *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}pregunta *<txt>*_
  ᖫ❍ᖭ👹 _${usedPrefix}suitpvp *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}slot *<apuesta>*_
  ᖫ❍ᖭ👹 _${usedPrefix}ttt *<nombre sala>*_
  ᖫ❍ᖭ👹 _${usedPrefix}delttt_
  ᖫ❍ᖭ👹 _${usedPrefix}cuando_
  ᖫ❍ᖭ👹 _${usedPrefix}nalga *<nombre / @tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}chapar_
  ᖫ❍ᖭ👹 _${usedPrefix}acertijo_
  ᖫ❍ᖭ👹 _${usedPrefix}simi *<txt>*_
  ᖫ❍ᖭ👹 _${usedPrefix}top *<txt>*_
  ᖫ❍ᖭ👹 _${usedPrefix}topgays_
  ᖫ❍ᖭ👹 _${usedPrefix}topchocolatada_
  ᖫ❍ᖭ👹 _${usedPrefix}topotakus_
  ᖫ❍ᖭ👹 _${usedPrefix}minovia *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}minovio *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}formarpareja *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}follar *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}verdad_
  ᖫ❍ᖭ👹 _${usedPrefix}personalidad *<@tag>*_
  ᖫ❍ᖭ👹 _${usedPrefix}reto_
  ᖫ❍ᖭ👹 _${usedPrefix}sorteo_
  ᖫ❍ᖭ👹 _${usedPrefix}ship5_
  ᖫ❍ᖭ👹 _${usedPrefix}cancion_
  ᖫ❍ᖭ👹 _${usedPrefix}pista_
  ᖫ❍ᖭ👹 _${usedPrefix}akinator_
  ᖫ❍ᖭ👹 _${usedPrefix}wordfind_
  ᖫ❍ᖭ👹 _${usedPrefix}peliculas_
  ᖫ❍ᖭ👹 _${usedPrefix}palabra_
 ┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛
 
┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
        *🌀𝑬𝑵𝑨𝑩𝑳𝑬/𝑫𝑰𝑺𝑨𝑩𝑳𝑬🌀*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ✅ _${usedPrefix}enable *welcome*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *welcome*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *modohorny*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *modohorny*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antilink*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antilink*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antilink2*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antilink2*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *detect*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *detect*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *audios*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *audios*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *autosticker*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *autosticker*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antiviewonce*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antiviewonce*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antitoxic*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antitoxic*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antitraba*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antitraba*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antiarabes*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antiarabes*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *modoadmin*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *modoadmin*_
  ᖫ❍ᖭ✅ _${usedPrefix}enable *antidelete*_
  ᖫ❍ᖭ✅ _${usedPrefix}disable *antidelete*_
 ┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
         *🖇️ 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺 🖇️*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ📥 _${usedPrefix}instagram *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}mediafire *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}gitclone *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}gdrive *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}tiktok *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}tiktokimg *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}xnxxdl *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}xvideosdl *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}twitter *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}fb *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ytshort *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ytmp3 *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ytmp4 *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ytmp3doc *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ytmp4doc *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}videodoc *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}dapk2 *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}stickerpack *<url>*_
  ᖫ❍ᖭ📥 _${usedPrefix}play *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}play2 *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}play.1 *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}play.2 *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}playdoc *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}playdoc2 *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}playlist *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}spotify *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}ringtone *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}soundcloud *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}img *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}pinterest *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}wallpaper *<txt>*_
  ᖫ❍ᖭ📥 _${usedPrefix}pptiktok *<user>*_
  ᖫ❍ᖭ📥 _${usedPrefix}igstalk *<user>*_
  ᖫ❍ᖭ📥 _${usedPrefix}igstory *<user>*_
  ᖫ❍ᖭ📥 _${usedPrefix}tiktokstalk *<user>*_
 ┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
         *🌍 𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺 🌍*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🔍 _${usedPrefix}githubsearch *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}pelisplus *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}modapk *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}stickersearch *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}stickersearch2 *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}xnxxsearch *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}animeinfo *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}google *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}letra *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}wikipedia *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}ytsearch *<txt>*_
  ᖫ❍ᖭ🔍 _${usedPrefix}playstore *<txt>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
             *𒊹︎𝑮𝑹𝑼𝑷𝑶𝑺 𒊹*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ💎 _${usedPrefix}add *num>*_
  ᖫ❍ᖭ💎 _${usedPrefix}kick *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}kick2 *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}listanum *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}kicknum *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}grupo *<abrir / cerrar>*_
  ᖫ❍ᖭ💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
  ᖫ❍ᖭ💎 _${usedPrefix}promote *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}demote *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}infogroup_
  ᖫ❍ᖭ💎 _${usedPrefix}resetlink_
  ᖫ❍ᖭ💎 _${usedPrefix}link_
  ᖫ❍ᖭ💎 _${usedPrefix}setname *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}setdesc *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}invocar *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}setwelcome *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}setbye *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}hidetag *<txt>*_
  ᖫ❍ᖭ💎 _${usedPrefix}hidetag *<audio>*_
  ᖫ❍ᖭ💎 _${usedPrefix}hidetag *<video>*_
  ᖫ❍ᖭ💎 _${usedPrefix}hidetag *<img>*_
  ᖫ❍ᖭ💎 _${usedPrefix}warn *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}unwarn *<@tag>*_
  ᖫ❍ᖭ💎 _${usedPrefix}listwarn_
  ᖫ❍ᖭ💎 _${usedPrefix}fantasmas_
  ᖫ❍ᖭ💎 _${usedPrefix}comprar_
  ᖫ❍ᖭ💎 _${usedPrefix}destraba_
  ᖫ❍ᖭ💎 _${usedPrefix}setpp *<img>*_
  ᖫ❍ᖭ💎 _admins *<txt>*_ (sin prefijo)
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
        *🏷️ 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺 🏷️*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🧧 _${usedPrefix}toanime *<img>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}togifaud *<video>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}toimg *<sticker>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tomp3 *<video>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tomp3 *<nota de voz>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}toptt *<video / audio>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tovideo *<sticker>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tourl *<video / img / audio>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tts *<idioma> <txt>*_
  ᖫ❍ᖭ🧧 _${usedPrefix}tts *<efecto> <txt>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━══════⊰⊱ ⬛ ⊰⊱═══════━━┓
        *🌪 𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝒀 𝑳𝑶𝑮𝑶𝑺 🌪*
┃─────────⇌••⇋──────────┃
  ᖫ❍ᖭ🖍️ _${usedPrefix}logos *<efecto> <txt>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}logochristmas *<txt>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}logocorazon *<txt>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}ytcomment *<txt>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}hornycard *<@tag>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}simpcard *<@tag>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}lolice *<@tag>*_
  ᖫ❍ᖭ🖍️ _${usedPrefix}itssostupid_
  ᖫ❍ᖭ🖍️ _${usedPrefix}pixelar_
  ᖫ❍ᖭ🖍️ _${usedPrefix}blur_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
       *🤓 𝑭𝑹𝑨𝑺𝑬𝑺 𝒀 𝑻𝑬𝑿𝑻𝑶 🤓*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🥀 _${usedPrefix}piropo_
  ᖫ❍ᖭ🥀 _${usedPrefix}consejo_
  ᖫ❍ᖭ🥀 _${usedPrefix}fraseromantica_
  ᖫ❍ᖭ🥀 _${usedPrefix}historiaromantica_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
           *🎭 𝑹𝑨𝑵𝑫𝑶𝑴 🎭*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ👾 _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ᖫ❍ᖭ👾 _${usedPrefix}cristianoronaldo_
  ᖫ❍ᖭ👾 _${usedPrefix}messi_
  ᖫ❍ᖭ👾 _${usedPrefix}cat_
  ᖫ❍ᖭ👾 _${usedPrefix}dog_
  ᖫ❍ᖭ👾 _${usedPrefix}meme_
  ᖫ❍ᖭ👾 _${usedPrefix}itzy_
  ᖫ❍ᖭ👾 _${usedPrefix}blackpink_
  ᖫ❍ᖭ👾 _${usedPrefix}navidad_
  ᖫ❍ᖭ👾 _${usedPrefix}wpmontaña_
  ᖫ❍ᖭ👾 _${usedPrefix}pubg_
  ᖫ❍ᖭ👾 _${usedPrefix}wpgaming_
  ᖫ❍ᖭ👾 _${usedPrefix}wpaesthetic_
  ᖫ❍ᖭ👾 _${usedPrefix}wpaesthetic2_
  ᖫ❍ᖭ👾 _${usedPrefix}wprandom_
  ᖫ❍ᖭ👾 _${usedPrefix}wallhp_
  ᖫ❍ᖭ👾 _${usedPrefix}wpvehiculo_
  ᖫ❍ᖭ👾 _${usedPrefix}wpmoto_
  ᖫ❍ᖭ👾 _${usedPrefix}coffee_
  ᖫ❍ᖭ👾 _${usedPrefix}pentol_
  ᖫ❍ᖭ👾 _${usedPrefix}caricatura_
  ᖫ❍ᖭ👾 _${usedPrefix}ciberespacio_
  ᖫ❍ᖭ👾 _${usedPrefix}technology_
  ᖫ❍ᖭ👾 _${usedPrefix}doraemon_
  ᖫ❍ᖭ👾 _${usedPrefix}hacker_
  ᖫ❍ᖭ👾 _${usedPrefix}planeta_
  ᖫ❍ᖭ👾 _${usedPrefix}randomprofile_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═══════⊰⊱ ⬛ ⊰⊱═══════━━┓
         *🎤 𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑫𝑬 𝑨𝑼𝑫𝑰𝑶 🎤*
┃──────────⇌••⇋──────────┃
  ᖫ❍ᖭ🎙️ _${usedPrefix}bass_
  ᖫ❍ᖭ🎙️ _${usedPrefix}blown_
  ᖫ❍ᖭ🎙️ _${usedPrefix}deep_
  ᖫ❍ᖭ🎙️ _${usedPrefix}earrape_
  ᖫ❍ᖭ🎙️ _${usedPrefix}fast_
  ᖫ❍ᖭ🎙️ _${usedPrefix}fat_
  ᖫ❍ᖭ🎙️ _${usedPrefix}nightcore_
  ᖫ❍ᖭ🎙️ _${usedPrefix}reverse_
  ᖫ❍ᖭ🎙️ _${usedPrefix}robot_
  ᖫ❍ᖭ🎙️ _${usedPrefix}slow_
  ᖫ❍ᖭ🎙️ _${usedPrefix}smooth_
  ᖫ❍ᖭ🎙️ _${usedPrefix}tupai_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
        *🧿 𝑪𝑯𝑨𝑻 𝑨𝑵𝑶𝑵𝑰𝑴𝑶 🧿*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ📳 _${usedPrefix}start_
  ᖫ❍ᖭ📳 _${usedPrefix}next_
  ᖫ❍ᖭ📳 _${usedPrefix}leave_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
         *⚙️𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺 ⚙️*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🛠️ _${usedPrefix}inspect *<wagc_url>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}chatgpt *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}delchatgpt
  ᖫ❍ᖭ🛠️ _${usedPrefix}gptvoz *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}dall-e *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}spamwa *num|txt|cant>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}tamaño *<cant> <img / video>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}readviewonce *<img / video>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}clima *<país> <ciudad>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}encuesta *<txt1|txt2>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}afk *<motivo>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}ocr *<responde a img>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}hd *<responde a img>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}acortar *<url>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}calc *<operacion>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}del *<msj>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}whatmusic *<audio>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}readqr *<img>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}qrcode *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}readmore *<txt1|txt2>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}styletext *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}traducir *<txt>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}nowa *num>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}covid *<pais>*_
  ᖫ❍ᖭ🛠️ _${usedPrefix}horario_
  ᖫ❍ᖭ🛠️ _${usedPrefix}dropmail_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
            *💸𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨💸*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🤑 _${usedPrefix}adventure_
  ᖫ❍ᖭ🤑 _${usedPrefix}cazar_
  ᖫ❍ᖭ🤑 _${usedPrefix}cofre_
  ᖫ❍ᖭ🤑 _${usedPrefix}balance_
  ᖫ❍ᖭ🤑 _${usedPrefix}claim_
  ᖫ❍ᖭ🤑 _${usedPrefix}heal_
  ᖫ❍ᖭ🤑 _${usedPrefix}lb_
  ᖫ❍ᖭ🤑 _${usedPrefix}levelup_
  ᖫ❍ᖭ🤑 _${usedPrefix}myns_
  ᖫ❍ᖭ🤑 _${usedPrefix}perfil_
  ᖫ❍ᖭ🤑 _${usedPrefix}work_
  ᖫ❍ᖭ🤑 _${usedPrefix}minar_
  ᖫ❍ᖭ🤑 _${usedPrefix}minar2_
  ᖫ❍ᖭ🤑 _${usedPrefix}buy_
  ᖫ❍ᖭ🤑 _${usedPrefix}buyall_
  ᖫ❍ᖭ🤑 _${usedPrefix}verificar_
  ᖫ❍ᖭ🤑 _${usedPrefix}robar *<cant> <@tag>*_
  ᖫ❍ᖭ🤑 _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
  ᖫ❍ᖭ🤑 _${usedPrefix}unreg *<sn>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
            *🤡 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺 🤡*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ🎯 _${usedPrefix}sticker *<responder a img o video>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}sticker *<url>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}sticker2 *<responder a img o video>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}sticker2 *<url>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}s *<responder a img o video>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}s *<url>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}scircle *<img>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}sremovebg *<img>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}semoji *<tipo> <emoji>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}qc *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}attp *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}attp2 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}attp3 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}ttp *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}ttp2 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}ttp3 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}ttp4 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}ttp5 *<txt>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}pat *<@tag>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}slap *<@tag>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}kiss *<@tag>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}dado_
  ᖫ❍ᖭ🎯 _${usedPrefix}wm *<packname> <autor>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}stickermarker *<efecto> <img>*_
  ᖫ❍ᖭ🎯 _${usedPrefix}stickerfilter *<efecto> <img>*_
┣━━═════⊰⊱ ⬛ ⊰⊱═════━━┛

┏━━═════⊰⊱ ⬛ ⊰⊱═════━━┓
           *⚜𝑷𝑹𝑶𝑷𝑰𝑬𝑻𝑨𝑹𝑰𝑶⚜*
┃────────⇌••⇋────────┃
  ᖫ❍ᖭ👑 > *<funcion>*
  ᖫ❍ᖭ👑 => *<funcion>*
  ᖫ❍ᖭ👑 $ *<funcion>*
  ᖫ❍ᖭ👑 _${usedPrefix}dsowner_
  ᖫ❍ᖭ👑 _${usedPrefix}setprefix *<prefijo>*_
  ᖫ❍ᖭ👑 _${usedPrefix}resetprefix_
  ᖫ❍ᖭ👑 _${usedPrefix}autoadmin_
  ᖫ❍ᖭ👑 _${usedPrefix}grouplist_
  ᖫ❍ᖭ👑 _${usedPrefix}chetar_
  ᖫ❍ᖭ👑 _${usedPrefix}leavegc_
  ᖫ❍ᖭ👑 _${usedPrefix}cajafuerte_
  ᖫ❍ᖭ👑 _${usedPrefix}blocklist_
  ᖫ❍ᖭ👑 _${usedPrefix}addowner *<@tag / num>*_
  ᖫ❍ᖭ👑 _${usedPrefix}delowner *<@tag / num>*_
  ᖫ❍ᖭ👑 _${usedPrefix}block *<@tag / num>*_
  ᖫ❍ᖭ👑 _${usedPrefix}unblock *<@tag / num>*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *restrict*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *restrict*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *autoread*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *autoread*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *public*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *public*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *pconly*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *pconly*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *gconly*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *gconly*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *anticall*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *anticall*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *antiprivado*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *antiprivado*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *modejadibot*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *modejadibot*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *audios_bot*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *audios_bot*_
  ᖫ❍ᖭ👑 _${usedPrefix}enable *antispam*_
  ᖫ❍ᖭ👑 _${usedPrefix}disable *antispam*_
  ᖫ❍ᖭ👑 _${usedPrefix}msg *<txt>*_
  ᖫ❍ᖭ👑 _${usedPrefix}banchat_
  ᖫ❍ᖭ👑 _${usedPrefix}unbanchat_
  ᖫ❍ᖭ👑 _${usedPrefix}resetuser *<@tag>*_
  ᖫ❍ᖭ👑 _${usedPrefix}banuser *<@tag>*_
  ᖫ❍ᖭ👑 _${usedPrefix}unbanuser *<@tag>*_
  ᖫ❍ᖭ👑 _${usedPrefix}dardiamantes *<@tag> <cant>*_
  ᖫ❍ᖭ👑 _${usedPrefix}añadirxp *<@tag> <cant>*_
  ᖫ❍ᖭ👑 _${usedPrefix}banuser *<@tag>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bc *<txt>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcchats *<txt>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcgc *<txt>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcgc2 *<audio>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcgc2 *<video>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcgc2 *<img>*_
  ᖫ❍ᖭ👑 _${usedPrefix}bcbot *<txt>*_
  ᖫ❍ᖭ👑 _${usedPrefix}cleartpm_
  ᖫ❍ᖭ👑 _${usedPrefix}restart_
  ᖫ❍ᖭ👑 _${usedPrefix}update_
  ᖫ❍ᖭ👑 _${usedPrefix}banlist_
  ᖫ❍ᖭ👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
  ᖫ❍ᖭ👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
  ᖫ❍ᖭ👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
  ᖫ❍ᖭ👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
  ᖫ❍ᖭ👑 _${usedPrefix}delprem *<@tag>*_
  ᖫ❍ᖭ👑 _${usedPrefix}listcmd_
  ᖫ❍ᖭ👑 _${usedPrefix}setppbot *<responder a img>*_
  ᖫ❍ᖭ👑 _${usedPrefix}addcmd *<txt> <responder a sticker/img>*_
  ᖫ❍ᖭ👑 _${usedPrefix}delcmd *<responder a sticker/img con comando o txt asignado>*_
  ᖫ❍ᖭ👑 _${usedPrefix}saveimage
  ᖫ❍ᖭ👑 _${usedPrefix}viewimage
 ┣━━══════⊰⊱ ⬛ ⊰⊱══════━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|crazymenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
