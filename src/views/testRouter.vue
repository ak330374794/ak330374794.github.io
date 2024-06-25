<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="to-router">{{ id }}</div>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'


export default {
    setup() {
        const route = useRoute()
        const id = route.params.id
        return {
            id,
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