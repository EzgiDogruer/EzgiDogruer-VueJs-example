<template>
<div>
  <h1 style="color:#F9E5C5" >{{ $t('message.h1_user') }}  {{account.user.firstName}}!</h1>
  <br>
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
    }
}
</script>

<style>

</style>