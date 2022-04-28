const features = document.getElementById("features")
const company = document.getElementById("company")
const featuresbox = document.getElementById("featuresbox")
const companyBox = document.getElementById("companyBox")


function toggleFeaturesBox() {
    if (featuresbox.style.display === 'none'){
        featuresbox.style.display = 'flex';
    } else {
        featuresbox.style.display = 'none';
    }
    
}

function toggleCompanyBox() {
    if (companybox.style.display === 'none'){
        companybox.style.display = 'flex';
    } else {
        companybox.style.display = 'none';
    }
    
}


features.addEventListener("click", toggleFeaturesBox);
company.addEventListener("click", toggleCompanyBox);

//Hamburger Menu
const hamburgerButton = document.getElementById('hamburger');
const closeHamburger = document.getElementById('close');
const hamburgerMenu = document.getElementById('hamburger-menu');

function toggleHamburgerMenu(){
    if(hamburgerMenu.style.display === 'none'){
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}

hamburgerButton.addEventListener('click', toggleHamburgerMenu);
closeHamburger.addEventListener('click', toggleHamburgerMenu);

    //hamburger Features list

const featuresMobile = document.getElementById('features-mobile');
const featuresList = document.getElementById('features-list-mobile');
const companyMobile = document.getElementById('company-mobile');
const companyList = document.getElementById('company-list-mobile');

function toggleFeatureMobile(){
    if(featuresList.style.display === 'none'){
        featuresList.style.display = 'flex';
    } else {
        featuresList.style.display = 'none';
    }
}

featuresMobile.addEventListener('click', toggleFeatureMobile);

function toggleCompanyMobile(){
    if(companyList.style.display === 'none'){
        companyList.style.display = 'flex';
    } else {
        companyList.style.display = 'none';
    }
}

companyMobile.addEventListener('click', toggleCompanyMobile)