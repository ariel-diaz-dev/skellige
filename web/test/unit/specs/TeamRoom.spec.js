import Vue from 'vue'
import TeamRoom from '@/components/TeamRoom'

describe('TeamRoom.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TeamRoom)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.heamRoom h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA')
  })
})
