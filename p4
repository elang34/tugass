<!DOCTYPE html>
<html>
  <head>
    <title>Menampilkan Gambar pada HTML</title>
  </head>
  <body>
    <!-- Memanggil Gambar -->
    <!-- pertama pastikan gambar yang akan ditampilkan
    berada pada folder yang sama dengan file html -->
    <h3>Single Picture</h3>
    <img src="fav.png" width="200" height="200" alt="SMK Telkom Malang">
    <!--
    "alt" digunakan sebagai pengganti tampilan jika gambar yang ditampilkan
    tidak dapat diakses

    "width" digunakan untuk mengatur lebar Gambar
    "height" digunakan untuk mengatur tinggi gambar
    -->

    <!-- Menampilkan gambar beserta text -->
    <h3>Picture with text</h3>
    <img src="fav.png" width="70" height="80" align="left"
    hspace="20" vspace="20" alt="SMK Telkom Malang">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.
    <!--
    "align=left" digunakan untuk menenpatkan gambar di sebelah sisi kiri teks
    "hspace" digunakan untuk mengatur space gambar dan text secara horizontal
    "vspace" digunakan untuk mengatur space gambar dan text secara vertikal -->
  </body>
</html>

