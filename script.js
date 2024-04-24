function clearScreen() {
    document.getElementById("result").value = " ";
}
 
// Fungsi untuk menghapus satu angka terakhir
function removeOne() {
    var currentValue = document.getElementById("result").value;
    // Periksa apakah ada karakter yang akan dihapus
    if (currentValue.length > 0) {
        // Hapus satu karakter terakhir
        var newValue = currentValue.slice(0, -1);
        // Tetapkan nilai yang telah dimodifikasi kembali ke elemen "result"
        document.getElementById("result").value = newValue;
    }
}

// This function displays the values
function display( value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// dark theme
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode"); // Toggle dark mode class on body
}

// <============================================================================================>
// Fungsi untuk mendeteksi tema dari perangkat yang digunakan
// function detectDeviceTheme() {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         // If dark mode is preferred, add dark mode class to body
//         document.body.classList.add('dark-mode');
//     }
// }

// // Function to toggle dark mode
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }

// // Call the detectDeviceTheme function when the script is loaded
// detectDeviceTheme();
// <============================================================================================>

