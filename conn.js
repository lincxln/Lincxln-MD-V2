'use strict'
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    proto,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require('@adiwajshing/baileys'),
  {
    downloadContentFromMessage,
    generateWAMessage,
    generateWAMessageFromContent,
    MessageType,
    buttonsMessage,
  } = require('@adiwajshing/baileys'),
  { exec, spawn } = require('child_process'),
  {
    color,
    bgcolor,
    pickRandom,
    randomNomor,
  } = require('./function/Data_Server_Bot/Console_Data'),
  {
    removeEmojis,
    bytesToSize,
    getBuffer,
    fetchJson,
    getRandom,
    getGroupAdmins,
    runtime,
    sleep,
    makeid,
    isUrl,
    generateProfilePicture,
  } = require('./function/func_Server'),
  {
    TelegraPh,
    UploadFileUgu,
    AnonFiles,
  } = require('./function/uploader_Media'),
  {
    addResponList,
    delResponList,
    isAlreadyResponList,
    isAlreadyResponListGroup,
    sendResponList,
    updateResponList,
    getDataResponList,
  } = require('./function/func_Addlist'),
  {
    media_JSON,
    mess_JSON,
    setting_JSON,
    antilink_JSON,
    db_user_JSON,
    server_eror_JSON,
    welcome_JSON,
    db_menfes_JSON,
    db_respon_list_JSON,
    auto_downloadTT_JSON,
  } = require('./function/Data_Location.js'),
  { mediafireDl } = require('./function/scrape_Mediafire'),
  { webp2mp4File } = require('./function/Webp_Tomp4'),
  { cerpen } = require('./function/Search_Cerpen'),
  {
    bioskop,
    bioskopNow,
    latinToAksara,
    aksaraToLatin,
    gempa,
    gempaNow,
    jadwalTV,
    listJadwalTV,
    jadwalsholat,
  } = require('@bochilteam/scraper'),
  { listmenu, rulesBot, donasiBot, infoOwner } = require('./help'),
  { philips } = require('./function/virtex/philips'),
  { virus } = require('./function/virtex/virus'),
  { ngazap } = require('./function/virtex/ngazap'),
  fs = require('fs'),
  ms = require('ms'),
  chalk = require('chalk'),
  axios = require('axios'),
  qs = require('querystring'),
  fetch = require('node-fetch'),
  colors = require('colors/safe'),
  ffmpeg = require('fluent-ffmpeg'),
  moment = require('moment-timezone'),
  { Primbon } = require('scrape-primbon'),
  primbon = new Primbon(),
  Exif = require('./function/set_WM_Sticker'),
  exif = new Exif(),
  msgFilter = require('./function/func_Spam'),
  { stalkff, stalkml } = require('./function/func_Stalker')
let orang_spam = [],
  medianya = []
const mess = mess_JSON,
  setting = setting_JSON,
  antilink = antilink_JSON,
  db_user = db_user_JSON,
  server_eror = server_eror_JSON,
  welcomeJson = welcome_JSON,
  db_menfes = db_menfes_JSON,
  db_respon_list = db_respon_list_JSON,
  auto_downloadTT = auto_downloadTT_JSON
