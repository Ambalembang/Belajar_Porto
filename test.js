var table = document.getElementById("myTable");
// Membuat variabel untuk menyimpan nilai dari rna dan rnb
var updateA = 0;
var updateB = 0;

// Membuat variabel untuk fc_stra & fc_strb
var opa = 0;
var straInput = document.querySelector(".stra");

// Update setiap perubahan pada fc_stra
straInput.addEventListener("input", fc_stra);
straInput.addEventListener("change", fc_stra);

// Membuat Input Durasi Waktu A, ketika memasukkan input untuk Random Number A
function rna(a) {
  var durasiA = a.parentElement.parentElement.querySelector(".DurasiA");

  if (a.value > 0 && a.value <= 19) {
    durasiA.innerHTML = 0.25;
  } else if (a.value >= 20 && a.value <= 29) {
    durasiA.innerHTML = (0.3).toFixed(2);
  } else if (a.value >= 30 && a.value <= 89) {
    durasiA.innerHTML = 0.35;
  } else if (a.value >= 90 && a.value <= 219) {
    durasiA.innerHTML = (0.4).toFixed(2);
  } else if (a.value >= 220 && a.value <= 389) {
    durasiA.innerHTML = 0.45;
  } else if (a.value >= 390 && a.value <= 549) {
    durasiA.innerHTML = (0.5).toFixed(2);
  } else if (a.value >= 550 && a.value <= 689) {
    durasiA.innerHTML = 0.55;
  } else if (a.value >= 690 && a.value <= 799) {
    durasiA.innerHTML = (0.6).toFixed(2);
  } else if (a.value >= 800 && a.value <= 889) {
    durasiA.innerHTML = 0.65;
  } else if (a.value >= 890 && a.value <= 929) {
    durasiA.innerHTML = (0.7).toFixed(2);
  } else if (a.value >= 930 && a.value <= 959) {
    durasiA.innerHTML = 0.75;
  } else if (a.value >= 960 && a.value <= 989) {
    durasiA.innerHTML = (0.8).toFixed(2);
  } else if (a.value >= 990 && a.value <= 999) {
    durasiA.innerHTML = 0.85;
  } else {
    durasiA.innerHTML = 0;
  }

  updateA = parseFloat(durasiA.innerHTML);
  fc_enda(updateA, opa);
}

// Membuat Input Durasi Waktu B, ketika memasukkan input untuk Random Number B
function rnb(b) {
  var durasiB = b.parentElement.parentElement.querySelector(".DurasiB");

  if (b.value > 0 && b.value <= 19) {
    durasiB.innerHTML = 0.25;
  } else if (b.value >= 20 && b.value <= 109) {
    durasiB.innerHTML = (0.3).toFixed(2);
  } else if (b.value >= 110 && b.value <= 259) {
    durasiB.innerHTML = 0.35;
  } else if (b.value >= 260 && b.value <= 429) {
    durasiB.innerHTML = (0.4).toFixed(2);
  } else if (b.value >= 430 && b.value <= 589) {
    durasiB.innerHTML = 0.45;
  } else if (b.value >= 590 && b.value <= 699) {
    durasiB.innerHTML = (0.5).toFixed(2);
  } else if (b.value >= 700 && b.value <= 789) {
    durasiB.innerHTML = 0.55;
  } else if (b.value >= 790 && b.value <= 839) {
    durasiB.innerHTML = (0.6).toFixed(2);
  } else if (b.value >= 840 && b.value <= 879) {
    durasiB.innerHTML = 0.65;
  } else if (b.value >= 880 && b.value <= 919) {
    durasiB.innerHTML = (0.7).toFixed(2);
  } else if (b.value >= 920 && b.value <= 949) {
    durasiB.innerHTML = 0.75;
  } else if (b.value >= 950 && b.value <= 979) {
    durasiB.innerHTML = (0.8).toFixed(2);
  } else if (b.value >= 980 && b.value <= 999) {
    durasiB.innerHTML = 0.85;
  } else {
    durasiB.innerHTML = 0;
  }

  updateB = parseFloat(durasiB.innerHTML);
  fc_endb(updateB, opb);
}

