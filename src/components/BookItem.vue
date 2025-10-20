<template>
    <div class="book-item">
        <h3>{{ book.title }}</h3>
        <hr>
        <p><strong>Status:</strong> {{ book.status }}</p>
        <p><strong>Category:</strong> {{ book.category }}</p>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Ownership:</strong> {{ book.ownership }}</p>
    </div>
</template>

<script>
export default {
    name: 'BookItem',
    props: {        
        book: {
            type: Object,
            required: true
        }
    }
}
</script>