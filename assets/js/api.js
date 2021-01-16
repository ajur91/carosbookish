const urlAPI = 'https://carosbookish.com/web/admin_dev.php/api/book/';

function getBooks() {
    return fetch(
      `${urlAPI}+this.$route.params.slug`)
      .then(res => res.json())
      .then(res => res.booksDetails);
}