// Mengambil Value dari Operasi A Dimulai
function fc_stra() {
  opa = parseFloat(straInput.value);
  fc_enda(updateA, opa);
}

// Untuk melakukan perhitungan operasi A berakhir dan menampilkan
function fc_enda(randa, opa) {
  hitung_enda = (randa * 60) / 1000 + opa;
  document.querySelector(".enda").innerHTML = hitung_enda.toFixed(3);
  document.querySelector(".readya").innerHTML = hitung_enda.toFixed(3);
  document.querySelector(".readyb").innerHTML = hitung_enda.toFixed(3);
  // ========================================= //
  var endbElement = document.querySelector(".strb");
  endbElement.innerHTML = hitung_enda.toFixed(3);
  opb = parseFloat(endbElement.innerHTML);
  fc_endb(updateB, opb);
}

var readyb_v_2 = 0;

function fc_endb(randb, opb) {
  hitung_endb = (randb * 60) / 1000 + opb;
  document.querySelector(".endb").innerHTML = hitung_endb.toFixed(3);
  readyb_v_2 = document.querySelector(".readyb_2").innerHTML =
    hitung_endb.toFixed(3);
  fc_cek_2(enda_v_2, readyb_v_2);
}

var updateA_2 = 0;
var updateB_2 = 0;
var cek_2 = 0;

var opa_2 = 0;
var straInput_2 = document.querySelector(".stra_2");
var endbInput_2 = document.querySelector(".endb_2");
var strbInput_2 = document.querySelector(".strb_2");

strbInput_2.addEventListener("input", fc_cek_2);
strbInput_2.addEventListener("change", fc_cek_2);
straInput_2.addEventListener("input", fc_stra_2);
straInput_2.addEventListener("change", fc_stra_2);

function rna_2(a) {
  var DurasiA_2 = a.parentElement.parentElement.querySelector(".DurasiA_2");

  if (a.value > 0 && a.value <= 19) {
    DurasiA_2.innerHTML = 0.25;
  } else if (a.value >= 20 && a.value <= 29) {
    DurasiA_2.innerHTML = (0.3).toFixed(2);
  } else if (a.value >= 30 && a.value <= 89) {
    DurasiA_2.innerHTML = 0.35;
  } else if (a.value >= 90 && a.value <= 219) {
    DurasiA_2.innerHTML = (0.4).toFixed(2);
  } else if (a.value >= 220 && a.value <= 389) {
    DurasiA_2.innerHTML = 0.45;
  } else if (a.value >= 390 && a.value <= 549) {
    DurasiA_2.innerHTML = (0.5).toFixed(2);
  } else if (a.value >= 550 && a.value <= 689) {
    DurasiA_2.innerHTML = 0.55;
  } else if (a.value >= 690 && a.value <= 799) {
    DurasiA_2.innerHTML = (0.6).toFixed(2);
  } else if (a.value >= 800 && a.value <= 889) {
    DurasiA_2.innerHTML = 0.65;
  } else if (a.value >= 890 && a.value <= 929) {
    DurasiA_2.innerHTML = (0.7).toFixed(2);
  } else if (a.value >= 930 && a.value <= 959) {
    DurasiA_2.innerHTML = 0.75;
  } else if (a.value >= 960 && a.value <= 989) {
    DurasiA_2.innerHTML = (0.8).toFixed(2);
  } else if (a.value >= 990 && a.value <= 999) {
    DurasiA_2.innerHTML = 0.85;
  } else {
    DurasiA_2.innerHTML = 0;
  }

  updateA_2 = parseFloat(DurasiA_2.innerHTML);
  fc_enda_2(updateA_2, opa_2);
}

