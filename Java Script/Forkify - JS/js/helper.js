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

export const sendJSON = async function(url , uploadData){
  try{

    // ! this block of code needs to be revison so bee carful while checkint it in online 

    const fetchPro = fetch(url ,{
      method : 'POST',
      headers : {
        'Context-Type' : 'application/json',
      },
      body:JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro , timeout(SET_TIME)]);
    const data = await res.json();

    if(!res.ok) throw new Error(`${res.status}`);
    return data;

  }
  catch(err){
    throw err;
  }
}