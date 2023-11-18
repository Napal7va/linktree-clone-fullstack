<template> 
    <AuthLayout>
        <div class="mt-10">
            <h1 class="lg:text-5xl text-3xl text-center font-extrabold">
                Log in your Linktree

                <form
                    class="mt-12"
                    @submit.prevent=" login()"
                >
                <div>
                    <TextInput
                    placeholder="Email: linktree@gmail.com"
                    v-model:input="email"
                    inputType="email"
                    :error="errors && errors.email ? errors.email[0]: ''"
                    />
                </div>

                </form>
            </h1>
        </div>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from '~~/layouts/AuthLayout.vue';

let email = ref(null)
let password = ref(null)
let errors =ref(null)
</script>