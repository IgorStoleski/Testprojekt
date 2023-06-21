let names = ['Claudi', 'Sanja', 'Filip', 'Paula'];

function showNames() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        list.innerHTML += `<li>${name}</li>`;
    }
}

function filterNames(){
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search);

    let list = document.getElementById('list');
    list.innerHTML = '';
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        if (name.toLowerCase().includes(search)) {
            list.innerHTML += `<li>${name}</li>`;
        }        
    }
}