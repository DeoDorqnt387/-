<script setup lang="ts">
    import { REQ } from './comp';

    const {
        userName,
        description,
        socialLinks,
    } = REQ();
</script>

<template>
  <div class="min-h-screen bg-white-900 flex items-center justify-center p-6">
    
    <!-- Main content -->
    <div class="w-full max-w-lg mx-auto text-center bg-slate-100 rounded-xl p-12">
      <!-- Profile Picture -->
      <div class="mb-8">
        <img 
          src="/images/profile.jpg" 
          alt="ProfilePicture"
          class="w-32 h-32 rounded-full object-cover mx-auto"
        >
      </div>

      <!-- User Info -->
      <div class="mb-12">
        <h1 class="font-medium text-3xl text-gray-900 mb-3">
          {{ userName }}
        </h1>
        <p class=" text-gray-900 text-base">
          {{ description }}
        </p>
      </div>

      <!-- Social Links -->
      <div class="grid grid-cols-3 gap-12 mb-12">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center p-2 text-gray-800 border-b hover:bg-slate-300 rounded-md hover:text-white hover:scale-110 transition duration-100"
        >
          <!-- Icon -->
          <div class="mb-2">
            <i 
              v-if="link.icon.startsWith('fa')"
              :class="link.icon"
              class="text-xl"
            ></i>
            <img 
              v-else
              :src="link.icon"
              :alt="`${link.name} icon`"
              class="w-6 h-6"
            >
          </div>

          <span class="text-xs uppercase tracking-wide font-medium">
            {{ link.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>