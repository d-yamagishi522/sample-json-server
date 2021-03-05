module.exports = async function (req, _res, next) {
  if (req.method === 'PATCH') {
    req.method = 'GET'
    req.url += '_patch'
  }
  next()
}
