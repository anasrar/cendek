<template>
  <v-layout column>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md8 offset-md2>
          <v-card>
            <v-img src="//pbs.twimg.com/media/DiME_OFV4AAXg3m.jpg" :aspect-ratio="16/9"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Facts about platelets</h3>
                <p>
                  Platelets are tiny blood cells that help your body form clots to stop bleeding. If
                  one of your blood vessels gets damaged, it sends out signals that are picked up by
                  platelets. The platelets then rush to the site of damage and form a plug, or clot,
                  to repair the damage.
                </p>
                <p>
                  The process of spreading across the surface of a damaged blood vessel to stop
                  bleeding is called adhesion. This is because when platelets get to the site of the
                  injury, they grow sticky tentacles that help them adhere. They also send out
                  chemical signals to attract more platelets to pile onto the clot in a process called
                  aggregation.
                </p>
                <p>
                  Platelets are made in your bone marrow along with your white and red blood cells.
                  Your bone marrow is the spongy center inside your bones. Another name for platelets
                  is thrombocytes. Healthcare providers&nbsp;usually call a clot a thrombus. Once
                  platelets are made and circulated into your bloodstream, they live for 8 to 10 days.
                </p>
                <p>
                  Under a microscope, a platelet looks like a tiny plate. Your&nbsp;healthcare
                  provider&nbsp;may do a blood test called a complete blood count to find out if your
                  bone marrow is making the right number of platelets:
                </p>
                <ul>
                  <li>
                    <p>
                      A normal platelet count is 150,000 to 450,000 platelets per microliter of
                      blood.
                    </p>
                  </li>
                  <li>
                    <p>
                      Risk for spontaneous bleeding develops if a platelet count falls below 10,000
                      to 20,000. But when the platelet count is less than 50,000, bleeding is
                      likely to be more serious if an individual is cut or bruised.&nbsp;
                    </p>
                  </li>
                  <li>
                    <p>
                      Some people make too many platelets and can have platelet counts from 500,000
                      to more than 1 million.
                    </p>
                  </li>
                </ul>
                <p class="text-xs-center">
                  <v-btn
                    :dark="!loading"
                    color="deep-purple darken-4"
                    rel="nofollow"
                    :disabled="loading"
                    :loading="loading"
                    @click.prevent="getLink"
                  >
                    Click Here
                    To Go
                  </v-btn>
                </p>
                <h2>What happens if your platelet count is high or low</h2>
                <p>
                  Medical conditions associated with abnormal platelets or abnormal platelet
                  counts:&nbsp;
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Thrombocytopenia.&nbsp;</strong>In this condition, your bone marrow
                      makes too few platelets, or your platelets are destroyed. If your platelet
                      count gets too low, bleeding can occur under the skin as bruising, inside
                      the body as internal bleeding, or outside the body through a cut that won't
                      stop bleeding or from a nosebleed. Thrombocytopenia can be caused by many
                      conditions, including several medicines, cancer, kidney disease, pregnancy,
                      infections, and an abnormal immune system.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Thrombocythemia.</strong>&nbsp;In this condition, your bone marrow
                      makes too many platelets. People with thrombocythemia may have platelet
                      counts that exceed 1 million. Symptoms can include blood clots that form and
                      block blood supply to the brain or the heart. The cause of thrombocythemia
                      is unknown.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Thrombocytosis.&nbsp;</strong>This is another condition caused by too
                      many platelets, but platelet counts do not get as high as in
                      thrombocythemia. Thrombocytosis is more common and is not caused by abnormal
                      bone marrow. Instead, the cause is another disease or condition in the body
                      that stimulates the bone marrow to make more platelets. Causes include
                      infection, inflammation, some types of cancer, and reactions to medicines.
                      Symptoms are usually not serious, and the platelet count goes back to normal
                      when the underlying condition gets better.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Platelet dysfunction.&nbsp;</strong>There are many rare diseases
                      associated with poor platelet function, when the number of platelets is
                      normal, but the platelets do not work normally. Some medicines, such as
                      aspirin, can inhibit normal platelet function. It is important to know which
                      medicines affect platelet function and to appreciate that while taking these
                      medicines there is an increased risk of bleeding.&nbsp;
                    </p>
                  </li>
                </ul>
                <p>
                  Platelets are tiny but important cells in your blood that help your body control
                  bleeding. If you have symptoms such as easy bruising, a cut that keeps bleeding, or
                  frequent nosebleeds, let your&nbsp;healthcare provider&nbsp;know. A simple blood
                  test is all you need to find out if your platelet count is normal.&nbsp;
                </p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    getLink() {
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
        this.loading = false;
        window.location.href = res.data.link;
      });
    }
  }
};
</script>

<style>
</style>