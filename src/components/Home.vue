<template>
  <v-layout column>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field label="Result" :value="result" autofocus hide-details outline></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="indigo darken-4" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md8 offset-md2>
          <v-card class="mb-3">
            <v-form @submit.prevent="getLink" ref="form" v-model="valid" lazy-validation>
              <v-container grid-list-md>
                <v-layout row wrap>
                  <v-flex xs12 md8>
                    <v-text-field
                      outline
                      hide-details
                      append-icon="link"
                      label="URL"
                      v-model="link"
                      :rules="linkRules"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-btn
                      block
                      :dark="!loading"
                      large
                      color="indigo darken-4"
                      type="submit"
                      :disabled="loading"
                      :loading="loading"
                    >Short</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
          <v-layout row wrap text-xs-center>
            <v-flex xs12 md4 v-for="i in 3" :key="`4${i}`">
              <v-card color="indigo darken-4" class="white--text">
                <v-card-text primary-title>
                  <div>
                    <v-icon large color="white">extension</v-icon>
                  </div>
                  <div class="headline">Title</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-card class="mt-3">
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut congue velit. Phasellus sem eros, auctor at vehicula vel, accumsan mollis ipsum. Curabitur posuere ante leo, quis iaculis justo pharetra id. Donec lobortis rutrum magna, et venenatis tellus. Cras et magna eu urna pretium lacinia nec nec arcu. Aliquam tempus magna eleifend eros sagittis, sit amet sodales augue consectetur. Nunc aliquet lectus sagittis lacus bibendum, et vulputate erat pellentesque. Fusce tempor blandit pretium. Nam non justo ut dolor laoreet fermentum. Donec euismod pretium sapien. Fusce tempor ut nibh nec hendrerit. Praesent condimentum orci eget augue tristique mollis. Curabitur massa libero, finibus in neque at, gravida ornare leo. Vivamus pellentesque dictum tempus. Duis sed nisi aliquam, viverra mauris vel, blandit urna.</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    result: "",
    link: "",
    linkRules: [v => !!v || "Link is required"],
    loading: false,
    dialog: false
  }),
  methods: {
    getLink() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$http({
          method: "post",
          url:
            window.location.hostname === "localhost"
              ? "http://localhost:4500" + window.location.pathname
              : window.location.href,
          data: {
            link: this.link
          }
        }).then(res => {
          this.result = `${window.location.protocol}//${res.data.result}`;
          setTimeout(() => {
            this.loading = false;
            this.dialog = true;
          }, 500);
        });
      }
    }
  }
};
</script>

<style>
</style>
