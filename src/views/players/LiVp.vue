<template>

    <div id="liverpool" class="container">
        <h1 class="title">Liverpool Players</h1>
        <div class="columns is-mobile is-centered">
            <figure class="image is-96x96">
                <img src="../../assets/logo512/liverpool.png">
            </figure>
        </div>
        <table id=lptable class="table is-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
        </table>
    </div>

</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                $('#lptable').DataTable( {
                    dom: 'Bfrtip',
                    buttons: [
                        'colvis',
                        'excel',
                        'print',
                        'csv'
                    ],
                    data: response.data,
                    columns: [
                        { data: 'id' },
                        { data: 'userId' },
                        { data: 'title' },
                        { data: 'body' }
    ]
} );
            })
            .catch(error => console.log(error.response))
        }
    }
}
</script>

<style scoped>
    .container{
        margin-top: 30px;
    }
    .title {
        text-align: center;
    }
    .table {
        margin-top: 50px;
    }
</style>