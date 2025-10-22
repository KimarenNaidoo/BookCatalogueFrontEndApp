<template>
    <div id="book-counter">
        <div v-if="currentOffset != 0">
            <button class="button-counter" id ="prev-button" @click="fetchPrevBooks">Previous</button>
        </div>
        <div v-else>
            <button class="disabled-button-counter" disabled>Previous</button>
        </div>
        <div id="page-indicator">
            <span>{{ page }}</span>
        </div>
        <div v-if="(currentOffset + limit) < totalBooks">
            <button class="button-counter" id ="next-button" @click="fetchNextBooks">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCounter',
    props: {
        totalBooks: {
            type: Number,
            required: true
        },
        currentOffset: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            page: 1
        }
    },
    methods: {
        fetchNextBooks() {
            this.page++;
            this.$emit('next-data');
        },
        fetchPrevBooks() {
            this.page--;
            this.$emit('prev-data');
        }
    }
}
</script>