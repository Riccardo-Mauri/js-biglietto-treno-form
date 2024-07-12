const SubmitButton = document.getElementById('submit-button');

//1.chiedo nome dell'utente 
const InfoForm = document.querySelector('form');
InfoForm.addEventListener(
    'submit',
    function(UserInfo){
        console.log('UserInfo',UserInfo, typeof userInfo);
        UserInfo.preventDefault();
        const UserName = document.getElementById('user-name');
        console.log('UserName', UserName, typeof UserName);
        console.log('UserName.value', UserName.value, typeof UserName.value);
        //2.chiedo di inserire i km 
        const dist = document.getElementById('dist-user');
        console.log('dist', dist, typeof dist);
        console.log('dist.value', dist.value, typeof dist.value);
        //2.chiedo l'età
        const age = document.getElementById('user-age');
        console.log('age', age, typeof age);
        console.log('age.value', age.value, typeof age.value);
        
    }
);
    





