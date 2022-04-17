import {createStore} from 'vuex'
import postData from "@/assets/data";
import axios from "axios";

const store = createStore({
    state() {
        return {
            postData,
            pageNo: 0,
        }
    },
    mutations: {
        nextPost(state) {
            state.pageNo++;
        },
        getNextPost(state, data) {
            state.postData = [...state.postData, data];
        },
        addNewPost(state, data) {
            state.postData = [data, ...state.postData];
        },
        likePost(state, postIdx) {
            const post = state.postData[postIdx];
            post.likes = post.likes + (post.liked ? -1 : +1);
            post.liked = !post.liked;
        }
    },
    actions: {
        async getData(context) {
            let res;
            try {
                res = await axios.get(`https://codingapple1.github.io/vue/more${context.state.pageNo}.json`);
                context.commit('getNextPost', res.data);
                context.commit('nextPost');
            } catch (e) {
                alert('더 이상 읎다.')
            }
        }
    }
})

export default store