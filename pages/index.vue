<template>
  <div class="menu-top-margin custom-cursor">
    <MenuHeader :fixed="true" />
    <div class="menu-top-margin pt2 relative">
      <div class="gradient-background"></div>
      <header class="mw7 tc center z-1 ph3">
        <h1 class="daysans ttu f2 f1-ns lh-solid">
          {{ articleData.headline }}
        </h1>
        <h2 class="f5 normal lh-title" v-html="articleData.description"></h2>
        <h2 class="f5 normal">Written by {{ articleData.author }}</h2>
        <h2 class="f5 normal">03.30.21</h2>
      </header>
      <div class="mw7 center relative z-1">
        <img
          class="db w-100 lazy"
          loading="lazy"
          src="YR-YRM-210322-ComingOut-header.jpg"
        />
      </div>
    </div>
    <article
      div
      class="measure-wide center lh-copy ph4 pt3 pb5"
      v-html="articleData.intro.text"
    />
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
            v-for="question in interview.questions"
            :key="question.question.text"
            class="gradient-wrap db custom-pointer"
          >
            <summary class="ph-custom bg-white b custom-pointer reset-ps-m">
              <div class="flex">
                <div v-html="question.question.text" />
                <div class="ml-auto">
                  <svg
                    class="db"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      class="p-open"
                      fill="#000"
                      d="M10 20L1.3 5h17.4L10 20z"
                    />
                    <path
                      class="p-open p-closed"
                      fill="#000"
                      d="M10 0l8.7 15H1.3L10 0z"
                    />
                  </svg>
                </div>
              </div>
            </summary>
            <div
              class="bg-white ph-custom reset-ps-m"
              v-html="question.response.text"
            ></div>
          </details>
        </div>
      </div>
    </article>
    <article class="mw7 lh-copy center mv5 ph4 measure-wide center lh-copy">
      <div class="f7" v-html="articleData.credits.text" />
    </article>
    <article
      class="mw7 lh-copy center mv4 ph4 measure-wide center lh-copy dark-red roboto-mono"
    >
      <a
        v-for="tag in articleData.tags"
        :key="tag.name"
        :href="tag.url"
        target="_blank"
        rel="nofollow"
        class="link dark-red underline-none hover-light-red mh2 nl1 ttu"
      >
        <span>
          {{ tag.name.trim() }}
        </span>
      </a>
    </article>
    <ShareContainer
      :vertical-mode="false"
      :title="postData.title"
      :description="postData.description"
      tweet-message=""
      class="mt5 mb4"
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

/deep/ ::selection {
  background: #f7a8b8;
}
.ph-custom {
  padding: $padding-h + $border-width;
}

.gradient-background {
  z-index: -1;
  top: 0;
  position: absolute;
  width: 100%;
  height: 90%;
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
  margin-top: 1rem;
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
  margin-top: 1rem;
}

