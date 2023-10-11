<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Table</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- load jquery and bootstrap js -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script type="text/javascript">
      let edit = false;
      let indeks = 0;
      Tambah = () => {
        edit = false;
        //mengosongkan form
        document.getElementById('nama').value = "";
        document.getElementById('jurusan').value = "";
        document.getElementById('alamat').value = "";
      }
      Edit = (index) => {
        edit = true;
        indeks = index;
        let table = document.getElementById('tabel-siswa');
        // mengambil data dari  tabel
        let nama = table.rows[index].cells[0].innerHTML;
        let jurusan = table.rows[index].cells[1].innerHTML;
        let alamat = table.rows[index].cells[2].innerHTML;

        //memasukkan data ke form
        document.getElementById('nama').value = nama;
        document.getElementById('jurusan').value = jurusan;
        document.getElementById('alamat').value = alamat;
      }
      Simpan = () => {
        let table = document.getElementById('tabel-siswa');
        //menampuang data dari form
        let nama = document.getElementById('nama').value;
        let jurusan = document.getElementById('jurusan').value;
        let alamat = document.getElementById('alamat').value;
        
        // jika aksinya edit
        if(edit){
          table.rows[indeks].cells[0].innerHTML = nama;
          table.rows[indeks].cells[1].innerHTML = jurusan;
          table.rows[indeks].cells[2].innerHTML = alamat;
        //jika aksinya tambah
        }else{
          let element = "";
          element += "<tr>";
          element += "<td>"+nama+"</td>";
          element += "<td>"+jurusan+"</td>";
          element += "<td>"+alamat+"</td>";
          element += "<td>";
          element += '<button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal" ';
          element += 'onclick="Edit(this.parentElement.parentElement.rowIndex)">Edit</button>';
          element += '<button type="button" class="btn btn-sm btn-danger" ';
          element += 'onclick="Hapus(this.parentElement.parentElement.rowIndex)">Hapus</button>';
          element += "</td>";
          element += "</tr>";
          table.innerHTML += element;
        }
      }
      Hapus = (index) => {
        let tabel = document.getElementById('tabel-siswa');
        tabel.deleteRow(index);
      }
    </script>
  </head>
  <body>
    <div class="container">
      <table class="table" id="tabel-siswa">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Alamat</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Noerdeen</td>
            <td>Rekayasa Perangkat Lunak</td>
            <td>Blitar</td>
            <td>
              <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal"
              onclick="Edit(this.parentElement.parentElement.rowIndex)">
                Edit
              </button>
              <button type="button" class="btn btn-sm btn-danger"
              onclick="Hapus(this.parentElement.parentElement.rowIndex)">
                Hapus
              </button>
            </td>
          </tr>
          <tr>
            <td>Atayew</td>
            <td>Teknik Komputer dan Jaringan</td>
            <td>Madiun</td>
            <td>
              <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal"
              onclick="Edit(this.parentElement.parentElement.rowIndex)">
                Edit
              </button>
              <button type="button" class="btn btn-sm btn-danger"
              onclick="Hapus(this.parentElement.parentElement.rowIndex)">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal"
      onclick="Tambah()">
        Tambah
      </button>
    </div>


    <!-- modal -->
    <div class="modal" id="modal">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4>Form Modal</h4>
            <span class="close" data-dismiss="modal">&times;</span>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Nama</label>
              <div class="col-sm-12">
                <input type="text" id="nama" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label>Jurusan</label>
              <div class="col-sm-12">
                <select class="form-control" id="jurusan">
                  <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                  <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <div class="col-sm-12">
                <input type="text" id="alamat" class="form-control">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-success" data-dismiss="modal"
            onclick="Simpan();">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
