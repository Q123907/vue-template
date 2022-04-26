import bus from "@/public/eventBus";
const paging = {
    data() {
        return {
            page: 0,
            size: 10,
            last: false,
            loadPage: false,
            methods: "salesMoment",//页面中调用的方法
        };
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
    },
    async created() {
        this.setOnReachBottom()
        this.loadData();
    },
    //页面摧毁了
    beforeDestroy() {
        bus.$off("onReachBottom");
    },
    activated() {
        this.setOnReachBottom()
    },
    deactivated() {
        bus.$off("onReachBottom");
    },
    methods: {
        async loadData() {
            let {page, size, last, loading} = this;
            if (last || loading) {
                // console.log('返回了')
                return;
            }
            let result = await this[this.methods]()
            if (!result) return
            this.loadPage = true;
            this.page++;
            this.last = result.data.last;
        },
        //滚动到底部
        onReachBottom() {
            console.log('执行了吗')
            this.loadData();
        },
        //设置滚蛋监听
        setOnReachBottom() {
            bus.$off("onReachBottom");
            bus.$on("onReachBottom", () => {
                this.onReachBottom();
            });
        }
    },
}
export default paging