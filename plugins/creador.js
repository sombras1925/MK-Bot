let handler = function (m) {
  this.sendContact(m.chat, '994405380645', 'Sombras', m)
  //this.sendContact(m.chat, 'TU NUMERO', 'TU NOMBRE', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
