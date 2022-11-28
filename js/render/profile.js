import { addActive, removeActive } from '/js/util/util.js'

const showProfileMenu = async () => {
    const profileNavLists = document.querySelectorAll('.profile-nav-list')

    profileNavLists.forEach(element => {
        element.addEventListener('click', () => {
            profileNavLists.forEach(element => {
                removeActive(element)
            })

            addActive(element)
        })
    })
}

const changeTabs = async () => {
    const profileTabLists = document.querySelectorAll('.profile-tab-item')

    const profileNavListItems = document.querySelectorAll('.profile-nav-list-menu-item')

    profileNavListItems.forEach(element => {
        element.addEventListener('click', () => {
            profileNavListItems.forEach(element => {
                removeActive(element)
            })

            profileTabLists.forEach(element => {
                removeActive(element)
            })

        addActive(document.querySelector(`#${element.id}-tab`))

        addActive(element)
        })
    })
}

const changeAvt = async () => {
    // const imgDiv = document.querySelector('.profile-details');
    // const img = document.querySelector('#photo');
    // const file = document.querySelector('#file');
    // const uploadBtn = document.querySelector('#uploadBtn');

    // //if user hover on img div

    // imgDiv.addEventListener('mouseenter', function(){
    //     uploadBtn.style.display = "block";
    // });

    // //if we hover out from img div

    // imgDiv.addEventListener('mouseleave', function(){
    //     uploadBtn.style.display = "none";
    // });

    // file.addEventListener('change', function(){
    //     //this refers to file
    //     const choosedFile = this.files[0];

    //     if (choosedFile) {

    //         const reader = new FileReader(); //FileReader is a predefined function of JS

    //         reader.addEventListener('load', function(){
    //             img.setAttribute('src', reader.result);
    //         });

    //         reader.readAsDataURL(choosedFile);
    //     }
    // });
}

showProfileMenu()
changeTabs()
changeAvt()