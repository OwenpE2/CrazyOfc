let img = 'https://cdn.discordapp.com/attachments/1009154096588140605/1157519358910803998/9d7cff04-0a22-4d93-afba-19aa41348765.png?ex=6518e768&is=651795e8&hm=30f31f5df4d44759ca4d5add6cd2415150fc7d1121c1243dbfdf170039eefb98&'
let dia = Math.floor(Math.random() * 30)
let tok = Math.floor(Math.random() * 10)
let hadesb = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)
  
let texto = `MAPA BERMUDA FREE FIRE 2023`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['bermuda', 'mapab', 'mapabermuda'] 
handler.register = true
export default handler
