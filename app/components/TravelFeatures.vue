<template>
     <v-container id="features" class="py-12">
      <v-row justify="center" class="mb-8">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">Powerful Features</h2>
          <p class="text-h6 text-md-h5 font-weight-light">
            Everything you need to run your travel agency efficiently
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="mb-4"
        >
          <v-card
            height="100%"
            :color="$vuetify.theme.dark ? 'grey darken-3' : 'white'"
            class="pa-6 d-flex flex-column"
            hover
          >
            <v-icon
              size="64"
              :color="feature.color"
              class="mb-4"
            >
              {{ feature.icon }}
            </v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">{{ feature.title }}</h3>
            <p class="text-body-1">{{ feature.description }}</p>
            <v-btn
              text
              :color="feature.color"
              class="mt-auto align-self-start"
            >
              Learn more
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>


const features = ref([
    {
        icon: 'mdi-calendar-multiple-check',
        title: 'Booking Management',
        description: 'Easily manage all your bookings in one place with our intuitive interface that supports flights, hotels, tours, and packages.',
        color: 'indigo'
    },
    {
        icon: 'mdi-account-group',
        title: 'Customer CRM',
        description: 'Track customer interactions, preferences, and history to provide personalized service and increase repeat business.',
        color: 'teal'
    },
    {
        icon: 'mdi-chart-bar',
        title: 'Analytics Dashboard',
        description: 'Get real-time insights into your business performance with powerful analytics and customizable reports.',
        color: 'orange-darken-4'
    },
    {
        icon: 'mdi-currency-usd',
        title: 'Payment Processing',
        description: 'Secure, integrated payment processing with support for multiple currencies and payment methods.',
        color: 'green'
    },
    {
        icon: 'mdi-airplane',
        title: 'Vendor Integration',
        description: 'Connect with airlines, hotels, and other vendors seamlessly through our API integrations.',
        color: 'blue'
    },
    {
        icon: 'mdi-cellphone-link',
        title: 'Mobile App',
        description: 'Access your agency data on the go with our dedicated iOS and Android mobile applications.',
        color: 'purple'
    }
])


</script>