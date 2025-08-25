<template>
     <v-container fluid class="h-screen d-flex align-center bg-grey-lighten-3">
        <v-row class="justify-center">
            <v-col cols="12" xs="12" sm="5" md="4" lg="3" xl="3" xxl="4">
                <v-container class="bg-white pa-16">
                    <slot name="left"></slot>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>