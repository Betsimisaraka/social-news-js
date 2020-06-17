// List of the links
const links = [
    {
        title: 'The first links',
        url: 'http://the-first-links.com',
        author: 'Dox'
    },
    {
        title: 'The second links',
        url: 'http://the-second-links.com',
        author: 'A. P. I'
    },
    {
        title: 'The third links',
        url: 'https://the-third-links.com',
        author: 'Clarisse'
    }
]

// Showing all the existing links
const existingLinks = () => {
    for (let i = 0; i < links.length; i++) {
        let linksString = `1: ${links[i].title} (${links[i].url}) author: ${links[i].author}`;
        alert(linksString);
    }
}

// Ask the users to add a new link
const addingLinks = () => {
    let linkTitle = prompt('Enter the title of the new link');
    let linkUrl = prompt('Enter the url of the new link');
    if (!linkUrl.startsWith('https://') && !linkUrl.startsWith ('http://') ) {
       linkUrl = `http:// ${linkUrl}`; 
    }
    let linkAuthor = prompt('Enter the author of your new link');
    let newLinks = {
        title : linkTitle,
        url: linkUrl,
        author: linkAuthor
    }
    links.push(newLinks);
    return;
}

// Ask the user to put the index of link they want to delete
const removeLink = () => {
    let indexOfLink = Number(prompt('Enter the index of link to be removed (between 1 and 3)'));
    let removeIndex = links.splice(indexOfLink--, 1);
    alert(`You delete ${removeIndex[0].title}`);
}
// Option menu
const menu = `Choose an option
1 - Show existing links
2 - Add a link
3 - Remove a link
0 - Quites`

let menuChoice = Number(prompt(`${menu}`));

while (menuChoice !== 0) {
    switch(menuChoice) {
        case 0:
            alert('Say goodbey to the programmer');
            break;
        case 1:
           existingLinks();
           break;
        case 2:
            addingLinks();
            break;
        case 3:
            removeLink();
            break;
        default:
        alert('Enter a number (0, 1, 2, 3)');
    }
    menuChoice = Number(prompt(`${menu}`));
}