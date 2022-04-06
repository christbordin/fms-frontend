<template>

    <div id="atmadrid" class="container">
        <h1 class="title">Atletico de Madrid Players</h1>
        <div class="columns is-mobile is-centered">
            <figure class="image is-96x96">
                <img src="../../assets/logo512/atmadrid.png">
            </figure>
        </div>
        <table id=attable class="table is-striped">
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
                $('#attable').DataTable( {
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