// Membuat Input Durasi Waktu B, ketika memasukkan input untuk Random Number B
function rnb_2(b) {
  var DurasiB_2 = b.parentElement.parentElement.querySelector(".DurasiB_2");

  if (b.value > 0 && b.value <= 19) {
    DurasiB_2.innerHTML = 0.25;
  } else if (b.value >= 20 && b.value <= 109) {
    DurasiB_2.innerHTML = (0.3).toFixed(2);
  } else if (b.value >= 110 && b.value <= 259) {
    DurasiB_2.innerHTML = 0.35;
  } else if (b.value >= 260 && b.value <= 429) {
    DurasiB_2.innerHTML = (0.4).toFixed(2);
  } else if (b.value >= 430 && b.value <= 589) {
    DurasiB_2.innerHTML = 0.45;
  } else if (b.value >= 590 && b.value <= 699) {
    DurasiB_2.innerHTML = (0.5).toFixed(2);
  } else if (b.value >= 700 && b.value <= 789) {
    DurasiB_2.innerHTML = 0.55;
  } else if (b.value >= 790 && b.value <= 839) {
    DurasiB_2.innerHTML = (0.6).toFixed(2);
  } else if (b.value >= 840 && b.value <= 879) {
    DurasiB_2.innerHTML = 0.65;
  } else if (b.value >= 880 && b.value <= 919) {
    DurasiB_2.innerHTML = (0.7).toFixed(2);
  } else if (b.value >= 920 && b.value <= 949) {
    DurasiB_2.innerHTML = 0.75;
  } else if (b.value >= 950 && b.value <= 979) {
    DurasiB_2.innerHTML = (0.8).toFixed(2);
  } else if (b.value >= 980 && b.value <= 999) {
    DurasiB_2.innerHTML = 0.85;
  } else {
    DurasiB_2.innerHTML = 0;
  }

  updateB_2 = parseFloat(DurasiB_2.innerHTML);
  cek_2 = parseFloat(document.querySelector(".strb_2").innerHTML);
  fc_endb_2(cek_2, updateB_2);
}

function fc_stra_2() {
  opa_2 = parseFloat(straInput_2.value);
  fc_enda_2(updateA_2, opa_2);
}

var enda_v_2 = 0;

function fc_enda_2(randa_2, opa_2) {
  hitung_enda_2 = (randa_2 * 60) / 1000 + opa_2;
  document.querySelector(".enda_2").innerHTML = hitung_enda_2.toFixed(3);
  var a = (document.querySelector(".readya_2").innerHTML =
    hitung_enda_2.toFixed(3));
  console.log(opa_2);
  enda_v_2 = parseFloat(a);
  fc_cek_2(enda_v_2, readyb_v_2);
}

function fc_cek_2(x, y) {
  if (x == y) {
    var cek_2 = (document.querySelector(".strb_2").innerHTML = y);
  } else if (y > x) {
    var cek_2 = (document.querySelector(".strb_2").innerHTML = y);
  } else if (x > y) {
    var cek_2 = (document.querySelector(".strb_2").innerHTML = x);
  }

  if (cek_2 > x) {
    kurang = y - x;
    document.querySelector(".kiri_2").innerHTML = kurang.toFixed(3);
    document.querySelector(".kanan_2").innerHTML = 0;
  } else {
    kurang = x - y;
    document.querySelector(".kanan_2").innerHTML = kurang.toFixed(3);
    document.querySelector(".kiri_2").innerHTML = 0;
  }

  cek_2 = parseFloat(document.querySelector(".strb_2").innerHTML);
  fc_endb_2(cek_2, updateB_2);
}

var readyb_v_3 = 0;

