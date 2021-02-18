<template>
  <section>
    <div class="flex second">
      <img :src="require('@/assets/images/illustration-stay-productive.png')" />
      <div>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <div class="flex align-center">
          <b>See How Fylo Works </b
          ><img :src="require('@/assets/images/icon-arrow.svg')" />
        </div>
      </div>
    </div>

    <section class="flex cloumn align-center get">
      <h1>Get Access Today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div class="flex align-center search">
        <input class="input" placeholder="email@example.com" type="text" /><a
          class="button"
          >Get Started For Free</a
        >
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Second",
  props: [],
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
};
</script>