<template>
    <div>
        <div v-if="currentOffset != 0" id="prev-button">
            <button @click="fetchPrevBooks">Previous</button>
        </div>
        <div id="page-indicator">
            {{ page }}
        </div>
        <div v-if="(currentOffset + limit) < totalBooks" id ="next-button">
            <button @click="fetchNextBooks">Next</button>
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
</script>