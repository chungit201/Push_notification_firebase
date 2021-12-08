import instance from "./instance";

export const sendAll = (notification) =>{
    const url = '/send-notifications/sendToAll';
    return instance.post(url,notification)
}

export const sendOne = (notification) =>{
    const url = '/send-notifications/sendToOne';
    return instance.post(url,notification)
}