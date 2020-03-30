<template>
    <v-app id="inspire">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex md8>
                <h2 class="title mx-12 my-9 grey--text">Ask a question</h2>
                <v-card
                    class="mx-12"
                    max-width="1000"
                >
                    <v-card-text>
                        <p><span class="font-weight-bold"> Title</span>
                        <br> Be specific and imagine you’re asking a question to another person
                        </p>

                        <v-text-field
                            label="Your question title"
                            hint="For example, Is there an R function for finding the index of an element in a vector?"
                            outlined
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>
                </v-card>

                </v-flex>

                Sidebar
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
