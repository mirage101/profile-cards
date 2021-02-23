const heading = 'Please Meet Our Team';
let i = 0;

const typing = () =>{ //typing effect
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();