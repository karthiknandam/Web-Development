const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const definition = document.getElementById('definition');
async function setData(data){
        const name = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`);
        if(!name.ok) throw new Error('No data found');
        return name.json();
};

function getBestOutput(data){
    if(!data)throw new Error('No data found');
    const definations = data[0].meanings[0].definitions[0].definition;
    return definations;
}

async function setValue(data){
    try{
        const value = await setData(data);
        return getBestOutput(value);
    }
    catch(err){
        return err;
    }
}

searchButton.addEventListener('click', async ()=>{
    const data = (searchInput.value).trim().toLowerCase();
    if(!data)return;
    definition.textContent = 'Searching...';
    definition.textContent = await setValue(data);
    setTimeout(() => {
        searchInput.value = '';
    }, 1000);
});
