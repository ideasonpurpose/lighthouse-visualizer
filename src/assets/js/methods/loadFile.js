function loadFile(e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.readAsText(file, "UTF-8");

  reader.onload = function (evt) {
    vm.data = JSON.parse(evt.target.result);
  }

  reader.onerror = function (evt) {
    console.error('error reading file')
  }
};

module.exports = loadFile;