moment.tz.setDefault('Asia/Jakarta').locale('id')
module.exports = async (
  _0x2b6d42,
  _0x48a922,
  _0x3977de,
  _0x4ed813,
  _0x3ceeaf
) => {
  try {
    let {
      ownerNumber: _0x250ca4,
      botName: _0x49dc05,
      smm_dana_nama: _0x1c46cd,
      smm_dana_number: _0xbb19d,
    } = _0x4ed813
    const {
      type: _0x360e75,
      quotedMsg: _0x6ec46,
      mentioned: _0x48615e,
      now: _0x3b55a3,
      fromMe: _0x324d73,
      isBaileys: _0x27c946,
    } = _0x48a922
    if (_0x48a922.isBaileys) {
      return
    }
    const _0x3553ae = moment.tz('asia/jakarta').format('HH:mm:ss'),
      _0x2d6236 = moment().tz('Asia/Jakarta').format('ll')
    let _0x4b32de = moment(Date.now())
      .tz('Asia/Jakarta')
      .locale('id')
      .format('a')
    const _0x3324b5 =
        'Selamat ' + _0x4b32de.charAt(0).toUpperCase() + _0x4b32de.slice(1),
      _0xd5cd12 = JSON.stringify(_0x48a922.message),
      _0x449fcf = _0x48a922.key.remoteJid,
      _0x8a0c17 = moment(new Date()).format('HH:mm')
    var _0x147c0b =
      _0x360e75 === 'conversation' && _0x48a922.message.conversation
        ? _0x48a922.message.conversation
        : _0x360e75 === 'imageMessage' && _0x48a922.message.imageMessage.caption
        ? _0x48a922.message.imageMessage.caption
        : _0x360e75 === 'videoMessage' && _0x48a922.message.videoMessage.caption
        ? _0x48a922.message.videoMessage.caption
        : _0x360e75 === 'extendedTextMessage' &&
          _0x48a922.message.extendedTextMessage.text
        ? _0x48a922.message.extendedTextMessage.text
        : _0x360e75 === 'buttonsResponseMessage' &&
          _0x6ec46.fromMe &&
          _0x48a922.message.buttonsResponseMessage.selectedButtonId
        ? _0x48a922.message.buttonsResponseMessage.selectedButtonId
        : _0x360e75 === 'templateButtonReplyMessage' &&
          _0x6ec46.fromMe &&
          _0x48a922.message.templateButtonReplyMessage.selectedId
        ? _0x48a922.message.templateButtonReplyMessage.selectedId
        : _0x360e75 === 'messageContextInfo'
        ? _0x48a922.message.buttonsResponseMessage?.selectedButtonId ||
          _0x48a922.message.listResponseMessage?.singleSelectReply.selectedRowId
        : _0x360e75 == 'listResponseMessage' &&
          _0x6ec46.fromMe &&
          _0x48a922.message.listResponseMessage.singleSelectReply.selectedRowId
        ? _0x48a922.message.listResponseMessage.singleSelectReply.selectedRowId
        : ''
    _0x147c0b == undefined && (_0x147c0b = '')
    const _0x250b36 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x147c0b)
        ? _0x147c0b.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)
        : '#',
      _0x5aa762 = _0x48a922.key.remoteJid.endsWith('@g.us'),
      _0x20bf5a = _0x5aa762
        ? _0x48a922.key.participant
          ? _0x48a922.key.participant
          : _0x48a922.participant
        : _0x48a922.key.remoteJid,
      _0x37b2fc = [
        '' + _0x4ed813.ownerNumber,
        '6285694756102@s.whatsapp.net',
        '6282322097449@s.whatsapp.net',
      ].includes(_0x20bf5a)
        ? true
        : false,
      _0x481174 = _0x48a922.pushName,
      _0x857412 = _0x147c0b.startsWith(_0x250b36) ? _0x147c0b : '',
      _0x2bc027 = _0x857412.trim().split(/ +/).slice(1),
      _0x22838f = _0x2bc027.join(' '),
      _0x1d3fe7 = _0x857412.startsWith(_0x250b36),
      _0x9e786f = _0x857412.slice(1).trim().split(/ +/).shift().toLowerCase(),
      _0x2804c4 = _0x1d3fe7
        ? _0x857412.slice(1).trim().split(/ +/).shift().toLowerCase()
        : null,
      _0x19871b = _0x2b6d42.user.id.split(':')[0] + '@s.whatsapp.net',
      _0x1ad07d = _0x5aa762 ? await _0x2b6d42.groupMetadata(_0x449fcf) : '',
      _0x50fb79 = _0x5aa762 ? _0x1ad07d.subject : '',
      _0x15c93e = _0x5aa762 ? _0x1ad07d.id : '',
      _0x191710 = _0x5aa762 ? await _0x1ad07d.participants : '',
      _0xb1d4e6 = _0x5aa762 ? _0x1ad07d.participants : '',
      _0x42a343 = _0x5aa762 ? getGroupAdmins(_0xb1d4e6) : '',
      _0x2bab31 = _0x42a343.includes(_0x19871b) || false,
      _0x4a5cff = _0x42a343.includes(_0x20bf5a),
      _0x492a9e = _0x5aa762 ? welcomeJson.includes(_0x449fcf) : false,
      _0x5ca476 = antilink.includes(_0x449fcf) ? true : false,
      _0x147ecd = auto_downloadTT.includes(_0x449fcf) ? true : false,
      _0x4cf93f = _0x48a922.quoted ? _0x48a922.quoted : _0x48a922
    var _0x20c2a7 =
        _0x360e75 === 'buttonsResponseMessage'
          ? _0x48a922.message.buttonsResponseMessage.selectedButtonId
          : '',
      _0x59f09f =
        _0x360e75 === 'messageContextInfo'
          ? _0x48a922.message.buttonsResponseMessage?.selectedButtonId ||
            _0x48a922.message.listResponseMessage?.singleSelectReply
              .selectedRowId
          : ''
    const _0x1e1867 = _0x20c2a7.length !== 0 ? _0x20c2a7 : _0x59f09f
    var _0x187936 =
        _0x360e75 === 'listResponseMessage'
          ? _0x48a922.message.listResponseMessage.singleSelectReply
              .selectedRowId
          : '',
      _0x1a2e08 =
        _0x360e75 === 'messageContextInfo'
          ? _0x48a922.message.buttonsResponseMessage?.selectedButtonId ||
            _0x48a922.message.listResponseMessage?.singleSelectReply
              .selectedRowId
          : ''
    const _0x15f849 = _0x187936.length !== 0 ? _0x187936 : _0x1a2e08,
      _0x1978fe = _0x360e75 == 'imageMessage',
      _0xcedf8f = _0x360e75 == 'extendedTextMessage',
      _0x385d56 = _0x360e75 === 'imageMessage' || _0x360e75 === 'videoMessage',
      _0x3f6a6a = _0xcedf8f
        ? _0xd5cd12.includes('imageMessage')
          ? true
          : false
        : false,
      _0x847593 = _0x360e75 == 'videoMessage',
      _0x46306e = _0xcedf8f
        ? _0xd5cd12.includes('videoMessage')
          ? true
          : false
        : false,
      _0x58693c = _0x360e75 == 'stickerMessage',
      _0x518b97 = _0xcedf8f
        ? _0xd5cd12.includes('stickerMessage')
          ? true
          : false
        : false,
      _0x586d49 = _0xcedf8f
        ? _0xd5cd12.includes('audioMessage')
          ? true
          : false
        : false,
      _0x256960 =
        _0x360e75 == 'extendedTextMessage' &&
        _0x48a922.message.extendedTextMessage.contextInfo != null
          ? _0x48a922.message.extendedTextMessage.contextInfo.mentionedJid
          : [],
      _0x104947 =
        _0x360e75 == 'extendedTextMessage' &&
        _0x48a922.message.extendedTextMessage.contextInfo != null
          ? _0x48a922.message.extendedTextMessage.contextInfo.participant || ''
          : '',
      _0xbf88dc = typeof _0x256960 == 'string' ? [_0x256960] : _0x256960
    _0xbf88dc != undefined ? _0xbf88dc.push(_0x104947) : []
    const _0x539733 =
      _0xbf88dc != undefined ? _0xbf88dc.filter((_0x143784) => _0x143784) : []
    try {
      var _0x3e0216 = await _0x2b6d42.profilePictureUrl(_0x20bf5a, 'image')
    } catch {
      var _0x3e0216 =
        'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    const _0x197af6 = './menuPath/'
    function _0xe03415(_0x4d1724, _0x12948e = [], _0x4f22b7) {
      if (_0x4f22b7 == null || _0x4f22b7 == undefined || _0x4f22b7 == false) {
        let _0x53b814 = _0x2b6d42.sendMessage(_0x449fcf, {
          text: _0x4d1724,
          mentions: _0x12948e,
        })
        return _0x53b814
      } else {
        let _0x250e3d = _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            text: _0x4d1724,
            mentions: _0x12948e,
          },
          { quoted: _0x48a922 }
        )
        return _0x250e3d
      }
    }
    function _0x15f30f(_0xf334ad) {
      return '```' + _0xf334ad + '```'
    }
    function _0x135934(_0xed8ade = '') {
      return [..._0xed8ade.matchAll(/@([0-9]{5,16}|0)/g)].map(
        (_0x23fd67) => _0x23fd67[1] + '@s.whatsapp.net'
      )
    }
    const _0x18486e = {
        key: {
          fromMe: false,
          participant: '0@s.whatsapp.net',
          ...(_0x449fcf ? { remoteJid: '' } : {}),
        },
        message: {
          documentMessage: {
            url: 'https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc',
            mimetype: 'application/octet-stream',
            fileSha256: 'TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=',
            fileLength: '64455',
            pageCount: 1,
            mediaKey: 'P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=',
            fileName: 'Lincxln-MD ' + ngazap(_0x250b36),
            fileEncSha256: 'ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=',
          },
        },
      },
      _0x479576 = _0x22838f.split('&')[0],
      _0x4ccc85 = _0x22838f.split('&')[1],
      _0x5637c8 = _0x22838f.split('&')[2],
      _0x3efabe = (_0x506248) => {
        let _0x5839da = new RegExp(
          /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
          'gi'
        )
        return _0x506248.match(_0x5839da)
      },
      _0x5da978 = (_0x3d5376) => {
        _0x2b6d42.sendMessage(
          _0x449fcf,
          { text: _0x3d5376 },
          { quoted: _0x48a922 }
        )
      }
    if (_0x5aa762 && _0x5ca476) {
      if (!_0x2bab31) {
        return _0x5da978('Untung Bot Bukan Admin')
      }
      var _0x6a20be = await _0x2b6d42.groupInviteCode(_0x449fcf)
      if (_0x147c0b.includes('https://chat.whatsapp.com/' + _0x6a20be)) {
        _0x5da978(
          '```\u300C Detect Link \u300D```\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini'
        )
      } else {
        if (isUrl(_0x147c0b)) {
          let _0x1c85b1 =
            '```\u300C Detect Link \u300D```\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun'
          if (_0x4a5cff) {
            return _0x5da978(_0x1c85b1)
          }
          if (_0x324d73) {
            return _0x5da978(_0x1c85b1)
          }
          if (_0x37b2fc) {
            return _0x5da978(_0x1c85b1)
          }
          await _0x2b6d42.sendMessage(_0x449fcf, { delete: _0x48a922.key })
          _0xe03415(
            '\u300C ANTILINK \u300D\n\n@' +
              _0x20bf5a.split('@')[0] +
              ' Kamu mengirim link group, maaf bot akan kick kamu dari grup',
            [_0x20bf5a]
          )
          await sleep(3000)
          _0x2b6d42.groupParticipantsUpdate(_0x449fcf, [_0x20bf5a], 'remove')
        } else {
        }
      }
    }
    if (_0x5aa762 && _0x147ecd) {
      if (_0x147c0b.match(/(tiktok.com)/gi)) {
        _0x5da978('Url tiktok terdekteksi\nWait mengecek data url.')
        await sleep(3000)
        var _0x2c6eeb = await fetchJson(
          'https://saipulanuar.ga/api/download/tiktok2?url=' +
            _0x147c0b +
            '&apikey=jPHjZpQF'
        )
        _0x5da978(
          '\uD835\uDDE7\uD835\uDDDC\uD835\uDDDE\uD835\uDDE7\uD835\uDDE2\uD835\uDDDE \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\n\n\uD835\uDE3C\uD835\uDE6A\uD835\uDE69\uD835\uDE5D\uD835\uDE64\uD835\uDE67: Lexxy Official\n\uD835\uDE45\uD835\uDE6A\uD835\uDE59\uD835\uDE6A\uD835\uDE61: ' +
            _0x2c6eeb.result.judul +
            '\n\uD835\uDE4E\uD835\uDE64\uD835\uDE6A\uD835\uDE67\uD835\uDE58\uD835\uDE5A: ' +
            _0x147c0b +
            '\n\nVideo dan audio sedang dikirim...'
        )
        _0x2b6d42.sendMessage(
          _0x20bf5a,
          {
            video: { url: _0x2c6eeb.result.video.link1 },
            caption: 'No Watermark!',
          },
          { quotes: _0x48a922 }
        )
        _0x2b6d42.sendMessage(
          _0x20bf5a,
          {
            audio: { url: _0x2c6eeb.result.audio.link1 },
            mimetype: 'audio/mpeg',
            fileName: 'audio.mp3',
          },
          { quoted: _0x48a922 }
        )
        if (_0x5aa762) {
          return _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: 'Media sudah dikirim lewat chat pribadi bot.' },
            { quoted: _0x48a922 }
          )
        }
      }
    }
    if (
      !_0x2804c4 &&
      _0x5aa762 &&
      isAlreadyResponList(_0x449fcf, _0x147c0b, db_respon_list)
    ) {
      var _0x26e964 = getDataResponList(_0x449fcf, _0x147c0b, db_respon_list)
      _0x26e964.isImage === false
        ? _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: sendResponList(_0x449fcf, _0x147c0b, db_respon_list) },
            { quoted: _0x48a922 }
          )
        : _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: await getBuffer(_0x26e964.image_url),
              caption: _0x26e964.response,
            },
            { quoted: _0x48a922 }
          )
    }
    const _0x3a8ea1 = (
      _0x369a5c,
      _0x5d1f2f,
      _0x2a2bb1,
      _0x480438,
      _0x4224fb
    ) => {
      let _0x3b44de = _0x5d1f2f.replace(/[^0-9]/g, '')
      const _0xb77e11 =
        'BEGIN:VCARD\nVERSION:3.0\nFN:' +
        _0x2a2bb1 +
        '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' +
        _0x3b44de +
        ':+' +
        _0x3b44de +
        '\n' +
        'END:VCARD'
      return _0x2b6d42.sendMessage(
        _0x449fcf,
        {
          contacts: {
            displayName: _0x2a2bb1,
            contacts: [{ vcard: _0xb77e11 }],
          },
          mentions: _0x4224fb ? _0x4224fb : [],
        },
        { quoted: _0x480438 }
      )
    }
    function _0x5efd3e(_0x5e22d5) {
      var _0x314bd8 = '',
        _0x194d7c = _0x5e22d5.toString().split('').reverse().join('')
      for (var _0x2b2698 = 0; _0x2b2698 < _0x194d7c.length; _0x2b2698++) {
        if (_0x2b2698 % 3 == 0) {
          _0x314bd8 += _0x194d7c.substr(_0x2b2698, 3) + '.'
        }
      }
      return (
        '' +
        _0x314bd8
          .split('', _0x314bd8.length - 1)
          .reverse()
          .join('')
      )
    }
    let _0x586550 = (_0x3ab7dd, _0x5900e5) => {
        let _0x4ba2a4 = false
        Object.keys(db_user).forEach((_0x5718b7) => {
          db_user[_0x5718b7].id == _0x5900e5 && (_0x4ba2a4 = _0x5718b7)
        })
        if (_0x4ba2a4 !== false) {
          if (_0x3ab7dd == 'id') {
            return db_user[_0x4ba2a4].id
          }
          if (_0x3ab7dd == 'name') {
            return db_user[_0x4ba2a4].name
          }
          if (_0x3ab7dd == 'seri') {
            return db_user[_0x4ba2a4].seri
          }
          if (_0x3ab7dd == 'premium') {
            return db_user[_0x4ba2a4].premium
          }
        }
        if (_0x4ba2a4 == false) {
          return null
        }
      },
      _0x3c95e5 = (_0x3341a7, _0x14095c, _0x151e99) => {
        Object.keys(db_user).forEach((_0x45bd1b) => {
          if (db_user[_0x45bd1b].id == _0x14095c) {
            if (_0x3341a7 == '\xB1id') {
              db_user[_0x45bd1b].id = _0x151e99
              fs.writeFileSync(
                './database/pengguna.json',
                JSON.stringify(db_user)
              )
            }
            if (_0x3341a7 == '\xB1name') {
              db_user[_0x45bd1b].name = _0x151e99
              fs.writeFileSync(
                './database/pengguna.json',
                JSON.stringify(db_user)
              )
            }
            if (_0x3341a7 == '\xB1seri') {
              db_user[_0x45bd1b].seri = _0x151e99
              fs.writeFileSync(
                './database/pengguna.json',
                JSON.stringify(db_user)
              )
            }
            if (_0x3341a7 == '\xB1premium') {
              db_user[_0x45bd1b].premium = _0x151e99
              fs.writeFileSync(
                './database/pengguna.json',
                JSON.stringify(db_user)
              )
            }
          }
        })
      }
    const _0x5123db = (_0x37278d, _0xd9ebfa) => {
        let _0x5abdfd = false
        Object.keys(db_menfes).forEach((_0x1cd6f4) => {
          db_menfes[_0x1cd6f4].id == _0xd9ebfa && (_0x5abdfd = _0x1cd6f4)
        })
        if (_0x5abdfd !== false) {
          if (_0x37278d == 'id') {
            return db_menfes[_0x5abdfd].id
          }
          if (_0x37278d == 'teman') {
            return db_menfes[_0x5abdfd].teman
          }
        }
        if (_0x5abdfd == false) {
          return null
        }
      },
      _0xb3199 = (_0x458835, _0x31fd69, _0x4586a8) => {
        Object.keys(db_menfes).forEach((_0x2a027e) => {
          if (db_menfes[_0x2a027e].id == _0x31fd69) {
            if (_0x458835 == '\xB1id') {
              db_menfes[_0x2a027e].id = _0x4586a8
              fs.writeFileSync(
                './database/menfess.json',
                JSON.stringify(db_menfes)
              )
            }
            if (_0x458835 == '\xB1teman') {
              db_menfes[_0x2a027e].teman = _0x4586a8
              fs.writeFileSync(
                './database/menfess.json',
                JSON.stringify(db_menfes)
              )
            }
          }
        })
      }
    _0x2b6d42.readMessages([_0x48a922.key])
    if (_0x9e786f === 'buatroom') {
      if (_0x5123db('id', _0x20bf5a) !== null) {
        return _0x5da978(
          'Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.'
        )
      }
      if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
        var _0x127b93 = {
          id: _0x20bf5a,
          session: 'buatroom',
          data: { penerima: '' },
        }
        fs.writeFileSync(
          _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
          JSON.stringify(_0x127b93, null, 2)
        )
        _0x5da978(
          '*Silahkan tulis Nomor WhatsApp yg ingin Di ajak ngobrol*\n\n*Contoh:* 628xxxx'
        )
      } else {
        _0x5da978(
          'Kamu Sedang di dalam sesi room chat, menunggu konfirmasi dari penerima.'
        )
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x421e25 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x421e25.session === 'buatroom') {
          if (_0x147c0b.length === 0) {
            return
          }
          if (isNaN(_0x147c0b)) {
            return _0x5da978('Hanya angka!')
          }
          _0x421e25.data.penerima = Number(_0x147c0b)
          if (_0x421e25.data.penerima == _0x20bf5a.split('@')[0]) {
            return _0x5da978('jangan nomor lu')
          }
          if (_0x421e25.data.penerima == _0x19871b.split('@')[0]) {
            return _0x5da978('itu kan nomor bot')
          }
          var _0x569ddf = await _0x2b6d42.onWhatsApp(
            _0x147c0b + '@s.whatsapp.net'
          )
          if (_0x569ddf.length == 0) {
            return _0x5da978(
              'Nomor +' +
                _0x147c0b +
                '\ntidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.'
            )
          }
          _0x421e25.session = 'number_orang'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x421e25, null, 3)
          )
          var _0x4fc5d4 = _0x421e25.data.penerima + '@s.whatsapp.net'
          _0xe03415(
            'Berhasil mengirimkan undangan chat ke @' +
              _0x4fc5d4.split('@')[0] +
              ' tunggu dia menyetujui undangan tersebut untuk chatan secara anonim jadi dia tidak tau siapa anda',
            [_0x4fc5d4]
          )
          let _0x548cc0 = '#' + makeid(10)
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
          let _0x522d3e = [
            {
              buttonId:
                _0x250b36 +
                'buat_room_chat ' +
                _0x20bf5a +
                '|' +
                _0x421e25.data.penerima +
                '@s.whatsapp.net|' +
                _0x548cc0,
              buttonText: { displayText: 'Terima️' },
              type: 1,
            },
          ]
          var _0x991b2a = {
            text: '*Seseorang Mengajak Chating*\n\n*Dari:* Rahasia\n\nSilahkan klik button ya kak jika ingin menghubungkan chat *ANONYMOUS*',
            footer: 'Klik button untuk menerima chat.',
            buttons: _0x522d3e,
            mentions: [_0x4fc5d4],
            headerType: 1,
          }
          _0x2b6d42.sendMessage(
            _0x421e25.data.penerima + '@s.whatsapp.net',
            _0x991b2a
          )
        }
      }
    } else {
      if (_0x9e786f === 'setnamabot') {
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'setnamebot',
            data: { nama_baru: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Ok siap ownerku*\n*Tulis nama bot baru ya*')
        } else {
          _0x5da978('nama bot nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x5dd6aa = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x5dd6aa.session === 'setnamebot') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x5dd6aa.data.nama_baru = _0x147c0b
          _0x5dd6aa.session = 'nama_barunya'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x5dd6aa, null, 3)
          )
          _0x5da978(
            '*SETNAMABOT SUKSES*\n_*ID:* @' +
              _0x20bf5a.split('@')[0] +
              '_\n_*Nama Lama:* ' +
              _0x4ed813.botName +
              '_\n_*Nama Baru:* ' +
              _0x5dd6aa.data.nama_baru +
              '_\n_*Waktu:* ' +
              _0x3553ae +
              ' WIB_'
          )
          await sleep(2000)
          _0x4ed813.botName = _0x5dd6aa.data.nama_baru
          fs.writeFileSync('./config.json', JSON.stringify(_0x4ed813, null, 2))
          await sleep(2000)
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'changename') {
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'changename',
            data: { nama_baru: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*namalu apa? biar bot ganti*')
        } else {
          _0x5da978('nama nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x33b45c = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x33b45c.session === 'changename') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x33b45c.data.nama_baru = _0x147c0b
          _0x33b45c.session = 'nama_barunya'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x33b45c, null, 3)
          )
          _0x5da978(
            '*SETNAMA SUKSES*\n_*ID:* @' +
              _0x20bf5a.split('@')[0] +
              '_\n_*Nama Lama:* ' +
              _0x586550('name', _0x20bf5a) +
              '_\n_*Nama Baru:* ' +
              _0x33b45c.data.nama_baru +
              '_\n_*Waktu:* ' +
              _0x3553ae +
              ' WIB_'
          )
          await sleep(1000)
          _0x3c95e5('\xB1name', _0x20bf5a, _0x33b45c.data.nama_baru)
          await sleep(2000)
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'bitly_short') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'bitly_shortlink',
            data: { trannss: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim url yang ingin di shortilink ke bitly.*\n\n*Contoh:* https://google.com'
          )
        } else {
          _0x5da978('Link url nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x442703 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x442703.session === 'bitly_shortlink') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x442703.data.trannss = _0x147c0b
          let _0x283b9d = await fetchJson(
            'https://danzzapi.xyz/api/shortlink/bitly?url=' +
              _0x442703.data.trannss +
              '&apikey=danzz'
          )
          if (_0x283b9d.status == false) {
            return _0x5da978('url tidak valid\nsilahkan kirim yg benar.')
          }
          _0x442703.session = 'input_texttttranss'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x442703, null, 3)
          )
          _0x5da978(
            '*SHORTLINK*\n\n*TYPE*\nhttps://bitly.com/\n\n*TIME*\n' +
              _0x8a0c17 +
              ' WIB\n\n*HASIL*\n' +
              _0x283b9d.result +
              '\n\n*ORIGINAL* \n' +
              _0x442703.data.trannss
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'tinyurl_short') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'tinyurl_shortlink',
            data: { trannss: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim url yang ingin di shortilink ke tinyurl.*\n\n*Contoh:* https://google.com'
          )
        } else {
          _0x5da978('Link url nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x49f931 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x49f931.session === 'tinyurl_shortlink') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x49f931.data.trannss = _0x147c0b
          let _0x2ce7af = await fetchJson(
            'https://danzzapi.xyz/api/shortlink/tinyurl?url=' +
              _0x49f931.data.trannss +
              '&apikey=danzz'
          )
          if (_0x2ce7af.status == false) {
            return _0x5da978('url tidak valid\nsilahkan kirim yg benar.')
          }
          _0x49f931.session = 'input_texttttranss'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x49f931, null, 3)
          )
          _0x5da978(
            '*SHORTLINK*\n\n*TYPE*\nhttps://tinyurl.com/\n\n*TIME*\n' +
              _0x8a0c17 +
              ' WIB\n\n*HASIL*\n' +
              _0x2ce7af.result +
              '\n\n*ORIGINAL* \n' +
              _0x49f931.data.trannss
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'cuttly_short') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'cuttly_shortlink',
            data: { trannss: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim url yang ingin di shortilink ke cuttly.*\n\n*Contoh:* https://google.com'
          )
        } else {
          _0x5da978('Link url nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0xaf2ada = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0xaf2ada.session === 'cuttly_shortlink') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0xaf2ada.data.trannss = _0x147c0b
          let _0x1534c5 = await fetchJson(
            'https://danzzapi.xyz/api/shortlink/cuttly?url=' +
              _0xaf2ada.data.trannss +
              '&apikey=danzz'
          )
          if (_0x1534c5.status == false) {
            return _0x5da978('url tidak valid\nsilahkan kirim yg benar.')
          }
          _0xaf2ada.session = 'input_texttttranss'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0xaf2ada, null, 3)
          )
          _0x5da978(
            '*SHORTLINK*\n\n*TYPE*\nhttps://cutt.ly/\n\n*TIME*\n' +
              _0x8a0c17 +
              ' WIB\n\n*HASIL*\n' +
              _0x1534c5.result +
              '\n\n*ORIGINAL* \n' +
              _0xaf2ada.data.trannss
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'translate') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'translate',
            data: { trannss: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim text yang ingin jadi translate ke inggris.*\n\n*Contoh:* Hai sayang'
          )
        } else {
          _0x5da978('Text nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x4cd678 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x4cd678.session === 'translate') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x4cd678.data.trannss = _0x147c0b
          var _0x40cb30 = await fetchJson(
            'https://api.popcat.xyz/translate?to=en&text=' +
              _0x4cd678.data.trannss
          )
          _0x4cd678.session = 'input_texttttranss'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x4cd678, null, 3)
          )
          _0x5da978(
            '*TRANSLATE*\n*IND :* ' +
              _0x4cd678.data.trannss +
              '\n*EN :* ' +
              _0x40cb30.translated
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'ytmp4') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'ytmp4',
            data: { url_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim Url/Link YouTube*\n\nContoh: https://youtu.be/watyplEMt90'
          )
        } else {
          _0x5da978('Url YouTube nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x6c80fe = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x6c80fe.session === 'ytmp4') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x6c80fe.data.url_nya = _0x147c0b
          var _0x20e1ca = await fetchJson(
              'https://saipulanuar.ga/api/download/ytmp4?url=' +
                _0x6c80fe.data.url_nya +
                '&apikey=jPHjZpQF'
            ),
            _0x13b220 = _0x20e1ca.result
          if (_0x20e1ca.status == 500) {
            return _0x5da978(
              '*Link yg kamu berikan tidak valid*\n*Silahkan kirim url yg valid&benar*'
            )
          }
          _0x6c80fe.session = 'input_urlytmp4'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x6c80fe, null, 3)
          )
          _0x5da978(
            '*YTMP4 DOWNLOAD*\n\n*title:* ' +
              _0x13b220.title +
              '\n*channel:* ' +
              _0x13b220.channel +
              '\n*published:* ' +
              _0x13b220.published +
              '\n*views:* ' +
              _0x13b220.views +
              '\n*type:* video/mp4\n\n_Sedang mengirim video.._'
          )
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              video: { url: _0x13b220.url },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
          if (_0x5aa762) {
            return _0x2b6d42.sendMessage(
              _0x449fcf,
              { text: 'Video sudah dikirim lewat chat pribadi bot.' },
              { quoted: _0x48a922 }
            )
          }
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'ytmp3') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'ytmp3',
            data: { url_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan kirim Url/Link YouTube*\n\nContoh: https://youtu.be/watyplEMt90'
          )
        } else {
          _0x5da978('Url YouTube nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x1e590f = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x1e590f.session === 'ytmp3') {
          if (_0x147c0b.length === 0) {
            return
          }
          _0x1e590f.data.url_nya = _0x147c0b
          var _0x2b3782 = await fetchJson(
              'https://saipulanuar.ga/api/download/ytmp3?url=' +
                _0x1e590f.data.url_nya +
                '&apikey=jPHjZpQF'
            ),
            _0x13b220 = _0x2b3782.result
          if (_0x2b3782.status == 500) {
            return _0x5da978(
              '*Link yg kamu berikan tidak valid*\n*Silahkan kirim url yg valid&benar*'
            )
          }
          _0x1e590f.session = 'input_urlytmp3'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x1e590f, null, 3)
          )
          _0x5da978(
            '*YTMP3 DOWNLOAD*\n\n*title:* ' +
              _0x13b220.title +
              '\n*channel:* ' +
              _0x13b220.channel +
              '\n*published:* ' +
              _0x13b220.published +
              '\n*views:* ' +
              _0x13b220.views +
              '\n*type:* audio/mp3\n\n_Sedang mengirim audio..._'
          )
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              audio: { url: _0x13b220.url },
              mimetype: 'audio/mpeg',
              fileName: _0x13b220.title + '.mp3',
            },
            { quoted: _0x48a922 }
          )
          if (_0x5aa762) {
            return _0x2b6d42.sendMessage(
              _0x449fcf,
              { text: 'Audio sudah dikirim lewat chat pribadi bot.' },
              { quoted: _0x48a922 }
            )
          }
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'stalknpm') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'stalknpm',
            data: { id_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim Username Npm*\n*Contoh:* hikki-me')
        } else {
          _0x5da978('Username npmnya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x4e27bd = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x4e27bd.session === 'stalknpm') {
          _0x4e27bd.data.id_nya = _0x147c0b
          var _0x57d710 = await fetchJson(
            'https://api.popcat.xyz/npm?q=' + _0x4e27bd.data.id_nya
          )
          if (_0x57d710.error) {
            return _0x5da978(
              'Username tidak ditemukan\nSilahkan kirim username Npm yg benar.'
            )
          }
          _0x4e27bd.session = 'use_npmstalk'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x4e27bd, null, 3)
          )
          var _0x420990 =
            '*NPM STALKER*\nname : ' +
            _0x57d710.name +
            '\nversion : ' +
            _0x57d710.version +
            '\ndescription : ' +
            _0x57d710.description +
            '\nauthor : ' +
            _0x57d710.author +
            '\nauthor_email : ' +
            _0x57d710.author_email +
            '\nlast_published : ' +
            _0x57d710.last_published +
            '\nmaintainers : ' +
            _0x57d710.maintainers +
            '\nrepository : ' +
            _0x57d710.repository +
            '\n\nkeywords : ' +
            _0x57d710.keywords
          _0x5da978(_0x420990)
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'stalkgithub') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'stalkgithub',
            data: { id_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim Username Github*')
        } else {
          _0x5da978('username nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x3ab4cf = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x3ab4cf.session === 'stalkgithub') {
          _0x3ab4cf.data.id_nya = _0x147c0b
          var _0x55c077 = await fetchJson(
            'https://api.github.com/users/' + _0x3ab4cf.data.id_nya
          )
          _0x3ab4cf.session = 'input_username_github'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x3ab4cf, null, 3)
          )
          let _0xc9ec77 =
            '*STALK-GITHUB*\nid : ' +
            _0x55c077.id +
            '\nlogin : ' +
            _0x55c077.login +
            '\nhtml_url : ' +
            _0x55c077.html_url +
            '\ntype : ' +
            _0x55c077.type +
            '\nname : ' +
            _0x55c077.name +
            '\nlocation : ' +
            _0x55c077.location +
            '\nbio : ' +
            _0x55c077.bio +
            '\npublic_repos : ' +
            _0x55c077.public_repos +
            '\nfollowers : ' +
            _0x55c077.followers +
            '\nfollowing : ' +
            _0x55c077.following +
            '\ncreated : ' +
            _0x55c077.created_at +
            '\nupdated : ' +
            _0x55c077.updated_at
          _0x5da978(_0xc9ec77)
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'besarkecil') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'besar_kecilnya',
            data: { text_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan tulis text yg ingin dijadiin besar dan kecil.*\n\n*Contoh:* hallo bro'
          )
        } else {
          _0x5da978('nomor nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x32956b = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x32956b.session === 'besar_kecilnya') {
          _0x32956b.data.text_nya = _0x147c0b
          _0x32956b.session = 'text_nya_cuy'
          var _0x1de0c8 = await fetchJson(
            'https://api.nataganz.com/api/random/besarkecil?text=' +
              _0x32956b.data.text_nya +
              '&apikey=Pasha'
          )
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x32956b, null, 3)
          )
          _0x5da978(
            '*BESAR KECIL*\n*Text:* ' +
              _0x32956b.data.text_nya +
              '\n*Hasil:* ' +
              _0x1de0c8.result.list
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'bilangangka') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'bilang_angkanya',
            data: { text_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan tulis number yg ingin dibilang.*\n\n*Contoh:* 1234'
          )
        } else {
          _0x5da978('nomor nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x2995d4 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x2995d4.session === 'bilang_angkanya') {
          if (_0x147c0b.length === 0) {
            return
          }
          if (isNaN(_0x147c0b)) {
            return _0x5da978('Hanya angka!')
          }
          _0x2995d4.data.text_nya = Number(_0x147c0b)
          _0x2995d4.session = 'text_nya_cuy'
          var _0x2f0eda = await fetchJson(
            'https://api.nataganz.com/api/random/bilangangka?text=' +
              _0x2995d4.data.text_nya +
              '&apikey=Pasha'
          )
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x2995d4, null, 3)
          )
          _0x5da978(
            '*BILANG ANGKA*\n*Nomor:* ' +
              _0x2995d4.data.text_nya +
              '\n*Hasil:* ' +
              _0x2f0eda.result.list
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'balikangka') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'balik_angkanya',
            data: { text_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan tulis number yg ingin dibalik.*\n\n*Contoh:* 1234'
          )
        } else {
          _0x5da978('nomor nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x10b966 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x10b966.session === 'balik_angkanya') {
          if (_0x147c0b.length === 0) {
            return
          }
          if (isNaN(_0x147c0b)) {
            return _0x5da978('Hanya angka!')
          }
          _0x10b966.data.text_nya = Number(_0x147c0b)
          _0x10b966.session = 'text_nya_cuy'
          var _0x556654 = await fetchJson(
            'https://api.nataganz.com/api/random/balikangka?text=' +
              _0x10b966.data.text_nya +
              '&apikey=Pasha'
          )
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x10b966, null, 3)
          )
          _0x5da978(
            '*BALIK ANGKA*\n*Nomor Asli:* ' +
              _0x10b966.data.text_nya +
              '\n*Nomor Hasil:* ' +
              _0x556654.result.list
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'balikhuruf') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'balik_hurufnya',
            data: { text_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978(
            '*Silahkan tulis text yg ingin dibalik.*\n\n*Contoh:* Ngetes'
          )
        } else {
          _0x5da978('text nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x4361f0 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x4361f0.session === 'balik_hurufnya') {
          _0x4361f0.data.text_nya = _0x147c0b
          _0x4361f0.session = 'text_nya_cuy'
          var _0x469056 = await fetchJson(
            'https://api.nataganz.com/api/random/balikhuruf?text=' +
              _0x4361f0.data.text_nya +
              '&apikey=Pasha'
          )
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x4361f0, null, 3)
          )
          _0x5da978(
            '*BALIK HURUF*\n*Text Asli:* ' +
              _0x4361f0.data.text_nya +
              '\n*Text Hasil:* ' +
              _0x469056.result.list
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'stalkff') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            ID: require('crypto').randomBytes(5).toString('hex').toUpperCase(),
            session: 'stalkff',
            data: { id_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim ID free fire kamu*')
        } else {
          _0x5da978('id ff nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x22e6b1 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x22e6b1.session === 'stalkff') {
          if (_0x147c0b.length === 0) {
            return
          }
          if (isNaN(_0x147c0b)) {
            return _0x5da978('Hanya angka!')
          }
          _0x22e6b1.data.id_nya = Number(_0x147c0b)
          let _0x2d71e1 = await stalkff(_0x22e6b1.data.id_nya)
          if (_0x2d71e1.status == 404) {
            return _0x5da978(
              '*Error ID tidak ditemukan*\n*Silahkan kirim ID yg valid*'
            )
          }
          _0x22e6b1.session = 'input_id_ff'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x22e6b1, null, 3)
          )
          _0x5da978(
            '*STALKER FF*\n*ID:* ' +
              _0x22e6b1.data.id_nya +
              '\n*Username:* ' +
              _0x2d71e1.nickname
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'tiktok') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            session: 'TIKTOK',
            data: { url_tiktok: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim link/url tiktoknya*')
        } else {
          _0x5da978('Url tiktok nya mana kak?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x5b2cbc = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x5b2cbc.session === 'TIKTOK') {
          _0x5b2cbc.data.url_tiktok = isUrl(_0x147c0b)
          var _0x2c6eeb = await fetchJson(
            'https://saipulanuar.ga/api/download/tiktok2?url=' +
              _0x147c0b +
              '&apikey=jPHjZpQF'
          )
          _0x5b2cbc.session = 'masukan_urlnyaabro'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x5b2cbc, null, 3)
          )
          _0x5da978(
            '*TIKTOK DOWNLOAD*\n\n*Author:* Lexxy Official\n*Judul:* ' +
              _0x2c6eeb.result.judul +
              '\n*Source:* ' +
              _0x147c0b +
              '\n\nVideo dan audio sedang dikirim...'
          )
          await sleep(2000)
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              video: { url: _0x2c6eeb.result.video.link1 },
              caption: 'No Watermark!',
            },
            { quotes: _0x48a922 }
          )
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              audio: { url: _0x2c6eeb.result.audio.link1 },
              mimetype: 'audio/mpeg',
              fileName: 'audio.mp3',
            },
            { quoted: _0x48a922 }
          )
          if (_0x5aa762) {
            return _0x2b6d42.sendMessage(
              _0x449fcf,
              { text: 'Media sudah dikirim lewat chat pribadi bot.' },
              { quoted: _0x48a922 }
            )
          }
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'tahta_maker') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            session: 'tahta',
            data: { nulis_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim nama yang mau ditulis.*')
        } else {
          _0x5da978('Namanya apa?')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0xd09450 = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0xd09450.session === 'tahta') {
          _0xd09450.data.nulis_nya = _0x147c0b
          _0xd09450.session = 'tahta_yexftt'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0xd09450, null, 3)
          )
          _0x5da978('Wait sedang menulis..')
          var _0x368a40 =
            'https://leyscoders-api.herokuapp.com/api/harta-tahta?text=' +
            _0xd09450.data.nulis_nya +
            '&apikey=IkyOgiwara'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x368a40 },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    } else {
      if (_0x9e786f === 'sadcat') {
        if (!fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
          var _0x127b93 = {
            session: 'sadcat',
            data: { nulis_nya: '' },
          }
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x127b93, null, 2)
          )
          _0x5da978('*Silahkan kirim text yang mau ditulis.*')
        } else {
          _0x5da978('Text yg mau jadiin sadcat mana??')
        }
      }
    }
    if (fs.existsSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')) {
      if (!_0x147c0b.startsWith(_0x250b36) && !_0x48a922.key.fromMe) {
        let _0x14481b = JSON.parse(
          fs.readFileSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        )
        if (_0x14481b.session === 'sadcat') {
          _0x14481b.data.nulis_nya = _0x147c0b
          _0x14481b.session = 'masukan_texcatt'
          fs.writeFileSync(
            _0x197af6 + _0x20bf5a.split('@')[0] + '.json',
            JSON.stringify(_0x14481b, null, 3)
          )
          _0x5da978('Wait sedang bikin makernya..')
          var _0x331e26 =
            'https://api.popcat.xyz/sadcat?text=' + _0x14481b.data.nulis_nya
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x331e26 },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
          fs.unlinkSync(_0x197af6 + _0x20bf5a.split('@')[0] + '.json')
        }
      }
    }
    msgFilter.ResetSpam(orang_spam)
    const _0x5d69ef = () => {
        console.log(
          color('~>[SPAM]', 'red'),
          color(
            moment(_0x48a922.messageTimestamp * 1000).format(
              'DD/MM/YY HH:mm:ss'
            ),
            'yellow'
          ),
          color(_0x9e786f + ' [' + _0x2bc027.length + ']'),
          'from',
          color(_0x481174)
        )
        msgFilter.addSpam(_0x20bf5a, orang_spam)
        _0x5da978(
          'Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik'
        )
      },
      _0x18e5c9 = () => {
        console.log(
          color('~>[SPAM]', 'red'),
          color(
            moment(_0x48a922.messageTimestamp * 1000).format(
              'DD/MM/YY HH:mm:ss'
            ),
            'yellow'
          ),
          color(_0x9e786f + ' [' + _0x2bc027.length + ']'),
          'from',
          color(_0x481174),
          'in',
          color(_0x50fb79)
        )
        msgFilter.addSpam(_0x20bf5a, orang_spam)
        _0x5da978(
          'Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik'
        )
      }
    if (_0x2804c4 && msgFilter.isFiltered(_0x20bf5a) && !_0x5aa762) {
      return _0x5d69ef()
    }
    if (_0x2804c4 && msgFilter.isFiltered(_0x20bf5a) && _0x5aa762) {
      return _0x18e5c9()
    }
    if (_0x2804c4 && _0x2bc027.length < 1 && !_0x37b2fc) {
      msgFilter.addFilter(_0x20bf5a)
    }
    if (_0x20bf5a.startsWith('212')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('91')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('92')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('90')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('54')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('55')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('40')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('94')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    if (_0x20bf5a.startsWith('60')) {
      return _0x2b6d42.updateBlockStatus(_0x20bf5a, 'block')
    }
    _0x5aa762 &&
      _0x2804c4 &&
      !_0x324d73 &&
      console.log(
        colors.green.bold('[Group]') +
          ' ' +
          colors.brightCyan(_0x8a0c17) +
          ' ' +
          colors.black.bgYellow(_0x9e786f) +
          ' ' +
          colors.green('from') +
          ' ' +
          colors.blue(_0x50fb79)
      )
    !_0x5aa762 &&
      _0x2804c4 &&
      !_0x324d73 &&
      console.log(
        colors.green.bold('[Private]') +
          ' ' +
          colors.brightCyan(_0x8a0c17) +
          ' ' +
          colors.black.bgYellow(_0x9e786f) +
          ' ' +
          colors.green('from') +
          ' ' +
          colors.blue(_0x481174)
      )
    switch (_0x9e786f) {
      case 'verify':
        {
          if (_0x586550('id', _0x20bf5a) !== null) {
            return _0x5da978('Kamu sudah terdaftar !!')
          }
          var _0xfd71ed = '' + makeid(10),
            _0x3ed82d = '#GR' + makeid(5)
          let _0xb720c3 = {
            id: _0x20bf5a,
            name: _0x3ed82d,
            seri: _0xfd71ed,
            premium: false,
          }
          db_user.push(_0xb720c3)
          fs.writeFileSync(
            './database/pengguna.json',
            JSON.stringify(db_user, 2, null)
          )
          _0xe03415(
            '\uD835\uDDAC\uD835\uDDBE\uD835\uDDC6\uD835\uDDCE\uD835\uDDBA\uD835\uDDCD \uD835\uDDB4\uD835\uDDCC\uD835\uDDBE\uD835\uDDCB @' +
              _0x20bf5a.split('@')[0],
            [_0x20bf5a]
          )
          await sleep(1500)
          var _0x169c87 =
              '\u2500\u2500\u2500\u300C \uD835\uDDE7\uD835\uDDD8\uD835\uDDE5\uD835\uDDE9\uD835\uDDD8\uD835\uDDE5\uD835\uDDDC\uD835\uDDD9\uD835\uDDDC\uD835\uDDDE\uD835\uDDD4\uD835\uDDE6\uD835\uDDDC \u300D\u2500\u2500\u2500\u2500\n\n\u25CB ID : @' +
              _0x20bf5a.split('@')[0] +
              '\n\u25CB Name : ' +
              _0x3ed82d +
              '\n\u25CB Seri : ' +
              _0xfd71ed +
              '\n\nsilahkan ketik #rules\nuntuk membaca rules bot\n',
            _0x3b0224 = {
              text: _0x169c87,
              footer: 'Klik button untuk melihat menu',
              mentions: [_0x20bf5a],
              buttons: [
                {
                  buttonId: '#menu',
                  buttonText: {
                    displayText:
                      '️\u22EE\u2630 \uD835\uDDE0\uD835\uDDD8\uD835\uDDE1\uD835\uDDE8',
                  },
                  type: 1,
                },
              ],
              headerType: 1,
            }
          _0x2b6d42.sendMessage(_0x449fcf, _0x3b0224, { quoted: _0x48a922 })
          await sleep(1000)
          var _0x473e07 =
            '\uD835\uDE4D\uD835\uDE40\uD835\uDE42\uD835\uDE44\uD835\uDE4E\uD835\uDE4F\uD835\uDE40\uD835\uDE4D \uD835\uDE50\uD835\uDE4E\uD835\uDE40\uD835\uDE4D\n\u25CB ID : ' +
            _0x20bf5a.split('@')[0] +
            '\n\u25CB Seri : ' +
            _0xfd71ed +
            '\n\u25CB Name : ' +
            _0x3ed82d +
            '\n\u25CB Terdaftar : ' +
            db_user.length
          _0x2b6d42.sendMessage('' + _0x4ed813.ownerNumber, { text: _0x473e07 })
        }
        break
      case 'iklan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          var _0x454182 = '```',
            _0x536c3a =
              '\n_Utamakan chat to the point_ \uD83D\uDE80\n\n*_Admin hanya melayani chat_*\n*_Seputar lincxlnbot & transaksi_*\n\n' +
              _0x454182 +
              'Telpon/Spam blokir \uD83D\uDEAB' +
              _0x454182 +
              '\n\n_Admin 1 : 085694756102_\n_Admin 2 : 082322097449_\n\n*SCRIPT BOT \uD83D\uDED2*\n_Rp50.000 - ( Topup & Fitur 300+ )_\n_Rp100.000 - ( Topup & Fitur 600+ )_\n\n*_Ready Nokos Whatsapp +1_*\n*_Harga Murah? Chat Admin_*\n*_Open Stok Terbatas\u26A0️_*\n\n*_VIA : DANA/OVO/QRIS_*\n\n*Minta SV? Sebut Nama \uD83D\uDE4F*\n*No Admin Reall Hanya*\n*Di Atas, Selain Itu Clone*\u203C️\n'
          _0x5da978(_0x536c3a)
        }
        break
      case 'menu':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          const _0x30b3ce = String.fromCharCode(8206),
            _0x1f9c9d = _0x30b3ce.repeat(4001)
          var _0x354125 = 1
          let _0xda397b = '' + _0x586550('name', _0x20bf5a),
            _0x134e56 =
              '' + (_0x586550('premium', _0x20bf5a) ? 'Aktif' : 'Tidak'),
            _0x4e4654 = '' + ('id', db_user).length,
            _0x4ab9f9 = '' + db_menfes.length
          const _0x4c59c1 = '6285694756102@s.whatsapp.net',
            _0x54e77b = _0x4ed813.ownerNumber,
            _0x2c82b5 = '0@s.whatsapp.net'
          var _0x2a7092 =
              '\uD835\uDC77\uD835\uDC90\uD835\uDC98\uD835\uDC86\uD835\uDC93\uD835\uDC86\uD835\uDC85 \uD835\uDC69\uD835\uDC9A @' +
              _0x2c82b5.split('@')[0],
            _0x4ded94 =
              '' +
              listmenu(
                _0x20bf5a,
                _0x250b36,
                1,
                _0xda397b,
                _0x134e56,
                _0x4e4654,
                _0x4ab9f9,
                _0x2d6236,
                _0x3553ae
              )
          let _0x58986f = [
            {
              buttonId: _0x250b36 + 'groupbot',
              buttonText: {
                displayText:
                  '\u22EE\u2630 \uD835\uDDDA\uD835\uDDE5\uD835\uDDE2\uD835\uDDE8\uD835\uDDE3',
              },
              type: 1,
            },
            {
              buttonId: _0x250b36 + 'owner',
              buttonText: {
                displayText:
                  '\u22EE\u2630 \uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDD8\uD835\uDDE5',
              },
              type: 1,
            },
            {
              buttonId: _0x250b36 + 'rules',
              buttonText: {
                displayText:
                  '\u22EE\u2630 \uD835\uDDE5\uD835\uDDE8\uD835\uDDDF\uD835\uDDD8\uD835\uDDE6',
              },
              type: 1,
            },
          ]
          var _0x21bdf0 = {
            text: _0x4ded94,
            footer: _0x2a7092,
            buttons: _0x58986f,
            mentions: [_0x20bf5a, _0x2c82b5],
            headerType: 1,
          }
          _0x2b6d42.sendMessage(_0x449fcf, _0x21bdf0)
        }
        break
      case 'donate':
      case 'donasi':
        {
          let _0x2adb6e = '' + _0x586550('name', _0x20bf5a)
          _0x5da978(donasiBot(_0x2adb6e, _0x3324b5))
        }
        break
      case 'infoowner':
      case 'ownerinfo':
        {
          _0x5da978(infoOwner())
        }
        break
      case 'infogempa':
        fetchJson('https://saipulanuar.ga/api/info/gempa?apikey=jPHjZpQF').then(
          (_0x252558) => {
            _0x5da978(
              '*INFO GEMPA*\n\n*tanggal:* ' +
                _0x252558.result.tanggal +
                '\n*jam:* ' +
                _0x252558.result.jam +
                '\n*datetime:* ' +
                _0x252558.result.datetime +
                '\n*coordinates:* ' +
                _0x252558.result.coordinates +
                '\n*lintang:* ' +
                _0x252558.result.lintang +
                '\n*bujur:* ' +
                _0x252558.result.bujur +
                '\n*magnitude:* ' +
                _0x252558.result.magnitude +
                '\n*kedalaman:* ' +
                _0x252558.result.kedalaman +
                '\n*wilayah:* ' +
                _0x252558.result.wilayah +
                '\n*potensi:* ' +
                _0x252558.result.potensi +
                '\n*dirasakan:* ' +
                _0x252558.result.dirasakan
            )
          }
        )
        break
      case 'wikimedia':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978('Contoh:\n#wikimedia viral')
          }
          fetchJson(
            'https://saipulanuar.ga/api/search/wikimedia?query=' +
              _0x22838f +
              '&apikey=jPHjZpQF'
          ).then((_0x47aa2b) => {
            var _0x5ec2a7 =
              '*WIKIMEDIA SEARCH*\n*title:* ' +
              _0x47aa2b.result.title +
              '\n*source:* ' +
              _0x47aa2b.result.source +
              '\n*author:* wikimedia'
            _0x2b6d42.sendMessage(
              _0x449fcf,
              {
                image: { url: _0x47aa2b.result.image },
                caption: _0x5ec2a7,
              },
              { quoted: _0x48a922 }
            )
          })
        }
        break
      case 'joker':
      case 'digital':
      case 'nulis':
      case 'nulis2':
      case 'quoteser':
      case 'quobucin':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Contoh:\n' + (_0x250b36 + _0x9e786f) + ' saya bukan wibu'
            )
          }
          _0x5da978(mess.wait)
          var _0x49eca7 =
            'https://saipulanuar.ga/api/textmaker/' +
            _0x9e786f +
            '?text=' +
            _0x22838f +
            '&apikey=jPHjZpQF'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x49eca7 },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'attp2':
      case 'attp':
      case 'ttp2':
      case 'ttp':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Contoh:\n' + (_0x250b36 + _0x9e786f) + ' saya wibu'
            )
          }
          var _0x4dc3e3 = await getBuffer(
            'https://saipulanuar.ga/api/maker/' +
              _0x9e786f +
              '?text=' +
              _0x22838f +
              '&apikey=jPHjZpQF'
          )
          fs.writeFileSync('getpp.jpeg', _0x4dc3e3)
          await ffmpeg('getpp.jpeg')
            .input('getpp.jpeg')
            .on('error', function (_0x1d20bc) {
              only('error', _0x2b6d42, _0x449fcf)
            })
            .on('end', function () {
              _0x2b6d42.sendMessage(_0x449fcf, {
                sticker: { url: './getpp.webp' },
                mimetype: 'image/webp',
              })
            })
            .addOutputOptions([
              '-vcodec',
              'libwebp',
              '-vf',
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
            ])
            .toFormat('webp')
            .save('./getpp.webp')
          await sleep(5000)
          fs.unlinkSync('./getpp.jpeg')
          fs.unlinkSync('./getpp.webp')
        }
        break
      case 'pinterest':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978('Contoh:\n' + (_0x250b36 + _0x9e786f) + ' loli')
        }
        _0x5da978(mess.wait),
          fetchJson(
            'https://saipulanuar.ga/api/search/pinterest?query=' +
              _0x22838f +
              '&apikey=jPHjZpQF'
          ).then((_0x311e11) => {
            var _0x44b8c0 = pickRandom(_0x311e11.result)
            _0x2b6d42.sendMessage(
              _0x449fcf,
              {
                image: { url: _0x44b8c0 },
                caption: 'Done *' + _0x22838f + '*',
              },
              { quoted: _0x48a922 }
            )
          })
        break
      case 'tts':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Contoh:\n' + (_0x250b36 + _0x9e786f) + ' hallo bro'
            )
          }
          var _0x1b0748 =
            'https://saipulanuar.ga/api/text-to-audio/tts?text=' +
            _0x22838f +
            '&idbahasa=id&apikey=jPHjZpQF'
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              audio: { url: _0x1b0748 },
              mimetype: 'audio/mpeg',
              ptt: true,
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'playmp3':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978('*Contoh:*\n#playmp3 preset angel baby 30 detik')
        }
        fetchJson(
          'https://api-yogipw.herokuapp.com/api/yt/playmp3?query=' + _0x22838f
        ).then((_0x521397) => {
          var _0x5b1118 =
            '*YOUTUBE PLAYMP3*\n\n*title:* ' +
            _0x521397.title +
            '\n*channel:* ' +
            _0x521397.channel +
            '\n*published:* ' +
            _0x521397.published +
            '\n*views:* ' +
            _0x521397.views +
            '\n*type:* audio/mp3\n\nMedia sedang dikirim.'
          _0x5da978(_0x5b1118)
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              audio: { url: _0x521397.url },
              mimetype: 'audio/mpeg',
              fileName: _0x521397.title + 'mp3',
            },
            { quoted: _0x48a922 }
          )
          if (_0x5aa762) {
            return _0x5da978('Media sudah dikirim dichat pribadi.')
          }
        })
        break
      case 'soundcloud':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978(
            '*Contoh:*\n#soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
          )
        }
        var _0x5bdcbf = _0x22838f
        _0x5da978(mess.wait),
          fetchJson(
            'https://saipulanuar.ga/api/download/soundcloud?url=' +
              _0x5bdcbf +
              '&apikey=jPHjZpQF'
          ).then((_0x4d25af) => {
            _0x5da978(
              '*SOUNDCLOUD DOWNLOAD*\n\n*author:* Lexxy Official\n*title:* ' +
                _0x4d25af.result.title +
                '\n*duration:* ' +
                _0x4d25af.result.duration +
                '\n*quality:* ' +
                _0x4d25af.result.quality +
                '\n\nAudio sedang dikirim...\n\n*Note:*\njika reply message status undefined\nitu artinya url tidak ditemukan.'
            )
            _0x2b6d42.sendMessage(
              _0x20bf5a,
              {
                audio: { url: _0x4d25af.result.download },
                mimetype: 'audio/mpeg',
                fileName: _0x4d25af.result.title + 'mp3',
              },
              { quoted: _0x48a922 }
            )
            if (_0x5aa762) {
              return _0x5da978('Audio sudah dikirim dichat pribadi.')
            }
          })
        break
      case 'playmp4':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978('*Contoh:*\n#playmp4 preset angel baby 30 detik')
        }
        fetchJson(
          'https://api-yogipw.herokuapp.com/api/yt/playmp4?query=' + _0x22838f
        ).then((_0x5702e9) => {
          var _0x14aa98 =
            '*YOUTUBE PLAYMP4*\n\n*title:* ' +
            _0x5702e9.title +
            '\n*channel:* ' +
            _0x5702e9.channel +
            '\n*published:* ' +
            _0x5702e9.published +
            '\n*views:* ' +
            _0x5702e9.views +
            '\n*type:* video/mp4\n\nMedia sedang dikirim.'
          _0x5da978(_0x14aa98)
          _0x2b6d42.sendMessage(
            _0x20bf5a,
            {
              video: { url: _0x5702e9.url },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
          if (_0x5aa762) {
            return _0x5da978('Media sudah dikirim dichat pribadi.')
          }
        })
        break
      case 'mediafire':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978(
            '*Contoh:*\n#mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file'
          )
        }
        let _0x5adc7e = _0x22838f.match(
          /(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/
        )
        if (!_0x5adc7e) {
          return _0x5da978('Link yang kamu berikan tidak valid')
        }
        _0x5da978('*Mengunduh Media...*')
        let _0x47b817 = await mediafireDl('' + _0x5adc7e)
        if (_0x47b817[0].size.split('MB')[0] >= 100) {
          return _0x5da978('File Melebihi Batas ' + util.format(_0x47b817))
        }
        let _0x5affb6 =
          '-----[ *MEDIAFIRE DOWNLOADER* ]-----\n\n*Name* : ' +
          _0x47b817[0].nama +
          '\n*Size* : ' +
          _0x47b817[0].size +
          '\n*Type* : ' +
          _0x47b817[0].mime +
          '\n\n_Wait Mengirim file..._\n'
        _0x5da978(_0x5affb6)
        if (_0x5aa762) {
          return _0x5da978('*document udah dikirim ke chat pribadi bot.*')
        }
        _0x2b6d42
          .sendMessage(
            _0x20bf5a,
            {
              document: { url: _0x47b817[0].link },
              fileName: _0x47b817[0].nama,
              mimetype: _0x47b817[0].mime,
            },
            { quoted: _0x48a922 }
          )
          .catch((_0x2f7a7f) => _0x5da978('Gagal saat mendownload File'))
        break
      case 'grupbot':
      case 'groupbot':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        _0x5da978(_0x4ed813.group.judul + '\n' + _0x4ed813.group.link)
        break
      case 'infobot':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        _0x5da978(
          '\uD835\uDDD5\uD835\uDDE2\uD835\uDDE7 \uD835\uDDDC\uD835\uDDE1\uD835\uDDD9\uD835\uDDE2\n\u2022 Author : @' +
            _0x250ca4.split('@')[0] +
            '\n\u2022 Owner : ' +
            _0x4ed813.ownerName +
            '\n\u2022 Botname : ' +
            _0x4ed813.botName +
            '\n\u2022 Library : Baileys-MD\n\u2022 Time : ' +
            _0x3553ae +
            ' WIB\n\u2022 Date : ' +
            _0x2d6236 +
            '\n\u2022 Terdaftar : ( ' +
            ('id', db_user).length +
            ' )\n\u2022 Room Chat : ( ' +
            db_menfes.length +
            ' )'
        )
        break
      case 'ssweb-pc':
      case 'ssweb-hp':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Masukan parameter url\n*Contoh:*\n' +
                (_0x250b36 + _0x9e786f) +
                ' https://google.com'
            )
          }
          _0x5da978(mess.wait)
          let _0x5a0814 =
            'https://leyscoders-api.herokuapp.com/api/' +
            _0x9e786f +
            '?url=' +
            _0x22838f +
            '&apikey=IkyOgiwara'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x5a0814 },
              caption: 'Done!',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'setapikey':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (!_0x22838f) {
          return _0x5da978('*Contoh:*\n#setfooter apikey_atlantic')
        }
        ;(_0x4ed813.apikey_antlatic = _0x22838f),
          fs.writeFileSync('./config.json', JSON.stringify(_0x4ed813, null, 2)),
          _0x5da978('Sukses mengganti apikey')
        break
      case 'apikey':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        _0x5da978(_0x4ed813.apikey_antlatic)
        break
      case 'setfooter':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Masukan parameter text\n*Contoh:*\n#setfooter ' + _0x4ed813.footer
          )
        }
        ;(_0x4ed813.footer = _0x22838f),
          fs.writeFileSync('./config.json', JSON.stringify(_0x4ed813, null, 2)),
          _0x5da978('Sukses mengganti footer')
        break
      case 'runtime':
      case 'tes':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        _0x5da978('*Runtime :* ' + runtime(process.uptime()))
        break
      case 'rules':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x5d170e = '' + rulesBot()
          _0x2b6d42.sendMessage(_0x449fcf, { text: _0x5d170e })
        }
        break
      case 'user':
      case 'db':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          let _0xd65874 = JSON.parse(
              fs.readFileSync('./database/pengguna.json')
            ),
            _0x112ec4 = 1,
            _0x4dbfe7 =
              '*INFO-DASHBOARD*\n\n*\u2022 Terdaftar :* ( ' +
              ('id', db_user).length +
              ' )\n*\u2022 Room Chat :* ( ' +
              db_menfes.length +
              ' )\n\n'
          for (let _0x14b24a of _0xd65874) {
            _0x4dbfe7 +=
              '*User' +
              _0x112ec4++ +
              ' ' +
              _0x14b24a.name +
              '*\n*ID: @' +
              _0x14b24a.id.split('@')[0] +
              '*\n*Premium: ' +
              (_0x14b24a.premium ? 'aktif' : 'tidak') +
              '*\n\n'
          }
          _0x5da978(_0x4dbfe7)
        }
        break
      case 'addprem':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978('*Contoh:*\n#addprem 628xxx')
          }
          var _0x320b2d = _0x22838f + '@s.whatsapp.net'
          if (_0x586550('id', _0x320b2d) == null) {
            return _0x5da978('User tersebut tidak terdaftar di database')
          }
          if (_0x586550('premium', _0x320b2d) == true) {
            return _0x5da978('User tersebut sudah premium')
          }
          _0x3c95e5('\xB1premium', _0x320b2d, true)
          _0x5da978(
            '*PREMIUM*\n*ID:* @' + _0x320b2d.split('@')[0] + '\n*Status:* aktif'
          )
        }
        break
      case 'delprem':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978('*Contoh:*\n#delprem 628xxx')
          }
          var _0x320b2d = _0x22838f + '@s.whatsapp.net'
          if (_0x586550('id', _0x320b2d) == null) {
            return _0x5da978('User tersebut tidak terdaftar di database')
          }
          if (_0x586550('premium', _0x320b2d) == false) {
            return _0x5da978('User tersebut tidak premium')
          }
          _0x3c95e5('\xB1premium', _0x320b2d, false)
          _0x5da978(
            '*PREMIUM*\n*ID:* @' + _0x320b2d.split('@')[0] + '\n*Status:* tidak'
          )
        }
        break
      case 'owner':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          var _0x555e80 = _0x4ed813.ownerNumber
          _0x3a8ea1(_0x449fcf, _0x555e80, _0x4ed813.ownerName, _0x48a922)
        }
        break
      case 'room':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          var _0x4d158e =
              '*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ' + anonymous.length + '*\n\n',
            _0x354125 = 1
          for (let _0x3c86aa of anonymous) {
            _0x4d158e +=
              '*ID ROOM ' +
              _0x3c86aa.id +
              '*\n*CHAT1: @' +
              _0x3c86aa.a.split('@')[0] +
              '*\n*CHAT2: @' +
              _0x3c86aa.b.split('@')[0] +
              '*\n*STATUS: ' +
              _0x3c86aa.state +
              '*\n\n'
          }
          _0x5da978(_0x4d158e)
        }
        break
      case 'daftarprem':
        _0xe03415(
          '*Ingin Jadi Premium?*\n*Silahkan Pilih Waktu Nya*\n\n*List Harga*\nRp5.000 \u203A 5day\nRp10.000 \u203A 10day\nRp15.000 \u203A 15day\nRp20.000 \u203A 20day\n\n*Dan Seterusnya...*\n*day \u203A hari*\n\n*Keuntungan Premium*\n- _Bisa Add Bot 1 Group_\n- _Bisa Gunain Fitur Premium_\n\n*Minat Jadi Premium?*\n*Hubungi Owner*\n@' +
            _0x4ed813.ownerNumber.split('@')[0],
          [_0x20bf5a]
        )
        break
      case 'sewabot':
        _0xe03415(
          '*SEWA BOT*\n\n*List Harga*\nRp3.000 \u203A 5day\nRp5.000 \u203A 10day\nRp7.000 \u203A 15day\nRp10.000 \u203A 20day\nRp15.000 \u203A 30day\n\n*day \u203A hari*\n\n*Keuntungan Sewabot*\n- _Bisa Add Bot 1 Group_\n- _Bisa Gunain Fitur Admin_\n\n*Minat Sewabot?*\n*Hubungi Owner*\n@' +
            _0x4ed813.ownerNumber.split('@')[0],
          [_0x20bf5a]
        )
        break
      case 'cekprem':
        {
          _0xe03415(
            '*CEK PREMIUM*\n_\u2022 ID : @' +
              _0x586550('id', _0x20bf5a).split('@')[0] +
              '_\n_\u2022 Status : ' +
              (_0x586550('premium', _0x20bf5a) ? 'Aktif' : 'Tidak') +
              '_',
            [_0x20bf5a]
          )
        }
        break
      case 'resetdb':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          db_user.splice('[]')
          fs.writeFileSync(
            './database/pengguna.json',
            JSON.stringify(db_user, null, 1)
          )
          await sleep(1000)
          db_menfes.splice('[]')
          fs.writeFileSync(
            './database/menfess.json',
            JSON.stringify(db_menfes, null, 1)
          )
          _0x5da978('Sukses restart database')
        }
        break
      case 'resetlist':
        db_respon_list.splice('[]'),
          fs.writeFileSync(
            './database/db_ListMessage',
            JSON.stringify(db_respon_list, null, 1)
          ),
          _0x5da978('Sukses Reset List Message')
        break
      case 'bctext':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Masukan parameter text\n*Contoh:*\n' +
                (_0x250b36 + _0x9e786f) +
                ' hallo'
            )
          }
          let _0x46a2a3 = JSON.parse(
              fs.readFileSync('./database/pengguna.json')
            ),
            _0x25b2f0 = '' + _0x22838f
          for (let _0x57b4ea of _0x46a2a3) {
            var _0x3efdee = {
              text: _0x25b2f0,
              footer: '\xA9broadcast',
              buttons: [
                {
                  buttonId: '!menu',
                  buttonText: {
                    displayText:
                      '\u22EE\u2630 \uD835\uDDE0\uD835\uDDD8\uD835\uDDE1\uD835\uDDE8',
                  },
                  type: 1,
                },
              ],
              headerType: 1,
            }
            _0x2b6d42.sendMessage(_0x57b4ea.id, _0x3efdee)
            await sleep(2000)
          }
          _0x5da978(
            '*Sukses mengirim broadcast text ke ' + _0x46a2a3.length + ' user*'
          )
        }
        break
      case 'bcvideo':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (_0x847593 || _0x46306e) {
            await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'video',
              './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
            )
            _0x5da978(mess.wait)
            var _0x4109ca =
              './sticker/' + _0x4ed813.ownerNumber.split('@')[0] + '.mp4'
            for (let _0x30d88a of db_user) {
              _0x2b6d42.sendMessage(_0x30d88a.id, {
                video: { url: _0x4109ca },
                caption: '*\xA9broadcast*',
              })
              await sleep(2000)
            }
            _0x5da978(
              '*Sukses mengirim broadcast video ke ' + db_user.length + ' user*'
            )
            fs.unlinkSync(_0x4109ca)
          } else {
            _0x5da978(
              '*kirim video dengan caption ' +
                (_0x250b36 + _0x9e786f) +
                ' atau reply video dengan pesan ' +
                (_0x250b36 + _0x9e786f) +
                '*'
            )
          }
        }
        break
      case 'bcimage':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (_0x1978fe || _0x3f6a6a) {
            await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'image',
              './sticker/' + _0x20bf5a.split('@')[0] + '.jpg'
            )
            _0x5da978(mess.wait)
            var _0x2b16aa =
              './sticker/' + _0x4ed813.ownerNumber.split('@')[0] + '.jpg'
            for (let _0x2b466b of db_user) {
              _0x2b6d42.sendMessage(_0x2b466b.id, {
                image: { url: _0x2b16aa },
                caption: '*\xA9broadcast*',
              })
              await sleep(2000)
            }
            _0x5da978(
              '*Sukses mengirim broadcast image ke ' + db_user.length + ' user*'
            )
            fs.unlinkSync(_0x2b16aa)
          } else {
            _0x5da978(
              '*kirim gambar dengan caption ' +
                (_0x250b36 + _0x9e786f) +
                ' atau reply gambar dengan pesan ' +
                (_0x250b36 + _0x9e786f) +
                '*'
            )
          }
        }
        break
      case 'bcaudio':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (_0x586d49) {
            await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x20bf5a.split('@')[0] + '.mp3'
            )
            _0x5da978(mess.wait)
            var _0x151867 =
              './sticker/' + _0x4ed813.ownerNumber.split('@')[0] + '.mp3'
            for (let _0x38fa3b of db_user) {
              _0x2b6d42.sendMessage(_0x38fa3b.id, {
                audio: { url: _0x151867 },
                mimetype: 'audio/mpeg',
                fileName: 'bcaudio.mp3',
              })
              await sleep(2000)
            }
            _0x5da978(
              '*Sukses mengirim broadcast audio ke ' + db_user.length + ' user*'
            )
            fs.unlinkSync(_0x151867)
          } else {
            _0x5da978(
              '*reply audio dengan pesan ' + (_0x250b36 + _0x9e786f) + '*'
            )
          }
        }
        break
      case 'bc':
      case 'siaran':
      case 'broadcast':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        _0x5da978(
          '*BROADCAST*\n\n*Type Text*\n*Example:* \n#bctext <text>\n\n*Type Audio*\n*Example:*\n#bcaudio <reply audio>\n\n*Type Video*\n*Example:*\n#bcvideo <reply video>\n\n*Type Image*\n*Example:*\n#bcimage <reply image>\n\n_Broadcast \u203A Chat All User_'
        )
        break
      case 'setexif':
      case 'setwm':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978('*Contoh:*\n#setwm pack|author')
          }
          let _0x3b4bca = _0x22838f.split('|')[0],
            _0x3b38f9 = _0x22838f.split('|')[1]
          if (!_0x3b4bca) {
            return _0x5da978('*Contoh:*\n#setwm pack|author')
          }
          if (!_0x3b38f9) {
            return _0x5da978('*Contoh:*\n#setwm pack|author')
          }
          exif.create(_0x3b4bca, _0x3b38f9)
          _0x5da978('Sukses membuat exif')
        }
        break
      case 'buat_room_chat':
        {
          var _0x75cf2 = _0x22838f.split('|')[0],
            _0x10a587 = _0x22838f.split('|')[1],
            _0x26c89a = _0x22838f.split('|')[2]
          db_menfes.push({
            id: _0x75cf2,
            teman: _0x10a587,
          })
          fs.writeFileSync(
            './database/menfess.json',
            JSON.stringify(db_menfes, 2, null)
          )
          db_menfes.push({
            id: _0x10a587,
            teman: _0x75cf2,
          })
          fs.writeFileSync(
            './database/menfess.json',
            JSON.stringify(db_menfes, 2, null)
          )
          var _0x1f1c50 =
              '\uD835\uDDD6\uD835\uDDF5\uD835\uDDEE\uD835\uDE01 \uD835\uDDD4\uD835\uDDFB\uD835\uDDFC\uD835\uDDFB\uD835\uDE06\uD835\uDDFA\uD835\uDDFC\uD835\uDE02\uD835\uDE00 \uD835\uDDE7\uD835\uDDF2\uD835\uDDFF\uD835\uDDF5\uD835\uDE02\uD835\uDDEF\uD835\uDE02\uD835\uDDFB\uD835\uDDF4\u2713\n\uD835\uDDE6\uD835\uDDF6\uD835\uDDF9\uD835\uDDEE\uD835\uDDF5\uD835\uDDF8\uD835\uDDEE\uD835\uDDFB \uD835\uDDDE\uD835\uDDF6\uD835\uDDFF\uD835\uDDF6\uD835\uDDFA \uD835\uDDE3\uD835\uDDF2\uD835\uDE00\uD835\uDDEE\uD835\uDDFB\u270D\n\n\uD835\uDDF8\uD835\uDDF2\uD835\uDE01\uD835\uDDF6\uD835\uDDF8 #\uD835\uDE00\uD835\uDE01\uD835\uDDFC\uD835\uDDFD\uD835\uDDF0\uD835\uDDF5\uD835\uDDEE\uD835\uDE01\n\uD835\uDE02\uD835\uDDFB\uD835\uDE01\uD835\uDE02\uD835\uDDF8 \uD835\uDDFA\uD835\uDDF2\uD835\uDDFB\uD835\uDDF4\uD835\uDDF5\uD835\uDDEE\uD835\uDDFD\uD835\uDE02\uD835\uDE00 \uD835\uDE00\uD835\uDDF2\uD835\uDE00\uD835\uDDF6 \uD835\uDDF0\uD835\uDDF5\uD835\uDDEE\uD835\uDE01\n\n\uD835\uDDE1\uD835\uDDFC\uD835\uDE01\uD835\uDDF2:\n\uD835\uDE67\uD835\uDE64\uD835\uDE64\uD835\uDE62 \uD835\uDE58\uD835\uDE5D\uD835\uDE56\uD835\uDE69 \uD835\uDE5E\uD835\uDE63\uD835\uDE5E \uD835\uDE57\uD835\uDE5A\uD835\uDE67\uD835\uDE68\uD835\uDE5E\uD835\uDE5B\uD835\uDE56\uD835\uDE69 \uD835\uDE56\uD835\uDE63\uD835\uDE64\uD835\uDE63\uD835\uDE5E\uD835\uDE62\n\uD835\uDE5F\uD835\uDE56\uD835\uDE59\uD835\uDE5E \uD835\uDE60\uD835\uDE56\uD835\uDE62\uD835\uDE6A \uD835\uDE69\uD835\uDE5E\uD835\uDE59\uD835\uDE56\uD835\uDE60 \uD835\uDE69\uD835\uDE56\uD835\uDE6A \uD835\uDE65\uD835\uDE56\uD835\uDE69\uD835\uDE63\uD835\uDE5A\uD835\uDE67\uD835\uDE62\uD835\uDE6A\n\uD835\uDE60\uD835\uDE5A\uD835\uDE58\uD835\uDE6A\uD835\uDE56\uD835\uDE61\uD835\uDE5E \uD835\uDE59\uD835\uDE5E\uD835\uDE56 \uD835\uDE62\uD835\uDE5A\uD835\uDE63\uD835\uDE5C\uD835\uDE5C\uD835\uDE6A\uD835\uDE63\uD835\uDE56\uD835\uDE60\uD835\uDE56\uD835\uDE63 \uD835\uDE63\uD835\uDE56\uD835\uDE62\uD835\uDE56 \uD835\uDE56\uD835\uDE68\uD835\uDE61\uD835\uDE5E\n\uD835\uDE56\uD835\uDE69\uD835\uDE56\uD835\uDE6A \uD835\uDE62\uD835\uDE5A\uD835\uDE62\uD835\uDE57\uD835\uDE5A\uD835\uDE67\uD835\uDE5E\uD835\uDE69\uD835\uDE56\uD835\uDE5D\uD835\uDE6A\uD835\uDE60\uD835\uDE56\uD835\uDE63 \uD835\uDE5E\uD835\uDE63\uD835\uDE5B\uD835\uDE64\uD835\uDE67\uD835\uDE62\uD835\uDE56\uD835\uDE68\uD835\uDE5E \uD835\uDE59\uD835\uDE56\uD835\uDE67\uD835\uDE5E\uD835\uDE63\uD835\uDE6E\uD835\uDE56.\n\n\uD835\uDE3F\uD835\uDE5E\uD835\uDE61\uD835\uDE56\uD835\uDE67\uD835\uDE56\uD835\uDE63\uD835\uDE5C \uD835\uDE68\uD835\uDE65\uD835\uDE56\uD835\uDE62/\uD835\uDE69\uD835\uDE5A\uD835\uDE61\uD835\uDE65\uD835\uDE64\uD835\uDE63 \uD835\uDE57\uD835\uDE64\uD835\uDE69\n\uD835\uDE4E\uD835\uDE56\uD835\uDE63\uD835\uDE60\uD835\uDE68\uD835\uDE5E : \uD835\uDE3D\uD835\uDE61\uD835\uDE64\uD835\uDE60\uD835\uDE5E\uD835\uDE67 \uD835\uDE4B\uD835\uDE5A\uD835\uDE67\uD835\uDE62\uD835\uDE56\uD835\uDE63\uD835\uDE5A\uD835\uDE63\n\n\uD835\uDDE5\uD835\uDDFC\uD835\uDDFC\uD835\uDDFA \uD835\uDDDC\uD835\uDDD7 : ' +
              _0x26c89a,
            _0x3b0224 = {
              text: _0x1f1c50,
              footer: 'klik button untuk menghapus sesi chat',
              buttons: [
                {
                  buttonId: '#stopchat',
                  buttonText: {
                    displayText:
                      '️\u22EE\u2630 \uD835\uDDE6\uD835\uDDE7\uD835\uDDE2\uD835\uDDE3',
                  },
                  type: 1,
                },
              ],
              headerType: 1,
            }
          _0x2b6d42.sendMessage(_0x75cf2, _0x3b0224)
          _0x2b6d42.sendMessage(_0x10a587, _0x3b0224)
        }
        break
      case 'stopchat':
        if (_0x5123db('id', _0x20bf5a) == null) {
          return _0x5da978(
            'Kamu sedang tidak didalam roomchat, Silahkan buat room dengan contoh dibawah ini.\n\n*Example:*\n#menfess num|nama|pes\n\n*Contoh:*\n#menfess 628xxx|bot|hai\n\n*Note:*\n6285789004732 - benar (\u2705)\n+62 857 8900 4732 - salah (\u274C)'
          )
        }
        if (_0x5aa762) {
          return _0x5da978(mess.OnlyPM)
        }
        var _0xce5c6c = _0x20bf5a,
          _0x1e1bb8 = _0x5123db('teman', _0xce5c6c),
          _0x5952e9 = '[\u2713] Berhasil memberhentikan chat'
        _0xb3199('\xB1id', _0x1e1bb8, null),
          _0xb3199('\xB1teman', _0x1e1bb8, null),
          await sleep(2000),
          _0x2b6d42.sendMessage(_0xce5c6c, { text: _0x5952e9 }),
          _0xb3199('\xB1id', _0xce5c6c, null),
          _0xb3199('\xB1teman', _0xce5c6c, null)
        _0x2b6d42.sendMessage(_0x1e1bb8, {
          text: '[\u2713] Room chat telah dihentikan\noleh teman chat kamu\uD83D\uDC64',
        }),
          db_menfes.splice('[]'),
          fs.writeFileSync(
            './database/menfess.json',
            JSON.stringify(db_menfes, null, 1)
          )
        break
      case 'secretchat':
      case 'menfes':
      case 'menfess':
        {
          if (_0x5123db('id', _0x20bf5a) !== null) {
            return _0x5da978(
              'Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.'
            )
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Format Fitur Menfess / Kirim pesan rahasia ke seseorang Lewat bot\n\n_*Example*_\n' +
                (_0x250b36 + _0x9e786f) +
                ' wa|pengirim|pesan\n\n_*Contoh*_\n' +
                (_0x250b36 + _0x9e786f) +
                ' 6285789004732|bot|hai\n\n*Note :*\nBerawal dari 628xxx tanpa spasi'
            )
          }
          let _0x4a2175 = _0x22838f.split('|')[0],
            _0x3bd4ba = _0x22838f.split('|')[1],
            _0x195880 = _0x22838f.split('|')[2]
          var _0x569ddf = await _0x2b6d42.onWhatsApp(
            _0x4a2175 + '@s.whatsapp.net'
          )
          if (_0x569ddf.length == 0) {
            return _0x5da978(
              'Nomor +' + _0x4a2175 + '\ntidak terdaftar di WhatsApp'
            )
          }
          let _0x35a25d = '#' + makeid(10)
          if (_0x4a2175 == _0x19871b.split('@')[0]) {
            return _0x5da978('Itu kan nomor bot')
          }
          if (_0x4a2175 == _0x20bf5a.split('@')[0]) {
            return _0x5da978(
              'Menfes ke nomor sendiri:v\ncapek ya? semangat\uD83D\uDDFF'
            )
          }
          if (!_0x4a2175) {
            return _0x5da978(
              'Harus di isi semua !!\nex : ' +
                (_0x250b36 + _0x9e786f) +
                ' 62857xxx|nama|hallo\n\nnomor hp tanpa spasi'
            )
          }
          if (!_0x3bd4ba) {
            return _0x5da978(
              'Harus di isi semua !!\nex : ' +
                (_0x250b36 + _0x9e786f) +
                ' 62857xxx|nama|hallo\n\nnomor hp tanpa spasi'
            )
          }
          if (!_0x195880) {
            return _0x5da978(
              'Harus di isi semua !!\nex : ' +
                (_0x250b36 + _0x9e786f) +
                ' 62857xxx|nama|hallo\n\nnomor hp tanpa spasi'
            )
          }
          let _0x4a22a3 =
              '*ANONYMOUS CHAT*\n_Hallo Kak ' +
              _0x3324b5 +
              '_\n_Ada pesan *Menfess/Rahasia*_\n\n*\u2022 Dari :* ' +
              _0x3bd4ba +
              '\n*\u2022 Pesan :* ' +
              _0x195880 +
              '\n\n_Pesan ini ditulis oleh seseorang_\n_Bot hanya menyampaikan saja._',
            _0xeb1bc5 = [
              {
                buttonId:
                  _0x250b36 +
                  'buat_room_chat ' +
                  _0x20bf5a +
                  '|' +
                  _0x4a2175 +
                  '@s.whatsapp.net|' +
                  _0x35a25d,
                buttonText: {
                  displayText:
                    '\u22EE\u2630 \uD835\uDDE7\uD835\uDDD8\uD835\uDDE5\uD835\uDDDC\uD835\uDDE0\uD835\uDDD4',
                },
                type: 1,
              },
            ]
          var _0x1c0bfb = {
            text: _0x4a22a3,
            footer: 'Klik button untuk membalas chat.',
            buttons: _0xeb1bc5,
            headerType: 1,
          }
          _0x2b6d42.sendMessage(_0x4a2175 + '@s.whatsapp.net', _0x1c0bfb)
          _0x5da978(
            'Pesan Menfess kamu sudah dikirim, Sedang menunggu untuk diterima.'
          )
          if (_0x5aa762) {
            return _0x5da978('Pesan menfess kamu sudah dikirim.')
          }
        }
        break
      case 'sc':
      case 'script':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2e583f =
            '*_Mau beli scriptnya? harga murah kok._*\n\n*Contact Person \uD83D\uDCDE*\n\n*Admin1:*\n*Wa.me/6285694756102*\n\n*Admin2:*\n*Wa.me/6282322097449*\n\n_*Harga Normal :*_ ~Rp150.000~\n*_Harga Promo : Rp100.000_*\n\n_Sudah Termasuk Tutorial_\n_Script Sudah Disusun Rapih_\n_Size Script Sudah Ringan_\n_Anti Ngelag - Anti Delay_\n_Anti Spam - Anti Call_\n_Total Fitur 600+_\n_Topup & Deposit_'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: _0x2e583f },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'request':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Masukan parameter text\n*Contoh:*\n' +
                (_0x250b36 + _0x9e786f) +
                ' Req fitur antilink bg'
            )
          }
          var _0x431309 = '*| REQUEST FITUR |*',
            _0x43a259 =
              '\n\nNomor : @' +
              _0x20bf5a.split('@')[0] +
              '\nPesan : ' +
              _0x22838f,
            _0x14d2a1 = '\n\nSucces send to owner',
            _0x11c3e2 = '6285694756102@s.whatsapp.net'
          _0x2b6d42.sendMessage(
            _0x11c3e2,
            {
              text: _0x431309 + _0x43a259,
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              text: _0x431309 + _0x14d2a1 + _0x43a259,
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'report':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Masukan parameter text\n*Contoh:*\n' +
                (_0x250b36 + _0x9e786f) +
                ' Fitur anu error bang'
            )
          }
          var _0x431309 = '*| REPORT FITUR |*',
            _0x43a259 =
              '\n\nNomor : @' +
              _0x20bf5a.split('@')[0] +
              '\nPesan : ' +
              _0x22838f,
            _0x14d2a1 = '\n\nSucces send to owner',
            _0x11c3e2 = '6285694756102@s.whatsapp.net'
          _0x2b6d42.sendMessage(
            _0x11c3e2,
            {
              text: _0x431309 + _0x43a259,
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              text: _0x431309 + _0x14d2a1 + _0x43a259,
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'createcp':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (!_0x22838f) {
          return _0x5da978(
            '*CREATECP ACCOUNT*\nExample:\n#' +
              _0x9e786f +
              ' domain|package\n\nContoh:\n#' +
              _0x9e786f +
              ' lexxyapi.com|lexxy'
          )
        }
        let _0x4ba46b = 'USER' + makeid(6),
          _0x45e297 = _0x22838f.split('|')[0],
          _0x3a75ac = _0x22838f.split('|')[1]
        if (!_0x45e297) {
          return _0x5da978('Domain wajib di isi!!')
        }
        if (!_0x3a75ac) {
          return _0x5da978('Package Wajib di isi!!')
        }
        _0x5da978('Creating please wait... \u23F3'),
          axios
            .get(
              'https://' +
                hostwhm +
                ':2087/json-api/createacct?api.version=1&username=' +
                _0x4ba46b +
                '&contactemail=lexxyofficial24@gmail.com&plan=' +
                _0x3a75ac +
                '&domain=' +
                _0x45e297,
              authWhm
            )
            .then((_0x487d8f) => {
              let _0x232116 = _0x487d8f.data
              if (_0x232116.metadata.result == 0) {
                _0x5da978(_0x232116.metadata.reason)
              } else {
                let _0x55cd61 = _0x232116.metadata.output.raw
                var _0x145bb5 = _0x55cd61.substring(
                  _0x55cd61
                    .toString()
                    .indexOf('+===================================+')
                )
                let _0x324575 = _0x145bb5.split('| Language: en')[0]
                _0x5da978(
                  _0x324575 + '\n\nLogin : https://' + hostwhm + ':2087'
                )
              }
            })
        break
      case 'listcp':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        _0x5da978('Wait Getting List Account info....'),
          axios
            .get(
              'https://' + hostwhm + ':2087/json-api/listaccts?api.version=1',
              authWhm
            )
            .then((_0xe20252) => {
              let _0x2e05e5 = _0xe20252.data
              var _0x45d5ee = _0x2e05e5.data.acct
              let _0x22e878 =
                '*\u2500\u2500 \u300C LIST CPANEL \u300D \u2500\u2500*\nTotal Akun : ' +
                _0x45d5ee.length +
                '\n'
              for (
                let _0x56f1e5 = 0;
                _0x56f1e5 < _0x45d5ee.length;
                _0x56f1e5++
              ) {
                _0x22e878 +=
                  '\n\n\n\u2500\u2500\u2500\u2500\u2500[``` ' +
                  _0x45d5ee[_0x56f1e5].user +
                  ' ``` ]\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n*\u25A2 Maxsub* : ' +
                  _0x45d5ee[_0x56f1e5].maxsub +
                  '\n*\u25A2 Maxsql* : ' +
                  _0x45d5ee[_0x56f1e5].maxsql +
                  '\n*\u25A2 Startdate* : ' +
                  _0x45d5ee[_0x56f1e5].startdate +
                  '\n*\u25A2 Disklimit* : ' +
                  _0x45d5ee[_0x56f1e5].disklimit +
                  '\n*\u25A2 Maxlst* : ' +
                  _0x45d5ee[_0x56f1e5].maxlst +
                  '\n*\u25A2 Plan* : ' +
                  _0x45d5ee[_0x56f1e5].plan +
                  '\n*\u25A2 Owner*: ' +
                  _0x45d5ee[_0x56f1e5].owner +
                  '\n*\u25A2 IP* : ' +
                  _0x45d5ee[_0x56f1e5].ip +
                  '\n*\u25A2 Domain* : ' +
                  _0x45d5ee[_0x56f1e5].domain +
                  '\n*\u25A2 Diskused* : ' +
                  _0x45d5ee[_0x56f1e5].diskused +
                  '\n*\u25A2 Maxaddons* : ' +
                  _0x45d5ee[_0x56f1e5].maxaddons +
                  '\n*\u25A2 Suspendreason* : ' +
                  _0x45d5ee[_0x56f1e5].suspendreason +
                  '\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
              }
              _0x5da978(_0x22e878)
            })
        break
      case 'terminate':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (_0x2bc027.length < 2) {
          return _0x5da978('Kirim perintah #' + _0x9e786f + ' username')
        }
        _0x5da978('Wait Terminating Account....'),
          axios
            .get(
              'https://' +
                hostwhm +
                ':2087/json-api/removeacct?api.version=1&username=' +
                _0x2bc027[1],
              authWhm
            )
            .then((_0x1ae26e) => {
              if ([1, '1'].includes(_0x1ae26e.data?.metadata?.result)) {
                _0x5da978('Done User ' + _0x22838f + ' Telah di Terminate')
              } else {
                _0x5da978(_0x1ae26e.metadata)
                console.log(_0x1ae26e.data)
              }
            })
        break
      case 'mysesi':
      case 'sendsesi':
      case 'session':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          _0x5da978('please wait..')
          await sleep(3000)
          var _0x31eaec = await fs.readFileSync('./database/pengguna.json'),
            _0x45b118 = await fs.readFileSync(
              './' + _0x4ed813.sessionName + '.json'
            )
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              document: _0x45b118,
              mimetype: 'document/application',
              fileName: 'session.json',
            },
            { quoted: _0x48a922 }
          )
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              document: _0x31eaec,
              mimetype: 'document/application',
              fileName: 'pengguna.json',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'pricelist':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1f6b37 = await fetchJson(
            'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=semua'
          )
          if (_0x1f6b37.status == false) {
            return _0x5da978(_0x1f6b37.data.msg)
          }
          let _0xb4ecd2 = '*List Harga Layanan*\n\n'
          for (let _0x7cb382 of _0x1f6b37.data) {
            _0xb4ecd2 +=
              'name : ' +
              _0x7cb382.nama +
              '\ndesc : ' +
              _0x7cb382.desc +
              '\nmin : ' +
              _0x7cb382.min +
              '\nmax : ' +
              _0x7cb382.max +
              '\nharga : ' +
              _0x7cb382.price +
              '\nid : ' +
              _0x7cb382.id_layanan +
              '\n\n'
          }
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: _0xb4ecd2 },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'komisi':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        var _0xac8e74 = await fetchJson(
          'http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop'
        )
        let _0x5836cb =
          'Hallo owner Berikut komisi anda\n*Name :* ' +
          _0xac8e74.data.name +
          '\n*Full Name :* ' +
          _0xac8e74.data.full_name +
          '\n*Komisi :* ' +
          _0xac8e74.data.komisi
        _0x2b6d42.sendMessage(
          _0x449fcf,
          { text: _0x5836cb },
          { quoted: _0x48a922 }
        )
        break
      case 'tk':
      case 'tarikkomisi':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (_0x2bc027.length < 1) {
            return _0x5da978('jumlahnya berapa? minimal 10k')
          }
          var _0x2f6f93 = await fetchJson(
            'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=listwallet'
          )
          let _0x2b49bc = []
          console.log(_0x2f6f93)
          for (let _0x58a518 of _0x2f6f93.data) {
            let _0x2ea31b = 1
            _0x2b49bc.push({
              buttonText: { displayText: _0x58a518.wallet },
              buttonId:
                _0x250b36 +
                'tarikkomisikunci ' +
                _0x22838f +
                '|' +
                _0x58a518.wallet,
              type: '' + _0x2ea31b++,
            })
          }
          let _0x40fb43 = _0x2b49bc
          _0x2b6d42.sendMessage(_0x449fcf, {
            text: '*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!',
            title: 'WALLET',
            footer: '\xA9SosmedShop',
            buttons: _0x40fb43,
          })
        }
        break
      case 'tarikkomisikunci':
        if (!_0x37b2fc) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (_0x2bc027.length < 1) {
          return _0x3977de.reply('jumlahnya berapa bang')
        }
        let _0x5e840b = _0x22838f.split('|')[0]
            ? _0x22838f.split('|')[0]
            : _0x22838f,
          _0x5f4859 = _0x22838f.split('|')[1] ? _0x22838f.split('|')[1] : ''
        if (_0x5f4859.length < 1) {
          return _0x5da978('Jumlah dan Target harus di isi!')
        }
        var _0x193f57 = await fetchJson(
          'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=withdraw&amount=' +
            _0x5e840b +
            '&wallet=' +
            _0x5f4859 +
            '&nomor=' +
            _0xbb19d +
            '&an=' +
            _0x1c46cd
        )
        console.log(_0x193f57),
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: '' + _0x193f57.data.msg },
            { quoted: _0x48a922 }
          )
        break
      case 'clear':
      case 'clearer':
      case 'clearerr':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          server_eror.splice('[]')
          fs.writeFileSync(
            './database/func_error.json',
            JSON.stringify(server_eror)
          )
          _0x5da978('Done')
        }
        break
      case 'error':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          var _0x431309 =
              '*ERROR SERVER*\n_Total Tercatatat_ : ' +
              server_eror.length +
              '\n\n',
            _0x58e1bc = 1
          for (let _0x4550bd of server_eror) {
            _0x431309 +=
              '=> *ERROR (' + _0x58e1bc++ + ')*\n' + _0x4550bd.error + '\n\n'
          }
          _0x5da978(_0x431309)
        }
        break
      case 'order':
      case 'caraorder':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x5aa762) {
            return _0x5da978('Fitur Tidak Dapat Digunakan Untuk Group!')
          }
          let _0x1fb433 =
            '*Hallo Kak Berikut Cara Order*\n\n*Followers :*\nex1 : _' +
            _0x250b36 +
            'followers jumlah|target [ tanpa (@) ]_\nex2 : _' +
            _0x250b36 +
            'followers 500|lexxy4554_\n\n*View :*\nex 1 : _' +
            _0x250b36 +
            'view jumlah|link_\nex 2 : _' +
            _0x250b36 +
            'view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _' +
            _0x250b36 +
            'like jumlah|link_\nex 2 : _' +
            _0x250b36 +
            'like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini\uD83D\uDE4F\nbeli = faham'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: _0x1fb433 },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'view':
      case 'like':
      case 'follower': {
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x5aa762) {
          return _0x5da978('Fitur Tidak Dapat Digunakan Untuk Group!')
        }
        if (_0x2bc027.length < 1) {
          return _0x5da978(
            'Format tidak valid, jika masih belum mengerti ketik *#order*'
          )
        }
        let _0x5bd829 = _0x22838f.split('|')[0]
            ? _0x22838f.split('|')[0]
            : _0x22838f,
          _0x41665e = _0x22838f.split('|')[1] ? _0x22838f.split('|')[1] : ''
        if (_0x41665e.length < 1) {
          return _0x5da978(
            'Jumlah dan Target harus di isi!\nContoh: ' +
              _0x250b36 +
              _0x9e786f.slice(1) +
              ' 500|lexxy456_'
          )
        }
        var _0x2f6f93 = await fetchJson(
          'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=' +
            _0x9e786f
        )
        let _0x5ba33f = []
        var _0x1afb02 = _0x5bd829 + '|' + _0x41665e
        for (let _0x181062 of _0x2f6f93.data) {
          _0x5ba33f.push({
            title: '' + _0x181062.nama,
            rowId:
              _0x250b36 +
              'confirmorderkunci ' +
              _0x1afb02 +
              '|' +
              _0x181062.id_layanan,
            description: '\n' + _0x181062.desc,
          })
        }
        const _0x3e41f4 = {
            text: 'Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.',
            footer: '\xA9 created by lexxy official',
            buttonText: 'Click Here!',
            sections: [
              {
                title: 'Sosmed Shop',
                rows: _0x5ba33f,
              },
            ],
            listType: 1,
          },
          _0x495f61 = await _0x2b6d42.sendMessage(_0x449fcf, _0x3e41f4)
        break
      }
      case 'confirmorderkunci':
        {
          if (_0x5aa762) {
            return _0x5da978('Fitur Tidak Dapat Digunakan Untuk Group!')
          }
          if (_0x2bc027.length < 1) {
            return _0x5da978(
              '*Cara order followers*\n\n*Example :* _' +
                _0x9e786f +
                ' jumlah|username tanpa (@)_\n*Example :* _' +
                _0x9e786f +
                ' 500|lexxy2408_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You'
            )
          }
          let _0xe8e62a = _0x22838f.split('|')[0]
              ? _0x22838f.split('|')[0]
              : _0x22838f,
            _0x493621 = _0x22838f.split('|')[1] ? _0x22838f.split('|')[1] : '',
            _0x5b1b65 = _0x22838f.split('|')[2] ? _0x22838f.split('|')[2] : ''
          var _0x2e6e01 = await fetchJson(
            'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=' +
              _0xe8e62a +
              '&target=' +
              _0x493621 +
              '&id_layanan=' +
              _0x5b1b65
          )
          if (_0x2e6e01.status == false) {
            _0x5da978(
              '*Maaf orderan gagal di buat*\n\nPermasalahan :\n' +
                _0x2e6e01.data.msg +
                ' atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ' +
                _0x250b36 +
                'owner!\n'
            )
          } else {
            let _0x5962ea = _0x2e6e01.data.order_id,
              _0x37edfc =
                'Hai *@' +
                _0x20bf5a.split('@')[0] +
                ' \uD83D\uDC4B,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n' +
                _0x2e6e01.data.order_id +
                '\n\n*Target :*\n' +
                _0x493621 +
                '\n\n*Jumlah Order :* ' +
                _0xe8e62a +
                '\n*Total Harga :* Rp' +
                _0x5efd3e(_0x2e6e01.data.amount) +
                '\n*Status Orderan :* ' +
                _0x2e6e01.data.status +
                '\n\n*info lebih lanjut?*\n*klik button dibawah.*'
            var _0x5d26d3 = [
              {
                buttonId: '!cekstatus ' + _0x2e6e01.data.order_id,
                buttonText: { displayText: 'Check Status' },
                type: 1,
              },
            ]
            _0x2b6d42.sendMessage(_0x449fcf, {
              caption: _0x37edfc,
              image: { url: _0x2e6e01.data.qris },
              buttons: _0x5d26d3,
              footer: '\xA9 created by lexxy official',
            })
          }
          console.log(_0x2e6e01)
        }
        break
      case 'chekstatus':
      case 'cekstatus': {
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x5aa762) {
          return _0x5da978('Fitur Tidak Dapat Digunakan Untuk Group!')
        }
        if (!_0x22838f) {
          return _0x5da978('id ordernya mana kak?')
        }
        var _0x21f237 = await fetchJson(
          'https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=status&order_id=' +
            _0x22838f
        )
        if (_0x21f237.status == false) {
          var _0x477c9b = '\nid order tidak di temukan'
        } else {
          var _0x477c9b =
            '\n*Status Orderan Anda*\n\nTarget : ' +
            _0x21f237.data.target +
            '\nStatus : ' +
            _0x21f237.data.status +
            '\nFollowers Default : ' +
            _0x21f237.data.start_count +
            '\nOn Process : ' +
            _0x21f237.data.kurang +
            '\nTotal Order : ' +
            _0x21f237.data.total_order +
            '\nTanggal Pesan : ' +
            _0x21f237.data.tanggal_pesan +
            '\nJumlah Pembayaran : ' +
            _0x21f237.data.amount +
            '\nId Pesanan : ' +
            _0x21f237.data.order_id +
            '\n\nTerimakasih sudah membeli jasa suntik dari kami, ditunggu next ordernya!'
        }
        _0x5da978(_0x477c9b)
        break
      }
      case 'shop':
      case 'list':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (db_respon_list.length === 0) {
          return _0x5da978('Belum ada list message di database')
        }
        if (!isAlreadyResponListGroup(_0x449fcf, db_respon_list)) {
          return _0x5da978('Belum ada list message yang terdaftar di group ini')
        }
        var _0x31346a = []
        for (let _0x19832d of db_respon_list) {
          _0x19832d.id === _0x449fcf &&
            _0x31346a.push({
              title: _0x19832d.key,
              rowId: _0x19832d.key,
            })
        }
        var _0x2dce4e = {
          text: 'Hi @' + _0x20bf5a.split('@')[0],
          buttonText: 'Click Here!',
          footer:
            '*List From ' +
            _0x50fb79 +
            '*\n\n\u23F3 ' +
            _0x3553ae +
            '\n\uD83D\uDCC6 ' +
            _0x2d6236,
          mentions: [_0x20bf5a],
          sections: [
            {
              title: _0x50fb79,
              rows: _0x31346a,
            },
          ],
        }
        _0x2b6d42.sendMessage(_0x449fcf, _0x2dce4e)
        break
      case 'addlist':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        var _0x5f565d = _0x22838f.split('@')[0],
          _0x4a511a = _0x22838f.split('@')[1]
        if (!_0x22838f.includes('@')) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              _0x9e786f +
              ' *key@response*\n\n_Contoh_\n\n#' +
              _0x9e786f +
              ' tes@apa'
          )
        }
        if (isAlreadyResponList(_0x449fcf, _0x5f565d, db_respon_list)) {
          return _0x5da978(
            'List respon dengan key : *' +
              _0x5f565d +
              '* sudah ada di group ini.'
          )
        }
        addResponList(
          _0x449fcf,
          _0x5f565d,
          _0x4a511a,
          false,
          '-',
          db_respon_list
        ),
          _0x5da978('Berhasil menambah List menu : *' + _0x5f565d + '*')
        break
      case 'dellist':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (db_respon_list.length === 0) {
          return _0x5da978('Belum ada list message di database')
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              _0x9e786f +
              ' *key*\n\n_Contoh_\n\n' +
              _0x9e786f +
              ' hello'
          )
        }
        if (!isAlreadyResponList(_0x449fcf, _0x22838f, db_respon_list)) {
          return _0x5da978(
            'List respon dengan key *' + _0x22838f + '* tidak ada di database!'
          )
        }
        delResponList(_0x449fcf, _0x22838f, db_respon_list),
          _0x5da978('Sukses delete list message dengan key *' + _0x22838f + '*')
        break
      case 'update':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        var _0x5f565d = _0x22838f.split('@')[0],
          _0x4a511a = _0x22838f.split('@')[1]
        if (!_0x22838f.includes('@')) {
          return _0x5da978(
            'Gunakan dengan cara #' +
              _0x9e786f +
              ' *key@response*\n\n_Contoh_\n\n#' +
              _0x9e786f +
              ' tes@apa'
          )
        }
        if (!isAlreadyResponListGroup(_0x449fcf, db_respon_list)) {
          return _0x5da978(
            'Maaf, untuk key *' + _0x5f565d + '* belum terdaftar di group ini'
          )
        }
        updateResponList(
          _0x449fcf,
          _0x5f565d,
          _0x4a511a,
          false,
          '-',
          db_respon_list
        ),
          _0x5da978('Berhasil update List menu : *' + _0x5f565d + '*')
        break
      case 'tambah':
        if (!_0x22838f) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              _0x9e786f +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x9e786f +
              ' 1 2'
          )
        }
        var _0x1b1a1c = _0x22838f.split(' ')[0],
          _0x372922 = _0x22838f.split(' ')[1]
        if (!_0x1b1a1c) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        if (!_0x372922) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        var _0x438f6a = Number(_0x1b1a1c),
          _0x168663 = Number(_0x372922)
        _0x5da978('' + (_0x438f6a + _0x168663))
        break
      case 'kurang':
        if (!_0x22838f) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              _0x9e786f +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x9e786f +
              ' 1 2'
          )
        }
        var _0x1b1a1c = _0x22838f.split(' ')[0],
          _0x372922 = _0x22838f.split(' ')[1]
        if (!_0x1b1a1c) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        if (!_0x372922) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        var _0x438f6a = Number(_0x1b1a1c),
          _0x168663 = Number(_0x372922)
        _0x5da978('' + (_0x438f6a - _0x168663))
        break
      case 'kali':
        if (!_0x22838f) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              _0x9e786f +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x9e786f +
              ' 1 2'
          )
        }
        var _0x1b1a1c = _0x22838f.split(' ')[0],
          _0x372922 = _0x22838f.split(' ')[1]
        if (!_0x1b1a1c) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        if (!_0x372922) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        var _0x438f6a = Number(_0x1b1a1c),
          _0x168663 = Number(_0x372922)
        _0x5da978('' + _0x438f6a * _0x168663)
        break
      case 'bagi':
        if (!_0x22838f) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x9e786f +
              ' 1 2'
          )
        }
        var _0x1b1a1c = _0x22838f.split(' ')[0],
          _0x372922 = _0x22838f.split(' ')[1]
        if (!_0x1b1a1c) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        if (!_0x372922) {
          return _0x5da978(
            'Gunakan dengan cara ' +
              (_0x250b36 + _0x9e786f) +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              (_0x250b36 + _0x9e786f) +
              ' 1 2'
          )
        }
        var _0x438f6a = Number(_0x1b1a1c),
          _0x168663 = Number(_0x372922)
        _0x5da978('' + _0x438f6a / _0x168663)
        break
      case 'p':
      case 'proses':
        {
          if (!_0x5aa762) {
            return 'Hanya Dapat Digunakan Gi Group'
          }
          if (!_0x37b2fc && !_0x4a5cff) {
            return 'Hanya Bisa Digunakan Oleh Admin'
          }
          if (!_0x6ec46) {
            return _0x5da978('Reply pesanannya!')
          }
          _0xe03415(
            '\u300C *TRANSAKSI PENDING* \u300D\n\n```\uD83D\uDCC6 TANGGAL : ' +
              _0x2d6236 +
              '\n\u231A JAM     : ' +
              _0x3553ae +
              '\n\u2728 STATUS  : Pending```\n\n\uD83D\uDCDD Catatan : ' +
              _0x6ec46.chats +
              '\n\nPesanan @' +
              _0x6ec46.sender.split('@')[0] +
              ' sedang di proses!',
            [_0x20bf5a]
          )
        }
        break
      case 'd':
      case 'done':
        {
          if (!_0x5aa762) {
            return 'Hanya Dapat Digunakan Gi Group'
          }
          if (!_0x37b2fc && !_0x4a5cff) {
            return 'Hanya Bisa Digunakan Oleh Admin'
          }
          if (!_0x6ec46) {
            return _0x5da978('Reply pesanannya!')
          }
          _0xe03415(
            '\u300C *TRANSAKSI BERHASIL* \u300D\n\n```\uD83D\uDCC6 TANGGAL : ' +
              _0x2d6236 +
              '\n\u231A JAM     : ' +
              _0x3553ae +
              '\n\u2728 STATUS  : Berhasil```\n\nTerimakasih @' +
              _0x6ec46.sender.split('@')[0] +
              ' Next Order ya\uD83D\uDE4F',
            [_0x20bf5a]
          )
        }
        break
      case 'setppbot':
        if (!_0x37b2fc && !_0x324d73) {
          return _0x5da978(mess.OnlyOwner)
        }
        if (_0x1978fe && _0x3f6a6a) {
          return _0x5da978(
            'Kirim gambar dengan caption *#setppbot* atau reply gambar yang sudah dikirim dengan pesan *#setppbot*'
          )
        }
        await _0x2b6d42.downloadAndSaveMediaMessage(
          _0x48a922,
          'image',
          './transaksi/' + _0x20bf5a.split('@')[0] + '.jpg'
        )
        var _0x1a99dd = './transaksi/' + _0x20bf5a.split('@')[0] + '.jpg'
        _0x2b6d42.updateProfilePicture(_0x19871b, { url: _0x1a99dd }),
          _0x5da978('Sukses Mengganti Profile Bot'),
          await sleep(2000),
          fs.unlinkSync(_0x1a99dd)
        break
      case 'git':
      case 'gitclone':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'link githubnya mana?\n*Contoh:*\n#gitclone https://github.com/Lexxy24/MenfessV1'
            )
          }
          var _0xb86234 = _0x22838f
          if (
            !/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(
              _0xb86234
            )
          ) {
            return _0x5da978('link salah!')
          }
          let [, _0x4682b0, _0x502a43] =
            _0x2bc027[0].match(
              /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            ) || []
          _0x502a43 = _0x502a43.replace(/.git$/, '')
          let _0x38c26a =
              'https://api.github.com/repos/' +
              _0x4682b0 +
              '/' +
              _0x502a43 +
              '/zipball',
            _0x375b81 = (await fetch(_0x38c26a, { method: 'HEAD' })).headers
              .get('content-disposition')
              .match(/attachment; filename=(.*)/)[1]
          _0x5da978('*Mohon tunggu, sedang mengirim repository..*')
          _0x2b6d42
            .sendMessage(
              _0x449fcf,
              {
                document: { url: _0x38c26a },
                fileName: _0x375b81,
                mimetype: 'application/zip',
              },
              { quoted: _0x48a922 }
            )
            .catch((_0x57f3e5) =>
              _0x5da978(
                'Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'
              )
            )
        }
        break
      case 'badgirlserti':
      case 'goodgirlserti':
      case 'bucinserti':
      case 'fuckgirlserti':
      case 'toloserti':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978('*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' text')
          }
          var _0x93cd82 = await getBuffer(
            'https://api.lolhuman.xyz/api/' +
              _0x9e786f +
              '?apikey=SadTeams&name=' +
              _0x22838f
          )
          _0x5da978(mess.wait)
          _0x2b6d42
            .sendMessage(
              _0x449fcf,
              {
                image: _0x93cd82,
                caption: '' + _0x9e786f,
              },
              { quoted: _0x48a922 }
            )
            .catch((_0x5e1cf0) => _0x5da978('Maaf server LolHuman sedang down'))
        }
        break
      case 'fitnah':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Kirim perintah #*' + _0x9e786f + '* @tag|pesantarget|pesanbot'
          )
        }
        var _0x1cdb6c = _0x22838f.split('|')[0],
          _0x1ff3f7 = _0x22838f.split('|')[1],
          _0x9ffcf = _0x22838f.split('|')[2]
        if (!_0x1cdb6c.startsWith('@')) {
          return _0x5da978('Tag orangnya')
        }
        if (!_0x1ff3f7) {
          return _0x5da978('Masukkan pesan target!')
        }
        if (!_0x9ffcf) {
          return _0x5da978('Masukkan pesan bot!')
        }
        var _0x9346d5 = _0x135934(_0x1ff3f7),
          _0x5e6fdc = {
            key: {
              fromMe: false,
              participant: '' + _0x135934(_0x1cdb6c),
              remoteJid: _0x449fcf ? _0x449fcf : '',
            },
            message: {
              extemdedTextMessage: {
                text: '' + _0x1ff3f7,
                contextInfo: { mentionedJid: _0x9346d5 },
              },
            },
          },
          _0x21a846 = {
            key: {
              fromMe: false,
              participant: '' + _0x135934(_0x1cdb6c),
              remoteJid: _0x449fcf ? _0x449fcf : '',
            },
            message: { conversation: '' + _0x1ff3f7 },
          }
        _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            text: _0x9ffcf,
            mentions: _0x48615e,
          },
          { quoted: _0x9346d5.length > 2 ? _0x5e6fdc : _0x21a846 }
        )
        break
      case 'del':
      case 'delete':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x6ec46) {
          return _0x5da978('Balas chat dari bot yang ingin dihapus')
        }
        if (!_0x6ec46.fromMe) {
          return _0x5da978('Hanya bisa menghapus chat dari bot')
        }
        _0x2b6d42.sendMessage(_0x449fcf, {
          delete: {
            fromMe: true,
            id: _0x6ec46.id,
            remoteJid: _0x449fcf,
          },
        })
        break
      case 'linkgrup':
      case 'linkgc':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        var _0x279df7 = await _0x2b6d42
          .groupInviteCode(_0x449fcf)
          .catch(() => _0x5da978(mess.error.api))
        ;(_0x279df7 = 'https://chat.whatsapp.com/' + _0x279df7),
          _0x5da978(_0x279df7)
        break
      case 'kick':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        var _0x14d864
        if (_0x539733.length !== 0) {
          _0x14d864 = _0x539733[0]
          _0x2b6d42.groupParticipantsUpdate(_0x449fcf, [_0x14d864], 'remove')
        } else {
          _0xcedf8f
            ? ((_0x14d864 = _0x6ec46.sender),
              _0x2b6d42.groupParticipantsUpdate(
                _0x449fcf,
                [_0x14d864],
                'remove'
              ))
            : _0x5da978(
                'Tag atau reply orang yg mau dikick\n\n*Contoh:* #kick @tag'
              )
        }
        break
      case 'setppgrup':
      case 'setppgc':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (_0x1978fe && _0x3f6a6a) {
          return _0x5da978(
            'Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*'
          )
        }
        await _0x2b6d42.downloadAndSaveMediaMessage(
          _0x48a922,
          'image',
          './transaksi/' + _0x20bf5a.split('@')[0] + '.jpg'
        )
        var _0x1a99dd = './transaksi/' + _0x20bf5a.split('@')[0] + '.jpg'
        await _0x2b6d42.updateProfilePicture(_0x449fcf, { url: _0x1a99dd }),
          await sleep(2000),
          _0x5da978('Sukses mengganti foto profile group'),
          fs.unlinkSync(_0x1a99dd)
        break
      case 'setnamegrup':
      case 'setnamegc':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (!_0x22838f) {
          return _0x5da978('Kirim perintah #' + _0x9e786f + ' teks')
        }
        await _0x2b6d42
          .groupUpdateSubject(_0x449fcf, _0x22838f)
          .then((_0x544c81) => {
            _0x5da978('Sukses')
          })
          .catch(() => _0x5da978(mess.error.api))
        break
      case 'setdesc':
      case 'setdescription':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (!_0x22838f) {
          return _0x5da978('Kirim perintah ' + _0x9e786f + ' teks')
        }
        await _0x2b6d42
          .groupUpdateDescription(_0x449fcf, _0x22838f)
          .then((_0x3125a1) => {
            _0x5da978('Sukses')
          })
          .catch(() => _0x5da978(mess.error.api))
        break
      case 'group':
      case 'grup':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Kirim perintah #' +
              _0x9e786f +
              ' _options_\nOptions : close & open\nContoh : #' +
              _0x9e786f +
              ' close'
          )
        }
        if (_0x2bc027[0] == 'close') {
          _0x2b6d42.groupSettingUpdate(_0x449fcf, 'announcement')
          _0x5da978(
            'Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini'
          )
        } else {
          _0x2bc027[0] == 'open'
            ? (_0x2b6d42.groupSettingUpdate(_0x449fcf, 'not_announcement'),
              _0x5da978(
                'Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini'
              ))
            : _0x5da978(
                'Kirim perintah #' +
                  _0x9e786f +
                  ' _options_\nOptions : close & open\nContoh : #' +
                  _0x9e786f +
                  ' close'
              )
        }
        break
      case 'revoke':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        await _0x2b6d42
          .groupRevokeInvite(_0x449fcf)
          .then((_0x53302e) => {
            _0x5da978('Sukses menyetel tautan undangan grup ini')
          })
          .catch(() => _0x5da978(mess.error.api))
        break
      case 'tagall':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x22838f) {
          return _0x5da978('Teks?')
        }
        let _0x5ee1d6 =
          '\u2550\u2550\u272A\u3018 *\uD83D\uDC65 Tag All* \u3019\u272A\u2550\u2550\n\n' +
          (_0x22838f ? _0x22838f : '') +
          '\n\n'
        for (let _0x47d405 of _0x191710) {
          _0x5ee1d6 += '\u27B2 @' + _0x47d405.id.split('@')[0] + '\n'
        }
        _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            text: _0x5ee1d6,
            mentions: _0x191710.map((_0x3cb879) => _0x3cb879.id),
          },
          { quoted: _0x48a922 }
        )
        break
      case 'hidetag':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff && !_0x37b2fc) {
          return _0x5da978(mess.GrupAdmin)
        }
        let _0x29b173 = []
        _0xb1d4e6.map((_0xa60d7c) => _0x29b173.push(_0xa60d7c.id)),
          _0x2b6d42.sendMessage(_0x449fcf, {
            text: _0x22838f ? _0x22838f : '',
            mentions: _0x29b173,
          })
        break
      case 'welcome':
        {
          if (!_0x5aa762) {
            return _0x5da978('Khusus Group!')
          }
          if (!_0x48a922.key.fromMe && !_0x37b2fc && !_0x4a5cff) {
            return _0x5da978('Khusus admin!')
          }
          if (!_0x2bc027[0]) {
            return _0x5da978(
              'Kirim perintah #' +
                _0x9e786f +
                ' _options_\nOptions : on & off\nContoh : #' +
                _0x9e786f +
                ' on'
            )
          }
          if (
            _0x2bc027[0] == 'ON' ||
            _0x2bc027[0] == 'on' ||
            _0x2bc027[0] == 'On'
          ) {
            if (_0x492a9e) {
              return _0x5da978('Sudah aktif\u2713')
            }
            welcomeJson.push(_0x449fcf)
            fs.writeFileSync(
              './database/welcome.json',
              JSON.stringify(welcomeJson)
            )
            _0x5da978('Suksess mengaktifkan welcome di group:\n' + _0x50fb79)
          } else {
            _0x2bc027[0] == 'OFF' ||
            _0x2bc027[0] == 'OF' ||
            _0x2bc027[0] == 'Of' ||
            _0x2bc027[0] == 'Off' ||
            _0x2bc027[0] == 'of' ||
            _0x2bc027[0] == 'off'
              ? (welcomeJson.splice(_0x449fcf, 1),
                fs.writeFileSync(
                  './database/welcome.json',
                  JSON.stringify(welcomeJson)
                ),
                _0x5da978(
                  'Success menonaktifkan welcome di group:\n' + _0x50fb79
                ))
              : _0x5da978('Kata kunci tidak ditemukan!')
          }
        }
        break
      case 'antilink':
        {
          if (!_0x5aa762) {
            return _0x5da978(mess.OnlyGrup)
          }
          if (!_0x4a5cff && !_0x37b2fc) {
            return _0x5da978(mess.GrupAdmin)
          }
          if (!_0x2bab31) {
            return _0x5da978(mess.BotAdmin)
          }
          if (!_0x2bc027[0]) {
            return _0x5da978(
              'Kirim perintah #' +
                _0x9e786f +
                ' _options_\nOptions : on & off\nContoh : #' +
                _0x9e786f +
                ' on'
            )
          }
          if (
            _0x2bc027[0] == 'ON' ||
            _0x2bc027[0] == 'on' ||
            _0x2bc027[0] == 'On'
          ) {
            if (_0x5ca476) {
              return _0x5da978('Antilink sudah aktif')
            }
            antilink.push(_0x449fcf)
            fs.writeFileSync(
              './database/antilink.json',
              JSON.stringify(antilink, null, 2)
            )
            _0x5da978('Successfully Activate Antilink In This Group')
          } else {
            if (
              _0x2bc027[0] == 'OFF' ||
              _0x2bc027[0] == 'OF' ||
              _0x2bc027[0] == 'Of' ||
              _0x2bc027[0] == 'Off' ||
              _0x2bc027[0] == 'of' ||
              _0x2bc027[0] == 'off'
            ) {
              if (!_0x5ca476) {
                return _0x5da978('Antilink belum aktif')
              }
              antilink.splice(_0x93cd82, 1)
              fs.writeFileSync(
                './database/antilink.json',
                JSON.stringify(antilink, null, 2)
              )
              _0x5da978('Successfully Disabling Antilink In This Group')
            } else {
              _0x5da978('Kata kunci tidak ditemukan!')
            }
          }
        }
        break
      case 'promote':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (_0x539733.length !== 0) {
          _0x2b6d42
            .groupParticipantsUpdate(_0x449fcf, [_0x539733[0]], 'promote')
            .then((_0x4a9ce2) => {
              _0xe03415(
                'Sukses menjadikan @' +
                  _0x539733[0].split('@')[0] +
                  ' sebagai admin',
                [_0x539733[0]],
                true
              )
            })
            .catch(() => _0x5da978(mess.error.api))
        } else {
          _0xcedf8f
            ? _0x2b6d42
                .groupParticipantsUpdate(
                  _0x449fcf,
                  [_0x6ec46.sender],
                  'promote'
                )
                .then((_0x1a828a) => {
                  _0xe03415(
                    'Sukses menjadikan @' +
                      _0x6ec46.sender.split('@')[0] +
                      ' sebagai admin',
                    [_0x6ec46.sender],
                    true
                  )
                })
                .catch(() => _0x5da978(mess.error.api))
            : _0x5da978(
                'Tag atau balas pesan member yang ingin dijadikan admin\n\n*Contoh:*\n' +
                  (_0x250b36 + _0x9e786f) +
                  ' @tag'
              )
        }
        break
      case 'tiktokauto':
        {
          if (!_0x5aa762) {
            return _0x5da978(mess.OnlyGrup)
          }
          if (!_0x4a5cff && !_0x37b2fc) {
            return _0x5da978(mess.GrupAdmin)
          }
          if (!_0x2bab31) {
            return _0x5da978(mess.BotAdmin)
          }
          if (!_0x2bc027[0]) {
            return _0x5da978(
              'Kirim perintah #' +
                _0x9e786f +
                ' _options_\nOptions : on & off\nContoh : #' +
                _0x9e786f +
                ' on'
            )
          }
          if (
            _0x2bc027[0] == 'ON' ||
            _0x2bc027[0] == 'on' ||
            _0x2bc027[0] == 'On'
          ) {
            if (_0x147ecd) {
              return _0x5da978('Auto download tiktok sudah aktif')
            }
            auto_downloadTT.push(_0x449fcf)
            fs.writeFileSync(
              './database/tiktokDown.json',
              JSON.stringify(auto_downloadTT, null, 2)
            )
            _0x5da978('Berhasil mengaktifkan auto download tiktok')
          } else {
            if (
              _0x2bc027[0] == 'OFF' ||
              _0x2bc027[0] == 'OF' ||
              _0x2bc027[0] == 'Of' ||
              _0x2bc027[0] == 'Off' ||
              _0x2bc027[0] == 'of' ||
              _0x2bc027[0] == 'off'
            ) {
              if (!_0x147ecd) {
                return _0x5da978('Auto download tiktok belum aktif')
              }
              auto_downloadTT.splice(_0x93cd82, 1)
              fs.writeFileSync(
                './database/tiktokDown.json',
                JSON.stringify(auto_downloadTT, null, 2)
              )
              _0x5da978('Berhasil mematikan auto download tiktok')
            } else {
              _0x5da978('Kata kunci tidak ditemukan!')
            }
          }
        }
        break
      case 'demote':
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        if (!_0x4a5cff) {
          return _0x5da978(mess.GrupAdmin)
        }
        if (!_0x2bab31) {
          return _0x5da978(mess.BotAdmin)
        }
        if (_0x539733.length !== 0) {
          _0x2b6d42
            .groupParticipantsUpdate(_0x449fcf, [_0x539733[0]], 'demote')
            .then((_0x436d92) => {
              _0xe03415(
                'Sukses menjadikan @' +
                  _0x539733[0].split('@')[0] +
                  ' sebagai member biasa',
                [_0x539733[0]],
                true
              )
            })
            .catch(() => _0x5da978(mess.error.api))
        } else {
          _0xcedf8f
            ? _0x2b6d42
                .groupParticipantsUpdate(_0x449fcf, [_0x6ec46.sender], 'demote')
                .then((_0x469109) => {
                  _0xe03415(
                    'Sukses menjadikan @' +
                      _0x6ec46.sender.split('@')[0] +
                      ' sebagai member biasa',
                    [_0x6ec46.sender],
                    true
                  )
                })
                .catch(() => _0x5da978(mess.error.api))
            : _0x5da978(
                'Tag atau balas pesan admin yang ingin dijadikan member biasa\n\n*Contoh:*\n' +
                  (_0x250b36 + _0x9e786f) +
                  ' @tag'
              )
        }
        break
      case 'infogc':
      case 'infogrup':
      case 'infogroup':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x5aa762) {
          return _0x5da978(mess.OnlyGrup)
        }
        let _0x5ce250 =
          '*INFO GROUP*\n\u2022 *ID:* ' +
          _0x449fcf +
          '\n\u2022 *Name:* ' +
          _0x50fb79 +
          '\n\u2022 *Member:* ' +
          _0xb1d4e6.length +
          '\n\u2022 *Total Admin:* ' +
          _0x42a343.length +
          '\n\u2022 *Welcome:* ' +
          (_0x492a9e ? 'aktif' : 'tidak') +
          '\n\u2022 *Antilink:* ' +
          (_0x5ca476 ? 'aktif' : 'tidak') +
          '\n\u2022 *Tiktok Auto:* ' +
          (_0x147ecd ? 'aktif' : 'tidak')
        _0x5da978(_0x5ce250)
        break
      case 'text_grup':
        {
          const _0x399a7a = {
            react: {
              text: '\uD83D\uDDFF',
              key: _0x48a922.key,
            },
          }
          _0x2b6d42.sendMessage(_0x449fcf, _0x399a7a)
        }
        break
      case 'ttp':
        {
          if (!_0x22838f) {
            return _0x5da978('Contoh :\n#' + _0x9e786f + ' Lexxy')
          }
          _0x2b6d42.sendMessage(_0x449fcf, {
            sticker: { url: _0x93cd82 },
            mimetype: 'image/webp',
          })
        }
        break
      case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        _0x5da978(mess.wait)
        var _0x341b55 = await getBuffer(
          'https://github.com/saipulanuar/Api-Github/raw/main/sound/' +
            _0x9e786f +
            '.mp3'
        )
        _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            audio: _0x341b55,
            mimetype: 'audio/mpeg',
            ptt: true,
          },
          { quoted: _0x48a922 }
        )
        break
      case 'audio1':
      case 'audio2':
      case 'audio3':
      case 'audio4':
      case 'audio5':
      case 'audio6':
      case 'audio7':
      case 'audio8':
      case 'audio9':
      case 'audio10':
      case 'audio11':
      case 'audio12':
      case 'audio13':
      case 'audio14':
      case 'audio15':
      case 'audio16':
      case 'audio17':
      case 'audio18':
      case 'audio19':
      case 'audio20':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        _0x5da978(mess.wait),
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              audio: {
                url: 'https://md-devs.herokuapp.com/' + _0x9e786f + '.mp3',
              },
              mimetype: 'audio/mp4',
              ptt: true,
            },
            { quoted: _0x48a922 }
          )
        break
      case 'tourl':
      case 'upload':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x586550('premium', _0x20bf5a) == false) {
          return _0x5da978(mess.OnlyPrem)
        }
        if (_0x58693c || _0x518b97) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'sticker',
            './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          )
          _0x5da978(mess.wait)
          let _0x482147 = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          )
          var _0x149de6 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync('./' + _0x149de6, _0x482147)
          var {
            name: _0x4bc0d1,
            url: _0x279df7,
            size: _0x5d519d,
          } = await UploadFileUgu(_0x149de6)
          let _0x967715 = bytesToSize(_0x5d519d)
          var _0x431309 =
            '*UPLOAD SUKSES*\n*Url :* ' +
            _0x279df7 +
            '\n*Name :* ' +
            _0x4bc0d1 +
            '\n*Size :* ' +
            _0x967715 +
            '\n*Type:* Sticker'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { text: _0x431309 },
            { quoted: _0x48a922 }
          )
          fs.unlinkSync('./sticker/' + _0x20bf5a.split('@')[0] + '.webp')
          fs.unlinkSync(_0x149de6)
        } else {
          if (_0x847593 || _0x46306e) {
            await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'video',
              './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
            )
            _0x5da978(mess.wait)
            let _0x57d90f = fs.readFileSync(
              './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
            )
            var _0x149de6 = 'sticker/' + getRandom('.mp4')
            fs.writeFileSync('./' + _0x149de6, _0x57d90f)
            var {
              name: _0x4bc0d1,
              url: _0x279df7,
              size: _0x5d519d,
            } = await UploadFileUgu(_0x149de6)
            let _0x135342 = bytesToSize(_0x5d519d)
            var _0x431309 =
              '*UPLOAD SUKSES*\n*Url :* ' +
              _0x279df7 +
              '\n*Name :* ' +
              _0x4bc0d1 +
              '\n*Size :* ' +
              _0x135342 +
              '\n*Type:* Video'
            _0x2b6d42.sendMessage(
              _0x449fcf,
              { text: _0x431309 },
              { quoted: _0x48a922 }
            )
            fs.unlinkSync('./sticker/' + _0x20bf5a.split('@')[0] + '.mp4')
            fs.unlinkSync(_0x149de6)
          } else {
            if (_0x1978fe || _0x3f6a6a) {
              var _0x3f84b2 = await _0x2b6d42.downloadAndSaveMediaMessage(
                _0x48a922,
                'image',
                './sticker/' + _0x20bf5a.split('@')[0] + '.jpg'
              )
              _0x5da978(mess.wait)
              let _0x374553 = fs.readFileSync(_0x3f84b2)
              var _0x149de6 = 'sticker/' + getRandom('.png')
              fs.writeFileSync('./' + _0x149de6, _0x374553)
              var {
                name: _0x4bc0d1,
                url: _0x279df7,
                size: _0x5d519d,
              } = await UploadFileUgu(_0x149de6)
              let _0x38990e = bytesToSize(_0x5d519d)
              var _0x431309 =
                '*UPLOAD SUKSES*\n*Url :* ' +
                _0x279df7 +
                '\n*Name :* ' +
                _0x4bc0d1 +
                '\n*Size :* ' +
                _0x38990e +
                '\n*Type:* Image'
              _0x2b6d42.sendMessage(
                _0x449fcf,
                { text: _0x431309 },
                { quoted: _0x48a922 }
              )
              fs.unlinkSync(_0x3f84b2)
              fs.unlinkSync(_0x149de6)
            } else {
              if (_0x586d49) {
                await _0x2b6d42.downloadAndSaveMediaMessage(
                  _0x48a922,
                  'audio',
                  './sticker/' + _0x20bf5a.split('@')[0] + '.mp3'
                )
                _0x5da978(mess.wait)
                let _0x1120a3 = fs.readFileSync(
                  './sticker/' + _0x20bf5a.split('@')[0] + '.mp3'
                )
                var _0x149de6 = 'sticker/' + getRandom('.mp3')
                fs.writeFileSync('./' + _0x149de6, _0x1120a3)
                var {
                  name: _0x4bc0d1,
                  url: _0x279df7,
                  size: _0x5d519d,
                } = await UploadFileUgu(_0x149de6)
                let _0x3527e6 = bytesToSize(_0x5d519d)
                var _0x431309 =
                  '*UPLOAD SUKSES*\n*Url :* ' +
                  _0x279df7 +
                  '\n*Name :* ' +
                  _0x4bc0d1 +
                  '\n*Size :* ' +
                  _0x3527e6 +
                  '\n*Type:* Audio'
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  { text: _0x431309 },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./sticker/' + _0x20bf5a.split('@')[0] + '.mp3')
                fs.unlinkSync(_0x149de6)
              } else {
                _0x5da978(
                  '*reply audio/video/sticker/gambar dengan pesan ' +
                    (_0x250b36 + _0x9e786f) +
                    '*'
                )
              }
            }
          }
        }
        break
      case 'tomp3':
      case 'toaudio':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x847593 || _0x46306e) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'video',
            './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
          )
          _0x5da978(mess.wait)
          var _0x1a99dd = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
          )
          let _0x30a15b = './sticker/' + getRandom('.mp3')
          fs.writeFileSync('./' + _0x30a15b, _0x1a99dd)
          exec('ffmpeg -i ' + _0x1a99dd + ' ' + _0x30a15b)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              audio: fs.readFileSync(_0x30a15b),
              mimetype: 'audio/mp4',
              fileName: _0x20bf5a.split('@')[0] + 'ToMp3',
              ptt: _0x2bc027[1] == '--ptt' ? true : false,
            },
            { quoted: _0x48a922 }
          )
          fs.unlinkSync(_0x30a15b)
          fs.unlinkSync(_0x1a99dd)
        } else {
          _0x5da978(
            '*Reply video dengan pesan ' + (_0x250b36 + _0x9e786f) + '*'
          )
        }
        break
      case 'base64':
      case 'base32':
        {
          if (!_0x22838f) {
            return _0x5da978('Example :\n' + (_0x250b36 + _0x9e786f) + ' Lexxy')
          }
          _0x5da978(mess.wait)
          var _0x19a332 = await fetchJson(
              'https://api-yogipw.herokuapp.com/api/base?type=' +
                _0x9e786f +
                '&encode=' +
                _0x22838f
            ),
            _0x44d6f8 =
              '*Hasil Result*\n *type:* ' +
              _0x19a332.result.type +
              '\n *encode:* ' +
              _0x19a332.result.encode +
              '\n *string:* ' +
              _0x19a332.result.string
          _0x5da978(_0x44d6f8)
        }
        break
      case 'debase64':
        {
          if (!_0x22838f) {
            return _0x5da978('Example :\n' + (_0x250b36 + _0x9e786f) + ' cA==')
          }
          _0x5da978(mess.wait)
          var _0x19a332 = await fetchJson(
              'https://api-yogipw.herokuapp.com/api/base?type=base64&decode=' +
                _0x22838f
            ),
            _0x44d6f8 =
              '*Hasil Result*\n *type:* ' +
              _0x19a332.result.type +
              '\n *encode:* ' +
              _0x19a332.result.enc +
              '\n *string:* ' +
              _0x19a332.result.string
          _0x5da978(_0x44d6f8)
        }
        break
      case 'debase32':
        {
          _0x5da978(mess.wait)
          var _0x19a332 = await fetchJson(
              'https://api-yogipw.herokuapp.com/api/base?type=base32&decode=' +
                _0x22838f
            ),
            _0x44d6f8 =
              '*Hasil Result*\n *type:* ' +
              _0x19a332.result.type +
              '\n *encode:* ' +
              _0x19a332.result.enc +
              '\n *string:* ' +
              _0x19a332.result.string
          _0x5da978(_0x44d6f8)
        }
        break
      case 'toimg':
      case 'toimage':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x58693c || _0x518b97) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'sticker',
            './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          )
          let _0x26b509 = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          )
          var _0x387503 = 'sticker/' + getRandom('.webp'),
            _0x149de6 = 'sticker/' + getRandom('.png')
          fs.writeFileSync('./' + _0x387503, _0x26b509)
          _0x5da978(mess.wait)
          exec('ffmpeg -i ./' + _0x387503 + ' ./' + _0x149de6, (_0x536929) => {
            fs.unlinkSync('./' + _0x387503)
            if (_0x536929) {
              return _0x5da978(mess.error.api)
            }
            _0x2b6d42.sendMessage(
              _0x449fcf,
              {
                caption: '*Sticker Convert To Image!*',
                image: fs.readFileSync('./' + _0x149de6),
              },
              { quoted: _0x48a922 }
            )
            fs.unlinkSync('./' + _0x149de6)
            fs.unlinkSync('./sticker/' + _0x20bf5a.split('@')[0] + '.webp')
          })
        } else {
          _0x5da978(
            '*Reply sticker nya dengan pesan #toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*'
          )
        }
        break
      case 'tomp4':
      case 'tovideo':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x58693c || _0x518b97) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'sticker',
            './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          )
          let _0x3997cc = './sticker/' + _0x20bf5a.split('@')[0] + '.webp'
          _0x5da978(mess.wait)
          let _0x9fc037 = await webp2mp4File(_0x3997cc)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              video: { url: _0x9fc037.result },
              caption: 'Convert Webp To Video',
            },
            { quoted: _0x48a922 }
          )
          fs.unlinkSync(_0x3997cc)
        } else {
          _0x5da978('*Reply sticker gif dengan pesan #tovideo*')
        }
        break
      case 'emojimix':
      case 'mixemoji':
      case 'emojmix':
      case 'emojinua':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Kirim perintah ' +
              _0x9e786f +
              ' emoji1+emoji2\ncontoh : !' +
              _0x9e786f +
              ' \uD83D\uDE1C+\uD83D\uDE05'
          )
        }
        if (!_0x22838f.includes('+')) {
          return _0x5da978(
            'Format salah, contoh pemakaian !' +
              _0x9e786f +
              ' \uD83D\uDE05+\uD83D\uDE2D'
          )
        }
        var _0x259bd0 = _0x22838f.split('+')[0],
          _0x3a1e43 = _0x22838f.split('+')[1]
        if (!_0x3efabe(_0x259bd0) || !_0x3efabe(_0x3a1e43)) {
          return _0x5da978('Itu bukan emoji!')
        }
        fetchJson(
          'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
            encodeURIComponent(_0x259bd0) +
            '_' +
            encodeURIComponent(_0x3a1e43)
        )
          .then((_0x1a7b9b) => {
            var _0x476e2c = {
              packname: 'Lincxln MD',
              author: 'By Lexxy',
            }
            _0x2b6d42.sendImageAsSticker(
              _0x449fcf,
              _0x1a7b9b.results[0].url,
              _0x48a922,
              _0x476e2c
            )
          })
          .catch((_0x34a33a) => _0x5da978(mess.error.api))
        break
      case 'emojimix2':
      case 'mixemoji2':
      case 'emojmix2':
      case 'emojinua2':
        {
          if (!_0x22838f) {
            return _0x5da978(
              'Example : ' + (_0x250b36 + _0x9e786f) + ' \uD83D\uDE05'
            )
          }
          let _0x4a47eb = await fetchJson(
            'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
              encodeURIComponent(_0x22838f)
          )
          for (let _0x477ec6 of _0x4a47eb.results) {
            var _0x52cdfa = {
              packname: 'Lincxln MD',
              author: 'By Lexxy',
            }
            let _0x4a0ad1 = await _0x2b6d42.sendImageAsSticker(
              _0x449fcf,
              _0x477ec6.url,
              _0x48a922,
              _0x52cdfa
            )
          }
        }
        break
      case 'smeme':
      case 'stikermeme':
      case 'stickermeme':
      case 'memestiker':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        var _0x4bf76f = _0x22838f.split('|')[0],
          _0x3806a3 = _0x22838f.split('|')[1]
        if (!_0x4bf76f) {
          return _0x5da978(
            'Kirim gambar dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' text_atas|text_bawah atau balas gambar yang sudah dikirim'
          )
        }
        if (!_0x3806a3) {
          return _0x5da978(
            'Kirim gambar dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' text_atas|text_bawah atau balas gambar yang sudah dikirim'
          )
        }
        if (_0x1978fe || _0x3f6a6a) {
          _0x5da978(mess.wait)
          var _0x1a99dd = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'image',
              './sticker/' + _0x20bf5a.split('@')[0] + '.jpg'
            ),
            _0x1cead8 = (await UploadFileUgu(_0x1a99dd)).url,
            _0x27a675 =
              'https://api.memegen.link/images/custom/' +
              encodeURIComponent(_0x4bf76f) +
              '/' +
              encodeURIComponent(_0x3806a3) +
              '.png?background=' +
              _0x1cead8,
            _0x52cdfa = {
              packname: 'Lincxln MD',
              author: 'By Lexxy',
            }
          _0x2b6d42.sendImageAsSticker(
            _0x449fcf,
            _0x27a675,
            _0x48a922,
            _0x52cdfa
          )
          fs.unlinkSync(_0x1a99dd)
        } else {
          _0x5da978(
            'Kirim gambar dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' text_atas|text_bawah atau balas gambar yang sudah dikirim'
          )
        }
        break
      case 'swm':
      case 'stikerwm':
      case 'stickerwm':
      case 'takesticker':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x586550('premium', _0x20bf5a) == false) {
          return _0x5da978(mess.OnlyPrem)
        }
        if (!_0x22838f) {
          return _0x5da978(
            'Kirim video/foto dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' packname|author atau balas video/foto yang sudah dikirim'
          )
        }
        var _0x3602bf = _0x22838f.split('|')[0],
          _0x325125 = _0x22838f.split('|')[1]
        _0x5da978(mess.wait)
        if (_0x1978fe || _0x3f6a6a) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'image',
            './sticker/' + _0x20bf5a.split('@')[0] + '.jpeg'
          )
          var _0x1a99dd = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.jpeg'
          )
          _0x5da978(mess.wait)
          var _0x52cdfa = {
            packname: _0x3602bf,
            author: _0x325125,
          }
          _0x2b6d42.sendImageAsSticker(
            _0x449fcf,
            _0x1a99dd,
            _0x48a922,
            _0x52cdfa
          )
          fs.unlinkSync(_0x1a99dd)
        } else {
          if (_0x847593 || _0x46306e) {
            _0x5da978(mess.wait)
            var _0x1a99dd = await _0x2b6d42.downloadAndSaveMediaMessage(
                _0x48a922,
                'video',
                './sticker/' + _0x20bf5a + '.jpeg'
              ),
              _0x52cdfa = {
                packname: _0x3602bf,
                author: _0x325125,
              }
            _0x2b6d42.sendImageAsSticker(
              _0x449fcf,
              _0x1a99dd,
              _0x48a922,
              _0x52cdfa
            )
            fs.unlinkSync(_0x1a99dd)
          } else {
            _0x5da978(
              'Kirim video/foto dengan caption ' +
                (_0x250b36 + _0x9e786f) +
                ' packname|author atau balas video/foto yang sudah dikirim'
            )
          }
        }
        break
      case 'sticker':
      case 's':
      case 'stiker':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x1978fe || _0x3f6a6a) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'image',
            './sticker/' + _0x20bf5a.split('@')[0] + '.jpeg'
          )
          let _0x266771 = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.jpeg'
          )
          _0x5da978(mess.wait)
          var _0x387503 = 'sticker/' + getRandom('.jpeg'),
            _0x149de6 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync('' + _0x387503, _0x266771)
          ffmpeg('./' + _0x387503)
            .on('error', console.error)
            .on('end', () => {
              exec(
                'webpmux -set exif ./sticker/data.exif ./' +
                  _0x149de6 +
                  ' -o ./' +
                  _0x149de6,
                async (_0x10dd25) => {
                  _0x2b6d42.sendMessage(
                    _0x449fcf,
                    { sticker: fs.readFileSync('./' + _0x149de6) },
                    { quoted: _0x48a922 }
                  )
                  fs.unlinkSync('./' + _0x387503)
                  fs.unlinkSync(
                    './sticker/' + _0x20bf5a.split('@')[0] + '.jpeg'
                  )
                  fs.unlinkSync('./' + _0x149de6)
                }
              )
            })
            .addOutputOptions([
              '-vcodec',
              'libwebp',
              '-vf',
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
            ])
            .toFormat('webp')
            .save('' + _0x149de6)
        } else {
          _0x5da978(
            'Kirim gambar dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' atau balas gambar yang sudah dikirim'
          )
        }
        break
      case 'sgif':
      case 'stickergif':
      case 'stikergif':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (
          (_0x847593 && _0x48a922.message.videoMessage.seconds < 10) ||
          (_0x46306e && _0x6ec46.videoMessage.seconds < 10)
        ) {
          await _0x2b6d42.downloadAndSaveMediaMessage(
            _0x48a922,
            'video',
            './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
          )
          let _0x506a5d = fs.readFileSync(
            './sticker/' + _0x20bf5a.split('@')[0] + '.mp4'
          )
          _0x5da978(mess.wait)
          var _0x387503 = 'sticker/' + getRandom('.mp4'),
            _0x149de6 = 'sticker/' + getRandom('.webp')
          fs.writeFileSync('' + _0x387503, _0x506a5d)
          ffmpeg('./' + _0x387503)
            .on('error', console.error)
            .on('end', () => {
              exec(
                'webpmux -set exif ./sticker/data.exif ./' +
                  _0x149de6 +
                  ' -o ./' +
                  _0x149de6,
                async (_0x338f9e) => {
                  _0x2b6d42.sendMessage(
                    _0x449fcf,
                    { sticker: fs.readFileSync('./' + _0x149de6) },
                    { quoted: _0x48a922 }
                  )
                  fs.unlinkSync('./' + _0x387503)
                  fs.unlinkSync('./' + _0x149de6)
                  fs.unlinkSync(_0x506a5d)
                }
              )
            })
            .addOutputOptions([
              '-vcodec',
              'libwebp',
              '-vf',
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
            ])
            .toFormat('webp')
            .save('' + _0x149de6)
        } else {
          _0x5da978(
            'Kirim video dengan caption ' +
              (_0x250b36 + _0x9e786f) +
              ' atau balas video yang sudah dikirim'
          )
        }
        break
      case 'cekjelek':
      case 'cekcantik':
      case 'cekganteng':
      case 'ceksad':
      case 'cekharam':
      case 'cekhalal':
      case 'cekbego':
      case 'cekanjing':
      case 'cekbiadab':
      case 'cekramah':
      case 'ceksatir':
      case 'cekmanis':
      case 'cekpahit':
      case 'cekhitam':
      case 'cekrasis':
      case 'cekbaik':
      case 'cekjahat':
      case 'cekkaya':
      case 'cekmiskin':
      case 'cekpintar':
      case 'cekbodoh':
      case 'cekimut':
      case 'cekkocak':
      case 'cekkadang':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        let _0x22f7b0 = './sticker/cekStats_Yes.webp'
        const _0x89c8ef = [true, false][
          Math.floor(Math.random() * [true, false].length)
        ]
        _0x89c8ef == true &&
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { sticker: { url: './sticker/cekStats_Now.webp' } },
            {
              quoted: {
                key: {
                  fromMe: false,
                  participant: '' + _0x20bf5a,
                  ...(_0x449fcf ? { remoteJid: 'status@broadcast' } : {}),
                },
                message: {
                  conversation:
                    '[\u274E] Kamu tidak ' +
                    _0x857412
                      .slice(4)
                      .trim()
                      .split(/ +/)
                      .shift()
                      .toLowerCase() +
                    ' sama sekali\uD83E\uDD74',
                },
              },
            }
          )
        _0x89c8ef == false &&
          _0x2b6d42.sendMessage(
            _0x449fcf,
            { sticker: { url: _0x22f7b0 } },
            {
              quoted: {
                key: {
                  fromMe: false,
                  participant: '' + _0x20bf5a,
                  ...(_0x449fcf ? { remoteJid: 'status@broadcast' } : {}),
                },
                message: {
                  conversation:
                    '[\u2705] Ya begitulah, Kamu Sangat ' +
                    _0x857412
                      .slice(4)
                      .trim()
                      .split(/ +/)
                      .shift()
                      .toLowerCase() +
                    ' Sekali \uD83E\uDD25',
                },
              },
            }
          )
        break
      case 'goblokcek':
      case 'jelekcek':
      case 'gaycek':
      case 'lesbicek':
      case 'gantengcek':
      case 'cantikcek':
      case 'begocek':
      case 'suhucek':
      case 'pintercek':
      case 'jagocek':
      case 'nolepcek':
      case 'babicek':
      case 'bebancek':
      case 'baikcek':
      case 'jahatcek':
      case 'anjingcek':
      case 'haramcek':
      case 'pakboycek':
      case 'pakgirlcek':
      case 'sangecek':
      case 'bapercek':
      case 'fakboycek':
      case 'alimcek':
      case 'suhucek':
      case 'fakgirlcek':
      case 'kerencek':
      case 'wibucek':
      case 'pasarkascek':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        const _0x21ee7c = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
            '52',
            '53',
            '54',
            '55',
            '56',
            '57',
            '58',
            '59',
            '60',
            '61',
            '62',
            '63',
            '64',
            '65',
            '66',
            '67',
            '68',
            '69',
            '70',
            '71',
            '72',
            '73',
            '74',
            '75',
            '76',
            '77',
            '78',
            '79',
            '80',
            '81',
            '82',
            '83',
            '84',
            '85',
            '86',
            '87',
            '88',
            '89',
            '90',
            '91',
            '92',
            '93',
            '94',
            '95',
            '96',
            '97',
            '98',
            '99',
            '100',
          ],
          _0x1d9fb8 = _0x21ee7c[Math.floor(Math.random() * _0x21ee7c.length)]
        _0x2b6d42.sendMessage(
          _0x449fcf,
          { text: _0x1d9fb8 + '%' },
          { quoted: _0x48a922 }
        )
        break
      case 'blackpink':
      case 'neon':
      case 'greenneon':
      case 'advanceglow':
      case 'futureneon':
      case 'sandwriting':
      case 'sandsummer':
      case 'sandengraved':
      case 'metaldark':
      case 'neonlight':
      case 'holographic':
      case 'text1917':
      case 'minion':
      case 'deluxesilver':
      case 'newyearcard':
      case 'bloodfrosted':
      case 'halloween':
      case 'jokerlogo':
      case 'fireworksparkle':
      case 'natureleaves':
      case 'bokeh':
      case 'toxic':
      case 'strawberry':
      case 'box3d':
      case 'roadwarning':
      case 'breakwall':
      case 'icecold':
      case 'luxury':
      case 'cloud':
      case 'summersand':
      case 'horrorblood':
      case 'thunder':
        {
          if (!_0x22838f) {
            return _0x5da978('_Contoh_\n' + (_0x250b36 + _0x9e786f) + ' nama')
          }
          _0x5da978(mess.wait)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://api.lolhuman.xyz/api/textprome/' +
                  _0x9e786f +
                  '?apikey=' +
                  _0x4ed813.api_lolkey +
                  '&text=' +
                  _0x22838f,
              },
              caption: 'Nih ' + _0x9e786f + '\uD83D\uDCF8',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'metallic':
      case 'naruto':
      case 'butterfly':
      case 'flaming':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978('_Contoh_\n' + (_0x250b36 + _0x9e786f) + ' nama')
          }
          _0x5da978(mess.wait)
          let _0x546300 =
            'https://api.nataganz.com/api/photooxy/' +
            _0x9e786f +
            '?text=' +
            _0x22838f +
            '&apikey=Pasha'
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x546300 },
              caption: 'Hasil dari ' + _0x9e786f,
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wetglass':
      case 'multicolor3d':
      case 'watercolor':
      case 'luxurygold':
      case 'galaxywallpaper':
      case 'lighttext':
      case 'beautifulflower':
      case 'puppycute':
      case 'royaltext':
      case 'heartshaped':
      case 'birthdaycake':
      case 'galaxystyle':
      case 'hologram3d':
      case 'greenneon':
      case 'glossychrome':
      case 'greenbush':
      case 'metallogo':
      case 'noeltext':
      case 'glittergold':
      case 'textcake':
      case 'starsnight':
      case 'wooden3d':
      case 'textbyname':
      case 'writegalacy':
      case 'galaxybat':
      case 'snow3d':
      case 'birthdayday':
      case 'goldplaybutton':
      case 'silverplaybutton':
      case 'freefire':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            _0x5da978('Contoh: #' + _0x9e786f + ' nama')
          }
          _0x5da978(mess.wait)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://api.lolhuman.xyz/api/ephoto1/' +
                  _0x9e786f +
                  '?apikey=' +
                  _0x4ed813.api_lolkey +
                  '&text=' +
                  _0x22838f,
              },
              caption: 'Nih ' + _0x9e786f + '\uD83D\uDCF8',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'shadow':
      case 'cup':
      case 'cup1':
      case 'romance':
      case 'smoke':
      case 'burnpaper':
      case 'lovemessage':
      case 'undergrass':
      case 'love':
      case 'coffe':
      case 'woodheart':
      case 'woodenboard':
      case 'summer3d':
      case 'wolfmetal':
      case 'nature3d':
      case 'underwater':
      case 'goldenrose':
      case 'summernature':
      case 'letterleaves':
      case 'glowingneon':
      case 'fallleaves':
      case 'flamming':
      case 'harrypotter':
      case 'carvedwood':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            _0x5da978('Contoh: #' + _0x9e786f + ' nama')
          }
          _0x5da978(mess.wait)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://api.lolhuman.xyz/api/photooxy1/' +
                  _0x9e786f +
                  '?apikey=' +
                  _0x4ed813.api_lolkey +
                  '&text=' +
                  _0x22838f,
              },
              caption: 'Nih ' + _0x9e786f + '\uD83D\uDCF8',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'boneka':
      case 'cecan':
      case 'cogan':
      case 'darkjokes':
      case 'islamic':
      case 'mobil':
      case 'programing':
      case 'tatasurya':
      case 'wallhp':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        const _0x57f19c = JSON.parse(
            fs.readFileSync('./function/Random_IMAGE/' + _0x9e786f + '.json')
          ),
          _0x28df20 = _0x57f19c[Math.floor(Math.random() * _0x57f19c.length)]
        _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            image: { url: _0x28df20 },
            caption: 'Done!',
            mentions: [_0x20bf5a],
          },
          { quoted: _0x48a922 }
        )
        break
      case 'bocil':
      case 'ukhty':
      case 'santuy':
      case 'rika':
      case 'hijaber':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x586550('premium', _0x20bf5a) == false) {
          return _0x5da978(mess.OnlyPrem)
        }
        _0x5da978(mess.wait)
        const _0x3c827e = JSON.parse(
            fs.readFileSync('./function/Random_IMAGE/' + _0x9e786f + '.json')
          ),
          _0x3c4776 = _0x3c827e[Math.floor(Math.random() * _0x3c827e.length)]
        _0x2b6d42.sendMessage(
          _0x449fcf,
          {
            video: { url: _0x3c4776.url },
            caption: 'Done!',
            mentions: [_0x20bf5a],
          },
          { quoted: _0x48a922 }
        )
        break
      case 'chiisaihentai':
      case 'trap':
      case 'blowjob':
      case 'yaoi':
      case 'ecchi':
      case 'ahegao':
      case 'hololewd':
      case 'sideoppai':
      case 'animefeets':
      case 'animebooty':
      case 'animethighss':
      case 'hentaiparadise':
      case 'animearmpits':
      case 'hentaifemdom':
      case 'lewdanimegirls':
      case 'biganimetiddies':
      case 'animebellybutton':
      case 'hentai4everyone':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586550('premium', _0x20bf5a) == false) {
            return _0x5da978(mess.OnlyPrem)
          }
          _0x5da978(mess.wait)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://api.lolhuman.xyz/api/random/nsfw/' +
                  _0x9e786f +
                  '?apikey=' +
                  _0x4ed813.api_lolkey,
              },
              caption: 'Nih ' + _0x9e786f + '\uD83D\uDCF8',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'bj':
      case 'ero':
      case 'cum':
      case 'feet':
      case 'yuri':
      case 'trap':
      case 'lewd':
      case 'feed':
      case 'eron':
      case 'solo':
      case 'gasm':
      case 'poke':
      case 'anal':
      case 'holo':
      case 'tits':
      case 'kuni':
      case 'kiss':
      case 'erok':
      case 'smug':
      case 'baka':
      case 'solog':
      case 'feetg':
      case 'lewdk':
      case 'waifu':
      case 'pussy':
      case 'femdom':
      case 'cuddle':
      case 'hentai':
      case 'eroyuri':
      case 'cum_jpg':
      case 'blowjob':
      case 'erofeet':
      case 'holoero':
      case 'classic':
      case 'erokemo':
      case 'fox_girl':
      case 'futanari':
      case 'lewdkemo':
      case 'wallpaper':
      case 'pussy_jpg':
      case 'kemonomimi':
      case 'nsfw_avatar':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586550('premium', _0x20bf5a) == false) {
            return _0x5da978(mess.OnlyPrem)
          }
          _0x5da978(mess.wait)
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://api.lolhuman.xyz/api/random2/' +
                  _0x9e786f +
                  '?apikey=' +
                  _0x4ed813.api_lolkey,
              },
              caption: 'Nih ' + _0x9e786f + '\uD83D\uDCF8',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'spamcall':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586550('premium', _0x20bf5a) == false) {
            return _0x5da978(mess.OnlyPrem)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Kirim perintah\n#' +
                _0x9e786f +
                ' nomor\n\nContoh? #' +
                _0x9e786f +
                ' 8xxxx\nNomor awal dari 8 bukan 62/08'
            )
          }
          var _0x1463d1 = await fetchJson(
            'https://arugaz.herokuapp.com/api/spamcall?no=' + _0x22838f
          ).catch(() => _0x5da978(mess.error.api))
          _0x1463d1.status == false
            ? _0x5da978(_0x1463d1.msg)
            : _0x5da978(_0x1463d1.logs)
        }
        break
      case 'girlneko':
      case 'gilrneko':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x479576 && !_0x4ccc85) {
          return _0x5da978('Masukkan text1&text2\nContoh? #girlneko aku&kamu')
        }
        _0x5da978('[\u2757] SEDANG DIPROSES'),
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://ziy.herokuapp.com/api/maker/girlneko?text1=' +
                  _0x479576 +
                  '&text2=' +
                  _0x4ccc85 +
                  '&apikey=xZiyy',
              },
              caption: 'done!!',
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
        break
      case 'sadboy':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x479576 && !_0x4ccc85) {
          return _0x5da978('Masukkan text1&text2\nContoh? #sadboy aku&kamu')
        }
        _0x5da978('[\u2757] SEDANG DIPROSES'),
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://ziy.herokuapp.com/api/maker/sadboy?text1=' +
                  _0x479576 +
                  '&text2=' +
                  _0x4ccc85 +
                  '&apikey=xZiyy',
              },
              caption: 'done!!',
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
        break
      case 'kaneki':
      case 'rem':
      case 'lolimaker':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x22838f) {
          return _0x5da978('Masukkan text\nContoh: #' + _0x9e786f + ' bot')
        }
        _0x5da978('[\u2757] SEDANG DIPROSES'),
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: {
                url:
                  'https://ziy.herokuapp.com/api/maker/' +
                  _0x9e786f +
                  '?nama=' +
                  _0x22838f +
                  '&apikey=xZiyy',
              },
              caption: 'done!!',
              mentions: [_0x20bf5a],
            },
            { quoted: _0x48a922 }
          )
        break
      case 'waifu':
      case 'lick':
      case 'kiss':
      case 'awoo':
      case 'hug':
      case 'cry':
      case 'cuddle':
      case 'bully':
      case 'megumin':
      case 'shinobu':
      case 'neko':
      case 'slap':
      case 'wink':
      case 'dance':
      case 'poke':
      case 'glomp':
      case 'bite':
      case 'nom':
      case 'handhold':
      case 'highfive':
      case 'wave':
      case 'smile':
      case 'yeet':
      case 'bonk':
      case 'smug':
      case 'pat':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (_0x586550('premium', _0x20bf5a) == false) {
          return _0x5da978(mess.OnlyPrem)
        }
        _0x5da978('[\u2757] SEDANG DIPROSES'),
          fetchJson('https://api.waifu.pics/sfw/' + _0x9e786f).then(
            (_0x22a204) => {
              _0x2b6d42.sendMessage(
                _0x449fcf,
                {
                  image: { url: _0x22a204.url },
                  caption: 'Done!!',
                  mentions: [_0x20bf5a],
                },
                { quoted: _0x48a922 }
              )
            }
          )
        break
      case 'dadu':
      case 'patrick':
      case 'amongus':
      case 'gawrlincxln':
      case 'anjing':
      case 'bucinstick':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          _0x5da978(mess.wait)
          let _0x474abe =
            'https://api.lolhuman.xyz/api/sticker/' +
            _0x9e786f +
            '?apikey=' +
            _0x4ed813.api_lolkey
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              sticker: { url: _0x474abe },
              mimetype: 'image/webp',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'ramalanjodoh':
      case 'ramaljodoh':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' +
                (_0x250b36 + _0x9e786f) +
                ' Yanto, 7, 7, 2005, Yanti, 16, 11, 2004'
            )
          }
          let [
              _0x319efe,
              _0x4a9ce5,
              _0x2e3f31,
              _0x117d83,
              _0x58ab87,
              _0x49866b,
              _0x2a0b80,
              _0x6e8fc0,
            ] = _0x22838f.split`,`,
            _0x25b3d0 = await primbon.ramalan_jodoh(
              _0x319efe,
              _0x4a9ce5,
              _0x2e3f31,
              _0x117d83,
              _0x58ab87,
              _0x49866b,
              _0x2a0b80,
              _0x6e8fc0
            )
          if (_0x25b3d0.status == false) {
            return _0x5da978(_0x25b3d0.message)
          }
          _0x5da978(
            '> *Nama Anda :* ' +
              _0x25b3d0.message.nama_anda.nama +
              '\n> *Lahir Anda :* ' +
              _0x25b3d0.message.nama_anda.tgl_lahir +
              '\n> *Nama Pasangan :* ' +
              _0x25b3d0.message.nama_pasangan.nama +
              '\n> *Lahir Pasangan :* ' +
              _0x25b3d0.message.nama_pasangan.tgl_lahir +
              '\n> *Hasil :* ' +
              _0x25b3d0.message.result +
              '\n> *Catatan :* ' +
              _0x25b3d0.message.catatan
          )
        }
        break
      case 'nomorhoki':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' + (_0x250b36 + _0x9e786f) + ' 6288292024190'
            )
          }
          let _0x1e88ba = await primbon.nomer_hoki(_0x22838f)
          if (_0x1e88ba.status == false) {
            return _0x5da978(_0x1e88ba.message)
          }
          _0x5da978(
            '> *Nomor HP :* ' +
              _0x1e88ba.message.nomer_hp +
              '\n> *Angka Shuzi :* ' +
              _0x1e88ba.message.angka_shuzi +
              '\n> *Energi Positif :*\n- Kekayaan : ' +
              _0x1e88ba.message.energi_positif.kekayaan +
              '\n- Kesehatan : ' +
              _0x1e88ba.message.energi_positif.kesehatan +
              '\n- Cinta : ' +
              _0x1e88ba.message.energi_positif.cinta +
              '\n- Kestabilan : ' +
              _0x1e88ba.message.energi_positif.kestabilan +
              '\n- Persentase : ' +
              _0x1e88ba.message.energi_positif.persentase +
              '\n> *Energi Negatif :*\n- Perselisihan : ' +
              _0x1e88ba.message.energi_negatif.perselisihan +
              '\n- Kehilangan : ' +
              _0x1e88ba.message.energi_negatif.kehilangan +
              '\n- Malapetaka : ' +
              _0x1e88ba.message.energi_negatif.malapetaka +
              '\n- Kehancuran : ' +
              _0x1e88ba.message.energi_negatif.kehancuran +
              '\n- Persentase : ' +
              _0x1e88ba.message.energi_negatif.persentase
          )
        }
        break
      case 'artimimpi':
      case 'tafsirmimpi':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' + (_0x250b36 + _0x9e786f) + ' belanja'
            )
          }
          let _0x2424d6 = await primbon.tafsir_mimpi(_0x22838f)
          if (_0x2424d6.status == false) {
            return _0x3977de.reply(_0x2424d6.message)
          }
          _0x5da978(
            '> *Mimpi :* ' +
              _0x2424d6.message.mimpi +
              '\n> *Arti :* ' +
              _0x2424d6.message.arti +
              '\n> *Solusi :* ' +
              _0x2424d6.message.solusi
          )
        }
        break
      case 'ramalanjodohbali':
      case 'ramaljodohbali':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' +
                (_0x250b36 + _0x9e786f) +
                ' Yanto, 7, 7, 2005, Yanti, 16, 11, 2004'
            )
          }
          let [
              _0x2a1469,
              _0x5d4641,
              _0x4c0216,
              _0x460e9a,
              _0x11a39f,
              _0x1bf73c,
              _0x5b512e,
              _0x2c5177,
            ] = _0x22838f.split`,`,
            _0x368760 = await primbon.ramalan_jodoh_bali(
              _0x2a1469,
              _0x5d4641,
              _0x4c0216,
              _0x460e9a,
              _0x11a39f,
              _0x1bf73c,
              _0x5b512e,
              _0x2c5177
            )
          if (_0x368760.status == false) {
            return _0x5da978(_0x368760.message)
          }
          _0x5da978(
            '> *Nama Anda :* ' +
              _0x368760.message.nama_anda.nama +
              '\n> *Lahir Anda :* ' +
              _0x368760.message.nama_anda.tgl_lahir +
              '\n> *Nama Pasangan :* ' +
              _0x368760.message.nama_pasangan.nama +
              '\n> *Lahir Pasangan :* ' +
              _0x368760.message.nama_pasangan.tgl_lahir +
              '\n> *Hasil :* ' +
              _0x368760.message.result +
              '\n> *Catatan :* ' +
              _0x368760.message.catatan
          )
        }
        break
      case 'suamiistri':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' +
                (_0x250b36 + _0x9e786f) +
                ' Yanto, 7, 7, 2005, Yanti, 16, 11, 2004'
            )
          }
          let [
              _0x51ea2b,
              _0x5b1235,
              _0x306b47,
              _0x5e9e73,
              _0x310190,
              _0x1e1f20,
              _0x448755,
              _0x4b3b9d,
            ] = _0x22838f.split`,`,
            _0x1dbcdb = await primbon.suami_istri(
              _0x51ea2b,
              _0x5b1235,
              _0x306b47,
              _0x5e9e73,
              _0x310190,
              _0x1e1f20,
              _0x448755,
              _0x4b3b9d
            )
          if (_0x1dbcdb.status == false) {
            return _0x3977de.reply(_0x1dbcdb.message)
          }
          _0x5da978(
            '> *Nama Suami :* ' +
              _0x1dbcdb.message.suami.nama +
              '\n> *Lahir Suami :* ' +
              _0x1dbcdb.message.suami.tgl_lahir +
              '\n> *Nama Istri :* ' +
              _0x1dbcdb.message.istri.nama +
              '\n> *Lahir Istri :* ' +
              _0x1dbcdb.message.istri.tgl_lahir +
              '\n> *Hasil :* ' +
              _0x1dbcdb.message.result +
              '\n> *Catatan :* ' +
              _0x1dbcdb.message.catatan
          )
        }
        break
      case 'ramalancinta':
      case 'ramalcinta':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' +
                (_0x250b36 + _0x9e786f) +
                ' Yanto, 7, 7, 2005, Yanti, 16, 11, 2004'
            )
          }
          let [
              _0x1cba7f,
              _0xe80f2d,
              _0x3bdb62,
              _0x32f99b,
              _0x36ae22,
              _0x43e115,
              _0x5dfe84,
              _0xf778f3,
            ] = _0x22838f.split`,`,
            _0x2ef51d = await primbon.ramalan_cinta(
              _0x1cba7f,
              _0xe80f2d,
              _0x3bdb62,
              _0x32f99b,
              _0x36ae22,
              _0x43e115,
              _0x5dfe84,
              _0xf778f3
            )
          if (_0x2ef51d.status == false) {
            return _0x5da978(_0x2ef51d.message)
          }
          _0x5da978(
            '> *Nama Anda :* ' +
              _0x2ef51d.message.nama_anda.nama +
              '\n> *Lahir Anda :* ' +
              _0x2ef51d.message.nama_anda.tgl_lahir +
              '\n> *Nama Pasangan :* ' +
              _0x2ef51d.message.nama_pasangan.nama +
              '\n> *Lahir Pasangan :* ' +
              _0x2ef51d.message.nama_pasangan.tgl_lahir +
              '\n> *Sisi Positif :* ' +
              _0x2ef51d.message.sisi_positif +
              '\n> *Sisi Negatif :* ' +
              _0x2ef51d.message.sisi_negatif +
              '\n> *Catatan :* ' +
              _0x2ef51d.message.catatan
          )
        }
        break
      case 'artinama':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978('Example :\n' + (_0x250b36 + _0x9e786f) + ' Yanto')
          }
          let _0x2965be = await primbon.arti_nama(text)
          if (_0x2965be.status == false) {
            return _0x5da978(_0x2965be.message)
          }
          _0x5da978(
            '> *Nama :* ' +
              _0x22838f +
              '\n> *Arti :* ' +
              _0x2965be.message.arti +
              '\n> *Catatan :* ' +
              _0x2965be.message.catatan
          )
        }
        break
      case 'kecocokannama':
      case 'cocoknama':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' + (_0x250b36 + _0x9e786f) + ' yanto, 7, 7, 2005'
            )
          }
          let [_0x51c027, _0x1c09cf, _0x15294e, _0x308c2b] = _0x22838f.split`,`,
            _0x39de51 = await primbon.kecocokan_nama(
              _0x51c027,
              _0x1c09cf,
              _0x15294e,
              _0x308c2b
            )
          if (_0x39de51.status == false) {
            return _0x5da978(_0x39de51.message)
          }
          _0x5da978(
            '> *Nama :* ' +
              _0x39de51.message.nama +
              '\n> *Lahir :* ' +
              _0x39de51.message.tgl_lahir +
              '\n> *Life Path :* ' +
              _0x39de51.message.life_path +
              '\n> *Destiny :* ' +
              _0x39de51.message.destiny +
              '\n> *Destiny Desire :* ' +
              _0x39de51.message.destiny_desire +
              '\n> *Personality :* ' +
              _0x39de51.message.personality +
              '\n> *Persentase :* ' +
              _0x39de51.message.persentase_kecocokan
          )
        }
        break
      case 'kecocokanpasangan':
      case 'cocokpasangan':
      case 'pasangan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example :\n' + (_0x250b36 + _0x9e786f) + ' yanto|yanti'
            )
          }
          let [_0x4512ee, _0xc8fbe] = _0x22838f.split`|`,
            _0xb58aa = await primbon.kecocokan_nama_pasangan(
              _0x4512ee,
              _0xc8fbe
            )
          if (_0xb58aa.status == false) {
            return _0x5da978(_0xb58aa.message)
          }
          _0x5da978(
            '> *Nama Anda :* ' +
              _0xb58aa.message.nama_anda +
              '\n> *Nama Pasangan :* ' +
              _0xb58aa.message.nama_pasangan +
              '\n> *Sisi Positif :* ' +
              _0xb58aa.message.sisi_positif +
              '\n> *Sisi Negatif :* ' +
              _0xb58aa.message.sisi_negatif
          )
        }
        break
      case 'sifatusaha':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Example : ' + (_0x250b36 + _0x9e786f) + ' 24, 10, 2005'
            )
          }
          let [_0x3ae6fb, _0x202e50, _0x1d16de] = _0x22838f.split`,`,
            _0x3779d0 = await primbon.sifat_usaha_bisnis(
              _0x3ae6fb,
              _0x202e50,
              _0x1d16de
            )
          if (_0x3779d0.status == false) {
            return _0x5da978(_0x3779d0.message)
          }
          _0x5da978(
            '> *Lahir :* ' +
              _0x3779d0.message.hari_lahir +
              '\n> *Usaha :* ' +
              _0x3779d0.message.usaha
          )
        }
        break
      case 'halah':
      case 'hilih':
      case 'huluh':
      case 'heleh':
      case 'holoh':
        if (_0x586550('id', _0x20bf5a) == null) {
          return _0x5da978(mess.OnlyUser)
        }
        if (!_0x4cf93f && !_0x22838f) {
          _0x5da978(
            'Kirim/reply text dengan caption *' + (_0x250b36 + _0x9e786f) + '*'
          )
        }
        var _0x51391a = _0x9e786f[0].toLowerCase(),
          _0x812051 = _0x4cf93f
            ? _0x4cf93f.text
              ? _0x4cf93f.text
              : _0x22838f
              ? _0x22838f
              : text
            : _0x22838f
            ? _0x22838f
            : text
        _0x5da978(
          _0x812051
            .replace(/[aiueo]/g, _0x51391a)
            .replace(/[AIUEO]/g, _0x51391a.toUpperCase())
        )
        break
      case 'bass':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x50d970 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-af equalizer=f=54:width_type=o:width=2:g=20'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x50d970,
              (_0x549b73, _0x34c99c, _0x1cab4b) => {
                if (_0x549b73) {
                  return _0x5da978(_0x549b73)
                }
                _0x5da978(mess.wait)
                let _0x4789b3 = fs.readFileSync(_0x50d970)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x4789b3,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x50d970)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'blown':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x514383 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-af acrusher=.1:1:64:0:log'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x514383,
              (_0x185165, _0x29d518, _0x3d4f69) => {
                if (_0x185165) {
                  return _0x5da978(_0x185165)
                }
                _0x5da978(mess.wait)
                let _0x3a179d = fs.readFileSync(_0x514383)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x3a179d,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x514383)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'deep':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x43930f = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-af atempo=4/4,asetrate=44500*2/3'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x43930f,
              (_0x1216db, _0x37e9e3, _0x565c7c) => {
                if (_0x1216db) {
                  return _0x5da978(_0x1216db)
                }
                _0x5da978(mess.wait)
                let _0x1fe7f7 = fs.readFileSync(_0x43930f)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x1fe7f7,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x43930f)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'earrape':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x4c484d = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-af volume=12'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x4c484d,
              (_0x1c6804, _0x1d100c, _0x25939b) => {
                if (_0x1c6804) {
                  return _0x5da978(_0x1c6804)
                }
                _0x5da978(mess.wait)
                let _0x276147 = fs.readFileSync(_0x4c484d)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x276147,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x4c484d)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'fast':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x494e01 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter:a "atempo=1.63,asetrate=44100"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x494e01,
              (_0x8b0d82, _0x4a67c0, _0x5f060c) => {
                if (_0x8b0d82) {
                  return _0x5da978(_0x8b0d82)
                }
                _0x5da978(mess.wait)
                let _0xf7497 = fs.readFileSync(_0x494e01)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0xf7497,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x494e01)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'fat':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x481e06 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter:a "atempo=1.6,asetrate=22100"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x481e06,
              (_0x481c4b, _0x24c725, _0x145050) => {
                if (_0x481c4b) {
                  return _0x5da978(_0x481c4b)
                }
                _0x5da978(mess.wait)
                let _0x17ff79 = fs.readFileSync(_0x481e06)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x17ff79,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x481e06)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'nightcore':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x5dba3e = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter_complex "areverse'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x5dba3e,
              (_0x5aeb1f, _0x484ff8, _0x3973c4) => {
                if (_0x5aeb1f) {
                  return _0x5da978(_0x5aeb1f)
                }
                _0x5da978(mess.wait)
                let _0x24bc71 = fs.readFileSync(_0x5dba3e)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x24bc71,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x5dba3e)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'reverse':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x1100bd = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter_complex "areverse"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x1100bd,
              (_0xf4c872, _0x5b9069, _0x15312b) => {
                if (_0xf4c872) {
                  return _0x5da978(_0xf4c872)
                }
                _0x5da978(mess.wait)
                let _0x81cf53 = fs.readFileSync(_0x1100bd)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x81cf53,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x1100bd)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'robot':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x432fca = 'sticker/' + getRandom('.mp3')
            var _0x44c738 =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\""
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x432fca,
              (_0x4b0d39, _0x16702f, _0x45f7de) => {
                if (_0x4b0d39) {
                  return _0x5da978(_0x4b0d39)
                }
                _0x5da978(mess.wait)
                let _0x5b44e5 = fs.readFileSync(_0x432fca)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x5b44e5,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x432fca)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'slow':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x1995d5 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter:a "atempo=0.7,asetrate=44100"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x1995d5,
              (_0x20f8ed, _0x39b4b2, _0x424191) => {
                if (_0x20f8ed) {
                  return _0x5da978(_0x20f8ed)
                }
                _0x5da978(mess.wait)
                let _0x136102 = fs.readFileSync(_0x1995d5)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x136102,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x1995d5)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'smooth':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x14d454 = 'sticker/' + getRandom('.mp3')
            var _0x44c738 =
              '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x14d454,
              (_0x41e2e4, _0x5058aa, _0x3c7b52) => {
                if (_0x41e2e4) {
                  return _0x5da978(_0x41e2e4)
                }
                _0x5da978(mess.wait)
                let _0x1ca037 = fs.readFileSync(_0x14d454)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x1ca037,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x14d454)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'tupai':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586d49) {
            var _0x52e059 = await _0x2b6d42.downloadAndSaveMediaMessage(
              _0x48a922,
              'audio',
              './sticker/' + _0x9e786f + '.mp3'
            )
            let _0x1a446c = 'sticker/' + getRandom('.mp3')
            var _0x44c738 = '-filter:a "atempo=0.5,asetrate=65100"'
            exec(
              'ffmpeg -i ' + _0x52e059 + ' ' + _0x44c738 + ' ' + _0x1a446c,
              (_0x3f8649, _0x58b31f, _0x46af15) => {
                if (_0x3f8649) {
                  return _0x5da978(_0x3f8649)
                }
                _0x5da978(mess.wait)
                let _0x125e69 = fs.readFileSync(_0x1a446c)
                _0x2b6d42.sendMessage(
                  _0x449fcf,
                  {
                    audio: _0x125e69,
                    mimetype: 'audio/mpeg',
                  },
                  { quoted: _0x48a922 }
                )
                fs.unlinkSync('./' + _0x1a446c)
                fs.unlinkSync('./' + _0x52e059)
              }
            )
          } else {
            _0x5da978(
              'Balas audio yang ingin diubah dengan caption *#' +
                _0x9e786f +
                '*'
            )
          }
        }
        break
      case 'wallpaperislami':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3f1ab1 = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json'
            ),
            _0x19ceea = _0x3f1ab1[Math.floor(Math.random() * _0x3f1ab1.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x19ceea },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpaperinori':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x104f01 = await fetchJson(
              'https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json'
            ),
            _0x166730 = _0x104f01[Math.floor(Math.random() * _0x104f01.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x166730 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpapercyber':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1fa894 = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json'
            ),
            _0x369d69 = _0x1fa894[Math.floor(Math.random() * _0x1fa894.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x369d69 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'waifu':
      case 'loli':
      case 'husbu':
      case 'milf':
      case 'cosplay':
      case 'wallml':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2b6d6e = await fetchJson(
              'https://raw.githubusercontent.com/Arya-was/endak-tau/main/' +
                _0x9e786f +
                '.json'
            ),
            _0x44e117 = _0x2b6d6e[Math.floor(Math.random() * _0x2b6d6e.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x44e117 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpaperteknologi':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x308091 = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json'
            ),
            _0xf62008 = _0x308091[Math.floor(Math.random() * _0x308091.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0xf62008 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpaperanime':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x181c90 = await fetchJson(
              'https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json'
            ),
            _0x644da8 = _0x181c90[Math.floor(Math.random() * _0x181c90.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x644da8 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpapergamer':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x57f88e = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json'
            ),
            _0x50bd16 = _0x57f88e[Math.floor(Math.random() * _0x57f88e.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x50bd16 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpaperprogamer':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3f369a = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json'
            ),
            _0x3e67ba = _0x3f369a[Math.floor(Math.random() * _0x3f369a.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x3e67ba },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpapermeme':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x174aa8 = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json'
            ),
            _0x47998d = _0x174aa8[Math.floor(Math.random() * _0x174aa8.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x47998d },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'wallpaper':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x5d6a8e = await fetchJson(
              'https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json'
            ),
            _0x346480 = _0x5d6a8e[Math.floor(Math.random() * _0x5d6a8e.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x346480 },
              caption: 'Nih Kak',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'ppcouple':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x403394 = await fetchJson(
              'https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json'
            ),
            _0x2452e4 = _0x403394[Math.floor(Math.random() * _0x403394.length)]
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x2452e4.male },
              caption: 'Foto Couple Male',
            },
            { quoted: _0x48a922 }
          )
          _0x2b6d42.sendMessage(
            _0x449fcf,
            {
              image: { url: _0x2452e4.female },
              caption: 'Fofo Couple Female',
            },
            { quoted: _0x48a922 }
          )
        }
        break
      case 'cerpen-anak':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x122b14 = await cerpen('anak')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x122b14.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x122b14.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x122b14.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x122b14.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x122b14.cerita
          )
        }
        break
      case 'cerpen-bahasadaerah':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0xaa1d51 = await cerpen('bahasa daerah')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0xaa1d51.title +
              '\n\u2B54 _*Author :*_ ' +
              _0xaa1d51.author +
              '\n\u2B54 _*Category :*_ ' +
              _0xaa1d51.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0xaa1d51.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0xaa1d51.cerita
          )
        }
        break
      case 'cerpen-bahasainggris':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1129be = await cerpen('bahasa Inggris')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x1129be.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x1129be.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x1129be.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x1129be.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x1129be.cerita
          )
        }
        break
      case 'cerpen-bahasajawa':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3d46e0 = await cerpen('bahasa jawa')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3d46e0.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3d46e0.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3d46e0.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3d46e0.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3d46e0.cerita
          )
        }
        break
      case 'cerpen-bahasasunda':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3c2a74 = await cerpen('bahasa sunda')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3c2a74.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3c2a74.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3c2a74.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3c2a74.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3c2a74.cerita
          )
        }
        break
      case 'cerpen-budaya':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x880176 = await cerpen('budaya')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x880176.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x880176.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x880176.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x880176.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x880176.cerita
          )
        }
        break
      case 'cerpen-cinta':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x23e6ea = await cerpen('cinta')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x23e6ea.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x23e6ea.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x23e6ea.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x23e6ea.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x23e6ea.cerita
          )
        }
        break
      case 'cerpen-cintaislami':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x421ff2 = await cerpen('cinta islami')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x421ff2.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x421ff2.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x421ff2.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x421ff2.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x421ff2.cerita
          )
        }
        break
      case 'cerpen-cintapertama':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4fcc57 = await cerpen('cinta pertama')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4fcc57.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4fcc57.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4fcc57.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4fcc57.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4fcc57.cerita
          )
        }
        break
      case 'cerpen-cintaromantis':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x58c640 = await cerpen('cinta romantis')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x58c640.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x58c640.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x58c640.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x58c640.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x58c640.cerita
          )
        }
        break
      case 'cerpen-cintasedih':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2f4c4b = await cerpen('cinta sedih')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2f4c4b.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2f4c4b.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2f4c4b.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2f4c4b.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2f4c4b.cerita
          )
        }
        break
      case 'cerpen-cintasegitiga':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4145c1 = await cerpen('Cinta segitiga')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4145c1.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4145c1.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4145c1.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4145c1.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4145c1.cerita
          )
        }
        break
      case 'cerpen-cintasejati':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x82ad81 = await cerpen('cinta sejati')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x82ad81.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x82ad81.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x82ad81.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x82ad81.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x82ad81.cerita
          )
        }
        break
      case 'cerpen-galau':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x527b5a = await cerpen('galau')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x527b5a.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x527b5a.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x527b5a.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x527b5a.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x527b5a.cerita
          )
        }
        break
      case 'cerpen-gokil':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x34f7dd = await cerpen('gokil')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x34f7dd.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x34f7dd.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x34f7dd.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x34f7dd.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x34f7dd.cerita
          )
        }
        break
      case 'cerpen-inspiratif':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x19278e = await cerpen('inspiratif')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x19278e.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x19278e.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x19278e.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x19278e.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x19278e.cerita
          )
        }
        break
      case 'cerpen-jepang':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4997f7 = await cerpen('jepang')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4997f7.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4997f7.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4997f7.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4997f7.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4997f7.cerita
          )
        }
        break
      case 'cerpen-kehidupan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2f4ead = await cerpen('kehidupan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2f4ead.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2f4ead.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2f4ead.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2f4ead.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2f4ead.cerita
          )
        }
        break
      case 'cerpen-keluarga':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2df333 = await cerpen('keluarga')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2df333.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2df333.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2df333.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2df333.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2df333.cerita
          )
        }
        break
      case 'cerpen-kisahnyata':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x338fc5 = await cerpen('kisah nyata')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x338fc5.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x338fc5.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x338fc5.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x338fc5.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x338fc5.cerita
          )
        }
        break
      case 'cerpen-korea':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3e8fd6 = await cerpen('korea')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3e8fd6.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3e8fd6.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3e8fd6.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3e8fd6.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3e8fd6.cerita
          )
        }
        break
      case 'cerpen-kristen':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2b97cb = await cerpen('kristen')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2b97cb.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2b97cb.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2b97cb.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2b97cb.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2b97cb.cerita
          )
        }
        break
      case 'cerpen-liburan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3887aa = await cerpen('liburan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3887aa.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3887aa.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3887aa.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3887aa.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3887aa.cerita
          )
        }
        break
      case 'cerpen-malaysia':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1a1c86 = await cerpen('malaysia')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x1a1c86.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x1a1c86.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x1a1c86.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x1a1c86.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x1a1c86.cerita
          )
        }
        break
      case 'cerpen-mengharukan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x365a29 = await cerpen('mengharukan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x365a29.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x365a29.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x365a29.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x365a29.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x365a29.cerita
          )
        }
        break
      case 'cerpen-misteri':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3a2e3c = await cerpen('misteri')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3a2e3c.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3a2e3c.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3a2e3c.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3a2e3c.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3a2e3c.cerita
          )
        }
        break
      case 'cerpen-motivasi':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x504f29 = await cerpen('motivasi')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x504f29.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x504f29.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x504f29.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x504f29.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x504f29.cerita
          )
        }
        break
      case 'cerpen-nasihat':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2d3756 = await cerpen('nasihat')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2d3756.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2d3756.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2d3756.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2d3756.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2d3756.cerita
          )
        }
        break
      case 'cerpen-nasionalisme':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x5ca52d = await cerpen('nasionalisme')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x5ca52d.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x5ca52d.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x5ca52d.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x5ca52d.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x5ca52d.cerita
          )
        }
        break
      case 'cerpen-olahraga':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x5e3670 = await cerpen('olahraga')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x5e3670.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x5e3670.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x5e3670.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x5e3670.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x5e3670.cerita
          )
        }
        break
      case 'cerpen-patahhati':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4e898d = await cerpen('patah hati')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4e898d.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4e898d.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4e898d.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4e898d.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4e898d.cerita
          )
        }
        break
      case 'cerpen-penantian':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x34886c = await cerpen('penantian')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x34886c.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x34886c.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x34886c.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x34886c.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x34886c.cerita
          )
        }
        break
      case 'cerpen-pendidikan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2a75cd = await cerpen('pendidikan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2a75cd.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2a75cd.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2a75cd.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2a75cd.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2a75cd.cerita
          )
        }
        break
      case 'cerpen-pengalaman':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4c99d9 = await cerpen('pengalaman pribadi')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4c99d9.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4c99d9.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4c99d9.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4c99d9.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4c99d9.cerita
          )
        }
        break
      case 'cerpen-pengorbanan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x5bcb76 = await cerpen('pengorbanan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x5bcb76.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x5bcb76.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x5bcb76.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x5bcb76.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x5bcb76.cerita
          )
        }
        break
      case 'cerpen-penyesalan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3fb5a4 = await cerpen('penyesalan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3fb5a4.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3fb5a4.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3fb5a4.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3fb5a4.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3fb5a4.cerita
          )
        }
        break
      case 'cerpen-perjuangan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x432d50 = await cerpen('perjuangan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x432d50.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x432d50.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x432d50.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x432d50.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x432d50.cerita
          )
        }
        break
      case 'cerpen-perpisahan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x410f77 = await cerpen('perpisahan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x410f77.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x410f77.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x410f77.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x410f77.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x410f77.cerita
          )
        }
        break
      case 'cerpen-persahabatan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x37d427 = await cerpen('persahabatan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x37d427.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x37d427.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x37d427.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x37d427.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x37d427.cerita
          )
        }
        break
      case 'cerpen-petualangan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1cb2fb = await cerpen('petualangan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x1cb2fb.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x1cb2fb.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x1cb2fb.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x1cb2fb.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x1cb2fb.cerita
          )
        }
        break
      case 'cerpen-ramadhan':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x277871 = await cerpen('ramadhan')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x277871.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x277871.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x277871.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x277871.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x277871.cerita
          )
        }
        break
      case 'cerpen-remaja':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x31140d = await cerpen('remaja')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x31140d.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x31140d.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x31140d.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x31140d.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x31140d.cerita
          )
        }
        break
      case 'cerpen-rindu':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x3f737e = await cerpen('rindu')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x3f737e.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x3f737e.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x3f737e.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x3f737e.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x3f737e.cerita
          )
        }
        break
      case 'cerpen-rohani':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x22a99a = await cerpen('rohani')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x22a99a.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x22a99a.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x22a99a.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x22a99a.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x22a99a.cerita
          )
        }
        break
      case 'cerpen-romantis':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x1bac10 = await cerpen('romantis')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x1bac10.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x1bac10.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x1bac10.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x1bac10.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x1bac10.cerita
          )
        }
        break
      case 'cerpen-sastra':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x55c4f2 = await cerpen('sastra')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x55c4f2.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x55c4f2.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x55c4f2.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x55c4f2.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x55c4f2.cerita
          )
        }
        break
      case 'cerpen-sedih':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x4cb257 = await cerpen('sedih')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x4cb257.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x4cb257.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x4cb257.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x4cb257.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x4cb257.cerita
          )
        }
        break
      case 'cerpen-sejarah':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          let _0x2305a5 = await cerpen('sejarah')
          _0x5da978(
            '\u2B54 _*Title :*_ ' +
              _0x2305a5.title +
              '\n\u2B54 _*Author :*_ ' +
              _0x2305a5.author +
              '\n\u2B54 _*Category :*_ ' +
              _0x2305a5.kategori +
              '\n\u2B54 _*Pass Moderation :*_ ' +
              _0x2305a5.lolos +
              '\n\u2B54 _*Story :*_\n' +
              _0x2305a5.cerita
          )
        }
        break
      case 'hentai':
      case 'ahegao':
      case 'ass':
      case 'bdsm':
      case 'cuckold':
      case 'cum':
      case 'ero':
      case 'femdom':
      case 'foot':
      case 'gangbang':
      case 'glasses':
      case 'jahy':
      case 'masturbation':
      case 'orgy':
      case 'panties':
      case 'pussy':
      case 'thighs':
      case 'yuri':
        {
          if (_0x586550('id', _0x20bf5a) == null) {
            return _0x5da978(mess.OnlyUser)
          }
          if (_0x586550('premium', _0x20bf5a) == false) {
            return _0x5da978(mess.OnlyPrem)
          }
          let _0x466d76 = await fetchJson(
              'https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/' +
                _0x9e786f +
                '.json'
            ),
            _0x7264f0 = _0x466d76[Math.floor(Math.random() * _0x466d76.length)]
          _0x2b6d42.sendMessage(
            _0x3977de.chat,
            {
              image: { url: _0x7264f0 },
              caption: 'Nih Kak',
            },
            { quoted: fakekirbotz }
          )
        }
        break
      case 'jadwaltv':
        {
          if (!_0x22838f) {
            return _0x5da978('Contoh : #' + _0x9e786f + ' Rcti')
          }
          let _0x1c160a = await jadwalTV(_0x22838f),
            _0xb7342e = 'Jadwal TV ' + _0x1c160a.channel + '\n\n'
          for (let _0x490dfe of _0x1c160a.result) {
            _0xb7342e += 'Tanggal : ' + _0x490dfe.date + '\n'
            _0xb7342e += 'Acara :' + _0x490dfe.event + '\n\n'
          }
          _0x5da978(_0xb7342e)
        }
        break
      case 'gempa':
        let _0x43de65 = await gempa(),
          _0x3de79e = '*INFO GEMPA*\n'
        for (let _0x246b35 of _0x43de65) {
          _0x3de79e +=
            'Tanggal : ' +
            _0x246b35.date +
            '\nKordinat : ' +
            _0x246b35.locate +
            '\nMagnitude :' +
            _0x246b35.magnitude +
            '\nLokasi ' +
            _0x246b35.location +
            '\nDaerah bahaya :' +
            _0x246b35.warning +
            '\n\n'
        }
        _0x5da978(_0x3de79e)
        break
      case 'gempanow':
        {
          let _0x52dff4 = await gempaNow(),
            _0x4a9d42 = 'GEMPA-NOW\n\n'
          for (let _0x1a2a90 of _0x52dff4) {
            _0x4a9d42 +=
              'Tanggal : ' +
              _0x1a2a90.date +
              '\nlatitude : ' +
              _0x1a2a90.latitude +
              ' \nlongitude : ' +
              _0x1a2a90.longitude +
              ' \nMagnitude :' +
              _0x1a2a90.magnitude +
              '\nLokasi ' +
              _0x1a2a90.location +
              '\nKedalaman :' +
              _0x1a2a90.depth +
              '\n\n'
          }
          _0x5da978(_0x4a9d42)
        }
        break
      case 'bioskopnow':
        {
          let _0x23f522 = await bioskopNow(),
            _0x1a2dfe =
              '\u2749\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2749\n'
          for (let _0x420043 of _0x23f522) {
            _0x1a2dfe +=
              '\n*\u300C *JADWAL BIOSKOP NOW* \u300D*\n\n- *Judul* : ' +
              _0x420043.title +
              '\n- *Link* : ' +
              _0x420043.url +
              '\n\n- *Genre* : ' +
              _0x420043.genre +
              '\n- *Durasi* : ' +
              _0x420043.duration +
              '\n- *Tayang di* : ' +
              _0x420043.playingAt +
              '\n\u2749\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2749'
            _0x5da978(_0x1a2dfe)
          }
        }
        break
      case 'latintoaksara':
        {
          if (!_0x22838f) {
            return _0x5da978('Contoh : #' + _0x9e786f + ' Makan bang')
          }
          let _0x4ed9c6 = await latinToAksara(_0x22838f)
          _0x5da978(_0x4ed9c6)
        }
        break
      case 'aksaratolatin':
        {
          if (!_0x22838f) {
            return _0x5da978('Contoh : #' + _0x9e786f + ' ꦪꦺꦴꦲꦺꦴ')
          }
          let _0x357471 = await aksaraToLatin(_0x22838f)
          _0x5da978(_0x357471)
        }
        break
      case 'sendbug':
      case 'philips':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('Itu Nomor Lu Sendiri')
          }
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415('Sukses kirim philips to @' + _0x32c07d.split('@')[0], [
            _0x32c07d,
          ])
        }
        break
      case 'philips2':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('Itu Nomor Lu Sendiri')
          }
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'philips3':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('Itu Nomor Lu Sendiri')
          }
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: philips },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'santet':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x5aa762) {
            return _0x5da978(mess.OnlyGrup)
          }
          var _0x14d864
          if (_0x539733.length !== 0) {
            _0x14d864 = _0x539733[0]
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            _0xe03415(
              'Sukses kirim *' + _0x9e786f + '* to @' + _0x14d864.split('@')[0],
              [_0x14d864]
            )
          } else {
            _0xcedf8f
              ? ((_0x14d864 = _0x6ec46.sender),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                _0xe03415(
                  'Sukses kirim *' +
                    _0x9e786f +
                    '* to @' +
                    _0x14d864.split('@')[0],
                  [_0x14d864]
                ))
              : _0x5da978(
                  'Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag'
                )
          }
        }
        break
      case 'santet2':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x5aa762) {
            return _0x5da978(mess.OnlyGrup)
          }
          var _0x14d864
          if (_0x539733.length !== 0) {
            _0x14d864 = _0x539733[0]
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            _0xe03415(
              'Sukses kirim *' + _0x9e786f + '* to @' + _0x14d864.split('@')[0],
              [_0x14d864]
            )
          } else {
            _0xcedf8f
              ? ((_0x14d864 = _0x6ec46.sender),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                _0xe03415(
                  'Sukses kirim *' +
                    _0x9e786f +
                    '* to @' +
                    _0x14d864.split('@')[0],
                  [_0x14d864]
                ))
              : _0x5da978(
                  'Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag'
                )
          }
        }
        break
      case 'santet3':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x5aa762) {
            return _0x5da978(mess.OnlyGrup)
          }
          var _0x14d864
          if (_0x539733.length !== 0) {
            _0x14d864 = _0x539733[0]
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            await sleep(3000)
            _0x2b6d42.sendMessage(
              _0x14d864,
              { text: philips },
              { quoted: _0x18486e }
            )
            _0xe03415(
              'Sukses kirim *' + _0x9e786f + '* to @' + _0x14d864.split('@')[0],
              [_0x14d864]
            )
          } else {
            _0xcedf8f
              ? ((_0x14d864 = _0x6ec46.sender),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                await sleep(3000),
                _0x2b6d42.sendMessage(
                  _0x14d864,
                  { text: philips },
                  { quoted: _0x18486e }
                ),
                _0xe03415(
                  'Sukses kirim *' +
                    _0x9e786f +
                    '* to @' +
                    _0x14d864.split('@')[0],
                  [_0x14d864]
                ))
              : _0x5da978(
                  'Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag'
                )
          }
        }
        break
      case 'virtex':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'virtex2':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'virtex3':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'bug1':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'bug2':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'bug3':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'bug4':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          await sleep(3000)
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      case 'bug5':
        {
          if (!_0x37b2fc) {
            return _0x5da978(mess.OnlyOwner)
          }
          if (!_0x22838f) {
            return _0x5da978(
              'Syntak Error!\n*Contoh:*\n' + (_0x250b36 + _0x9e786f) + ' 628xxx'
            )
          }
          var _0x32c07d = _0x22838f + '@s.whatsapp.net',
            _0x2a5b59 = '6285694756102@s.whatsapp.net'
          if (_0x32c07d == _0x2a5b59) {
            return _0x5da978('Itu developer gua')
          }
          if (_0x32c07d == _0x20bf5a) {
            return _0x5da978('itu nomor lu sendiri')
          }
          await sleep(3000)
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0x2b6d42.sendMessage(_0x32c07d, { text: 'p' }, { quoted: _0x18486e })
          await sleep(3000)
          _0x2b6d42.sendMessage(
            _0x32c07d,
            { text: virus },
            { quoted: _0x18486e }
          )
          await sleep(3000)
          _0xe03415(
            'Sukses kirim *' + _0x9e786f + '* to @' + _0x32c07d.split('@')[0],
            [_0x32c07d]
          )
        }
        break
      default:
        if (!_0x2804c4) {
          if (_0x5123db('id', _0x20bf5a) == null) {
            return
          }
          if (_0x5123db('teman', _0x20bf5a) == false) {
            return
          }
          if (
            _0x3977de.messages[0].type == 'conversation' ||
            _0x3977de.messages[0].type == 'extendedTextMessage'
          ) {
            try {
              var _0x2fe742 =
                _0x3977de.messages[0].message.extendedTextMessage.text
            } catch (_0xe6e3ad) {
              var _0x2fe742 = _0x3977de.messages[0].message.conversation
            }
            let _0x43c886 = '*ANONYMOUS CHAT*\n\uD83D\uDCAC : ' + _0x2fe742
            _0x2b6d42.sendMessage(_0x5123db('teman', _0x20bf5a), {
              text: _0x43c886,
            })
            _0x2b6d42.sendMessage(
              _0x449fcf,
              { text: 'pesan diteruskan' },
              { quoted: _0x48a922 }
            )
          }
        }
    }
  } catch (_0x3f53a0) {
    console.log(color('[ERROR]', 'red'), _0x3f53a0)
    server_eror.push({ error: '' + _0x3f53a0 })
    fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
  }
}
