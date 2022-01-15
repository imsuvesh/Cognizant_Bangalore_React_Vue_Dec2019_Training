import Vue from 'vue';
import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/counter.vue';
describe('Test counter Component',()=>{
    it('test of count is zero !',()=>{
            let theInitalCount = Counter.data();
            expect(theInitalCount.count).toEqual(0);
    });
    it('test innerText of h3 as incremented count',(done)=>{
            let wrapper = shallowMount(Counter); // create the html
            wrapper.find('input[type="button"]').trigger('click');
            Vue.nextTick(()=>{
                expect(wrapper.find("h3").text()).toEqual("Current Count : 1");
                done();// tells the testing engine that we are done with unit testing the case
            });
    });
});