h4.center {
  text-align: center;
}
details summary::-webkit-details-marker {
  display: none;
}
summary {
  outline: none;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

.f-1-15 {
  font-size: 1.15rem;
}

.custom-cursor {
  cursor: url("data:image/svg+xml,%3Csvg width='20' height='23' viewBox='0 0 41 45' fill='none' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M25.9419 25.7213L31.42 24.9659L33.9274 24.6202L31.8608 23.1588L13.6526 10.2834L11.6806 8.88892L12.0897 11.2693L15.8299 33.0295L16.244 35.4387L17.6371 33.43L20.7886 28.886L26.3965 38.0179L26.9198 38.87L27.772 38.3467L31.221 36.2287L32.0731 35.7054L31.5498 34.8532L25.9419 25.7213Z' fill='black' stroke='url(%23paint0_linear)' stroke-width='2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='13.3216' y1='10.9486' x2='28.9732' y2='36.4356' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"),
    auto;
}
.custom-pointer {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20' height='20.62' fill='none' viewBox='0 0 32 33'%3E%3Cdefs/%3E%3Cpath fill='%23fff' d='M9 25.2c-.6-.7-1.2-1.9-2.5-3.4-.6-.8-2.3-2.5-3-3.1-.3-.7-.4-1-.3-1.8.1-1 1.1-2 2.4-2.2.8 0 1.8.6 2.6 1l1.3 1.4.8.8c.4.5.6.8.4.1l-1-3.6-.8-2-.7-2.2c-.2-.5-.5-2-.8-2.6-.2-.9-.4-2.5.3-3.3.5-.6 1.5-.8 2.3-.5.9.4 1.5 1.6 1.8 2.1.4.9.9 2.1 1.2 3.5l1.3 5c0-.8-.4-2-.2-2.8 0-.5.4-1.2 1-1.5a5 5 0 011.7-.3c.5.1 1 .4 1.5.8.8 1 1 3.3 1 3 0-.6 0-2 .2-2.8.2-.4.9-.8 1.2-1a3 3 0 011.8-.2c.3 0 1 .5 1.3.8.4.5.7 2.3 1 3 0 .2.1-.8.4-1.3.6-1.1 3-1.7 3.5.7l.1 2 .2 2.1v3c-.2.6-.6 2-1 2.7 0 0-1.8 2.3-2 3.4v1.8l.4 1.6s-1.4.3-2.1.1c-.8 0-1.8-1.2-2-1.8-.4-.5-1-.4-1.2.2-.3.7-1.1 2-1.8 2-1.3.4-3.8.4-5.5.6 0 0 .2-1.8-.6-2.5L11 26.2l-2.1-1z'/%3E%3Cpath stroke='url(%23paint0_linear)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M9 25.2c-.6-.7-1.2-1.9-2.5-3.4-.6-.8-2.3-2.5-3-3.1-.3-.7-.4-1-.3-1.8.1-1 1.1-2 2.4-2.2.8 0 1.8.6 2.6 1l1.3 1.4.8.8c.4.5.6.8.4.1l-1-3.6-.8-2-.7-2.2c-.2-.5-.5-2-.8-2.6-.2-.9-.4-2.5.3-3.3.5-.6 1.5-.8 2.3-.5.9.4 1.5 1.6 1.8 2.1.4.9.9 2.1 1.2 3.5l1.3 5c0-.8-.4-2-.2-2.8 0-.5.4-1.2 1-1.5a5 5 0 011.7-.3c.5.1 1 .4 1.5.8.8 1 1 3.3 1 3 0-.6 0-2 .2-2.8.2-.4.9-.8 1.2-1a3 3 0 011.8-.2c.3 0 1 .5 1.3.8.4.5.7 2.3 1 3 0 .2.1-.8.4-1.3.6-1.1 3-1.7 3.5.7l.1 2 .2 2.1v3c-.2.6-.6 2-1 2.7 0 0-1.8 2.3-2 3.4v1.8l.4 1.6s-1.4.3-2.1.1c-.8 0-1.8-1.2-2-1.8-.4-.5-1-.4-1.2.2-.3.7-1.1 2-1.8 2-1.3.4-3.8.4-5.5.6 0 0 .2-1.8-.6-2.5L11 26.2l-2.1-1z'/%3E%3Cpath stroke='url(%23paint1_linear)' stroke-linecap='round' stroke-width='1.5' d='M22.9 24.4l-.6-6'/%3E%3Cpath stroke='url(%23paint2_linear)' stroke-linecap='round' stroke-width='1.5' d='M19.3 24.7l-.7-6'/%3E%3Cpath stroke='url(%23paint3_linear)' stroke-linecap='round' stroke-width='1.5' d='M15.2 19l.6 6'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='14.9' x2='17.3' y1='3.1' y2='30.2' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='22.8' x2='23.4' y1='18.3' y2='24.3' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear' x1='18.7' x2='19.2' y1='18.7' y2='24.7' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear' x1='15.7' x2='16.3' y1='18.9' y2='25' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2355CDFC'/%3E%3Cstop offset='1' stop-color='%23F7A8B8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"),
    auto;
}
details[open] {
  .p-open {
    visibility: hidden;
  }
  .p-closed {
    visibility: visible;
  }
}

details {
  .p-open {
    visibility: visible;
  }
  .p-closed {
    visibility: hidden;
  }
}
</style>
