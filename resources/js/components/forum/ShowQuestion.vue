<template>
    <v-app id="inspire">
        <v-container fluid>
            <v-row>
                <v-col cols="10" sm="10">
                    <div class="ma-6">
                    <p class="title">
                        {{data.title}}
                    </p>
                    <span class="grey--text">Asked {{data.created_at}}</span>
                    </div>
                </v-col>
                <v-col cols="2" sm="2">
                    <div class="ma-6 float-right">
                        <v-btn text>
                            <v-icon class="mr-3" color="green lighten-2">mdi-reply</v-icon>
                            <span class="subtitle-2">5 replies</span>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="mx-6">
                        <p class="body-1">
                            {{data.body}}
                        </p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10">
            <div class="ma-6">
            <v-card
                color="#E3F2FD"
                outlined
                tile
                max-width="400"
            >
                <v-card-actions>
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <p class="caption grey--text">asked {{data.created_at}}</p>
                    <v-list-item-title class="black--text">{{data.user}}</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                    align="center"
                    justify="end"
                    >

                    <v-icon class="mr-1" color="pink accent-3">mdi-heart</v-icon>
                    <span class="subheading mr-2 pink--text">256</span>
                    </v-row>
                </v-list-item>
                </v-card-actions>
            </v-card>
            </div>
            </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>
