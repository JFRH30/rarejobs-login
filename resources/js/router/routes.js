const DashboardLayout = () => import("@/components/layouts/dashboard.vue");

const Login = () => import("@/components/pages/login.vue");
const Register = () => import("@/components/pages/register.vue");
const Home = () => import("@/components/pages/home.vue");

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: "Login",
        },
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: "Register",
        },
    },
    {
        path: "/",
        component: DashboardLayout,
        meta: {
            middleware: "auth",
        },
        children: [
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {
                    title: "Dashboard",
                },
            },

        ],
    },
];

export default routes;
