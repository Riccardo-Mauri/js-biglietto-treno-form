const SubmitButton = document.getElementById('submit-button');

//------1.chiedo nome dell'utente----- 
const InfoForm = document.querySelector('form');
InfoForm.addEventListener(
    'submit',
    function (UserInfo) {
        console.log('UserInfo', UserInfo, typeof UserInfo);
        UserInfo.preventDefault();
        const UserName = document.getElementById('user-name');
        console.log('UserName', UserName, typeof UserName);
        console.log('UserName.value', UserName.value, typeof UserName.value);
        //------2.chiedo di inserire i km -------
        const distInput = document.getElementById('dist-user');
        const dist = distInput.value;
        console.log('dist', dist, typeof dist);
        const distInNumber = parseInt(dist);
        //------3.chiedo l'età-----
        const ageInput = document.getElementById('user-age');
        const age = ageInput.value;
        console.log('age', age, typeof age);
        const ageInNumber = parseInt(age);
        //-----SE INSERISCE UN VALORE SBAGLIATO AVVISO L'UTENTE---------
        if (isNaN(age) || isNaN(dist)) {
            alert('inserisci un numero');
        }
        else {
            //-----SE è DI ETA' COMPRESA TRA I 18 E I 65 IL CALCOLO DEL BILGIETTO E' COSI'-------
            let price = dist * 0.21;
            console.log('price', price, typeof price);
            //-----SE INVECE E' DI ETA' INFERIORE A 18 IL CALCOLO DEL BILGIETTO E' COSI'-------     
            if (age < 18) {
                console.log('MINORE');
                price *= 0.8;
                console.log('price', price, typeof price);
            }
            //-----SE INVECE E' DI ETA' SOPRA I 65 IL CALCOLO DEL BILGIETTO E' COSI'-------
            else if (age > 65) {
                console.log('OVER65')
                price *= 0.40;
                console.log('price', price, typeof price);
            }
            //-----INSERISCO IL MIO RISULTATO DENTRO ALLA PAGIAN VISIBILE ALL'UENTE-------
            const resultSpan = document.getElementById('result')
            resultSpan.innerHTML = price.toFixed(2);
        }
    }
);





