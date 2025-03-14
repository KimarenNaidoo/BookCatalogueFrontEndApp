<template>
  <div>
    <h1>Book Catalogue.</h1>
  </div>
</template>

<script>
import bookService from '../services/bookService';

export default {
  name: 'BookCatalogue',
  data() {
    return {
      books: [],
      loading: true
    }
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      bookService.getAllBooks()
        .then(response => {
          this.books = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error whilst fetching books.', error);
          this.loading = false;
        });
    }
  }
}
</script>

