<template>
  <section class="container">
    <div class="footer">
      <div>
        <img class="logo" :src="require('@/assets/images/logo.svg')" />
        <p>
          <img
            class="icon"
            :src="require('@/assets/images/icon-location.svg')"
          />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <ul>
        <li>
          <img
            class="icon"
            :src="require('@/assets/images/icon-phone.svg')"
          /><span>+1-543-123-4567</span>
        </li>
        <li>
          <img
            class="icon"
            :src="require('@/assets/images/icon-email.svg')"
          /><span>example@fylo.com</span>
        </li>
      </ul>

      <ul>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
      <ul>
        <li>Contact Us</li>
        <li>Terms</li>
      </ul>

      <ul class="flex">
        <li class="icon-b"></li>
        <li class="icon-b"></li>
        <li class="icon-b"></li>
      </ul>
      <!-- <ul class="social">
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'twitter' }"
        size="lg"
      />
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'instagram' }"
        size="lg"
      />
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'facebook' }"
        size="lg"
      />
    </ul> -->
    </div>
  </section>
</template>

<script>
// import { bookService } from "@/services/book.service.js";
// import {} from "./assets/images/illustartion-stay-productive.png";
export default {
  name: "Footer",
  props: [],
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>