function fc_endb_2(opb_2, randb_2) {
  hitung_endb_2 = (randb_2 * 60) / 1000 + opb_2;
  document.querySelector(".endb_2").innerHTML = hitung_endb_2;
  readyb_v_3 = document.querySelector(".readyb_3").innerHTML =
    hitung_endb.toFixed(3);
  fc_cek_3(enda_v_3, readyb_v_3);
}

var updateA_3 = 0;
var updateB_3 = 0;
var cek_3 = 0;

var opa_3 = 0;
var straInput_3 = document.querySelector(".stra_3");
var endbInput_3 = document.querySelector(".endb_3");
var strbInput_3 = document.querySelector(".strb_3");

strbInput_3.addEventListener("input", fc_cek_3);
strbInput_3.addEventListener("change", fc_cek_3);
straInput_3.addEventListener("input", fc_stra_3);
straInput_3.addEventListener("change", fc_stra_3);

function rna_3(a) {
  var DurasiA_3 = a.parentElement.parentElement.querySelector(".DurasiA_3");

  if (a.value > 0 && a.value <= 19) {
    DurasiA_3.innerHTML = 0.25;
  } else if (a.value >= 20 && a.value <= 29) {
    DurasiA_3.innerHTML = (0.3).toFixed(2);
  } else if (a.value >= 30 && a.value <= 89) {
    DurasiA_3.innerHTML = 0.35;
  } else if (a.value >= 90 && a.value <= 219) {
    DurasiA_3.innerHTML = (0.4).toFixed(2);
  } else if (a.value >= 220 && a.value <= 389) {
    DurasiA_3.innerHTML = 0.45;
  } else if (a.value >= 390 && a.value <= 549) {
    DurasiA_3.innerHTML = (0.5).toFixed(2);
  } else if (a.value >= 550 && a.value <= 689) {
    DurasiA_3.innerHTML = 0.55;
  } else if (a.value >= 690 && a.value <= 799) {
    DurasiA_3.innerHTML = (0.6).toFixed(2);
  } else if (a.value >= 800 && a.value <= 889) {
    DurasiA_3.innerHTML = 0.65;
  } else if (a.value >= 890 && a.value <= 929) {
    DurasiA_3.innerHTML = (0.7).toFixed(2);
  } else if (a.value >= 930 && a.value <= 959) {
    DurasiA_3.innerHTML = 0.75;
  } else if (a.value >= 960 && a.value <= 989) {
    DurasiA_3.innerHTML = (0.8).toFixed(2);
  } else if (a.value >= 990 && a.value <= 999) {
    DurasiA_3.innerHTML = 0.85;
  } else {
    DurasiA_3.innerHTML = 0;
  }

  updateA_3 = parseFloat(DurasiA_3.innerHTML);
  fc_enda_3(updateA_3, opa_3);
}

// Membuat Input Durasi Waktu B, ketika memasukkan input untuk Random Number B
function rnb_3(b) {
  var DurasiB_3 = b.parentElement.parentElement.querySelector(".DurasiB_3");

  if (b.value > 0 && b.value <= 19) {
    DurasiB_3.innerHTML = 0.25;
  } else if (b.value >= 20 && b.value <= 109) {
    DurasiB_3.innerHTML = (0.3).toFixed(2);
  } else if (b.value >= 110 && b.value <= 259) {
    DurasiB_3.innerHTML = 0.35;
  } else if (b.value >= 260 && b.value <= 429) {
    DurasiB_3.innerHTML = (0.4).toFixed(2);
  } else if (b.value >= 430 && b.value <= 589) {
    DurasiB_3.innerHTML = 0.45;
  } else if (b.value >= 590 && b.value <= 699) {
    DurasiB_3.innerHTML = (0.5).toFixed(2);
  } else if (b.value >= 700 && b.value <= 789) {
    DurasiB_3.innerHTML = 0.55;
  } else if (b.value >= 790 && b.value <= 839) {
    DurasiB_3.innerHTML = (0.6).toFixed(2);
  } else if (b.value >= 840 && b.value <= 879) {
    DurasiB_3.innerHTML = 0.65;
  } else if (b.value >= 880 && b.value <= 919) {
    DurasiB_3.innerHTML = (0.7).toFixed(2);
  } else if (b.value >= 920 && b.value <= 949) {
    DurasiB_3.innerHTML = 0.75;
  } else if (b.value >= 950 && b.value <= 979) {
    DurasiB_3.innerHTML = (0.8).toFixed(2);
  } else if (b.value >= 980 && b.value <= 999) {
    DurasiB_3.innerHTML = 0.85;
  } else {
    DurasiB_3.innerHTML = 0;
  }

  updateB_3 = parseFloat(DurasiB_3.innerHTML);
  cek_3 = parseFloat(document.querySelector(".strb_3").innerHTML);
  fc_endb_3(cek_3, updateB_3);
}

