import {createRouter, createWebHashHistory} from "vue-router";
import List from "@/components/List";
import Home from "@/components/Home";
import Detail from "@/components/Detail";
import Author from "@/components/Author";
import Comment from "@/components/Comment";

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from) => {
    console.log(to, from)
})

export default router;