import { mount } from '@vue/test-utils';
import CountryInfo from '@/components/CountryInfo.vue';
import { createStore } from 'vuex';

describe('CountryInfo.vue', () => {
  let store;
  let dispatchSpy;

  beforeEach(() => {
    // Create a dispatch spy
    dispatchSpy = jest.fn();

    // Create a Vuex store with a spy for fetchCountry
    store = createStore({
      state: {
        country: null,
        errorMessages: [],
      },
      mutations: {
        setCountry(state, country) {
          state.country = country;
        },
        clearErrors(state) {
          state.errorMessages = [];
        },
        setError(state, errors) {
          state.errorMessages = errors;
        },
      },
      actions: {
        fetchCountry: dispatchSpy, 
      },
    });
  });

  it('renders the component', () => {
    const wrapper = mount(CountryInfo, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('shows error message when ISO code is empty', async () => {
    const wrapper = mount(CountryInfo, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.vm.errorMessages).toContain('ISO code cannot be empty.');
  });

  it('dispatches fetchCountry action on button click', async () => {
    const wrapper = mount(CountryInfo, {
      global: {
        plugins: [store],
      },
    });

    // Set the isoCode data property
    await wrapper.setData({ isoCode: 'US' });

    // Trigger the button click
    await wrapper.find('button').trigger('click');

    // Check if the action was dispatched
    expect(dispatchSpy).toHaveBeenCalled(); // Ensure the action was called
    const context = dispatchSpy.mock.calls[0][0]; // The first argument is the context object
    const payload = dispatchSpy.mock.calls[0][1]; // The second argument is the payload

    expect(payload).toBe('US'); // The payload value
  });
});
