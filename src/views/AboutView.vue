<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="to-router" @click="toTestRouter">toRouter</div>
    </div>
</template>
<script>
import {useRouter} from 'vue-router'


export default {
    setup() {
        const router = useRouter()
        const toTestRouter = () => {
            router.push({
                name: 'testRouter',
                params: {
                    id: 'wwwwwww'
                }
            })
        }
        return {
            toTestRouter,
        }
    }
}

</script>

<style scope>
.to-router {
    width: 200px;
    height: 100px;
    background: dodgerblue;
}
</style>