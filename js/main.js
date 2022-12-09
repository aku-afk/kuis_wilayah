// SET KEY

const TRUE = '5px solid rgba(25, 135, 84, 1)';
const FALSE = '5px solid rgba(220, 53, 69, 1)';

function benar(id) {
    document.getElementById(id).style.border = TRUE;
    // document.getElementById(id).style.color = "white";
}
function salah(id) {
    document.getElementById(id).style.border = FALSE;
    // document.getElementById(id).style.color = "white";
}

function cek() {
    var i1 = document.getElementById('i1').value;
    var i2 = document.getElementById('i2').value;
    var i3 = document.getElementById('i3').value;
    var i4 = document.getElementById('i4').value;
    var i5 = document.getElementById('i5').value;

    // I1
    if (i1 == "SLEMAN") {
        console.log(i1);
        benar('i1');
    } else {
        console.log('- SALAH -');
        salah('i1');
    } 
    
    // I2
    if (i2 == "YOGYAKARTA") {
        console.log(i2);
        benar('i2');
    } else {
        console.log('- SALAH -');
        salah('i2');
    }
    
    // 13
    if (i3 == "BANTUL") {
        console.log(i3);
        benar('i3');
    } else {
        console.log('- SALAH -');
        salah('i3');
    }
    
    // 14
    if (i4 == "KULON PROGO") {
        console.log(i4);
        benar('i4');
    } else {
        console.log('- SALAH -');
        salah('i4');
    }
    
    // I5
    if (i5 == "GUNUNGKIDUL") {
        console.log(i5);
        benar('i5');
    } else {
        console.log('- SALAH -');
        salah('i5');
    }
}
