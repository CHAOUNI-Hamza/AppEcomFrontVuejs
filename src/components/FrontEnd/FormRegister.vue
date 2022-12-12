<template>
<!-- start Form Register -->
<form @submit.prevent="registerUser()">
    <div class="mb-3">
        <input @blur="v$.user.firstname.$touch" :class="{ 'text-fields-error' : v$.user.firstname.$error === true }" v-model="user.firstname" type="text" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="First Name">
        <div class="input-errors" v-for="error of v$.user.firstname.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>
    <div class="mb-3">
        <input @blur="v$.user.lastname.$touch" :class="{ 'text-fields-error' : v$.user.lastname.$error === true }" v-model="user.lastname" type="text" class="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="Last Name">
        <div class="input-errors" v-for="error of v$.user.lastname.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>
    <div class="mb-3">
         <input @blur="v$.user.email.$touch" :class="{ 'text-fields-error' : v$.user.email.$error === true }" v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        <div class="input-errors" v-for="error of v$.user.email.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
         </div>
    </div>
    <div class="mb-3">
        <input @blur="v$.user.password.$touch" :class="{ 'text-fields-error' : v$.user.password.$error === true }" v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        <div class="input-errors" v-for="error of v$.user.password.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>
    <div class="form-check">
        <input class="form-check-input" v-model="valideToCheckout" type="checkbox"  id="flexCheckIndeterminate">
        <label class="form-check-label" for="flexCheckIndeterminate">
        I agree with the terms and conditions
        </label>
    </div>
    <button type="submit" :class="{ 'disabled': !valideToCheckout }" class="btn">Submite</button>
</form>
<!-- end Form Register -->
</template>
    
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { mapActions } from 'vuex'
export default {
      components: {},
      data() {
        return {
            v$: useVuelidate(),
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            valideToCheckout: false
        }
        },
        validations () {
            return {
                user: {
                    firstname: { required, minLength: minLength(5), maxLength: maxLength(30), $autoDirty: true },
                    email: { required, email, minLength: minLength(10), maxLength: maxLength(40), $autoDirty: true },
                    lastname: { required, minLength: minLength(10), maxLength: maxLength(500), $autoDirty: true },
                    password: { required, minLength: minLength(10), maxLength: maxLength(20), $autoDirty: true },
                }
            }
        },
      methods: {
        ...mapActions({
            'signUp' : 'auth/signUp'
        }),
        registerUser() {
            this.v$.$touch();
            if(!this.v$.$invalid) {
                this.signUp(this.user)
                .then( () => {
                    this.user = {
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: ''
                    }
                } )
                .catch( err => {
                    console.log(err)
                } )
            }
    }
      },
      mounted() {
      },
      computed: {

      }
    }
</script>
    
<style>

</style>


    
    
    
    