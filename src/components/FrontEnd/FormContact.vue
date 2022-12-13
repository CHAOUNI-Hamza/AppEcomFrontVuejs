<template>
<!-- start Form Contact -->
                    <form @submit.prevent="submit()">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <input 
                                    @blur="v$.messages.name.$touch"
                                    :class="{ 'text-fields-error' : v$.messages.name.$error === true }"
                                    v-model="messages.name"
                                    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"
                                >
                                <div class="input-errors" v-for="error of v$.messages.name.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <input 
                                    @blur="v$.messages.name.$touch"
                                    :class="{ 'text-fields-error' : v$.messages.name.$error === true }"
                                    v-model="messages.email"
                                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"
                                >
                                <div class="input-errors" v-for="error of v$.messages.email.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <input 
                                @blur="v$.messages.phone.$touch"
                                :class="{ 'text-fields-error' : v$.messages.phone.$error === true }"
                                v-model="messages.phone"
                                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"
                            >
                            <div class="input-errors" v-for="error of v$.messages.phone.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea 
                                @blur="v$.messages.subject.$touch"
                                :class="{ 'text-fields-error' : v$.messages.subject.$error === true }"
                                v-model="messages.subject"
                                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject">
                            </textarea>
                            <div class="input-errors" v-for="error of v$.messages.subject.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">SEND</button>
                    </form>
<!-- end Form Contact -->
</template>

<script>
import { mapActions } from "vuex"
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, integer } from '@vuelidate/validators'
export default {
    props: [ 'product' ],
    components: {},
    data() {
        return {
            v$: useVuelidate(),
            messages: {
                name: '',
                email: '',
                subject: '',
                phone: ''
            }  
        }
    },
    validations () {
        return {
            messages: {
                name: { required, minLength: minLength(5), maxLength: maxLength(30), $autoDirty: true },
                email: { required, email, minLength: minLength(10), maxLength: maxLength(40), $autoDirty: true },
                subject: { required, minLength: minLength(10), maxLength: maxLength(500), $autoDirty: true },
                phone: { required, integer, minLength: minLength(10), maxLength: maxLength(20), $autoDirty: true },
            }
        }
    },
    methods: {
        ...mapActions({
        'addContact': 'contact/AddContactAction'
        }),
        submit() { 
            this.v$.$touch();
            if (!this.v$.$invalid) {
                this.addContact(this.messages).then(() => {
                this.messages = {
                    name: null,
                    email: null,
                    subject: null,
                    phone: null
                }
                    /*Swal.fire({
                    position: 'bottom-end',
                    icon: 'success',
                    title: 'Thank you for contacting us. We will respond as soon as possible.',
                    showConfirmButton: false,
                    timer: 1500
                    })*/
                });
            }       
       }
  }
}
</script>




