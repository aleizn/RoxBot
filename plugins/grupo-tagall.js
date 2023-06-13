let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲𝐜𝐚𝐨𝐬 𝐱 𝐈𝐍𝐆: ${pesan}`
let teks = `𝐀𝐍𝐎𝐓𝐀𝐓𝐄 𝐏𝐋𝐀𝐍𝐓𝐀 𝐂𝐎𝐍..! 🤬 𝐐𝐮𝐞 𝐚𝐩𝐞𝐬𝐭𝐚𝐬 𝐡𝐨𝐫𝐫𝐢𝐛𝐥𝐞 𝐚 𝐜𝐮𝐩𝐨 ☠️\n\n💙 ${oi}\n\n💙 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰:\n`
for (let mem of participants) {
teks += `🪼෴ @${mem.id.split('@')[0]}\n`}
teks += `➥𝐂𝐚𝐨𝐬 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    