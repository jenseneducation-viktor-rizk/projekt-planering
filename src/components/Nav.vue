<template>
  <div id="nav">
      <div class="nav-container">
        <a id="logo" @click="goToHome" class="logo link">
            <h1 class="logo-text">Meetup</h1>
            <h1 class="logo-dot">.</h1>
        </a>
        <div>
            <router-link to="/contact" class="contact link">Contact</router-link>
            <router-link to="/about" class="about link">About</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
export default {
methods: {
    goToHome() {
        store.dispatch('searchWordInc', "")
        router.push("/").catch(err => {
            if (err.name !== 'NavigationDuplicated' && !err.message.includes('Avoided redundant navigation to current location')) 
            {
              console.error(err);
            }
        });
    }
}

}
</script>

<style lang="scss">
@import "@/styles/fonts";
@import "@/styles/colors";

#nav {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    max-height: 100px;
    width: 100%;
    .nav-container {
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-dot {
        color: $light-pink;
    }
    .link {
        color: $pink;
        user-select: none;
        &:active 
        {
            top: 1px;
        }
        position: relative;
        text-decoration: none;
    }
    .about, .contact {
        font-weight: 300;
        margin-left: 10px;
        &:before, &:after {
            height: 1px;
            bottom: 0;
        }
    }
    .logo {
    &:before, &:after {
        height: 2px;
        bottom: 4px;
    }
    }
    .logo, .contact, .about {
        &:before, &:after {
            content: '';
            position: absolute;
            left: 0; 
            right: 0;
            background-color: $pink;
        }
        &:before {
            opacity: 0;
            transform: translateY(4px);
            transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;         
        }
        &:after {
            opacity: 0;
            transform: translateY(2px);
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;  
        }
        &:hover,
        &:focus {
            cursor: pointer;
            &:before,
            &:after {
                opacity: 1;
                transform: translateY(0);
            }
            &:before {
                transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.2s;
            }
            &:after {
                transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s 0.2s;
            }
        }
    }
}

</style>