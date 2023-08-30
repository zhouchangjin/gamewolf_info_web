import request from '@/utils/request.js'

export function ListDefaultMenu(){
    return request({
        url:"/menu/defaultlist",
        method:"get"
    })
}