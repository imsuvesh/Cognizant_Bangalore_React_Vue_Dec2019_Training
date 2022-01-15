import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/counter.vue';
describe('Test counter Component',()=>{
    it('test of count is zero!',()=>{
        let theInitialCount=Counter.data();
        expect(theInitialCount.count).toEqual(0);
    });
    it('test innerText of h3 as incremented count',(done)=>{
        let wrapper=shallowMount(Counter);
        wrapper.find('input[type="button"]').trigger('click');
        Vue.nextTick(()=>{
            expect(wrapper.find("h3").text()).toEqual("Counter Count: 1");
            done();
        });
    });

});
 