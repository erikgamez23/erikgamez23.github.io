function openNav() {
    document.querySelector('#mySidenav').style.width = "300px";
    document.querySelector('.all-over-bkg').classList.add('is-visible');
    document.querySelector('#mySidenav').style.border = "5px";
}

function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
   document.querySelector('.all-over-bkg').classList.remove('is-visible');
    document.querySelector('#mySidenav').style.border = "0px";
}

document.querySelector('.openButton').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);