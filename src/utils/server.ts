import { AxiosResponse } from 'axios'
import { get } from '../utils/require'

interface Iresponse {
    code: number,
    lvzuan?: any,
    name?: string,
    qlogo?: string,
    qq?: string,
    msg?: string
}

export function fetchQqInfoByNumber(value: string): Promise<AxiosResponse<Iresponse>> {
    return get({
        url: "https://api.uomg.com/api/qq.info",
        params: {
            qq: value
        }
    })
}