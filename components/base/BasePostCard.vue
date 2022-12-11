<script lang="ts" setup>
import { BlogPost } from "~/data/blogPosts";
import { authors, Author } from "~/data/authors";
import { ComputedRef } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{ post: BlogPost; justifyPhoto: "left" | "top" }>();

const author: ComputedRef<Author | undefined> = computed(() => {
  return authors.find((a) => {
    return a.id === props.post.authorID;
  });
});

const postDate: ComputedRef<string> = computed(() => {
  let date = new Date(props.post.date * 1000);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});

const pushToPost = () => {
  if (props.post.tag === "beginners")
    router.push(`/beginners/${props.post.id}/`);
  else if (props.post.tag === "fitness-mobility")
    router.push(`/fitness-mobility/${props.post.id}/`);
  else if (props.post.tag === "technique")
    router.push(`/technique/${props.post.id}/`);
};
</script>

<template>
  <div
    class="bg-dominant-200 rounded grid overflow-hidden cursor-pointer hover:rotate-[2deg] transition"
    :class="justifyPhoto === 'top' ? 'grid-cols-1' : 'grid-cols-2'"
    @click="pushToPost"
  >
    <div
      class="bg-dominant-300 w-full"
      :class="justifyPhoto === 'top' ? 'h-52' : ' h-full'"
    ></div>
    <div class="px-4 py-4 grid gap-2">
      <div>
        <span
          class="rounded-full text-sm bg-accentGreen bg-opacity-20 text-accentGreen px-3 py-1"
          >{{ post.tag }}</span
        >
      </div>
      <h2 class="font-bold text-lg font-serif">{{ post.title }}</h2>
      <p class="text-sm font-light pb-2">
        {{
          post.lead.length > 200 ? post.lead.slice(0, 200) + "..." : post.lead
        }}
      </p>
      <div
        class="border-t pt-2 border-opacity-10 border-complement-200 flex justify-between items-center"
      >
        <div class="flex gap-2 items-center">
          <div class="h-7 w-7 rounded-full bg-dominant-300"></div>
          <p class="text-sm">{{ author?.name }} {{ author?.lastname }}</p>
        </div>
        <p class="text-sm">{{ postDate }}</p>
      </div>
    </div>
  </div>
</template>
