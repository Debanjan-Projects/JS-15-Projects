let toastBox = document.getElementById('toastBox');

let successMsg = "Successfully Submitted";
let errorMsg = "Please fix the Error!";
let invalidMsg = "Invalid input, click again!";

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.toLowerCase().includes('error')) {
        toast.classList.add('error');
    } else if (msg.toLowerCase().includes('invalid')) {
        toast.classList.add('invalid');
    } else {
        toast.classList.add('success');
    }

    // Auto remove after 6s
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
