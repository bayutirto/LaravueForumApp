<template>
    <v-app id="inspire">
        <v-container fluid class="fill-height">
            <v-layout row wrap>
                <v-flex md8>
                <h2 class="title mx-12 my-9 grey--text">All Questions</h2>
                    <question
                    v-for="question in questions"
                    :key="question.path"
                    :data=question
                    >

                    </question>
                </v-flex>

                Sidebar
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import question from './Question'
export default {
    data(){
        return {
            questions:{}
        }
    },
    components:{question},
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }

}
</script>

<style>

</style>
