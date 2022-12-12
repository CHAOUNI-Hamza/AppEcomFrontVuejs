<template>
  <!-- start link Navbar -->
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="item in listskLink" :key="item.id" class="nav-item">
              <router-link :to="{name: item.link}" class="nav-link active" aria-current="page" href="#">{{ item.title }}</router-link>
            </li>
        </ul>
  <!-- end link Navbar -->
</template>
<script>
export default {
  data() {
    return {
      listskLink: [
        {
          'title' : 'home',
          'link'  : 'home'
        },
        {
          'title' : 'catégories',
          'link'  : 'categories'
        },
        {
          'title' : 'faq',
          'link'  : 'faqs'
        },
        {
          'title' : 'à propos',
          'link'  : 'about'
        },
        {
          'title' : 'contact',
          'link'  : 'contact'
        }
      ]
    }
  }
}
</script>