import { createStore } from 'vuex';
import auth from '../api/firebase';
import { message as Message } from 'ant-design-vue';

export default createStore({
   state: {
      isSignUpModalVisible: false,
      isLoginModalVisible: false,
      isPasswordResetModalVisible: false,
      isLogged: false,
      isFilterModalVisible: false,
   },
   mutations: {
      setSignUpModalVisible(state, payload: boolean) {
         state.isSignUpModalVisible = payload;
      },
      setLoginModalVisible(state, payload: boolean) {
         state.isLoginModalVisible = payload;
      },
      setPasswordResetModalVisible(state, payload: boolean) {
         state.isPasswordResetModalVisible = payload;
      },
      setLogged(state, payload: boolean) {
         state.isLogged = payload;
      },
      setFilterModalVisible(state, payload: boolean) {
         state.isFilterModalVisible = payload;
      },
   },
   actions: {
      logOut({ commit }) {
         try {
            auth.signOut();
            commit('setLogged', false);
            Message.success('Successfuly Logged Out');
         } catch (error) {
            Message.error('An Error Occured While Logging Out');
         }
      },
   },
   modules: {},
});
