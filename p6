<!DOCTYPE html>
<html>
  <head>
    <title>Latihan Membuat Tabel</title>
  </head>


  <body>

    <!-- Membuat Tabel dengan colspan  -->
    <h3 style="text-align: center;">Timeline Table</h3>
    <table width="60%" border="10" cellpadding="10" style="border-collapse:collapse">
      <thead>
        <tr>
          <th rowspan="2">Nama</th>
          <th colspan="4">Timeline</th>
        </tr>
        <tr>
          <th>Minggu ke-1</th>
          <th>Minggu ke-2</th>
          <th>Minggu ke-3</th>
          <th>Minggu ke-4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Salman Al Farisi</td>
          <td colspan="3" align="center">Belajar HTML</td>
          <td>Belajar CSS</td>
        </tr>
        <tr>
          <td>Siti Aminah</td>
          <td colspan="2" align="center">Belajar HTML</td>
          <td colspan="2" align="center">Belajar CSS</td>
        </tr>
        <tr>
          <td>Zahrotul Aisyah</td>
          <td>Belajar HTML</td>
          <td colspan="3" align="center">Belajar CSS</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
