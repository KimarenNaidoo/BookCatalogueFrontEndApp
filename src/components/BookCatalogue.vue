<template>
  <div>
    <h1>Book Catalogue</h1>
    <br>
    <div v-if="loading">Loading books...</div>
    <div v-else class="book-list">
      <BookItem v-for="book in books" :key="book.id" :book="book"/>
    </div>
    <br>
    <BookCounter :totalBooks="totalBooks" :currentOffset="currentOffset" :limit="limit" @next-data="fetchNextBooks" @prev-data="fetchPrevBooks"/>
    <br>
  </div>
</template>

<script>
import bookService from '../services/bookService';
import BookItem from './BookItem.vue';
import BookCounter from './BookCounter.vue';

export default {
  name: 'BookCatalogue',
  components: {
    BookItem,
    BookCounter
  },
  data() {
    return {
      books: [],
      loading: true,
      currentOffset: 0,
      limit: 9,
      totalBooks: 1000
    }
  },
  mounted() {
    this.fetchBooks(this.currentOffset, this.limit);
  },
  methods: {
    fetchBooks(currentOffset, limit) {
      bookService.getBooksUsingPagination(currentOffset, limit)
      .then(response => {
        this.books = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error whilst fetching books using pagination.', error);
        this.loading = false;
      })
    },
    fetchNextBooks() {
      this.currentOffset += this.limit;
      this.fetchBooks(this.currentOffset, this.limit);
    },
    fetchPrevBooks() {
      this.currentOffset -= this.limit;
      this.fetchBooks(this.currentOffset, this.limit);
    }
  }
}
</script>

