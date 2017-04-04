function IS(obj, msg) {
  if (!obj) throw new Error(msg)
}
IS.NT=function(obj, msg) {
  if (obj) throw new Error(msg)
}

module.export=IS
