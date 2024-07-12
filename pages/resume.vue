<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Government College University, Lahore
          </h4>

          <span>2017 — 2021</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Punjab Group of Colleges
          </h4>

          <span>2015 — 2017</span>

          <p class="timeline-text">
            Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda
            est
            omnis..
          </p>
        </li>

        <!-- <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            High school of art and design
          </h4>

          <span>2002 — 2004</span>

          <p class="timeline-text">
            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed
            consequuntur
            magni dolores
            eos.
          </p>
        </li> -->
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Techleadz
          </h4>

          <span>Sep 2021 — Present</span>

          <p class="timeline-text">
            Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            qvuas
            molestias
            exceptur.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Laravel Internship
          </h4>

          <span>June 2021 — August 2021</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li>

        <!-- <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Laravel Internship
          </h4>

          <span>2010 — 2013</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>
        </li> -->
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Backend Development
            </h5>
            <data value="95">95%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
                Frontend Development (Vue.js, React.js, Angular, Next.js)
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Team Management
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Problem Solving
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
