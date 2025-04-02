<template>
  <div>
    <h1>Book Catalogue</h1>
    <br>
    <div v-if="loading">Loading books...</div>
    <div v-else class="book-list">
      <BookItem v-for="book in books" :key="book.id" :book="book"/>
    </div>
  </div>
</template>

<script>
import bookService from '../services/bookService';
import BookItem from './BookItem.vue';

export default {
  name: 'BookCatalogue',
  components: {
    BookItem
  },
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

