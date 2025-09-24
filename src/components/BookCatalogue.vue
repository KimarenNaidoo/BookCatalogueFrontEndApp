<template>
  <div>
    <h1>Book Catalogue</h1>
    <br>
    <div v-if="loading">Loading books...</div>
    <div v-else class="book-list">
      <BookItem v-for="book in books" :key="book.id" :book="book"/>
    </div>
    <br>
    <div v-if="currentOffset != 0" id="prev-button">
      <button @click="fetchPrevBooks">Previous</button>
    </div>
    <div id="page-indicator">
      {{ page }}
    </div>
    <div v-if="(currentOffset + limit) < totalBooks" id ="next-button">
      <button @click="fetchNextBooks">Next</button>
    </div>
    <br>
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
      loading: true,
      currentOffset: 0,
      limit: 10,
      totalBooks: 1000,
      page: 1
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
      this.page++;
      this.fetchBooks(this.currentOffset, this.limit);
    },
    fetchPrevBooks() {
      this.currentOffset -= this.limit;
      this.page--;
      this.fetchBooks(this.currentOffset, this.limit);
    }
  }
}
</script>

