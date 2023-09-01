const margin_btn=()=>{
    btn.classList.toggle("btn__holder__margin")
    navlink.classList.add("block")
    console.log("working");
}
const navlink=document.querySelectorAll("nav-link");
const nav_toggle=document.getElementById("toggler");
const btn=document.getElementById('nav-btn');
nav_toggle.addEventListener('click',margin_btn);

// nav activ
function active_home(){
nav_home.classList.add("active-link");
nav_about.classList.remove("active-link");
nav_chef.classList.remove("active-link");
nav_gallery.classList.remove("active-link");
nav_menu.classList.remove("active-link");
nav_contact.classList.remove("active-link");

}
function active_about(){
    nav_home.classList.remove("active-link");
    nav_about.classList.add("active-link");
    nav_chef.classList.remove("active-link");
    nav_gallery.classList.remove("active-link");
    nav_menu.classList.remove("active-link");
    nav_contact.classList.remove("active-link");
    }
    function active_menu(){
        nav_home.classList.remove("active-link");
        nav_about.classList.remove("active-link");
        nav_chef.classList.remove("active-link");
        nav_gallery.classList.remove("active-link");
        nav_menu.classList.add("active-link");
        nav_contact.classList.remove("active-link");
        }
        function active_chef(){
            nav_home.classList.remove("active-link");
            nav_about.classList.remove("active-link");
            nav_chef.classList.add("active-link");
            nav_gallery.classList.remove("active-link");
            nav_menu.classList.remove("active-link");
            nav_contact.classList.remove("active-link");
            
            }
            function active_gallery(){
                nav_home.classList.remove("active-link");
                nav_about.classList.remove("active-link");
                nav_chef.classList.remove("active-link");
                nav_gallery.classList.add("active-link");
                nav_menu.classList.remove("active-link");
                nav_contact.classList.remove("active-link");
                }
                function active_contact(){
                    nav_home.classList.remove("active-link");
                    nav_about.classList.remove("active-link");
                    nav_chef.classList.remove("active-link");
                    nav_gallery.classList.remove("active-link");
                    nav_menu.classList.remove("active-link");
                    nav_contact.classList.add("active-link");
                    
                    }
            


const nav_home=document.getElementById("Home");
nav_home.addEventListener('click',active_home);
const nav_about=document.getElementById("About");
nav_about.addEventListener('click',active_about);
const nav_menu=document.getElementById("Menu");
nav_menu.addEventListener('click',active_menu);
const nav_chef=document.getElementById("Chef");
nav_chef.addEventListener('click',active_chef);
const nav_gallery=document.getElementById("Gallery");
nav_gallery.addEventListener('click',active_gallery);
const nav_contact=document.getElementById("Contact");
nav_contact.addEventListener('click',active_contact);


