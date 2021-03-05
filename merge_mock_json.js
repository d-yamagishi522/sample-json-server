const fs = require('fs')
const path = require('path')

const root = path.resolve('./', 'mocks')

const api = fs.readdirSync(root).reduce((api, file) => {
  // ファイル名を取得
  const endpoint = path.basename(file, path.extname(file))
  // ファイル名をキー名にする
  api[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'))
  return api
}, {})

// 作成したjsonをmock.jsonに書き込む
fs.writeFile('./mock.json', JSON.stringify(api), err => {
  if (err) throw err
})
