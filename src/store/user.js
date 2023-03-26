    const state = {
        user:null,
        test:null
    }
    const getters = {
        _isAuthenticated:state=>state.user !=null,
        _getCurrentUser (state){
            return state.user;
        },
        _currentUserId: state => state?.user?.userId,
        _currentUserToken: state => state?.user?.token,
    }
    const mutations = {
        setUser(state,item){
            state.test = item
            state.user = item  
        },
        logOutUser(state){
            state.user=null
        }
    }
    const actions = {
        setUser(context,item){
            context.commit("setUser",item);
        },
        logOutUser(context,item){
            context.commit("logOutUser",item);
        }
    }
    export default{
        state,
        mutations,
        actions,
        getters
    }

// export const user = {
//     namespaced: true, 
//     state: {
//         user:null,
//         test:null
//     },
//     getters:{
//         _isAuthenticated:state=>state.user !=null,
//         _getCurrentUser (state){
//             return state.user;
//         },
//         _currentUserId: state => state?.user?.userId,
//         _currentUserToken: state => state?.user?.token,       
//     },
//     actions:{
//         setUser(context,item){
//             console.log('first')
//             context.commit('setUser',item);
//         },
//         logOutUser(context,item){
//             context.commit("logOutUser",item);
//         }        
//     },
//     mutations:{
//         setUser(state,item){
//             console.log('first')
//             state.test = item
//             state.user = item  
//         },
//         logOutUser(state){
//             state.user=null
//         }        
//     }
// }