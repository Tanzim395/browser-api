//alert function:
const maComing = () => {
    alert('Amma Aiye! taratari Boi khol');
};

//confirm BOM function
const askPicnic = () => {
    const response = confirm('are you sure about that, you are going to the picnic?');
    console.log(response);
    if (response === true) {
        alert('amake taka ta bKash koro')
    }
    else {
        console.log('DGM!!! door e giya mor!!!')
    }
};

//prompt
const askName = () => {
    prompt('What is your name?')
}