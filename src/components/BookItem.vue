<template>
    <div class="book-item">
        <h3><strong>Book Id:</strong> {{ book.id }}</h3>
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Status:</strong> {{ book.statusId }}</p>
        <p><strong>Category:</strong> {{ book.categoryId }}</p>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Ownership:</strong> {{ book.ownershipId }}</p>
        <p><strong>ISBN:</strong> {{ book.isbn }}</p>
        <p><strong>Create Date:</strong> {{ book.createDate }}</p>
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