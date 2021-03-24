<template>
  <div class="menu-top-margin custom-cursor">
    <MenuHeader :fixed="true" />
    <div class="menu-top-margin gradient-background pt2">
      <header class="mw7 tc center">
        <h1 class="daysans ttu f2 f1-ns lh-solid">
          {{ articleData.headline }}
        </h1>
        <h2 class="f5 normal lh-title" v-html="articleData.description"></h2>
        <h2 class="f5 normal">Written by {{ articleData.author }}</h2>
        <h2 class="f5 normal">03.30.21</h2>
      </header>
      <div class="mw7 center">
        <img
          class="db w-100 lazy"
          loading="lazy"
          src="YR-YRM-210322-ComingOut-header.jpg"
        />
      </div>
      <article
        div
        class="measure-wide center lh-copy ph3"
        v-html="articleData.intro.text"
      />
      <div class="white-fade"></div>
    </div>

    <article
      v-for="interview in articleData.interviews"
      :key="interview.person"
      class="mw7 lh-copy center mt5 ph3"
    >
      <div class="flex flex-wrap flex-auto">
        <div class="w-25-ns w-100">
          <div class="sticky top-2">
            <h4 class="f6 roboto-mono lh-copy normal mt0 center">
              {{ interview.person }}, {{ interview.age }}
              <br />
              {{ interview.pronoun }}
            </h4>
            <img class="w-100 lazy" loading="lazy" :src="interview.image" />
          </div>
        </div>
        <div class="w-75-ns ph3-ns w-100">
          <div class="ma0 mv3 mt0-ns ph3">
            <div class="mt0 reset-ps-m" v-html="interview.text" />
          </div>
          <!--           here is the right col -->
          <details
            class="ma0 mv3 ma3-ns gradient-wrap db custom-pointer"
            v-for="question in interview.questions"
            :key="question.question.text"
          >
            <summary
              class="ph-custom flex bg-white b custom-pointer reset-ps-m"
              v-html="question.question.text"
            ></summary>
            <div
              class="bg-white ph-custom reset-ps-m"
              v-html="question.response.text"
            ></div>
          </details>
        </div>
      </div>
    </article>

    <ShareContainer
      :vertical-mode="false"
      :title="postData.title"
      :description="postData.description"
      tweet-message=""
      class="mv3"
    />

    <FooterContainer />
  </div>
</template>

<script>
import POSTCONFIG from '../post.config'
import CommonUtils from '../mixins/CommonUtils'
import ArticleData from '../data/data.json'
import MenuHeader from '~/components/Header/MenuHeader'
import ShareContainer from '~/components/Custom/ShareContainer'
import FooterContainer from '~/components/Footer/FooterContainer'

