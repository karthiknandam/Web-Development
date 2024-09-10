const emojiIn = document.getElementById('emoji');
const btn = document.getElementById('clickButton');
const emojiName = document.getElementById('emojiName');
let emojiCache = [];
async function getEmoji(){
    const res = await fetch('https://emoji-api.com/emojis?access_key=7d52d49b22ed3cac160db9f031b3713ace345730');
    if(!res.ok)throw new Error('Failed to fetch emoji');
    emojiCache =  await res.json();
    return emojiCache;
}

async function displayEmoji(){
    emojiIn.textContent = emojiName.textContent = '...';
    try{
        const emoji = await getEmoji();
        const item = emoji[Math.floor(Math.random() * emoji.length)];
        emojiIn.textContent = item.character;
        emojiName.textContent = item.unicodeName;

    }catch(error){
        emojiIn.textContent =  '🤔';
        emojiName.textContent = 'Try again';
    }
}
btn.addEventListener('click', displayEmoji);