function fc_stra_3() {
  opa_3 = parseFloat(straInput_3.value);
  fc_enda_3(updateA_3, opa_3);
}

var enda_v_3 = 0;

function fc_enda_3(randa_3, opa_3) {
  hitung_enda_3 = (randa_3 * 60) / 1000 + opa_3;
  document.querySelector(".enda_3").innerHTML = hitung_enda_3.toFixed(3);
  var a = (document.querySelector(".readya_3").innerHTML =
    hitung_enda_3.toFixed(3));
  console.log(opa_3);
  enda_v_3 = parseFloat(a);
  fc_cek_3(enda_v_3, readyb_v_3);
}

function fc_cek_3(x, y) {
  if (x == y) {
    var cek_3 = (document.querySelector(".strb_3").innerHTML = y);
  } else if (y > x) {
    var cek_3 = (document.querySelector(".strb_3").innerHTML = y);
  } else if (x > y) {
    var cek_3 = (document.querySelector(".strb_3").innerHTML = x);
  }

  if (cek_3 > x) {
    kurang = y - x;
    document.querySelector(".kiri_3").innerHTML = kurang.toFixed(3);
    document.querySelector(".kanan_3").innerHTML = 0;
  } else {
    kurang = x - y;
    document.querySelector(".kanan_3").innerHTML = kurang.toFixed(3);
    document.querySelector(".kiri_3").innerHTML = 0;
  }

  cek_3 = parseFloat(document.querySelector(".strb_3").innerHTML);
  fc_endb_3(cek_3, updateB_3);
}

var readyb_v_4 = 0;

function fc_endb_3(opb_3, randb_3) {
  hitung_endb_3 = (randb_3 * 60) / 1000 + opb_3;
  document.querySelector(".endb_3").innerHTML = hitung_endb_3;
  readyb_v_4 = document.querySelector(".readyb_4").innerHTML =
    hitung_endb.toFixed(3);
  fc_cek_4(enda_v_4, readyb_v_4);
}

var updateA_4 = 0;
var updateB_4 = 0;
var cek_4 = 0;

var opa_4 = 0;
var straInput_4 = document.querySelector(".stra_4");
var endbInput_4 = document.querySelector(".endb_4");
var strbInput_4 = document.querySelector(".strb_4");

strbInput_4.addEventListener("input", fc_cek_4);
strbInput_4.addEventListener("change", fc_cek_4);
straInput_4.addEventListener("input", fc_stra_4);
straInput_4.addEventListener("change", fc_stra_4);

