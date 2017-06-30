function search() {
  var searchBar;
  var imageList;
  var images;
  var testImage;
  var testCaption;
  var input;

  searchBar = document.getElementById('search-bar');
  input = searchBar.value;
  images = document.getElementsByTagName('a');

  for (i = 0; i < images.length; i++) {
    testImage = images[i];
    testCaption = testImage.getAttribute('data-title');
    if (testCaption.indexOf(input) > -1) {
      images[i].display = 'block';
    } else {
      images[i].display = 'none';
    }
  }
}
