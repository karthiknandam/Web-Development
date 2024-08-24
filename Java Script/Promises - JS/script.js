'use strict';
//^ Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, 
this time using async/await (only the part where the promise is consumed). 
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function(){
    return new Promise(resolve=>{
        setTimeout(resolve,2000);
    });
}

const loadImg = async function(imgSrc){
    
    const img = document.createElement('img');
    img.src =  imgSrc;

    const createEl = document.querySelector('.images');

    img.onload = () => createEl.append(img);
    return img;
}

// ^ Part -1

const callFn = async function () {
    const a = await loadImg('img/img-1.jpg');
    await wait();
    a.style.display = 'none';
    await wait();
    const b = await loadImg('img/img-2.jpg');
    await wait();
    b.style.display = 'none';
}



const loadAll= async function(arr){
    try{
        const a = arr.map(async img=> await loadImg(img));
        // ^ Here what we did was to return every single array to the async function
        // ~ so that it can register the (promise value in the array otherwise it shows undefined value);
        const b = await Promise.all(a);
        console.log(b);
        b.forEach(img => img.classList.add('parallel'));
    }
    catch(err){
        console.error(err);
    }
    
}

const main = async function(){
    await callFn();
    await wait();
    await loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
};
main();