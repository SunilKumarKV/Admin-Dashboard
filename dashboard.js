"use strict"

class Dashboard() {
    const datalist = document.getElementById('search-hints');
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent.trim();
        if (text !== '') {
            const option = document.createElement('option');
            option.value = text;
            datalist.appendChild(option);
        }
    }
}

export default Dashboard;