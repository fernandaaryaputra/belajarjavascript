function createXMLHttpObject() {
  var xmlhttp = false;

  try {
    xmlhttp = new ActiveXObject("Msxm12.XMHTTP");
  } catch (E) {
    xmlhttp = false;
  }

  if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
    xmlhttp = new XMLHttpRequest();
  }

  if (!xmlhttp) {
    alert("Terjadi kesalahan saat pembuatan XMLHttpRequest object!");
  } else {
    alert("XMLHttpRequest berhasil dibuat");
  }
  return xmlhttp;
}
