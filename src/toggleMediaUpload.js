document.getElementById('preset1').addEventListener('change', function() {
    var fileInput = document.getElementById('file1');
    if (this.value === 'none') {
        fileInput.style.display = 'block';
    } else {
        fileInput.style.display = 'none';
    }
});

document.getElementById('preset2').addEventListener('change', function() {
    var fileInput = document.getElementById('file2');
    if (this.value === 'none') {
        fileInput.style.display = 'block';
    } else {
        fileInput.style.display = 'none';
    }
});