export default {
  components: {
    MenuHeader,
    ShareContainer,
    FooterContainer,
  },
  mixins: [CommonUtils],
  asyncData(ctx) {
    return {
      articleData: ArticleData.content[0],
      postData: POSTCONFIG,
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
$border-width: 0.3rem;
$padding-h: 0.5rem;

.ph-custom {
  padding: $padding-h + $border-width;
}

.gradient-background {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(85, 205, 252, 0.38) 10%,
    rgba(247, 168, 184, 0.38) 68%,
    rgba(255, 255, 255, 0.35) 100%
  );
}

.gradient-wrap {
  position: relative;
  background: linear-gradient(
    40deg,
    rgba(85, 205, 252, 1) 0%,
    rgba(247, 168, 184, 1) 100%
  );
  padding: $border-width;
  margin: -1 * $border-width + $padding-h;
}

.gradient-wrap-to-left {
  position: relative;
  background: linear-gradient(
    -40deg,
    rgba(85, 205, 252, 1) 0%,
    rgba(247, 168, 184, 1) 100%
  );
  padding: $border-width;
  margin: -1 * $border-width + $padding-h;
}

h4.center {
  text-align: center;
}

summary {
  outline: none;
}
summary::marker,
summary::-webkit-details-marker {
  display: none;
}

.f-1-15 {
  font-size: 1.15rem;
}

.custom-cursor {
  cursor: url("data:image/svg+xml,%3Csvg width='20' viewBox='0 0 41 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.9419 25.7213L31.42 24.9659L33.9274 24.6202L31.8608 23.1588L13.6526 10.2834L11.6806 8.88892L12.0897 11.2693L15.8299 33.0295L16.244 35.4387L17.6371 33.43L20.7886 28.886L26.3965 38.0179L26.9198 38.87L27.772 38.3467L31.221 36.2287L32.0731 35.7054L31.5498 34.8532L25.9419 25.7213Z' fill='black' stroke='url(%23paint0_linear)' stroke-width='2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='13.3216' y1='10.9486' x2='28.9732' y2='36.4356' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"),
    auto;
}
.custom-pointer {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' fill='none' viewBox='0 0 32 33'%3E%3Cdefs/%3E%3Cpath fill='%23fff' d='M9 25.2c-.6-.7-1.2-1.9-2.5-3.4-.6-.8-2.3-2.5-3-3.1-.3-.7-.4-1-.3-1.8.1-1 1.1-2 2.4-2.2.8 0 1.8.6 2.6 1l1.3 1.4.8.8c.4.5.6.8.4.1l-1-3.6-.8-2-.7-2.2c-.2-.5-.5-2-.8-2.6-.2-.9-.4-2.5.3-3.3.5-.6 1.5-.8 2.3-.5.9.4 1.5 1.6 1.8 2.1.4.9.9 2.1 1.2 3.5l1.3 5c0-.8-.4-2-.2-2.8 0-.5.4-1.2 1-1.5a5 5 0 011.7-.3c.5.1 1 .4 1.5.8.8 1 1 3.3 1 3 0-.6 0-2 .2-2.8.2-.4.9-.8 1.2-1a3 3 0 011.8-.2c.3 0 1 .5 1.3.8.4.5.7 2.3 1 3 0 .2.1-.8.4-1.3.6-1.1 3-1.7 3.5.7l.1 2 .2 2.1v3c-.2.6-.6 2-1 2.7 0 0-1.8 2.3-2 3.4v1.8l.4 1.6s-1.4.3-2.1.1c-.8 0-1.8-1.2-2-1.8-.4-.5-1-.4-1.2.2-.3.7-1.1 2-1.8 2-1.3.4-3.8.4-5.5.6 0 0 .2-1.8-.6-2.5L11 26.2l-2.1-1z'/%3E%3Cpath stroke='url(%23paint0_linear)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M9 25.2c-.6-.7-1.2-1.9-2.5-3.4-.6-.8-2.3-2.5-3-3.1-.3-.7-.4-1-.3-1.8.1-1 1.1-2 2.4-2.2.8 0 1.8.6 2.6 1l1.3 1.4.8.8c.4.5.6.8.4.1l-1-3.6-.8-2-.7-2.2c-.2-.5-.5-2-.8-2.6-.2-.9-.4-2.5.3-3.3.5-.6 1.5-.8 2.3-.5.9.4 1.5 1.6 1.8 2.1.4.9.9 2.1 1.2 3.5l1.3 5c0-.8-.4-2-.2-2.8 0-.5.4-1.2 1-1.5a5 5 0 011.7-.3c.5.1 1 .4 1.5.8.8 1 1 3.3 1 3 0-.6 0-2 .2-2.8.2-.4.9-.8 1.2-1a3 3 0 011.8-.2c.3 0 1 .5 1.3.8.4.5.7 2.3 1 3 0 .2.1-.8.4-1.3.6-1.1 3-1.7 3.5.7l.1 2 .2 2.1v3c-.2.6-.6 2-1 2.7 0 0-1.8 2.3-2 3.4v1.8l.4 1.6s-1.4.3-2.1.1c-.8 0-1.8-1.2-2-1.8-.4-.5-1-.4-1.2.2-.3.7-1.1 2-1.8 2-1.3.4-3.8.4-5.5.6 0 0 .2-1.8-.6-2.5L11 26.2l-2.1-1z'/%3E%3Cpath stroke='url(%23paint1_linear)' stroke-linecap='round' stroke-width='1.5' d='M22.9 24.4l-.6-6'/%3E%3Cpath stroke='url(%23paint2_linear)' stroke-linecap='round' stroke-width='1.5' d='M19.3 24.7l-.7-6'/%3E%3Cpath stroke='url(%23paint3_linear)' stroke-linecap='round' stroke-width='1.5' d='M15.2 19l.6 6'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='14.9' x2='17.3' y1='3.1' y2='30.2' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='22.8' x2='23.4' y1='18.3' y2='24.3' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='18.7' x2='19.2' y1='18.7' y2='24.7' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='15.7' x2='16.3' y1='18.9' y2='25' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"),
    auto;
}
.white-fade {
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  height: 100px;
}
</style>