function rna_4(a) {
  var DurasiA_4 = a.parentElement.parentElement.querySelector(".DurasiA_4");

  if (a.value > 0 && a.value <= 19) {
    DurasiA_4.innerHTML = 0.25;
  } else if (a.value >= 20 && a.value <= 29) {
    DurasiA_4.innerHTML = (0.3).toFixed(2);
  } else if (a.value >= 30 && a.value <= 89) {
    DurasiA_4.innerHTML = 0.35;
  } else if (a.value >= 90 && a.value <= 219) {
    DurasiA_4.innerHTML = (0.4).toFixed(2);
  } else if (a.value >= 220 && a.value <= 389) {
    DurasiA_4.innerHTML = 0.45;
  } else if (a.value >= 390 && a.value <= 549) {
    DurasiA_4.innerHTML = (0.5).toFixed(2);
  } else if (a.value >= 550 && a.value <= 689) {
    DurasiA_4.innerHTML = 0.55;
  } else if (a.value >= 690 && a.value <= 799) {
    DurasiA_4.innerHTML = (0.6).toFixed(2);
  } else if (a.value >= 800 && a.value <= 889) {
    DurasiA_4.innerHTML = 0.65;
  } else if (a.value >= 890 && a.value <= 929) {
    DurasiA_4.innerHTML = (0.7).toFixed(2);
  } else if (a.value >= 930 && a.value <= 959) {
    DurasiA_4.innerHTML = 0.75;
  } else if (a.value >= 960 && a.value <= 989) {
    DurasiA_4.innerHTML = (0.8).toFixed(2);
  } else if (a.value >= 990 && a.value <= 999) {
    DurasiA_4.innerHTML = 0.85;
  } else {
    DurasiA_4.innerHTML = 0;
  }

  updateA_4 = parseFloat(DurasiA_4.innerHTML);
  fc_enda_4(updateA_4, opa_4);
}

// Membuat Input Durasi Waktu B, ketika memasukkan input untuk Random Number B
function rnb_4(b) {
  var DurasiB_4 = b.parentElement.parentElement.querySelector(".DurasiB_4");

  if (b.value > 0 && b.value <= 19) {
    DurasiB_4.innerHTML = 0.25;
  } else if (b.value >= 20 && b.value <= 109) {
    DurasiB_4.innerHTML = (0.3).toFixed(2);
  } else if (b.value >= 110 && b.value <= 259) {
    DurasiB_4.innerHTML = 0.35;
  } else if (b.value >= 260 && b.value <= 429) {
    DurasiB_4.innerHTML = (0.4).toFixed(2);
  } else if (b.value >= 430 && b.value <= 589) {
    DurasiB_4.innerHTML = 0.45;
  } else if (b.value >= 590 && b.value <= 699) {
    DurasiB_4.innerHTML = (0.5).toFixed(2);
  } else if (b.value >= 700 && b.value <= 789) {
    DurasiB_4.innerHTML = 0.55;
  } else if (b.value >= 790 && b.value <= 839) {
    DurasiB_4.innerHTML = (0.6).toFixed(2);
  } else if (b.value >= 840 && b.value <= 879) {
    DurasiB_4.innerHTML = 0.65;
  } else if (b.value >= 880 && b.value <= 919) {
    DurasiB_4.innerHTML = (0.7).toFixed(2);
  } else if (b.value >= 920 && b.value <= 949) {
    DurasiB_4.innerHTML = 0.75;
  } else if (b.value >= 950 && b.value <= 979) {
    DurasiB_4.innerHTML = (0.8).toFixed(2);
  } else if (b.value >= 980 && b.value <= 999) {
    DurasiB_4.innerHTML = 0.85;
  } else {
    DurasiB_4.innerHTML = 0;
  }

  updateB_4 = parseFloat(DurasiB_4.innerHTML);
  cek_4 = parseFloat(document.querySelector(".strb_4").innerHTML);
  fc_endb_4(cek_4, updateB_4);
}

function fc_stra_4() {
  opa_4 = parseFloat(straInput_4.value);
  fc_enda_4(updateA_4, opa_4);
}

var enda_v_4 = 0;

function fc_enda_4(randa_4, opa_4) {
  hitung_enda_4 = (randa_4 * 60) / 1000 + opa_4;
  document.querySelector(".enda_4").innerHTML = hitung_enda_4.toFixed(3);
  var a = (document.querySelector(".readya_4").innerHTML =
    hitung_enda_4.toFixed(3));
  console.log(opa_4);
  enda_v_4 = parseFloat(a);
  fc_cek_4(enda_v_4, readyb_v_4);
}

