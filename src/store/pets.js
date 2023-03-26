const state = {
    pets:null
}
const getters = {
    _getPetList (state){
        return state.user;
    }
}
const mutations = {
    setPet(state,item){
        state.pets = item
    }
}
const actions = {
    setPet(context,item){
        context.commit("setPet",item);
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}