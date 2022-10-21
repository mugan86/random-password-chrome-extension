// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('genPasswordElement').addEventListener('click', function () {
        genPassword();
    });

    document.getElementById('copyPasswordElement').addEventListener('click', function () {
        copyPassword();
    });
});


function genPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;

}
function copyPassword() {
    const copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}