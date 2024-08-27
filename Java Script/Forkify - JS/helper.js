import { SET_TIME } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  
export const getURL = async function(url){
    try {
        const fetchURL = fetch(url);
        const res = await Promise.race([fetchURL,timeout(SET_TIME)]);
        const data = await res.json();
        if(!res.ok) throw new Error(`${res.status}`);
        return data;
    }catch(err){
        throw err;
        // important to throw errr so that we can get it in touch in the controller.js throw will make the err  not to log but it throws to the specified location;
    }
}