<template>
  <div class="tw-flex tw-flex-col tw-h-screen">
    <div class="tw-h-12 tw-bg-sky-300 tw-flex-shrink-0 tw-flex tw-items-center tw-p-4">
      <button @click="reset" class="tw-p-1 tw-rounded tw-font-light tw-bg-purple-100">RESET</button>
    </div>
    <LoadMoreList :skeleton-count="0" class="tw-flex-grow" :has-more="hasMore" :loading="loading" @load-more="onLoadMore">
      <VeilSlideYTransition group hide-on-leave>
        <div v-for="item of data" :key="item.id" class="tw-flex tw-flex-col tw-text-left tw-m-2 tw-font-light tw-p-4 tw-shadow-lg">
          <q>{{item.text}}</q>
          <blockquote class="tw-self-end tw-text-sm tw-font-normal">
            {{item.author}}
          </blockquote>
        </div>
      </VeilSlideYTransition>
    </LoadMoreList>
    <div class="tw-h-12 tw-bg-sky-300 tw-flex-shrink-0 tw-flex tw-items-center tw-p-4">
    </div>
  </div>
</template>

<script>
import LoadMoreList from 'load-more-list'
import { VeilSlideYTransition } from './components'
import { uuid } from './encrypt'

export default {
  components: { LoadMoreList,VeilSlideYTransition },
  data(){
    return {
      data:[],
      hasMore: true,
      loading: false
    }
  },
  methods:{
    async onLoadMore(){
      if( !this.hasMore){
        return;
      }
      this.loading = true;
      await new Promise((resolve => setTimeout(resolve,2000)))
      this.data.push(
          ...Array.from({length:10}).map((it,index)=>({
            index: index,
            text: "Example moves the world more than doctrine",
            author: "Henry Miller",
            id: uuid()
          }))
      );
      if(this.data.length>=40){
        this.hasMore = false;
      }
      this.loading = false;
    },
    reset(){
      this.data = []
      this.hasMore = true;
    }
  }
}
</script>

<style>
</style>
