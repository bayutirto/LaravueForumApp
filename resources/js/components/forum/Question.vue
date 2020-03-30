<template>
    <div class="my-6">
        <v-hover>
        <template v-slot="{ hover }">
            <v-card
                class="mx-12 pa-1"
                color="blue lighten-2"
                dark
                max-width="1000"
                :elevation="hover ? 24 : 6"

            >
                <v-card-title>
                <v-icon
                    large
                    left
                >
                    mdi-alpha-b-box
                </v-icon>
                <router-link :to="data.path">
                    <span class="title font-weight-light d-inline-block white--text">
                        {{data.title}}
                    </span>
                </router-link>
                </v-card-title>

                <v-card-text class="body-1 white--text">
                "{{data.body}}"
                <v-list-item-subtitle>{{data.created_at}}</v-list-item-subtitle>
                </v-card-text>

                <v-card-actions>
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>{{data.user}}</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                    align="center"
                    justify="end"
                    >
                    <v-icon class="mr-1" color="pink lighten-1">mdi-heart</v-icon>
                    <span class="subheading mr-2">256</span>
                    </v-row>
                </v-list-item>
                </v-card-actions>
            </v-card>
        </template>
        </v-hover>
    </div>

</template>

<script>
export default {
    props:['data']

}
</script>

<style>

</style>
