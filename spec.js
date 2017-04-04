function IS(r,i){if(!r)throw Error(i)}IS.NT=function(r,i){if(r)throw Error(i)};

IS(true)
IS('hello')
IS(1)
IS(1.2)
IS(IS)
IS([])
IS({})

IS.NT(false)
IS.NT(0)
IS.NT(0.0)
IS.NT(undefined)
IS.NT(null)
IS.NT()
