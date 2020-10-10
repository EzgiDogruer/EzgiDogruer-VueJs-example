<template>
    <div style="color:#F9E5C5">
        <h1 style="color:#FFFF"> {{ $t('message.h1_admin') }}</h1>
        <br>
        <h4 style="color:#FFFF">{{ $t('message.users') }}</h4>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users.items">
            <li  v-for="user in users.items" :key="user.id" style="color:#F9E5C5 ; font-size:20px">
               
                {{user.firstName + ' ' + user.lastName }} 
                <span v-if="user.deleting "><em> - {{ $t('message.deleting') }}</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="btn btn-secondary btn-sm" style="color:#FFFF">{{ $t('message.delete') }}</a></span>
            
              
            </li>
            
        </ul>
        <p style=" font-size:25px">
              <router-link to="/login" class="btn btn-dark">{{ $t('message.cancel') }}</router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>

<style >
	

</style>