function fc_cek_4(x, y) {
  if (x == y) {
    var cek_4 = (document.querySelector(".strb_4").innerHTML = y);
  } else if (y > x) {
    var cek_4 = (document.querySelector(".strb_4").innerHTML = y);
  } else if (x > y) {
    var cek_4 = (document.querySelector(".strb_4").innerHTML = x);
  }

  if (cek_4 > x) {
    kurang = y - x;
    document.querySelector(".kiri_4").innerHTML = kurang.toFixed(3);
    document.querySelector(".kanan_4").innerHTML = 0;
  } else {
    kurang = x - y;
    document.querySelector(".kanan_4").innerHTML = kurang.toFixed(3);
    document.querySelector(".kiri_4").innerHTML = 0;
  }

  cek_4 = parseFloat(document.querySelector(".strb_4").innerHTML);
  fc_endb_4(cek_4, updateB_4);
}

var readyb_v_5 = 0;

function fc_endb_4(opb_4, randb_4) {
  hitung_endb_4 = (randb_4 * 60) / 1000 + opb_4;
  document.querySelector(".endb_4").innerHTML = hitung_endb_4;
  readyb_v_5 = document.querySelector(".readyb_5").innerHTML =
    hitung_endb.toFixed(3);
  fc_cek_5(enda_v_5, readyb_v_5);
}

var updateA_5 = 0;
var updateB_5 = 0;
var cek_5 = 0;

var opa_5 = 0;
var straInput_5 = document.querySelector(".stra_5");
var endbInput_5 = document.querySelector(".endb_5");
var strbInput_5 = document.querySelector(".strb_5");

strbInput_5.addEventListener("input", fc_cek_5);
strbInput_5.addEventListener("change", fc_cek_5);
straInput_5.addEventListener("input", fc_stra_5);
straInput_5.addEventListener("change", fc_stra_5);

function rna_5(a) {
  var DurasiA_5 = a.parentElement.parentElement.querySelector(".DurasiA_5");

  if (a.value > 0 && a.value <= 19) {
    DurasiA_5.innerHTML = 0.25;
  } else if (a.value >= 20 && a.value <= 29) {
    DurasiA_5.innerHTML = (0.3).toFixed(2);
  } else if (a.value >= 30 && a.value <= 89) {
    DurasiA_5.innerHTML = 0.35;
  } else if (a.value >= 90 && a.value <= 219) {
    DurasiA_5.innerHTML = (0.4).toFixed(2);
  } else if (a.value >= 220 && a.value <= 389) {
    DurasiA_5.innerHTML = 0.45;
  } else if (a.value >= 390 && a.value <= 549) {
    DurasiA_5.innerHTML = (0.5).toFixed(2);
  } else if (a.value >= 550 && a.value <= 689) {
    DurasiA_5.innerHTML = 0.55;
  } else if (a.value >= 690 && a.value <= 799) {
    DurasiA_5.innerHTML = (0.6).toFixed(2);
  } else if (a.value >= 800 && a.value <= 889) {
    DurasiA_5.innerHTML = 0.65;
  } else if (a.value >= 890 && a.value <= 929) {
    DurasiA_5.innerHTML = (0.7).toFixed(2);
  } else if (a.value >= 930 && a.value <= 959) {
    DurasiA_5.innerHTML = 0.75;
  } else if (a.value >= 960 && a.value <= 989) {
    DurasiA_5.innerHTML = (0.8).toFixed(2);
  } else if (a.value >= 990 && a.value <= 999) {
    DurasiA_5.innerHTML = 0.85;
  } else {
    DurasiA_5.innerHTML = 0;
  }

  updateA_5 = parseFloat(DurasiA_5.innerHTML);
  fc_enda_5(updateA_5, opa_5);
}

