<template>
  <div class="bg-gray-800 text-gray-300">
    <h1>Book Catalogue.</h1>
    <div v-if="loading">Loading books...</div>
    <div v-else>
      <div v-for="book in books" :key="book.id" class="book-item">
        <h3>Title: {{ book.title }}</h3>
        <p>Author/s: {{ book.author }}</p>
      </div>
    </div>
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

