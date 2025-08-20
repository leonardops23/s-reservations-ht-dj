import { env } from "process";

const apiService = {
    get: async function (url:string): Promise<any> {
        console.log('get: ', url)

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                resolve(json)
            })
            .catch((error) => {
                console.log(error);
                reject(error)
            })
        })
    },
    post: async function(url:string, data:any): Promise<any> {
        console.log('post: ', url, data)

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                resolve(json)
            })
            .catch((error) => {
                console.log(error);
                reject(error)
            })
        })
    }
}


export default apiService;