// Membuat Input Durasi Waktu B, ketika memasukkan input untuk Random Number B
function rnb_5(b) {
  var DurasiB_5 = b.parentElement.parentElement.querySelector(".DurasiB_5");

  if (b.value > 0 && b.value <= 19) {
    DurasiB_5.innerHTML = 0.25;
  } else if (b.value >= 20 && b.value <= 109) {
    DurasiB_5.innerHTML = (0.3).toFixed(2);
  } else if (b.value >= 110 && b.value <= 259) {
    DurasiB_5.innerHTML = 0.35;
  } else if (b.value >= 260 && b.value <= 429) {
    DurasiB_5.innerHTML = (0.4).toFixed(2);
  } else if (b.value >= 430 && b.value <= 589) {
    DurasiB_5.innerHTML = 0.45;
  } else if (b.value >= 590 && b.value <= 699) {
    DurasiB_5.innerHTML = (0.5).toFixed(2);
  } else if (b.value >= 700 && b.value <= 789) {
    DurasiB_5.innerHTML = 0.55;
  } else if (b.value >= 790 && b.value <= 839) {
    DurasiB_5.innerHTML = (0.6).toFixed(2);
  } else if (b.value >= 840 && b.value <= 879) {
    DurasiB_5.innerHTML = 0.65;
  } else if (b.value >= 880 && b.value <= 919) {
    DurasiB_5.innerHTML = (0.7).toFixed(2);
  } else if (b.value >= 920 && b.value <= 949) {
    DurasiB_5.innerHTML = 0.75;
  } else if (b.value >= 950 && b.value <= 979) {
    DurasiB_5.innerHTML = (0.8).toFixed(2);
  } else if (b.value >= 980 && b.value <= 999) {
    DurasiB_5.innerHTML = 0.85;
  } else {
    DurasiB_5.innerHTML = 0;
  }

  updateB_5 = parseFloat(DurasiB_5.innerHTML);
  cek_5 = parseFloat(document.querySelector(".strb_5").innerHTML);
  fc_endb_5(cek_5, updateB_5);
}

function fc_stra_5() {
  opa_5 = parseFloat(straInput_5.value);
  fc_enda_5(updateA_5, opa_5);
}

var enda_v_5 = 0;

function fc_enda_5(randa_5, opa_5) {
  hitung_enda_5 = (randa_5 * 60) / 1000 + opa_5;
  document.querySelector(".enda_5").innerHTML = hitung_enda_5.toFixed(3);
  var a = (document.querySelector(".readya_5").innerHTML =
    hitung_enda_5.toFixed(3));
  console.log(opa_5);
  enda_v_5 = parseFloat(a);
  fc_cek_5(enda_v_5, readyb_v_5);
}

function fc_cek_5(x, y) {
  if (x == y) {
    var cek_5 = (document.querySelector(".strb_5").innerHTML = y);
  } else if (y > x) {
    var cek_5 = (document.querySelector(".strb_5").innerHTML = y);
  } else if (x > y) {
    var cek_5 = (document.querySelector(".strb_5").innerHTML = x);
  }

  if (cek_5 > x) {
    kurang = y - x;
    document.querySelector(".kiri_5").innerHTML = kurang.toFixed(3);
    document.querySelector(".kanan_5").innerHTML = 0;
  } else {
    kurang = x - y;
    document.querySelector(".kanan_5").innerHTML = kurang.toFixed(3);
    document.querySelector(".kiri_5").innerHTML = 0;
  }

  cek_5 = parseFloat(document.querySelector(".strb_5").innerHTML);
  fc_endb_5(cek_5, updateB_5);
}

function fc_endb_5(opb_5, randb_5) {
  hitung_endb_5 = (randb_5 * 60) / 1000 + opb_5;
  document.querySelector(".endb_5").innerHTML = hitung_endb_5;
}
