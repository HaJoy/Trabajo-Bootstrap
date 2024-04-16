const submitBtn = document.getElementById("submitBtn");
const usersTable = document.getElementById("usersBodyTable");

const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const confirmPass = document.getElementById("confirmPassInput");


let userInfo = [];
const validarCampos = ()=>{

    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPassValue = confirmPass.value;

    if (emailValue == "") {
        alert("Por favor rellene el campo del email");
        return false;
    }
    if (passwordValue == "") {
        alert("Por favor rellene el campo de la contraseña");
        return false;
    }
    if (confirmPassValue == "") {
        alert("Por favor confirme la contraseña");
        return false;
    }
    if (confirmPassValue != passwordValue) {
        alert("Las constraseñas no coinciden");
        return false;
    }
    let search = userInfo.find(user => user.mail === emailValue);
    if (search != undefined) {
        alert("Ya existe un usuario con ese email");
        return false;
    }

    return true;
}

submitBtn.addEventListener("click", (e)=>{
    
    e.preventDefault();

    if (validarCampos()) {
        let emailValue = email.value

        let UID = parseInt(Math.random()*100000); // Genera una UID de 5 digitos
        let search = userInfo.find(user => user.uid === UID);

        while (UID === search) { // Se asegura que la UID sea totalmente diferente
            UID = parseInt(Math.random()*100000);
            search = userInfo.find(user => user.uid === UID);
        }

        user = emailValue.split("@")[0]
        userInfo.push({
            "uid": UID,
            "user": user,
            "mail": emailValue,
            "bonsaisSold": 0,
            "rate": 0
        })

        // Añadiendo datos a la tabla
        usersTable.innerHTML += `<tr>
        <th scope="row">${UID}</th>
        <td>${user}</td>
        <td>0</td>
        <td>0</td>
      </tr>`
    }
})