<template>
    <v-app id="inspire">
        <v-container fluid class="fill-height">
            <v-layout row wrap>
                <v-flex xs8>
                    <v-card
                        class="mx-auto"
                        color="#26c6da"
                        dark
                        max-width="400"
                    >
                        <v-card-title>
                        <v-icon
                            large
                            left
                        >
                            mdi-alpha-b-box
                        </v-icon>
                        <span class="title font-weight-light">BayHub</span>
                        </v-card-title>

                        <v-card-text class="headline font-weight-bold">
                        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                        <v-list-item-subtitle>2 minutes ago</v-list-item-subtitle>
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
                            <v-list-item-title>Evan You</v-list-item-title>
                            </v-list-item-content>

                            <v-row
                            align="center"
                            justify="end"
                            >
                            <v-icon class="mr-1">mdi-heart</v-icon>
                            <span class="subheading mr-2">256</span>
                            </v-row>
                        </v-list-item>
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
